<template>
<RestoHeader/>
    <div class = "AddBox">
       <h1>Add Product</h1>
       <p>Please take a moment to get in touch, we will get back to you shortly.</p>

    <label for="the-number">Product Number</label>
    <input type="number" name="id" placeholder="Procut Number" v-model="resto.id" >


    <label for="the-name">Product Name</label>
    <input type="text" name="name" placeholder="Enter Product Name" v-model="resto.name">

    <label for="the-Price">Product Price</label>
    <input type="number" name="price" placeholder="Product Price" v-model="resto.price">

    <button v-on:click="AddProduct">Add Product</button>
    </div>
</template>

<script >
import RestoHeader from './RestoHeader.vue';
import axios from 'axios'
export default {
    name:'RestoAddProduct',
  components: {
      RestoHeader
  },
  data()
  {
    return {
      resto :{
        id:'',
        name:'',
        price:''
      }
      
    }
  },
  methods:{
    async AddProduct()
    {
      console.warn(this.resto)
      const result = await axios.post("http://localhost:3000/resto",{
        id:this.resto.id,
        name:this.resto.name,
        price:this.resto.price
      });
      if(result.status==201)
      {
        alert("✅ Product Added Successfully!");
        this.$router.push({name:'RestoManu'})
      }
      console.warn("result",result);      
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
.AddBox{
    background-color:rgba(255, 255, 255, 0.3);
  width:90%;
  max-width: 800px;
  margin:50px auto;
  font-family: Cursive ;
  padding:20px;
}
</style>
    