<template>
    <!--<nav>
        <router-link to="/" id="title">
            <h1>{{ name }} <img :src="logo" alt="Logo"></h1>
        </router-link>
        <ul>
            <li>
                <router-link to="/">
                    <font-awesome-icon icon="fa-solid fa-compact-disc" /> Elokuvat <span>340</span>
                </router-link>
            </li>
            <li>
                <router-link to="/sci-fi">
                    <font-awesome-icon icon="fa-solid fa-rocket" /> Sci-fi <span>40</span>
                </router-link>
            </li>
            <li>
                <router-link to="/fantasia">
                    <font-awesome-icon icon="fa-solid fa-dragon" /> Fantasia <span>40</span>
                </router-link>
            </li>
            <li>
                <router-link to="/supersankari">
                    <font-awesome-icon icon="fa-solid fa-mask" /> Superhero <span>40</span>
                </router-link>
            </li>
            <li>
                <router-link to="/toiminta">
                    <font-awesome-icon icon="fa-solid fa-burst" /> Toiminta <span>40</span>
                </router-link>
            </li>
            <li>
                <router-link to="/trilleri">
                    <font-awesome-icon icon="fa-solid fa-person-running" /> Trilleri <span>40</span>
                </router-link>
            </li>
            <li>
                <router-link to="/kauhu">
                    <font-awesome-icon icon="fa-solid fa-skull" /> Kauhu <span>40</span>
                </router-link>
            </li>
            <li>
                <router-link to="/draama">
                    <font-awesome-icon icon="fa-solid fa-masks-theater" /> Draama <span>40</span>
                </router-link>
            </li>
            <li class="empty-list"></li>
            <li>
                <router-link to="/top-100">
                    <font-awesome-icon icon="fa-solid fa-box-archive" /> Muut <span>40</span>
                </router-link>
            </li>
            <li>
                <router-link to="/top-100">
                    <font-awesome-icon icon="fa-solid fa-box-archive" /> Sarjat <span>2</span>
                </router-link>
            </li>
            <li class="empty-list"></li>
            <li class="empty-list"></li>
            <li class="empty-list"></li>
            <li class="empty-list"></li>
        </ul>
    </nav>-->
<div id="sidebar">
    <nav>
        <router-link to="/tmdb/" id="title">
            <h1>{{ name }} <img :src="logo" alt="Logo"></h1>
        </router-link>
        <ul>
            <li v-for="item in items" :key="item.id">
                <router-link :to="item.url" v-if="item.empty === false">
                    <font-awesome-icon :icon="[item.icon, item.iconName]" />
                    {{ item.label }}
                    <span class="genre-amount">{{ item.amount }}</span>
                </router-link>
                <div class="empty-list" v-else></div>
            </li>
        </ul>
    </nav>
    </div>

</template>

<script>
export default {
    props: ['name', 'logo'],
    data() {
        return {
            items: [
                { id: 1, url: '/tmdb/', icon: 'fas', iconName: 'fa-compact-disc', label: 'Elokuvat', amount: 340, empty: false },
                { id: 2, url: '/tmdb/sci-fi', icon: 'fas', iconName: 'fa-rocket', label: 'Sci-fi', amount: 40, empty: false },
                { id: 3, url: '/fantasia', icon: 'fas', iconName: 'fa-dragon', label: 'Fantasia', amount: 40, empty: false },
                { id: 4, url: '/superhero', icon: 'fas', iconName: 'fa-mask', label: 'Superhero', amount: 40, empty: false },
                { id: 5, url: '/toiminta', icon: 'fas', iconName: 'fa-burst', label: 'Toiminta', amount: 40, empty: false },
                { id: 6, url: '/trilleri', icon: 'fas', iconName: 'fa-person-running', label: 'Trilleri', amount: 40, empty: false },
                { id: 7, url: '/kauhu', icon: 'fas', iconName: 'fa-skull', label: 'Kauhu', amount: 40, empty: false },
                { id: 8, url: '/draama', icon: 'fas', iconName: 'fa-masks-theater', label: 'Draama', amount: 40, empty: false },
                { id: 9, empty: true },
                { id: 10, url: '/muut', icon: 'fas', iconName: 'fa-box-archive', label: 'Muut', amount: 40, empty: false },
                { id: 11, url: '/sarjat', icon: 'fas', iconName: 'fa-box-archive', label: 'Sarjat', amount: 2, empty: false },
                { id: 12, empty: true },
                { id: 13, empty: true },
                { id: 14, empty: true },
                { id: 15, empty: true },
            ]
        }
    }
}
</script>

<style scoped>
#title {
    text-align: center;
    padding: 20px 0 0;
}

#title,
#title:hover,
#title.router-link-exact-active,
#title h1,
#title h1:hover {
    font-size: 2.1rem;
    font-weight: 900;
    text-transform: none;
    color: var(--text-main);
    background-color: transparent;
    border: none;
    letter-spacing: -0.025em;
}

#title img {
    width: 28px;
    height: 28px;
}

nav,
ul,
li,
a {
    margin: 0;
    padding: 0;
}

nav {
    font-family: 'Archivo', sans-serif;
    font-weight: 900;
    height: 100%;
    width: 100%;
    border-right: 2px solid var(--border-main);
}

nav ul {
    display: block;
    height: auto;
    margin-left: 32px;
}

.empty-list {
    height: 34px;
    cursor: default;
    margin-bottom: 4px;
}

.empty-list,
nav a {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border: 4px solid var(--border-main);
    border-right: none;
    width: 100%;
    display: inline-block;
}

nav a,
nav a:visited {
    color: #000;
    font-size: 0.9rem;
    padding: 6px 0 5px 4px;
    text-transform: uppercase;
    margin-bottom: 8px;
}

nav a:hover {
    background-color: var(--gold);
}

.fa-rocket,
.fa-dragon,
.fa-burst,
.fa-mask,
.fa-person-running,
.fa-masks-theater,
.fa-skull,
.fa-box-archive,
nav .fa-compact-disc {
    font-size: 0.9rem;
    width: 24px;
}

nav a.router-link-exact-active {
    color: var(--dollar-green);
    background-color: #000;
}

nav a span.genre-amount {
    float: right;
    padding: 0 4px 0 0;
}
</style>