<template>
<RestoHeader/>
    <div class = "intro">
        <h1>Welcome User</h1>
        <button v-on:click="NewUser">New User</button>
    </div>
</template>

<script >
import RestoHeader from './RestoHeader.vue';
export default {
    name:'RestoHome',
  components: {
    RestoHeader
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