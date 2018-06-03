<template>
    <v-toolbar fixed class="teal lighten-1" dark>
        <v-toolbar-title class="mr-4">
            <router-link class="home" tag="span" 
                :to="{
                    name: 'songs'
                }">
            KIT Funny Video
            </router-link>
        </v-toolbar-title>
        <v-toolbar-item>
            <v-btn flat dark :to="{name : 'songs' }">
                Browse
            </v-btn>
        </v-toolbar-item>

        <!-- make space -->
        <v-spacer></v-spacer>

        <!-- Create button for user -->
        <v-toolbar-item>
            <v-btn dark flat :to="{name: 'login'}" v-if="!$store.state.isUserLoggedIn">
                Login
            </v-btn>
        </v-toolbar-item>
        <v-toolbar-item dark flat>
            <v-btn dark flat :to="{name: 'register'}" v-if="!$store.state.isUserLoggedIn">
                 Register
            </v-btn>
        </v-toolbar-item>
        <v-toolbar-item>
            <v-btn dark flat @click="logout" v-if="$store.state.isUserLoggedIn">
                Log Out
            </v-btn>
        </v-toolbar-item>
    </v-toolbar>
</template>

<script>
export default {
   methods: {
       logout(){
           this.$store.dispatch('setToken', null)
           this.$store.dispatch('setUser', null)
           this.$router.push({name: 'songs'})
       }
   }
}
</script>

<style scoped>
    .home{
        cursor: pointer;
    }
    .home:hover{
        color: #00695C;
    }
</style>