<template>
    <div class="Post">
        <vue-headful
            :title="post.title"
            :description="post.body"
        />
        <Navbar />
        <div class="container" v-if="loading == false">
            <h1 class="display-4">{{post.title}}</h1>
            <div class="d-flex justify-content-between">
                <span>By: {{user.name}}</span>
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
      this.loading = false;
  },
  methods: {
      moment
  }
}
</script>