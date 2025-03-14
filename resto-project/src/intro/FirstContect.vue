<template>
<FirstHeader/>
<div class="box">
      <h1>Contact Us</h1>
  <p>Please take a moment to get in touch, we will get back to you shortly.</p>
<div class="column">
    <label for="the-name">Your Name</label>
    <input type="text" name="name" placeholder="Enter Your Name" v-model="users.name">

    <label for="the-email">Email Address</label>
    <input type="email" name="email" placeholder="Enter Your Email" v-model="users.email">

    <label for="the-phone">Phone Number</label>
    <input type="tel" name="phone" placeholder="Enter Your Phone" v-model="users.phone">

  </div>
  <div class="column">
    <label for="the-message">Message</label>
    <textarea name="message" placeholder="Enter Your Message" v-model="users.message"></textarea>
    <button type="button" v-on:click="Submit">Submit</button>
  
  </div>
</div>
    
</template>

<script>
import FirstHeader from './FirstHeader.vue';
import axios from 'axios'
export default {
    name:'FirstContect',
  components: {
    FirstHeader
  },
    data()
  {
    return {
      users :{
        name:'',
        email:'',
        phone:'',
        message:''
      }
      
    }
  },

  methods:{
    async Submit()
    {
      console.warn(this.users)
      const result = await axios.post("http://localhost:3000/users",{
        name:this.users.name,
        email:this.users.email,
        phone:this.users.phone,
        message:this.users.message
      });
      if(result.status==201)
      {
        this.$router.push({name:'FirstPage'})
      }
      console.warn("result",result);      
    }
  },
}
</script>

<style>
body{
    background: url("../assets/backimg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
.box{
  background: white;
  width:90%;
  max-width: 800px;
  margin:50px auto;
  font-family: Cursive ;
  padding:20px;
}
h1, p{
  text-align: center;
}
label{
    float:left;
}

/* single-line text, checkbox, and button */
input{
  display:block;
  width:100%;
  padding:.3em;
  font-size:20px;
  background-color:#fbfbfb;
  border:solid 1px #CCC;
  resize:vertical;
}
button{
    font-size:25px;
    width:100%;
    height:50px;
  background:lightcoral;
  margin:1em 0 0;
  color:white;
  border:none;
  border-radius:8px;
  
  font-family: Cursive ;
  cursor:pointer;
}
button:hover{
    color:black;
    transition:all .3s ease-out;
}
textarea{
  display:block;
  width:100%;
  padding:.3em;
  font-size:20px;
  background-color:#fbfbfb;
  border:solid 1px #CCC;
  resize:vertical;
  min-height:180px;
}

input:focus,
input:hover,
textarea:focus,
textarea:hover{
  background: lavenderBlush;
}





</style>