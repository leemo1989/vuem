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
body{margin:0;font-size:14px}
#app {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
