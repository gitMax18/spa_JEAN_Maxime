<template>
    <Header />
    <div class="main-layout">
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
    name: "App",
    components: {
        Header,
    },
};
</script>

<style lang="css">
:root {
    font-size: 62.5%;
}

@media (max-width: 750px) {
    :root {
        font-size: 55%;
    }
}

@media (max-width: 400px) {
    :root {
        font-size: 45%;
    }
}

body {
    font-size: 1.6rem;
}

*,
::before,
::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.main-layout {
    padding: 0 2rem;
    margin: 0 auto;
    max-width: 1000px;
}
</style>
