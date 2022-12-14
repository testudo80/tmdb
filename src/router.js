import { createRouter, createWebHistory } from 'vue-router'

import MovieList from './pages/movies/MovieList.vue'
import MovieDetail from './pages/movies/MovieDetail.vue'
import GenreScifi from './pages/movies/GenreScifi.vue'
import AboutTMDb from './pages/others/AboutTMDb.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/tmdb/', 
            component: MovieList 
        },
        {
            path: '/movies/:movieId', 
            component: MovieDetail
        },
        {
            path: '/tmdb/sci-fi', 
            component: GenreScifi 
        },
        {
            path: '/tmdb/about', 
            component: AboutTMDb 
        },
        {
            path: '/:notFound(.*)', component: NotFound
        }
    ]
})

export default router