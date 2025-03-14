<template>
<router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body{
  padding:0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo{
  width: 200px;
}
.register input, .login input, .AddRes input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
}
.register button, .login button, .AddRes button{
  width: 330px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
  font-size: large;
  color: aliceblue;
  background-color: brown;
}
</style>
