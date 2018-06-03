<template>
    <v-layout>
        <v-flex xs6 v-if="isUserLoggedIn"> <!--need mapstate-->
            <songs-bookmarks/>
            <recently-reviewed-songs class="mt-2"/>
        </v-flex>

        <v-flex :class="{
            xs12: !isUserLoggedIn, 
            xs6: isUserLoggedIn
            }" class="ml-2">
            <songs-search-panel />
            <songs-panel class="mt2" />
        </v-flex>
    </v-layout>
</template>

<script>
import SongsSearchPanel from './SongsSearchPanel'
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsService from '@/services/SongsService'
import {mapState} from 'vuex'
export default {
    Components: {
        RecentlyViewedSongs,
        SongsPanel,
        SongsSearchPanel,
        SongsBookmarks
    },
    computed: {
        ...mapState([
            'isUserLoggedIn'
        ])
    },
    data(){
        return {
            songs : null
        }
    },
    async mounted(){
        try{
            this.songs = (await SongsService.index()).data;
        }catch(err){
            console.log("There is error here")
        }
    }
}
</script>

<style>

</style>
