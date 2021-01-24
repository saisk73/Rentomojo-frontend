<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div class="views">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
  font-family: 'Roboto', sans-serif;
}
/* Rules for sizing the icon. */
.material-icons.md-18 {
  font-size: 18px;
  vertical-align: bottom !important;
}

.material-icons.md-24 {
  font-size: 24px;
  vertical-align: bottom !important;
}

.material-icons.md-24m {
  font-size: 24px;
  vertical-align: middle !important;
}

.material-icons.md-36 {
  font-size: 36px;
  vertical-align: bottom !important;
}

.material-icons.md-36m {
  font-size: 36px;
  vertical-align: middle !important;
}

.material-icons.md-48 {
  font-size: 48px;
  vertical-align: bottom !important;
}

.material-icons.md-48m {
  font-size: 48px;
  vertical-align: middle !important;
}
.views {
  min-height: 60vh;
}
</style>

<script>
import Navbar from './components/common/Navbar.vue';
import Footer from './components/common/Footer.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    Navbar,
    Footer
  },
}
</script>
