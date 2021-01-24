<template>
  <div class="Home">
    <vue-headful
      title="Home | My App"
    />
    <Navbar />
    <Users class="px-2 mt-5" />
  </div>
</template>

<script>
import Users from '../components/home/Users.vue'
export default {
  data() {
    return {
      users: []
    }
  },
  components: {
    Users
  },
  methods: {

  }
}
</script>