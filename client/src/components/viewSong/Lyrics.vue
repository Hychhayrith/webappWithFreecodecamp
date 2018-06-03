<template>
    <panel title="Song Lyrics">
        <textarea
            readonly
            v-model="song.lyrics">
        </textarea>
    </panel>
</template>

<script>
export default {
    props: [
        'song'
    ]
}
</script>

<style>

</style>
