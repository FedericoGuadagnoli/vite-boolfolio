<script>
export default {
    name: 'NotFoundPage'
}
</script>

<template>
    <div class="d-flex flex-column align-items-center justify-content-center">
        <h1>404 | Not Found</h1>
        <button @click="$router.back()" class="btn btn-sm btn-warning">Indietro</button>
    </div>
</template>

<style scoped lang="scss">
.d-flex {
    height: 90vh;
}
</style>