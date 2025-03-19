<template>
    <div>
        <a href="https://vite.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
        <router-link to="/about">前往About</router-link>
    </div>
    <HelloWorld msg="Vite + Vue" />
</template>

<script setup lang="ts">
// console.log("log is not allowed");

console.warn("warn is allowed");

console.error("error is allowed");
</script>
