<template>
  <CousHeader />
  <section>
    <h1>Add To Cart</h1>
    <div class="table-header">
      <table cellpadding="0" border="0">
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
      <table cellpadding="0" cellspacing="0">
        <tr v-for="item in resto" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="AddToCart(item)">Add To Cart</button>
          </td>
        </tr>
      </table>
    </div>
  </section>

  <!-- Pop-up Message -->
  <transition name="fade">
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <p>✅ Item Added to Cart Successfully!</p>
        <button @click="showPopup = false">OK</button>
      </div>
    </div>
  </transition>
</template>
<script>
import CousHeader from "./CousHeader.vue";
import axios from "axios";

export default {
  name: "CousMenu",
  data() {
    return {
      resto: [],
      cart: [],
      showPopup: false, // Popup initially hidden
    };
  },
  components: {
    CousHeader,
  },
  methods: {
    async loadData() {
      try {
        let result = await axios.get("http://localhost:3000/resto");
        this.resto = result.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    async AddToCart(item) {
      try {
        let result = await axios.post("http://localhost:3000/cart", {
          id: item.id,
          name: item.name,
          price: item.price,
        });

        if (result.status === 201) {
          console.log("Item added to cart:", result.data);
          this.showPopup = true; // Show Popup
          setTimeout(() => {
            this.showPopup = false; // Hide after 3 seconds
          }, 3000);
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    },
  },

  mounted() {
    this.loadData();
  },
};
</script>
<style>
/* Popup Message Styling */
.popup {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 128, 0, 0.8);
  color: white;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  animation: slideDown 0.5s ease-in-out;
}

.popup-content button {
  margin-top: 10px;
  background: white;
  color: green;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
}

/* Fade Animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Slide Down Animation */
@keyframes slideDown {
  from {
    top: -50px;
    opacity: 0;
  }
  to {
    top: 20px;
    opacity: 1;
  }
}
</style>
