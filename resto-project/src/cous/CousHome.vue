<template>
<CousHeader/>
    <div class = "intro">
        <h1>Welcome In family Restourant</h1>
        <button v-on:click="NewUser">New User</button>
    </div>
</template>

<script >
import CousHeader from './CousHeader.vue';
export default {
    name:'CousHome',
  components: {
    CousHeader
  },
  methods:{
  async NewUser(){
      await this.$router.push({name:'FirstPage'}) ;
  }
}
}
</script>

<style >
    
body{
    background: url("../assets/backimg.jpg");
    background-repeat: no-repeat;
    background-size: cover;

}
</style>