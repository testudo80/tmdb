<template>
    <footer>
        <div class="grid-container">
            <div class="grid-item">
                <h3>Elokuvat (340)</h3>
                <p>Kerään niin digitaalista mediaa kuin fyysistäkin. Tällä hetkellä pääpaino on kuitenkin uusissa sekä
                    käytetyissä 4K Ultra HD Blu-ray -levyissä.</p>
                <p><strong>digitaalinen (310)</strong><br>Apple TV 4K</p>
                <p><strong>fyysinen (30)</strong><br>Panasonic DP-UB820</p>
                <p><strong>kuva & ääni</strong><br>LG OLED 65" C9 | KEF LSX | KEF Kube 8b</p>
            </div>
            <div class="grid-item">
                <h3>Mikä {{ name }}?</h3>
                <p>{{ description }}</p>
                <p>
                    <router-link to="/about">
                        <base-button>Lisätietoa</base-button>
                    </router-link>
                </p>
            </div>
            <div class="grid-item brand-logo">
                <h3>{{ name }} &copy; {{ founded }}</h3>
                <p><img :src="logo" alt="Logo"></p>
                <p>{{ creator }}</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default { props: ['name', 'logo', 'founded', 'creator', 'description'] }
</script>


<style scoped>
.grid-item img {
    width: 80px;
    height: 80px;
}

.brand-logo {
    text-align: center;
}
</style>