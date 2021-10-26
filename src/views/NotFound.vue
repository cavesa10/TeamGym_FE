<template>
    <div class="container-not-found">

        <h1>Página no encontrada</h1>
        <a href="/"> Regresar al home </a>
    </div>
</template>

<script>
export default {
    name: 'NotFoud',
}
</script>

<style scoped>
.container-not-found {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 100px;
    color: white;
}

a{
    color:white;
}
</style>