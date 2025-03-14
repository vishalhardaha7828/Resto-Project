<template>
<div class="nav">
    <router-link to='/'>Home</router-link>
    <router-link to='/Contect'>Contect</router-link>
    <router-link to='/About'>About </router-link>

</div>
</template>

<script>
export default {
    name:'FirstHeader',
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