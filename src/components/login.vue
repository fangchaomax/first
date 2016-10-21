<template>
  <div id="login">
      用户名:<input type="text" v-model="username" />
      密  码:<input type="text" v-model="password" />
      <button @click="login">登陆</button>
  </div>
</template>

<script>

export default {
  data(){
    return{
      username:"",
      password:""
    }
  },
  events:{
    "aaa":function(msg){
      alert(msg);
    }
  },
  methods:{
    login:function(){
      //console.log(this);
      this.$dispatch("childev","child message");
      this.$http.get("static/list.json")
      .then(function(res){
        var user=res.body.user;
        var password=res.body.password;
        console.log(res);
        if(this.username==user && this.password==password){
          this.$router.go("/home");
        }
      })
    }
  }
}
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
