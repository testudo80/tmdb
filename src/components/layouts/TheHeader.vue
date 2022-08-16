<template>

    <header>
        <ul>
            <li v-for="link in headerLinks" :key="link.id" class="header-link">
                <span v-if="link.icon !== ''">
                    <router-link :to="link.url">
                        {{ link.name }}
                        <font-awesome-icon :icon="[link.icon, link.iconName]" />
                    </router-link>
                </span>
                <span v-else>
                    <router-link :to="link.url">
                        {{ link.name }}
                    </router-link>
                </span>
            </li>

            <li v-for="item in items" :key="item.id" @click="toggleFilter(item)" :class="{ active: item.off }"
                class="filter">
                <font-awesome-icon :icon="[item.icon, item.iconName]" /> {{ item.label }}
            </li>
        </ul>
    </header>

    <!--
        <li class="search-movie">
             Hae <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </li>
        <li class="search-movie">TOP-100 <font-awesome-icon icon="fa-solid fa-ranking-star" />
        </li>
        <li class="search-movie">Franchise</li>
        <li class="search-movie">Kuva & ääni</li>
    
        <div @change-filter="setFilters" style="color: #fff">
            <span class="filter-option">
                <input type="checkbox" id="atv" @change="setFilter">
                <label for="atv">TV</label>
            </span>
            <span class="filter-option">
                <input type="checkbox" id="br" @change="setFilter">
                <label for="br">BR</label>
            </span>
            <span class="filter-option">
                <input type="checkbox" id="uhd" checked @change="setFilter">
                <label for="uhd">4K</label>
            </span>
            <ul>
            <li v-for="film in testFilms" :key="film.id" :title="film.title">
            {{ film.title }}</li>
        </ul>
        </div>

        <li class="search-movie">
            Lisää <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </li>

      <label for="search">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </label>
                <input id="search" type="text" placeholder="hae elokuva...">
              
        <li v-for="item in items" :key="item.id" @click="toggleFilter(item)" :class="{ active: item.off }"
            class="filter">
            <font-awesome-icon :icon="[item.icon, item.iconName]" /> {{ item.label }}
        </li>
          -->
</template>

<script>
export default {
    data() {
        return {
            headerLinks: [
                { id: 1, icon: 'fas', iconName: 'fa-magnifying-glass', name: 'Hae', url: '/' },
                { id: 2, icon: 'fas', iconName: 'fa-ranking-star', name: 'TOP-100', url: '/' },
                { id: 3, icon: '', iconName: '', name: 'Franchise', url: '/' },
                { id: 4, icon: '', iconName: '', name: 'Kuva & ääni', url: '/' },
            ],
            filters: {
                atv: true,
                br: true,
                uhd: true
            },
            activeFilters: {
                atv: true,
                br: true,
                uhd: true
            },
            items: [
                { id: 1, icon: 'fab', iconName: 'fa-apple', label: 'TV', off: false },
                { id: 2, icon: 'fas', iconName: 'fa-compact-disc', label: 'Blu-ray', off: false },
                { id: 3, icon: 'fas', iconName: 'fa-compact-disc', label: '4K Ultra HD', off: true },
            ],
            testFilms: [
                {
                    id: 50,
                    title: 'Star Wars: Force Awakens',
                    year: 2016,
                    description: 'juoni kuvaus + muuta tietoa',

                    quality: ['atv', '4k'],
                    genre: 'Sci-fi'
                },
                {
                    id: 51,
                    title: 'Star Wars: The Last Jedi',
                    year: 2016,
                    description: 'juoni kuvaus + muuta tietoa',

                    quality: ['atv', 'br', '4k'],
                    genre: 'Sci-fi'
                },
                {
                    id: 1,
                    title: 'Rogue One: A Star Wars Story',
                    year: 2016,
                    description: 'juoni kuvaus + muuta tietoa',

                    quality: ['br', '4k'],
                    genre: 'Sci-fi'
                },
            ]
        }
    },

    methods: {
        setFilter(event) {
            const inputId = event.target.id
            const isActive = event.target.checked
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            }
            this.filters = updatedFilters

        },
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters;
        },
        toggleFilter(item) {
            item.off = !item.off
        },
        filteredFilms() {
            const films = this.testFilms
            return films.filter(film => {
                if (this.activeFilters.atv && film.quality.includes('atv')) {
                    return true
                }
                if (this.activeFilters.br && film.quality.includes('br')) {
                    return true
                }
                if (this.activeFilters.uhd && film.quality.includes('4k')) {
                    return true
                }
                return false
            })
        }
    }
}
</script>

<style scoped>
ul {
    margin: 25px 0 0;
    padding-left: 32px;
}

li {
    display: inline;
    margin-right: 15px;
}

li.header-link span a {
    color: #fff;
    font-family: 'Archivo', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-right: 20px;
    border-bottom: 2px solid transparent;
    padding: 6px 0;
}

li.header-link span a:hover {
    border-bottom-color: #fff;
}

/*
input {
    background-color: transparent;
    font-size: 0.9em;
    border: none;
    width: 0;
    color: var(--roast-red);
    padding: 5px 0 7px 0;
}

input::placeholder {
    color: var(--roast-red);
}

input:focus {
    outline: none;
}
*/

.fa-compact-disc {
    font-size: 1em;
}

.fa-ranking-star {
    font-size: 14px;
    width: 20px;
    padding-bottom: 2px;
}

.fa-apple {
    font-size: 1.2em;
}

.fa-magnifying-glass,
.fa-chevron-down {
    color: #fff;
    font-size: 14px;
}

.fa-magnifying-glass {
    width: 20px;
    font-size: 12px;
}

.filter {
    border: none;
    font-size: 0.85em;
    background-color: #fff;
    padding: 17px 24px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-weight: 900;
    font-family: 'Archivo', sans-serif;
    cursor: pointer;
}

.active {
    background-color: var(--gold);
}
</style>





