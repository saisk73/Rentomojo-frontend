<template>
    <div class="Users">
        <div v-if="loading == true" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <button class="btn btn-primary" v-on:click="search()">Filter</button>
        <div class="row m-0">
            <div 
            v-for="(user, key) in users" 
            :key="key"
            >
                <div 
                class="col-md-4 p-2"
                v-if="user.display"
                >
                    <div class="shadow-sm border rounded p-3">
                        {{user.display}}
                        <div class="d-flex">
                            <img 
                            :src="'https://avatars.dicebear.com/4.5/api/avataaars/' + 'qwertyuiop'.charAt(Math.floor(Math.random() * 10)) + '.svg?mood[]=happy'"
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
                            <a class="btn btn-dark me-2 px-3">Contact Details</a>
                            <a class="btn btn-outline-dark px-3">View Posts</a>
                        </div>
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
</style>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            loading: true,
            users: []
        }
    },
    async beforeMount() {
        let api_url = 'https://jsonplaceholder.typicode.com/users';
        await axios.get(api_url)
        .then((res)=> {
            this.users = res.data;
            this.loading = false;
            this.users.map((user,key) => {
                this.users[key].display = true;
            })
        })
            
    },
    methods: {
        search() {
            let term = 'Bret'
            let results = this.users.map(user => {
                return user.username.indexOf(term) != -1 || user.company.name.indexOf(term) != -1;
            });
            results.map((user,key)=> {
                this.users[key].display = results[key]
            })
            console.log(this.users)
        },
        
    },
}
</script>