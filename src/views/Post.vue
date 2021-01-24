<template>
    <div class="Post">
        <vue-headful
            :title="post.title"
            :description="post.body"
        />
        <Navbar />
        <div class="container mt-3" v-if="loading == false">
            <h1 class="display-4">{{post.title}}</h1>
            <div v-if="imageLoaded == false" class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <img 
            src="https://source.unsplash.com/random/1600x500" 
            class="post__image"
            @load="imageLoaded = true"
            />
            <div class="d-flex justify-content-between mt-3">
                <span>By: 
                    <a 
                    class="theme__element"
                    :href="'/users/' + user.id">
                        {{user.name}}
                    </a>
                </span>
                <span>Updated on: {{moment(post.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}}</span>
            </div>
            <h5 class="fw-light mt-3">{{post.body}}</h5>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    min-height: 70vh;
}
.post__image {
    width: 100%;
    height: auto;
}
</style>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  data() {
    return {
        loading: true,
        post: {},
        user: {},
        postImage: '',
        imageLoaded: false
    }
  },
  async beforeMount() {
      let api_url = 'https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id;
      await axios.get(api_url)
      .then((res)=> {
        this.post = res.data;
        function randomDate(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        }
        this.post.updatedAt =  randomDate(new Date(2020, 0, 1), new Date());
      })
      .catch((err) =>{
        this.$router.push({ name: 'Notfound' })
      })
      let user = this.post.userId;
      let user_api_url = 'https://jsonplaceholder.typicode.com/users/' + user
      axios.get(user_api_url)
      .then((res)=> {
          this.user = res.data;
      })
      axios.get('https://source.unsplash.com/random')
      .then((res)=> {
          this.postImage = res.data;
      })
      this.loading = false;
  },
  methods: {
      moment
  }
}
</script>