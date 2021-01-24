<template>
  <div class="Home">
    <vue-headful
      title="Home | My App"
    />
    <Navbar />
    <Users class="pt-3 px-2" />
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