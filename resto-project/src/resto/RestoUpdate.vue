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
                        <th>Update</th>
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
                    <td><router-link :to="'/UpdateSent/' + item.id">Update</router-link></td>
                </tr>
            </table>
        </div>
    </section>
</template>

<script>
    import RestoHeader from './RestoHeader.vue';
    import axios from 'axios';
        export default {
            name: 'RestoUpdate',
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