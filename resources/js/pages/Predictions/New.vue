<template>
    <div id="page-prevision-new">
        <section class="bg-grey" />
        <header>
            <router-link :to="'/predictions'" class="icon">
                <i class="fas fa-arrow-left"></i>
            </router-link>
            <h1>Adicionar previsão</h1>
        </header>

        <main>
            qedjhqwudhuh
        </main>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg-grey {
    position: absolute;
    height: 30vh;
    width: 100%;
    top: 0;
    z-index: -1;
    background-color: #eae8fe;
}

header {
    margin: 40px 0 40px 20px;
    display: flex;
    font-weight: bold;
    color: #453a94;
    font-size: 22px;
}

header a {
    color: #453a94;
}

header h1 {
    margin-left: 20px;
}

main {
    background: #fff;
    border-radius: 30px 30px 0 0;
}
</style>
