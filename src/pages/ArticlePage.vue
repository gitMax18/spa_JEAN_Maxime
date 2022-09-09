<template>
    <article class="article-container">
        <Loader v-if="isLoadingArticle" />
        <div v-if="article">
            <ArticleCard :article="article" />
            <p class="article-body">{{ article.body }}</p>
        </div>
    </article>

    <Loader v-if="isLoadingComments" />
    <section class="comments" v-if="comments.length > 0">
        <h3 class="comments-title">Commentaires</h3>
        <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
    </section>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";
import Comment from "@/components/Comment.vue";
import Loader from "@/components/Loader.vue";
export default {
    name: "ArticlePage",
    components: { ArticleCard, Comment, Comment, Loader },
    data() {
        return {
            article: null,
            comments: [],
            isLoadingArticle: true,
            isLoadingComments: false,
        };
    },
    mounted() {
        this.axios
            .get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
            .then((response) => {
                this.article = response.data;
                this.isLoadingArticle = false;
                this.isLoadingComments = true;
                this.axios
                    .get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}/comments`)
                    .then((response) => {
                        console.log(response.data);
                        this.comments = response.data;
                        this.isLoadingComments = false;
                    })
                    .catch((e) => console.log(e.message));
            })
            .catch((e) => console.log(e.message));
    },
};
</script>

<style lang="scss" scoped>
.article-container {
    .article-body {
        font-size: 1.8rem;
        margin: 2rem 0;
    }
}

.comments {
    &-title {
        margin: 2rem 0;
        width: fit-content;
        border-bottom: 2px solid black;
    }
}
</style>
