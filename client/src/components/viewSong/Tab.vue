<template>
    <panel title="Tab">
        <textarea
            readonly
            v-model="song.tab">
        </textarea>
    </panel>
</template>

<script>
export default {
    props:[
        'song'
    ]
}
</script>
    
<style>

</style>
