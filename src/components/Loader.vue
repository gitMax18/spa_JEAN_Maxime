<template>
    <div class="loader-container">
        <div class="loader"></div>
    </div>
</template>

<script>
export default {
    name: "Loader",
};
</script>

<style lang="scss" scoped>
.loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem;
}
.loader {
    width: 8vmax;
    height: 8vmax;
    border-right: 4px solid black;
    border-radius: 100%;
    animation: spinRight 800ms linear infinite;

    &:before,
    &:after {
        content: "";
        width: 6vmax;
        height: 6vmax;
        display: block;
        position: absolute;
        top: calc(50% - 3vmax);
        left: calc(50% - 3vmax);
        border-left: 3px solid black;
        border-radius: 100%;
        animation: spinLeft 800ms linear infinite;
    }

    &:after {
        width: 4vmax;
        height: 4vmax;
        top: calc(50% - 2vmax);
        left: calc(50% - 2vmax);
        border: 0;
        border-right: 2px solid black;
        animation: none;
    }
}

@keyframes spinLeft {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(720deg);
    }
}

@keyframes spinRight {
    from {
        transform: rotate(360deg);
    }
    to {
        transform: rotate(0deg);
    }
}
</style>
