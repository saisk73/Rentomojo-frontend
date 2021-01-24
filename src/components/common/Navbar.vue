<template>
    <div class="Navbar pb-5">
        <div class="d-flex fixed-top shadow-sm px-2 py-2">
            <span 
            @click="showSidebar = true"
            class="cursor material-icons md-32 my-auto d-inline-block d-md-none me-3">
                menu
            </span>
            <a 
            href="/"
            class="navbar__link h3 text-decoration-none my-auto"
            >My App</a>
            <div class="ms-auto my-auto">
                <div class="d-none d-md-inline-block">
                    <a class="navbar__link text-decoration-none me-3" href="/">Home</a>
                    <a class="navbar__link text-decoration-none me-3" href="/posts">Posts</a>
                </div>
                <span 
                class="theme__button material-icons md-24" 
                @click="theme = 'dark'"
                v-if="theme == 'light'">
                    wb_sunny
                </span>
                <span 
                class="theme__button material-icons md-24 text-white" 
                @click="theme = 'light'"
                v-if="theme == 'dark'">
                    nights_stay
                </span>
            </div>
        </div>

        <div
        style="background-color: inherit !important; color: inherit !important;" 
        class="overlay px-2 py-4" 
        v-if="showSidebar == true">
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
                class="theme__element display-4 text-decoration-none"
                href="/">
                Home
                </a>
                <span class="material-icons md-48m my-auto">arrow_right_alt</span>  
            </div>
            <div class="pt-2">
                <a 
                class="theme__element display-4 text-decoration-none"
                href="/posts">
                Posts</a>
                <span class="material-icons md-48m my-auto">arrow_right_alt</span>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.navbar {
    &__link {
        background-color: inherit !important;
        color: inherit !important;
        -webkit-user-select: none;
        -ms-user-select: none; 
        user-select: none; 
    }
}
.overlay {
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 1400;
}
.cursor {
    cursor: pointer;
}
.theme {
    &__button {
        cursor: pointer;
        -webkit-user-select: none;
        -ms-user-select: none; 
        user-select: none; 
    }
}
:root {
  --font-color: #424242;
  --bg-color: #ffffff;
}
[data-theme="dark"] {
  --font-color: #ffffff;
  --bg-color: #000000;
} 
* {
    background-color: var(--bg-color);
    color: var(--font-color);
}
.theme__element {
    background-color: var(--bg-color) !important;
    color: var(--font-color) !important;
    text-decoration: none;
}
.border__theme_1 {
    border: 1px solid var(--font-color) !important;
    color: var(--font-color) !important;
}
.border__theme_2 {
    border-bottom: 2px solid var(--font-color) !important;
    color: var(--font-color) !important;
}
.border__theme_5 {
    border-bottom: 5px solid var(--font-color) !important;
    color: var(--font-color) !important;
}
</style>

<script>
export default {
    data() {
        return {
            showSidebar: false,
            theme: "light",
        }
    },
    beforeMount() {
        let themeVal = localStorage.getItem("theme");
        if(themeVal == undefined) {
            themeVal = 'light';
        }
        this.theme = themeVal;
        console.log(themeVal)
        if(themeVal == 'light') {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark"); 
        }
    },
    watch: {
        theme: function(val) {
            if(val == 'light') {
                document.documentElement.setAttribute("data-theme", "light");
                localStorage.setItem("theme", "light");
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark"); 
            } 
        }
    }
}
</script>