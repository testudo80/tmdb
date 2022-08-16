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
            path: 'http://localhost:5173/', 
            component: MovieList 
        },
        {
            path: 'http://localhost:5173/movies/:movieId', 
            component: MovieDetail
        },
        {
            path: 'http://localhost:5173/sci-fi', 
            component: GenreScifi 
        },
        {
            path: 'http://localhost:5173/tmdb-app/about', 
            component: AboutTMDb 
        },
        {
            path: 'http://localhost:5173/:notFound(.*)', component: NotFound
        }
    ]
})

export default router