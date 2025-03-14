<template>
<div class="nav">
    <router-link to='/Home2'>Home</router-link>
    <router-link to='/Manu2'>Manu</router-link>
    <router-link to='/Add'>Add Product</router-link>
    <router-link to='/Update'>Update Product</router-link>
    <router-link to='/Delete'>Remove Product</router-link>
    <router-link to='/Selling'>Selling</router-link>

</div>
</template>

<script>
export default {
    name:'RestoHeader'
}
</script>
<style>
.nav{
    background-color: rgb(78, 68, 68);
    overflow: hidden;
}
.nav a {
float: left;
    color: white;
    padding: 18px 20px;
    text-align: center;
    font-size: 20px;
    text-decoration: none;
    margin-left: 5px;
}
.nav a:hover{
    background: white;
    color: black;
}
</style>