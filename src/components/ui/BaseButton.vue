<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    border: 2px solid transparent;
    font-size: 0.85em;
    background-color: #fff;
    padding: 15px 20px;
    border-radius: 8px;
    font-weight: 900;
    font-family: 'Archivo', sans-serif;
    cursor: pointer;
}

button:hover {
    border-color: var(--border-main);
}
</style>