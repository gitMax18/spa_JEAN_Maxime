<template>
    <router-link :to="{ name: 'ArticlePage', params: { id: article.id } }" class="card-container">
        <div class="letter" :style="{ backgroundColor: getRandColor() || 'black' }">{{ firstLetter }}</div>
        <h2>{{ article.title }}</h2>
    </router-link>
</template>

<script>
export default {
    name: "ArticleCard",

    props: {
        article: Object,
    },
    computed: {
        firstLetter() {
            return this.article.title.charAt(0).toUpperCase();
        },
    },
    methods: {
        getRandColor() {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            return "rgb(" + red + ", " + green + ", " + blue + ")";
        },
    },
};
</script>

<style lang="scss" scopped>
.card-container {
    display: flex;
    justify-content: left;
    align-items: center;
    text-decoration: none;
    color: black;
    margin: 1rem 0;

    .letter {
        padding: 1rem;
        width: 5rem;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10000rem;
        margin-right: 1rem;
        font-size: 2.5rem;
        color: white;
        font-weight: bold;
    }
}
</style>
