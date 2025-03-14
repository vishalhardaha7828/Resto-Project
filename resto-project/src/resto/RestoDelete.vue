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
                        <th>Delete</th>
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
                    <td><button v-on:click="ProductDelete(item.id)">Delete</button></td>
                </tr>
            </table>
        </div>
    </section>
</template>

<script>
    import RestoHeader from './RestoHeader.vue';
    import axios from 'axios';
        export default {
            name: 'RestoDelete',
                components: {
                    RestoHeader
                },
                  data()
                  {
                    return {
                        resto :[]
                    }
                },
                methods: {
                    async ProductDelete(id) {
                        let result = await axios.delete("http://localhost:3000/resto/" + id);
                        console.warn(result)
                        if (result.status == 200) {
                            this.loadData();
                        }
                    },
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