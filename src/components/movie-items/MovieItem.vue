<template>
    <base-card>
        <button @click="goMovieDetailPage(movieId)">
            <img :src="image" alt="Kansikuva">
            <p>{{ title }}</p>
        </button>
    </base-card>
</template>

<script>
export default { 
    props: ['title', 'image', 'movieId'],
    methods: {
        goMovieDetailPage(movieId) {
            alert(movieId)
        }
    }    
}
</script>

<style scoped>
button {
    border: 2px solid var(--naughty-navy-tint);
    cursor: pointer;
    margin: 0;
    padding: 0;
    background-color: #000;
    border-radius: 8px;
}

img {
    width: 100%;
    height: auto;
    padding: 0;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

p {
    color: #fff;
    font-size: 0.8rem;
    text-align: left;
    padding: 0 0 4px 4px;
    font-weight: 600;
    font-family: 'Archivo', sans-serif;
}

button:hover {
    border: 1px solid var(--border-main);
}
</style>