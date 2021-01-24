<template>
    <div class="NotFound">
        <Navbar />
        <div class="container">
            <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_4DPcyu.json"  background="transparent"  speed="1"  style="width:100%; height: 25rem;"  loop  autoplay >
            </lottie-player>
            <div class="d-flex justify-content-center">
                <div class="col-md-auto col-sm-auto">
                    <a href="/" class="btn btn-outline-dark rounded-0 me-3">Return Home</a>
                    <a href="mailto:saisk73@gmail.com" class="btn btn-dark rounded-0">Report Problem</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    min-height: 60vh;
}
</style>
<script>
import "@lottiefiles/lottie-player";
export default {
  
}
</script>