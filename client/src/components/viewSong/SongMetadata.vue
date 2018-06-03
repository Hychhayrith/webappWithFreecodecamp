<template>
    <panel title="Song Metadate">
        <v-layout>
            <v-flex xs6>
                <div class="song-title">
                    {{song.title}}
                </div>
                <div class="song.artist">
                    {{song.artist}}
                </div>
                <div class="song.genre">
                    {{song.genre}}
                </div>

                <v-btn
                    dark class="green lighted-1"
                    :to="{
                        name : 'song-edit', 
                        params(){
                            return{
                                songId: song.id
                            }
                        }
                    }">
                    Edit
                </v-btn>

                <v-btn 
                    dark class="green lighten-1"
                    v-if="isUserLoggedIn && !bookmark"
                    @click="setAsBookmark">
                    Set As Bookmark
                </v-btn>

                <v-btn
                    dark class="green lighten-1"
                    v-if="isUserLoggedIn && bookmark"
                    @click="unsetAsBookmark">
                    Remove Bookmark
                </v-btn>
            </v-flex>
            <v-flex xs6 class="ml-2">
                <img class="album-image" :src="song.albumImageUrl"/>
                <br>
                {{song.album}}
            </v-flex>
        </v-layout>
    </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
    props:[
        'song'
    ],
    data(){
        return{
            bookmark: null
        }
    },
    computed: {
        ...mapState([
            'isUserLoggedIn',
            'user'
        ])
    },
    watch: {
        async song(){
            if(!this.isUserLogged){
                return;
            }
            try{
                const bookmarks = (await BookmarksService.index({
                    songId: this.song.id
                })).data
                if(bookmarks.length){
                    this.bookmark = bookmarks[0]
                }
            }catch(err){
                console.log(err)
            }
        }
    },
    methods: {
        async setAsBookmark(){
            try{
                this.bookmark = (await BookmarksService.post({
                    songId: this.song.id
                })).data
                
            }catch(err){
                console.log(err)
            }
        },
        async unsetAsBookmark(){
            try{
                await BookmarksService.delete(this.bookmark.id);
                this.bookmark=null
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>

<style>

</style>
