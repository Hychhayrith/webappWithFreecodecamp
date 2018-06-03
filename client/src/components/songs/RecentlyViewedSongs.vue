<template>
    <panel title="Recently Viewed Song">
        <v-data-table
            :headers="headers"
            :pagination.sync="pagination"
            :items="histories">
            <template slot="items" scope="props">
                <td class="text-xs-right">
                    {{ props.item.title }}
                </td>
                <td class="text-xs-right">
                    {{ props.item.artist }}
                </td>
            </template>
        </v-data-table>
    </panel>
</template>

<script>
import SongsHistoryService from '@/services/SongHistoryService'
import {mapState} from 'vuex'
export default {
    data(){
        return{
            headers: [
                {text: 'Title', value: 'title'},
                {text: 'Artist', value: 'artist'}
            ],
            pagination: {
                sortBy: 'createdAt',
                descending: true
            },
            histories: []
        }
    },
    computed:{
        ...mapState([
            'isUserLoggedIn',
            'user'
        ])
    },
    async mounted(){
        if (this.isUserLoggedIn){
            this.histories = (await SongsHistoryService.index()).data;
        }
    }
}
</script>

<style>

</style>
