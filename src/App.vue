<template>
  <div id="app">
    <Home></Home>
    <router-view></router-view>
    <Musicplay></Musicplay>
  </div>
</template>

<script>
import Home from './components/home'
import Musicplay from './components/musicplay'

export default {
  name: 'app',
  components: {
    Home,
    Musicplay
  }
}
</script>

<style>
ul,li{padding:0;margin:0;list-style: none;}
a{text-decoration: none}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
