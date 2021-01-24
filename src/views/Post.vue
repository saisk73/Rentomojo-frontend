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
            <h5 class="fw-light mt-">{{post.body}}</h5>
            <h4 class="fw-normal mt-5">
                <span class="material-icons md-24m">comment</span>
                Comments 
                {{comments.length}}
            </h4>
            <div 
            v-if="loadingComments == false"
            class="row m-0">
                <div 
                class="col-12 d-flex p-0 pt-2" 
                v-for="(comment,key) in comments" 
                :key="key">
                    <div class="col-2 col-md-1">
                        <img 
                        :src="comment.image"
                        class="user__image"
                        />
                    </div>
                    <div class="col-10 col-md-7">
                        <h5 
                        class="mb-1 fw-bold text-capitalize"
                        v-bind:class="[comment.expanded ? !comment.expanded : 'text-truncate', '']"
                        >{{comment.name}}</h5>
                        <p  
                        class="mb-1"
                        v-bind:class="[comment.expanded ? !comment.expanded : 'text-truncate', '']"
                        >
                        {{comment.body}}
                        </p>
                        <p 
                        v-if="!comment.expanded"
                        class="text-end">
                            <span 
                            @click="expandComment(key)"
                            class="cursor text-secondary"
                            >Read More...</span>
                        </p>
                    </div>
                </div>
            </div>
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
.user__image {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
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
        comments: [],
        postImage: '',
        imageLoaded: false,
        loadingComments: false
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
      await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.$route.params.id}`)
      .then((res)=> {
        this.comments = res.data;
        this.comments.forEach((comment,key) => {
            this.comments[key].image = 'https://avatars.dicebear.com/4.5/api/avataaars/' + 'qwertyuiop'.charAt(Math.floor(Math.random() * 10)) + '.svg?mood[]=happy';
            this.comments[key].expanded = false;
        });
      })
      this.loading = false;
  },
  methods: {
    moment,
    expandComment(e) {
        this.loadingComments = true;
        this.comments[e].expanded = true;
        this.loadingComments = false;
    }
  }
}
</script>