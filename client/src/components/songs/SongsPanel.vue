<template>
    <panel title="Songs">
        <v-btn
            slot="action"
            :to="{name: 'songs-create'}"
            class="green accent-2"
            light medium absolute right middle fab
        >  
            <v-icon>add</v-icon>
        </v-btn>

        <div
            v-for="song in songs"
            class="song"
            :key="song.id"
        >
            <v-layout>
                <v-flex xs-6>
                    <div class="song-title">
                        {{ song.title }}
                    </div>
                    <div class="song-artist">
                        {{song.artist}}
                    </div>
                    <div class="song.genre">
                        {{song.genre}}
                    </div>

                    <v-btn
                    dark class="green lighten-1"
                    :to="{
                        name: 'song',
                        params: {
                            songId: song.id
                        }
                    }">
                        View
                    </v-btn>
                </v-flex>

                <v-flex xs6>
                    <img class="album-image" :src="song.albumImageUrl" />
                </v-flex>
            </v-layout>
        </div>
    </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
    data(){
        return{
            songs : null
        }
    },
    watch:{
        '$route.query.search':{
            immediate: true,
            async handler (value){
                this.songs = (await SongsService.index(value)).data
            }
        }
    }

}
</script>

<style>

</style>
