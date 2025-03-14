<template>
  <RestoHeader />
  <div class="AddBox">
    <h1>🔄 Update Product</h1>
    <p>Please update the product details below.</p>

    <label for="the-number">Product Number</label>
    <input type="number" name="id" placeholder="Product Number" v-model="resto.id">

    <label for="the-name">Product Name</label>
    <input type="text" name="name" placeholder="Enter Product Name" v-model="resto.name">

    <label for="the-Price">Product Price</label>
    <input type="number" name="price" placeholder="Product Price" v-model="resto.price">

    <button @click="UpdateProduct" class="update-btn">Update Now</button>
  </div>
</template>

<script>
import RestoHeader from "./RestoHeader.vue";
import axios from "axios";

export default {
  name: "UpdateSent",
  components: { RestoHeader },

  data() {
    return {
      resto: {
        id: "",
        name: "",
        price: ""
      }
    };
  },

  methods: {
    async UpdateProduct() {
      if (!this.resto.id || !this.resto.name || !this.resto.price) {
        alert("⚠️ Please fill in all fields!");
        return;
      }

      const confirmUpdate = confirm("Are you sure you want to update this product?");
      if (!confirmUpdate) return;

      try {
        const result = await axios.put(
          `http://localhost:3000/resto/${this.$route.params.id}`,
          {
            id: this.resto.id,
            name: this.resto.name,
            price: this.resto.price
          }
        );

        if (result.status === 200) {
          alert("✅ Product updated successfully!");
          this.$router.push({ name: "RestoUpdate" });
        }
      } catch (error) {
        console.error("Error updating product:", error);
        alert("❌ Failed to update product. Please try again!");
      }
    }
  },

  async mounted() {
    try {
      const result = await axios.get(`http://localhost:3000/resto/${this.$route.params.id}`);
      this.resto = result.data;
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }
};
</script>

<style>
body {
  background: url("../assets/backimg.jpg") no-repeat center center fixed;
  background-size: cover;
}

.AddBox {
  background-color: rgba(255, 255, 255, 0.3);
  width: 90%;
  max-width: 500px;
  margin: 50px auto;
  font-family: Cursive;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.update-btn {
  background: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.update-btn:hover {
  background: #0056b3;
}
</style>
