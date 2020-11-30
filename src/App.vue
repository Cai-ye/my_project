<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import Home from "./pages/Home";

export default {
  name: "App",
  components: {
    // Home,
  },
};
</script>

<style>
@import "./common/font/font.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
