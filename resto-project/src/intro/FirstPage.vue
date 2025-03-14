<template>
<FirstHeader/>
    <div class = "intro">
        <h1>Welcome To The Resto Managment App</h1>
        <button v-on:click="Costumer">Costumer</button>
        <button v-on:click="Restaurant">Restuarant</button>
    </div>
</template>

<script>
import FirstHeader from './FirstHeader.vue';
export default {
    name:'FirstPage',
  components: {
    FirstHeader
  },
  methods:{
  async Costumer(){
      await this.$router.push({name:'CousHome'}) ;
  },
  async Restaurant(){
    await this.$router.push({name:'RestoHome'}) ;
  }
}
}
</script>

<style>
body{
    background: url("../assets/backimg.jpg");
    background-repeat: no-repeat;
    background-size: cover;

}
  .intro h1{
  font-size: 80px;
  color: #fff;
  text-align: center;
  text-shadow: 2px 2px 5px yellow;
  font-family: cursive;
  }
  .intro{
    font-size: 20px;
      margin:6% auto auto auto;
  width: 50%;
  padding: 10px;

  }
  .intro button{
  margin-left:20px;
  margin-right:20px;
  background-color:rgb(151, 22, 22);
  font-family: cursive;
  color: white;
  font-size: 20px;
  padding: 16px 30px;
  box-shadow:2px 2px 5px 5px yellow;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  }
  .intro button:hover{
  font-size: 25px;
    box-shadow:4px 4px 10px 10px yellow;
  }
</style>