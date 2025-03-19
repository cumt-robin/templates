<template>
    <div>
        <h1>About</h1>
        <p>{{ user }}</p>
        <router-link to="/">前往Home</router-link>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";

const { user } = useAuthStore();
</script>
