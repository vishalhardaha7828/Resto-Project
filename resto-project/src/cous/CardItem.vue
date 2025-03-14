<template>
  <CousHeader />
  <section>
    <h1>🛒 Selected Items</h1>
    <div class="table-header">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="table-content">
      <table>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>₹{{ item.price }}</td>
            <td>
              <button @click="confirmRemove(item.id)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 📢 Empty Cart Message -->
    <p v-if="cart.length === 0" class="empty-cart">🛒 Your cart is empty!</p>
  </section>
</template>

<script>
import CousHeader from "./CousHeader.vue";
import axios from "axios";

export default {
  name: "CartItem",
  components: { CousHeader },

  data() {
    return { cart: [] };
  },

  methods: {
    // 🛒 Fetch Cart Data
    async fetchCart() {
      try {
        const response = await axios.get("http://localhost:3000/cart");
        this.cart = response.data;
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    },

    // ❓ Confirm Before Remove
    confirmRemove(id) {
      const userConfirmed = confirm("Are you sure you want to remove this item?");
      if (userConfirmed) {
        this.removeItem(id);
      }
    },

    // ❌ Remove Item from Cart
    async removeItem(id) {
      try {
        const response = await axios.delete(`http://localhost:3000/cart/${id}`);
        if (response.status === 200) {
          this.cart = this.cart.filter(item => item.id !== id); // 🔄 Update UI without reloading
          alert("Item removed successfully! ✅"); // 📢 Show Alert
        }
      } catch (error) {
        console.error("Error removing item:", error);
        alert("Failed to remove item. Please try again.");
      }
    },
  },

  mounted() {
    this.fetchCart();
  },
};
</script>

<style>
.empty-cart {
  font-size: 18px;
  color: gray;
  margin-top: 20px;
}
</style>
