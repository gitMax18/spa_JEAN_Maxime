<template>
    <div class="header-container">
        <div class="main-layout">
            <router-link :to="{ name: 'Homepage' }" class="logo">Article App</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style lang="scss" scoped>
.header-container {
    background-color: black;
    margin-bottom: 2rem;

    .logo {
        padding: 2rem 0;
        color: white;
        font-size: 3.5rem;
        font-weight: bold;
        text-decoration: none;
        display: block;
    }
}
</style>
