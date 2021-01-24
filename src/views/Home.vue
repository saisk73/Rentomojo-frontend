<template>
  <div class="Home px-2">
    <Users class="pt-3" />
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