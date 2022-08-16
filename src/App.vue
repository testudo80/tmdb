<template>
  <div id="sidebar">
    <TheSidebar :name="brand.name" :logo="brand.logo" />
  </div>
  <div id="right-side-wrapper">
    <header>
      <TheHeader />
    </header>
    <div class="content-box">
      <usersList />
      <main>
        <RouterView /><!-- <-SIVUJEN SISÄLTÖ (sisäänrakennettu komponentti)-->
      </main>
      <section>
        <p>tähän tekstiä - section</p>
      </section>
      <TheFooter :name="brand.name" :logo="brand.logo" :founded="brand.founded" :creator="brand.creator"
        :description="brand.description" />
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheSidebar from "./components/layouts/TheSidebar.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
// kuvat, huoh...
import logo from "./assets/brand/turtle-icon.png";

import { onMounted, ref } from 'vue'
import { getUsers } from './services/users.ts'

export default {
  components: {
    TheHeader,
    TheSidebar,
    TheFooter
  },
  props: ["name", "long-name", "logo", "founded", "creator", "description"],
  data() {

    return {

      brand: {
        name: "TMDb",
        longName: "Turtle's Movie Database",
        logo: logo,
        founded: 2022,
        creator: "@kilpikonna",
        description:
          "TMDb (Turtle's Movie Database) eli kilpikonnan elokuva tietokanta. Idea oman elokuva-aiheisen web-applikaation rakentamiseen syntyi yksinkertaisesta halusta lukea elokuvan juonesta tarkemmin ennen elokuvan katsomista, mutta kuitenkin niin ettei teksti paljasta juonesta liikaa. Jokaisesta tietokannan elokuvasta löytyy juoniseloste, jonka olen joko itse kirjoittanut tai olen muokannut alkuperäistä tekstiä.",
      },

    }
    const usersList = ref([])

    onMounted(async () => {
      const users = await getUsers()
      usersList.value = users
    })
  },

};
</script>



<style>
/* Archivo */
@import url("https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;300;400;500;600;700;800;900&display=swap");
/* Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap");
/* 
:root { --primary-text: #fad; --taustavari: blue; }  
ja sit käytetään  color: var(--primary-text) 
ja background-color: var(--taustavari)
*/

:root {
  /* värikirjasto */
  --cleo-blue: #341cff;
  --cleo-blue-tint: #4c50f6;
  --trusty-blue: #f2f6ff;
  --trusty-blue-tint: #d6e1ff;
  --gold: #ffe36d;
  --gold-tint: #fff0d5;
  --bloop: #4c50f6;
  --bloop-tint: #7189fb;
  --dollar-green: #63ffb1;
  --dollar-green-tint: #4ee499;
  --purp: #6100ff;
  --purp-tint: #669eff;
  --naughty-navy: #21248d;
  --naughty-navy-tint: #3e42c2;
  --lit-purple: #ca8bfc;
  --lit-purple-tint: #b77ce5;
  --soft-cream: #fff0d5;
  --soft-cream-tint: #ffe4b2;
  --roast-red: #e5606a;
  --roast-red-tint: #fa828e;
  /* perusvärit */
  --bg-main: var(--naughty-navy);
  --bg-main-alt: var(--naughty-navy-tint);
  --border-main: #000;
  --text-main: #000;
}

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

html {
  font-family: "Poppins", sans-serif;
}

body {
  background-color: #000;
}

body,
ul,
img {
  margin: 0;
}

ul {
  list-style: none;
}

h3 {
  padding-bottom: 10px;
}

p {
  padding-bottom: 25px;
}

a {
  text-decoration: none;
}

#sidebar {
  background-color: var(--dollar-green);
  position: fixed;
  height: 100%;
  width: 17%;
  margin: 0;
}

#right-side-wrapper {
  width: 83%;
  float: right;
}

header {
  position: fixed;
  width: 83%;
  height: 80px;
  background-color: var(--bg-main);
  border-bottom: 2px solid var(--bg-main-alt);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 8px;
}

.content-box {
  margin-top: 80px;
  /* header korkeus, laita sama korkeus tähän */
  display: flex;
  flex-flow: row wrap;
}

main {
  height: auto;
  order: 1;
  flex: 0 1 100%;
}

section {
  height: auto;
  order: 2;
  flex: 0 1 100%;
  padding: 25px 40px 0;
  color: var(--trusty-blue);
  background-color: var(--bg-main);
}

footer {
  height: auto;
  order: 3;
  flex: 0 1 100%;
  background-color: var(--lit-purple);
  padding: 40px;
}

.grid-container,
.grid-item {
  margin: 0;
  width: 100%;
}

.grid-container {
  width: 100%;
  display: grid;
  column-gap: 60px;
  grid-template-columns: auto auto auto;
}

.grid-item {
  padding: 15px 0;
}
</style>
