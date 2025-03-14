<template>
  <RestoHeader />
  <section>
    <h1>Added Manu Card</h1>
        <div class="table-header">
            <table cellpadding="0" border="0">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="table-content">
            <table cellpadding="0" cellspacing="0">
                <tr v-for="item in resto" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                </tr>
            </table>
        </div>
    </section>
</template>

<script>
    import RestoHeader from './RestoHeader.vue';
    import axios from 'axios';
        export default {
            name: 'RestoManu',
                data() {
                    return {
                        resto: [],
                    }
                },

                components: {
                    RestoHeader
                },
                methods: {

                    async loadData() {
                        let result = await axios.get("http://localhost:3000/resto");
                        console.warn(result);
                        this.resto = result.data;
                    },
                },
                    async mounted() {
                        this.loadData();
                    }
        }   
</script>

<style>

section{
    margin:auto;
    width:50%;
}
h1{
    font-size:40px;
    color:white;
    text-transform:uppercase;
    font-weight:300;
    text-align:center;
    margin-bottom:50px;
    font-family:Cursive;
    text-shadow:2px 2px 5px yellow;
}
table{
    width:100%;
    table-layout:fixed;
}
.table-header{
    background-color:rgba(255, 19, 19, 0.3);
}
.table-content{
    height:500px;
    overflow-x:auto;
    margin-top:0px;
    border:1px solid rgba(255, 255, 255, 0.3);
    background-color:rgba(50, 255, 255, 0.3);

}
th{
    padding:20px 15px;
    text-align:left;
    font-weight:500;
    font-size:25px;
    color:white;
    text-transform:uppercase;
}
td{
    padding:15px;
    text-align:left;
    vertical-align:middle;
    font-weight:300;
    font-size:20px;
    color:white;
    border-bottom:solid 1px rgba(255,255,255,0.1);
}
::-webkit-scrollbar{
    width:6px;
}
::-webkit-scrollbar-track{
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
}
::-webkit-scrollbar-thumb{
    -webkit-box-shadow:inset 0 0 6px #9706ff;
}


</style>