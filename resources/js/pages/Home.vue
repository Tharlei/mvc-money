<template>
<div id="page-home">
    <section class="bg-detail" />
    <div class="container">
      <header>
        <div class="icon">
          <img :src="img" alt="Tharlei Aleixo" />
        </div>
        <div class="welcome">
          <span>Bem-vindo</span>
          <h4>Tharlei Aleixo</h4>
        </div>
      </header>
      <main>
        <div class="card balance-card">
          <div class="labels">
            <span>Saldo</span>
            <small>Disponivel momento</small>
          </div>
          <h4>R$ 330,02</h4>
        </div>

        <div class="card infos-card">
          <h1>Informativos</h1>

          <div>
            <div class="info">
              <div class="icon">
                <i class="far fa-credit-card"></i>
              </div>
              <div class="labels">
                <span>R$ 1.202,10</span>
                <small>Fatura</small>
              </div>
            </div>

            <div class="info">
              <div class="icon">
                <i class="fas fa-piggy-bank"></i>
              </div>
              <div class="labels">
                <span>R$ 1.502,32</span>
                <small>Depósito</small>
              </div>
            </div>

            <div class="info">
              <div class="icon">
                <i class="fas fa-lock"></i>
              </div>
              <div class="labels">
                <span>R$ 13.500,00</span>
                <small>Reserva</small>
              </div>
            </div>
          </div>
        </div>

        <div class="card infos-card">
          <h1>Previsões</h1>
          <h2>Do mês atual</h2>

          <div>
            <div class="info">
              <div class="icon">
                <i class="fas fa-plus"></i>
              </div>
              <div class="labels">
                <span>R$ 200,00</span>
                <small>Entrada</small>
              </div>
            </div>

            <div class="info">
              <div class="icon">
                <i class="fas fa-minus"></i>
              </div>
              <div class="labels">
                <span>R$ 800,00</span>
                <small>Saída</small>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Menu />
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu";

export default {
    components: {
        Menu,
    },

    data() {
        return {
            img: "https://media-exp1.licdn.com/dms/image/C4D03AQENu6AM4cHqUQ/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=IZGwsevdyXylKnyzSXSAUWhye1b-huCcBOQ6MgDauK8",
        };
    },
}
</script>

<style scoped>
.bg-detail {
  background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);
  height: 400px;
  position: absolute;
  z-index: -1;
  border-radius: 0 0 30px 30px;
  width: 100%;
}

.container {
  padding: 20px;
  color: white;
}

.icon {
  display: flex;
  justify-content: flex-end;
}

.icon img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.welcome {
  margin-top: 10px;
}

.welcome span {
  font-size: 20px;
}

.welcome h4 {
  margin-top: 5px;
  font-weight: 600;
  font-size: 24px;
}

.card {
  color: #111;
  margin-top: 30px;
  padding: 30px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}

.balance-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.balance-card .labels {
  display: flex;
  flex-direction: column;
}

.balance-card .labels span {
  font-size: 16px;
  font-weight: 400;
}

.balance-card .labels small {
  font-size: 12px;
  font-weight: 200;
}

.balance-card h4 {
  font-size: 20px;
  font-weight: bold;
}

.infos-card {
  display: flex;
  flex-direction: column;
}

.infos-card h1 {
  font-size: 16px;
  font-weight: 400;
}

.infos-card h2 {
  font-size: 12px;
  font-weight: 200;
  margin-top: 5px;
}

.infos-card .info {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.infos-card .info .icon {
  font-size: 18px;
  color: #eee;
  background-color: #f43b47;
  padding: 10px;
  border-radius: 50%;
}

.infos-card .info .labels {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.infos-card .info .labels span {
  font-weight: bold;
  font-size: 16px;
}

.infos-card .info .labels small {
  font-weight: 200;
  font-size: 12px;
  margin-top: 5px;
}
</style>
