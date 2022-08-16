<template>
    <h1>Elokuvan tiedot?</h1>
    <p>{{ movieId }}</p>
</template>

<script>
export default {
    data() {
        return {
            movieId: null
        }
    },
    created() {
        const movieId = this.$route.params.movieId
        this.movieId = movieId
    }
}
</script>
