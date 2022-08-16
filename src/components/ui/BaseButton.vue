<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    border: none;
    font-size: 0.85em;
    background-color: #fff;
    padding: 15px 20px;
    border-radius: 8px;
    font-weight: 900;
    font-family: 'Archivo', sans-serif;
    cursor: pointer;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}

button:hover {
    background-color: var(--gold);
}
</style>