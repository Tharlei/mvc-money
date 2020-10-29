<template>
    <div id="page-predictions">
        <header>
            <router-link :to="'/'" class="icon">
                <i class="fas fa-arrow-left"></i>
            </router-link>
            <h1>Previsões</h1>
        </header>
        <main>
            <section class="totals">
                <h2>Outubro de 2020</h2>
                <div class="card">
                    <div class="item">
                        <small>Entrada</small>
                        <span>R$ 200,00</span>
                    </div>
                    <div class="dashed" />
                    <div class="item">
                        <small>Saída</small>
                        <span>R$ 800,00</span>
                    </div>
                </div>

                <router-link :to="'/prevision/new'" class="btn-insert">
                    <span>Adicionar nova previsão</span>
                    <i class="fas fa-plus"></i>
                </router-link>
            </section>

            <div class="bg-grey">
                <section class="predictions">
                    <div class="prevision" v-for="prevision in predictions" :key="prevision.id">
                        <div class="info">
                            <div :class="`icon ${prevision.type ? 'bg-purple' : 'bg-red'}` ">
                                <i :class="`fas fa-arrow-${prevision.type ? 'up' : 'down'}`"></i>
                            </div>
                           <div class="labels">
                                <p>{{ prevision.date }}</p>
                                <span>{{ prevision.name }}</span>
                                <h4>R$ {{ prevision.value }}</h4>
                           </div>
                        </div>
                        <div class="shortcut">
                            <i class="fas fa-angle-right"></i>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            predictions: [
                {
                    id: 1,
                    type: 1,
                    name: 'Salário',
                    date: '07/10/2020',
                    value: '6500,00'
                },
                {
                    id: 2,
                    type: 0,
                    name: 'Banco do Brasil',
                    date: '15/10/2020',
                    value: '63,78'
                },
            ]
        }
    }
}
</script>

<style scoped>
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

.totals {
    border-radius: 30px 30px 0 0;
    padding: 20px;
    background-color: #eae8fe;
}

.totals h2 {
    padding-top: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

.card {
    margin: 20px 0 40px 0;
    background-image: linear-gradient(to left, #f43b47 0%, #453a94 100%);
    padding: 30px;
    border-radius: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}

.card .item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card .item small {
    font-size: 14px;
    font-weight: 400;
}

.card .item span {
    font-size: 16px;
    font-weight: bold;
    margin-top: 5px;
}

.card .dashed {
    width: 1px;
    border-left: 1.5px white dashed;
    height: 3rem;
}

.btn-insert {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    border-radius: 15px;
    padding: 10px;
    height: 20px;
    font-weight: 400;
    text-decoration: none;
    color: #777;
    background-color: #f8f7fd;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}

.bg-grey {
    padding-top: 10px;
    background-color: #eae8fe;
}

.predictions {
    background: #fff;
    border-radius: 30px 30px 0 0;
    padding: 20px;
}

.prevision {
    color: #333;
    margin-bottom: 30px;
    padding: 30px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
    display: flex;
    justify-content: space-between;
}

.prevision .info {
    display: flex;
    align-items: center;
}

.prevision .icon {
    font-size: 18px;
    color: #eee;
    padding: 10px;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

.prevision .bg-red {
    background-color: #f43b47;
}

.prevision .bg-purple {
    background-color: #453a94;
}

.prevision .labels {
    margin-left: 8px;
    line-height: 20px;
}

.prevision span {
    font-size: 16px;
    font-weight: 400;
    margin: 50px 0 5px 0;
}

.prevision p {
    font-size: 14px;
    font-weight: 200;
}

.prevision h4 {
    font-size: 18px;
    font-weight: bold;
}

.prevision .shortcut {
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
}

</style>
