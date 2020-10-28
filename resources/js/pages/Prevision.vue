<template>
    <div id="page-prevision">
        <header>
            <router-link :to="'/'" class="icon">
                <i class="fas fa-arrow-left"></i>
            </router-link>
            <h1>Previsões</h1>
        </header>
        <main>
            <section class="totals">
                <h2>Outubro / 2020</h2>
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
            </section>

            <div class="bg-grey">
                <section class="predictions">
                    <div class="prevision" v-for="prevision in predictions" :key="prevision.name">
                        <div class="info">
                            <div class="icon">
                                <i :class="`fas fa-${prevision.type ? 'plus' : 'minus'}`"></i>
                            </div>
                            <span>{{ prevision.name }}</span>
                            <small>{{ prevision.date }}</small>
                        </div>
                        <h4>{{prevision.value}}</h4>
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
                    type: 1,
                    name: 'Salário',
                    date: '07/10/2020',
                    value: '6500,00'
                },
                {
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
    margin: 20px 0 20px 0;
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

.bg-grey {
    padding-top: 10px;
    background-color: #eae8fe;
}

.predictions {
    background: #fff;
    border-radius: 30px 30px 0 0;
    padding: 20px;
}
</style>
