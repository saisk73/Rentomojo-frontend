<template>
  <div class="about">
    <vue-headful
      title="Posts | My App"
    />
    <Navbar />
    <div v-if="loading == true" class="d-flex justify-content-center mt-2">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="row m-0 mt-5">
      <div 
      v-for="(post, key) in posts"
      :key="key" 
      class="col-xxl-3 col-lg-4 col-md-6 col-12 p-3"
      >
        <div class="shadow-sm rounded border p-3">
          <p class="post__title text-capitalize">{{post.title}}</p>
          <div class="d-flex justify-content-between">
            <span>Updated: {{moment(post.updatedAt).fromNow()}}</span>
            <a :href="'/posts/'+ post.id" class="btn btn-dark rounded-0 btn-sm">View Post</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.post {
  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 1rem;
    line-height: 1.2rem;
    height: 2.4rem;
  }
  &__description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 1rem;
    line-height: 1.2rem;
    height: 2.4rem;
  }
}
</style>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  data() {
    return {
      loading: true,
      posts: [],
      userId: null
    }
  },
  async beforeMount() {
    let userId = this.$route.query.user;
    let pageNumber = this.$route.query.page;
    if(pageNumber == undefined) {
      pageNumber = 1;
    }
    let api_url;
    if(userId != '' && userId !== undefined) {
      this.userId = userId;
      api_url = 'https://jsonplaceholder.typicode.com/posts?userId=' + userId;
    } else {
      api_url = 'https://jsonplaceholder.typicode.com/posts';
    }
    await axios.get(api_url)
    .then((res)=> {
      this.posts = res.data;
      function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }
      this.posts.map((post, key)=> {
        this.posts[key].updatedAt =  randomDate(new Date(2020, 0, 1), new Date());
      })
    })
    this.loading = false;
  },
  methods: {
    moment
  },
}
</script>
