<template>
  <nav>
    <div class="float-menu" v-if="menu">
      <div class="item-group">
        <div class="item">
          <div class="icon">
            <i class="fas fa-project-diagram"></i>
          </div>
          <span>Informativos</span>
        </div>
        <router-link :to="'/predictions'" class="item">
          <div class="icon">
            <i class="fas fa-chart-bar"></i>
          </div>
          <span>Previsões</span>
        </router-link>
      </div>

      <div class="item-group">
        <div class="item">
          <div class="icon">
            <i class="fas fa-user"></i>
          </div>
          <span>Perfil</span>
        </div>
        <div class="item">
          <div class="icon">
            <i class="fas fa-sign-out-alt"></i>
          </div>
          <span>Sair</span>
        </div>
      </div>
    </div>

    <button class="float-button" @click="handleMenu">
      <i :class="'fas fa-' + (menu ? 'times' : 'bars')"></i>
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    };
  },

  methods: {
    handleMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style scoped>
nav {
  position: fixed;
  right: 0;
  bottom: 0;
}

.float-button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 50px;
    height: 50px;
    background-color: #453a94;
    border-radius: 50%;
    font-size: 24px;
    margin: 0 20px 20px 0;
    outline: none;
    border: 0;
    z-index: 10;
}

.float-menu {
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);
  width: 100%;
  height: 100vh;
}

.item-group {
  display: flex;
  width: 100%;
  margin-bottom: 40px;
  justify-content: space-around;
}

.item {
  background: white;
  width: 20%;
  height: 80px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.item .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #eee;
  background-color: #f43b47;
  padding: 10px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

.item span {
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
  color: black;
}
</style>
