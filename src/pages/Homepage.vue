<template>
    <div>
        <h1>Vos articles</h1>
        <Loader v-if="isLoading" />
        <div>
            <ArticleCard v-for="(article, index) in articles" :key="index" :article="article" />
        </div>
        <p v-if="articles.length == 0 && !isLoading">Aucun article a afficher</p>
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

<style lang="scss" scoped></style>
