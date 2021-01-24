<template>
    <div class="Navbar">
        <div class="d-flex shadow-sm px-2 py-2">
            <span 
            @click="showSidebar = true"
            class="cursor material-icons md-32 my-auto d-inline-block d-md-none me-3">
                menu
            </span>
            <a 
            href="/"
            class="h3 text-dark text-decoration-none my-auto"
            >My App</a>
            <div class="ms-auto my-auto d-none d-md-inline-block">
                <a class="text-dark text-decoration-none me-3" href="/">Home</a>
                <a class="text-dark text-decoration-none me-3" href="/posts">Posts</a>
            </div>
        </div>

        <div class="overlay bg-light px-2 py-4" v-if="showSidebar == true">
            <div class="d-flex justify-content-between">
                <div class="col-6">
                    <h1 class="display-3">My App</h1>
                </div>
                <div class="col-6 d-flex justify-content-end">
                    <span 
                    @click="showSidebar = false"
                    class="cursor material-icons md-48">
                        close
                    </span>
                </div>
            </div>

            <div class="pt-5">
                <a 
                class="display-4 text-decoration-none text-dark"
                href="/">
                Home
                </a>
                <span class="material-icons md-48m my-auto">arrow_right_alt</span>  
            </div>
            <div class="pt-2">
                <a 
                class="display-4 text-decoration-none text-dark"
                href="/posts">
                Posts</a>
                <span class="material-icons md-48m my-auto">arrow_right_alt</span>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.overlay {
    top: 0;
    z-index: 999;
    height: 100vh;
    width: 100%;
    position: absolute!important;
}
.cursor {
    cursor: pointer;
}
</style>

<script>
export default {
    data() {
        return {
            showSidebar: false,
        }
    }
}
</script>