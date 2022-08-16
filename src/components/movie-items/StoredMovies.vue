<template>
    <movie-item 
        v-for="movie in movies"     
        :key="movie.id" 
        :movieId="movie.id"
        :title="movie.title" 
        :image="movie.image"
        :genre="movie.genre">
    </movie-item>
</template>

<script>
import MovieItem from './MovieItem.vue'

export default {
    components: {
        MovieItem,
    },
    props: ['movies']
}
</script>

