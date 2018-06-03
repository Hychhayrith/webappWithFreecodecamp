<template>
    <panel title="YouTube Video">
        <youtube
            :player-width="800"
            :player-height="330"
            :video-id="youtubeId"
        >
        </youtube>
    </panel>
</template>

<script>
export default {
    props: [
        'youtubeId'
    ]
}
</script>

<style>

</style>
