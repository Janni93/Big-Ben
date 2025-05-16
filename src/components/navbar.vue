<template>
  <nav class="navbar">
    <div class="nav-left">
      <RouterLink to="/">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </RouterLink>
    </div>

    <div class="nav-center">
      <RouterLink to="/">FORSIDE</RouterLink>
      <RouterLink to="/about">BEGIVENHEDER</RouterLink>
      <RouterLink to="/menukort">MENUKORT</RouterLink>
    </div>

    <div class="facebook-link">
      <a
        href="https://www.facebook.com/bigbenpubvarde/?locale=fo_FO"
        target="_blank"
        rel="noopener"
      >
        Besøg os på Facebook
      </a>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400;500;600;700&display=swap');

.navbar {
  position: relative;
  top: 0;
  z-index: 9999;
   background-color: rgba(65, 44, 34, 0.95);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 100px;
  width: 100%;
  height: 110px;
  box-sizing: border-box;
  box-shadow: 0 2px 2px #EDD7BE;
  flex-wrap: nowrap;
}

.nav-left {
  display: flex;
  align-items: center;
}

.logo {
  width: 170px;
  height: auto;
  margin-top: 8px;
}

.nav-center {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.nav-center a {
  font-family: 'Vast Shadow', cursive;
  font-size: 17px;
  text-decoration: none;
  color: #EDD7BE;
  transition: 0.3s;
  letter-spacing: -2px;
  transform: scaleY(1.5);
}

.nav-center a:hover {
  color: #ffeace;
}

.facebook-link {
  display: flex;
  justify-content: flex-end;
}

.facebook-link a {
  display: inline-block;
  background-color: #470101;
  color: #EDD7BE;
  padding: 7px 20px;
  font-family: 'Vast Shadow', cursive;
  font-size: 13px;
  text-decoration: none;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
  letter-spacing: -2px;
  transform: scaleY(1.5);
  text-align: center;
  white-space: nowrap;
}

.facebook-link a:hover {
  background-color: #5d3f31;
  transform: scale(1.05, 1.6);
}

@media (max-width: 768px) {

  .navbar {
    flex-direction: column;
    padding: 15px 30px;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    height: auto;
  }

  .nav-left,
  .nav-center,
  .facebook-link {
    width: 100%;
    justify-content: center;
    flex: none;
    text-align: center;
  }

  .logo {
    width: 110px;
    height: auto;
    margin-bottom: -20px;
    margin-top: -10px;
  }

  .nav-center {
    gap: 5px;
    flex-wrap: wrap;
    margin-bottom: -5px;
  }

  .nav-center a {
    font-size: 10px;
    letter-spacing: -1px;
    transform: scaleY(1.4);
  }

  .facebook-link a {
    font-size: 9px;
    letter-spacing: -1px;
    padding: 4px 10px;
    transform: scaleY(1.4);
  }
}
</style>
