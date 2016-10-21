<template>
  <div id="home">
    home
    <a v-link="{name:'one',params:{id:2}}">one</a>
    <a v-link="{path:'/home/two'}">two</a>
    <a v-link="{path:'/login'}">登陆</a>
    <router-view></router-view>`
  </div>
</template>

<script>

</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
