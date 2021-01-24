<template>
    <div class="Users">
        <div v-if="loading == true" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div class="row justify-content-end p-2 m-0" v-if="loading == false">
            <div class="border__theme_1 col-xxl-4 col-lg-6 col-12 d-flex justify-content-between search__wrapper py-1">
                <input 
                v-model="searchTerm"
                type="text"
                placeholder="Search Users"
                class="search__input col-11 border-0"
                v-on:keyup="search()"
                />
                <span class="material-icons md-24">search</span>
            </div>
        </div>
        <div class="row m-0" v-if="loading == false">
            <div 
            class="col-xxl-3 col-lg-4 col-md-6 col-sm-12 p-2"
            v-for="(user, key) in users" 
            :key="key"
            v-bind:class="[users[key].display ? !users[key].display : 'd-none', '']"
            >
                <div class="shadow-sm border rounded p-3">
                    <div class="d-flex">
                        <img 
                        :src="user.image"
                        class="user__image"
                         />
                    </div>
                    <p  class="mb-0 text-secondary mt-2">@{{user.username}}</p>
                    <h3 class="mb-0">{{user.name}}</h3>
                    <p  class="mb-0">
                        <span class="material-icons md-24">mail</span>
                        {{user.email}}
                    </p>
                    <p  class="mb-0">
                        <span class="material-icons md-24">public</span>
                        {{user.website}}
                    </p>
                    <div class="mt-2">
                        <a :href="'/users/' + user.id" class="btn btn-dark me-2 px-3">Contact Details</a>
                        <a 
                        :href="'/posts?user=' + user.id" 
                        class="border__theme_1 btn btn-outline-dark px-3"
                        >View Posts</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.user {
    &__image {
         width: 4rem;
        height: 4rem;
        border-radius: 50%;
    }
}
.search {
    &__wrapper {
        border: 1px solid black;
        border-radius: 5px;
    }
    &__input {
        &:focus {
            border: none;
            outline: none;
        }
    }
}
</style>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            loading: true,
            users: [],
            searchTerm: '',
        }
    },
    async beforeMount() {
        let api_url = 'https://jsonplaceholder.typicode.com/users';
        await axios.get(api_url)
        .then((res)=> {
            this.users = res.data;
            this.users.map((user,key) => {
                this.users[key].image = 'https://avatars.dicebear.com/4.5/api/avataaars/' + 'qwertyuiop'.charAt(Math.floor(Math.random() * 10)) + '.svg?mood[]=happy';
                this.users[key].display = true;
            })
            this.loading = false;
        })
            
    },
    methods: {
        search() {
            this.loading = true;
            let term = this.searchTerm.toLowerCase();
            let results = this.users.map(user => {
                return user.username.toLowerCase().indexOf(term) != -1 || user.company.name.toLowerCase().indexOf(term) != -1 || user.name.toLowerCase().indexOf(term) != -1;
            });
            this.users.forEach((user,key) => {
               this.users[key].display = results[key];
            });
            console.log(this.users)
            this.loading = false;
        },
        getData(){
            console.log(this.users)
        }
        
    },
}
</script>