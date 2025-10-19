<template>
    <div class="auth-layout">
        <div class="auth-content">
            <h1>SGL</h1>
            <RouterView />
        </div>

        <div class="auth-illustration">
            <img src="../assets/img/girl-reading.svg" alt="Girl reading book">
        </div>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';

</script>

<style scoped>
.auth-layout {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100vh;
}

.auth-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    width: 800px;
}

.auth-content h1 {
    color: #FCBA03;
    font-size: 2rem;
    letter-spacing: 1px;
}

.auth-illustration {
    background-color: #F3F3F3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
}

.auth-illustration img {
    width: 50vw;
    height: 100vh;
}

/* Responsividade */
@media (max-width: 768px) {
    .auth-illustration {
        display: none;
    }
}
</style>