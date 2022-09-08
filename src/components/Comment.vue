<template>
    <div class="comment-container">
        <h3 class="comment-name">{{ comment.name }}</h3>
        <a :href="`mailto:${comment.email}`" class="comment-email">{{ comment.email }}</a>
        <p class="comment-body">{{ comment.body }}</p>
    </div>
</template>

<script>
export default {
    name: "Comment",
    props: {
        comment: Object,
    },
};
</script>

<style lang="scss" scoped>
.comment-container {
    margin: 1rem 0;
}
.comment-name {
    font-size: 1.8rem;
}

.comment-email {
    margin-bottom: 1rem;
    display: block;
}
</style>
