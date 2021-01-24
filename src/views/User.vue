<template>
    <div class="User">
        <vue-headful
        :title="user.name"
        />
        <Navbar />
        <div v-if="loading == true" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div class="container mt-5" v-if="loading == false">
            <div class="row justify-content-start">
                <div class="col-md-2">
                    <img 
                    :src="user.image" 
                    class="user__image"
                    />
                </div>
                <div class="col-md-6 mt-sm-4 mt-md-0" style="position: relative; overflow: hidden;">
                    <p  class="fw-normal mb-0">@{{user.username}}</p>
                    <h4 class="fw-normal mb-0">{{user.name}}</h4>
                    <a 
                    :href="'mailto:' + user.email"  
                    class="theme__element fw-normal text-decoration-none mb-0">{{user.email}}</a>
                    <div class="user__details__wrapper d-flex mt-3">
                        <div class="col-6 user__details__tab"
                        @click="activeTab = 1"
                        :class="[(activeTab == 1 ? 'user__details__tab__active border__theme_5': '')]"
                        >
                            <p class="text-center m-0 p-0">Contact Details</p>
                        </div>
                        <div class="col-6 user__details__tab"
                        @click="activeTab = 2"
                        :class="[(activeTab == 2 ? 'user__details__tab__active border__theme_5': '')]"
                        >
                            <p class="text-center m-0 p-0">Company Details</p>
                        </div>
                    </div>
                    <!-- tab content -->
                    <div 
                    v-if="activeTab == 1" 
                    class="pt-3">
                        <div class="user__tab__content">
                            <p class="mb-2"> 
                                <span class="material-icons md-24 me-2">call</span>
                                {{user.phone}}    
                            </p>
                            <p class="mb-2"> 
                                <span class="material-icons md-24 me-2">public</span>
                                {{user.website}}    
                            </p>
                            <p class="mb-2"> 
                                <span class="material-icons md-24 me-2">streetview</span>
                                {{user.address.street}}    
                            </p>
                            <p class="mb-2"> 
                                <span class="material-icons md-24 me-2">house</span>
                                {{user.address.suite}}    
                            </p>
                            <p class="mb-2"> 
                                <span class="material-icons md-24 me-2">location_city</span>
                                {{user.address.city}}    
                            </p>
                            <p class="mb-2"> 
                                <span class="material-icons md-24 me-2">repeat_one</span>
                                {{user.address.zipcode}}    
                            </p>
                            <p class="mb-2"> 
                                <span class="material-icons md-24 me-2">map</span>
                                {{user.address.geo.lat}} {{user.address.geo.lng}}    
                            </p>
                        </div>
                    </div>
                    <div 
                    v-if="activeTab == 2" 
                    class="user__tab__content pt-3">
                        <p class="mb-2"> 
                            <span class="material-icons md-24 me-2">business</span>
                            {{user.company.name}}    
                        </p>
                        <p class="mb-2"> 
                            <span class="material-icons md-24 me-2">description</span>
                            {{user.company.catchPhrase}}    
                        </p>
                        <p class="mb-2"> 
                            <span class="material-icons md-24 me-2">offline_bolt</span>
                            {{user.company.bs}}    
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.user {
    &__image {
         width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
    &__details {
        &__tab {
            cursor: pointer;
            &__active {
                border-bottom: 4px solid black;
            }
        }
    }
    &__tab {
        &__content {
            animation-name: tabanim;
            animation-duration: .5s;
        }
    }
}
@keyframes tabanim {
    0% { transform: translatex(-200px);}
    100% { transform: translatex(0px);}
}
</style>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            user: {},
            activeTab: 1,
            loading: true
        }
    },
    async beforeMount() {
        let api_url = 'https://jsonplaceholder.typicode.com/users/' + this.$route.params.id;
        await axios.get(api_url)
        .then((res)=> {
            this.user = res.data;
            this.user.image = 'https://avatars.dicebear.com/4.5/api/avataaars/' + 'qwertyuiop'.charAt(Math.floor(Math.random() * 10)) + '.svg?mood[]=happy';
        })
        .catch((err) =>{
            this.$router.push({ name: 'Notfound' })
        })
        this.loading = false;
    }
}
</script>