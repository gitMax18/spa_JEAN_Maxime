<template>
    <div>
        <h1 class="home-title">Vos articles</h1>
        <Loader v-if="isLoading" />
        <div>
            <ArticleCard v-for="(article, index) in articles" :key="index" :article="article" />
            <p class="error-message" v-if="articles.length == 0 && !isLoading">Aucun article a afficher</p>
        </div>
    </div>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";
import Loader from "@/components/Loader.vue";
export default {
    name: "Homepage",
    components: { ArticleCard, Loader },
    data() {
        return {
            articles: [],
            isLoading: true,
        };
    },
    mounted() {
        this.axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                this.articles = response.data;
                console.log(this.articles);
                this.isLoading = false;
            })
            .catch((e) => {
                console.log(e.message);
            });
    },
};
</script>

<style lang="scss" scoped>
.home-title {
    text-align: center;
    border-bottom: 2px solid black;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(80px);
}

.error-message {
    font-size: 2rem;
    color: red;
}
</style>
