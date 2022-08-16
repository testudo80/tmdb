<template>
  <div>
    <StoredMovies :movies="storedMovies" />
  </div>
</template>

<script>
import StoredMovies from "../../components/movie-items/StoredMovies.vue";

export default {
  components: {
    StoredMovies,
  },
  data() {
    return {
      // HUOM! testidataa (ei lopullista tietoa...)
      storedMovies: [
        {
          id: 50,
          title: "Star Wars: Force Awakens",
          year: 2016,
          description: "juoni kuvaus + muuta tietoa",

          quality: ["atv", "br", "4k"],
          genre: "Sci-fi",
        },
        {
          id: 51,
          title: "Star Wars: The Last Jedi",
          year: 2016,
          description: "juoni kuvaus + muuta tietoa",

          quality: ["atv", "br", "4k"],
          genre: "Sci-fi",
        },
        {
          id: 1,
          title: "Rogue One: A Star Wars Story",
          year: 2016,
          description: "juoni kuvaus + muuta tietoa",

          quality: ["atv", "br", "4k"],
          genre: "Sci-fi",
        },
        {
          id: 152,
          title: "The Martian",
          year: 2016,
          description:
            "juoni kuvaus + saatavilla 2 eri versiota elokuvasta: teatteri- ja pidennetty- versio. eroavaisuudet...",

          quality: ["atv", "br", "4k"],
          genre: "Sci-fi",
        },
        {
          id: 10,
          title: "Dune",
          year: 2021,
          description: "juoni kuvaus",

          quality: ["br", "4k"],
          genre: "Sci-fi",
        },
        {
          id: 145,
          title: "Terminator: Salvation",
          year: 2009,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "Sci-fi",
        },
        {
          id: 44,
          title: "Terminator: Genisys",
          year: 2019,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "Sci-fi",
        },
        {
          id: 12,
          title: "Terminator: Dark Fate",
          year: 2019,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "Sci-fi",
        },
        {
          id: 444,
          title: "Ready Player One",
          year: 2019,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "Sci-fi",
        },
        {
          id: 9,
          title: "Arrival",
          year: 2016,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "Sci-fi",
        },
        {
          id: 12,
          title: "Jurassic Wolrd: Fallen Kingdom",
          year: 2016,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "Sci-fi",
        },
        {
          id: 33,
          title: "Ghostbusters",
          year: 1984,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "sci-fi",
        },
        {
          id: 7,
          title: "Ghostbusters: Answer the Call",
          year: 2016,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "sci-fi",
        },
        {
          id: 100,
          title: "Gemini Man",
          year: 2019,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "sci-fi",
        },
        {
          id: 76,
          title: "Blade Runner 2049",
          year: 2017,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "sci-fi",
        },
        {
          id: 4,
          title: "Tenet",
          year: 2020,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "sci-fi",
        },
        {
          id: 11,
          title: "Prometheus",
          year: 2012,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "sci-fi",
        },
        {
          id: 4,
          title: "The Matrix Resurrections",
          year: 2019,
          description: "juoni kuvaus",

          quality: ["br", "4k"],
          genre: "sci-fi",
        },
        {
          id: 18,
          title: "Warcraft",
          year: 2016,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "fantasia",
        },
        {
          id: 234,
          title: "The Batman",
          year: 2022,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "supersankari",
        },
        {
          id: 666,
          title: "Batman vs Superman: Dawn of Justice",
          year: 2022,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "supersankari",
        },
        {
          id: 616,
          title: "Justice League",
          year: 2017,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "supersankari",
        },
        {
          id: 73,
          title: "Justice League: The Snyder Cut",
          year: 2019,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "supersankari",
        },
        {
          id: 88,
          title: "Tomb Raider",
          year: 2018,
          description: "juoni kuvaus",

          quality: ["br", "4k"],
          genre: "toiminta",
        },
        {
          id: 41,
          title: "Bourne Legacy",
          year: 2012,
          description: "juoni kuvaus",

          quality: ["br", "4k"],
          genre: "toiminta",
        },
        {
          id: 5,
          title: "The Shining",
          year: 1980,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "kauhu",
        },
        {
          id: 17,
          title: "Casino",
          year: 1995,
          description: "juoni kuvaus",

          quality: ["br", "4k"],
          genre: "draama",
        },
        {
          id: 199,
          title: "Once Upon a Time... in Hollywood",
          year: 2019,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "draama",
        },
        {
          id: "222",
          title: "Inglorious Basterds",
          year: 2009,
          description: "juoni kuvaus",

          quality: ["atv", "br", "4k"],
          genre: "draama",
        },
      ],
    };
  },
};
</script>

<style scoped>
div {
  padding: 22px 0 0 32px;
  background-color: var(--bg-main);
  height: 100%;
}
</style>
