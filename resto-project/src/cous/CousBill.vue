<template>
<CousHeader/>
  <div class="bill-container">
    <h2 class="h2">🧾 Your Bill</h2>

    <!-- 🛒 Cart Table -->
    <table class="table" v-if="cart.length">
      <thead>
        <tr>
          <th class="th">ID</th>
          <th class="th">Product Name</th>
          <th class="th">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <td class="td">{{ item.id }}</td>
          <td class="td">{{ item.name }}</td>
          <td class="td">₹{{ item.price }}</td>
        </tr>
      </tbody>
    </table>

    <!-- 🏦 Payment Section -->
    <div v-if="cart.length" class="total">
      <h3>Total: <span>₹{{ totalAmount }}</span></h3>
      <button @click="processPayment" class="pay-btn">Pay</button>
    </div>

    <!-- 🛒 Empty Cart Message -->
    <p v-else class="empty-cart">🛒 Your cart is empty!</p>
  </div>
</template>

<script>
import CousHeader from './CousHeader.vue';
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router"; // ✅ Vue Router Import

export default {
    name:'CousBill',
  components: {
    CousHeader
  },
  setup() {
    const cart = ref([]);
    const router = useRouter(); // ✅ Router Instance

    // 🛒 Cart Fetch API
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cart");
        cart.value = response.data;
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    // 💰 Payment Process
    const processPayment = async () => {
      if (!cart.value.length) return;

      try {
        // 🔹 Generate Transaction ID
        const transactionId = `TXN-${Date.now()}`;

        // 🏦 Call Payment API
        await axios.post("http://localhost:3000/payment", {
          transaction_id: transactionId,
          amount: totalAmount.value,
        });

        // ✅ Payment Successful Popup
        const userConfirmed = confirm(`✅ Payment Successful! 🎉\n\nTransaction ID: ${transactionId}\nAmount: ₹${totalAmount.value}\n\nClick OK to clear the cart.`);
        
        if (userConfirmed) {
          await clearCart(); // ✅ OK पर क्लिक करने के बाद cart clear
        }
      } catch (error) {
        console.error("Payment failed:", error);
        alert("Payment failed. Please try again.");
      }
    };

    // 🗑️ Cart Delete API
    const clearCart = async () => {
      try {
        await Promise.all(cart.value.map(item => axios.delete(`http://localhost:3000/cart/${item.id}`)));
        cart.value = []; // 🔄 UI Update
        router.push({ name: "FirstPage" }); // ✅ Redirect to FirstPage
      } catch (error) {
        console.error("Error clearing cart:", error);
        alert("Cart clear failed. Try again!");
      }
    };

    // 🔢 Calculate Total Amount
    const totalAmount = computed(() => cart.value.reduce((sum, item) => sum + item.price, 0));

    onMounted(fetchCart);

    return { cart, totalAmount, processPayment };
  },
};
</script>

<style>
.bill-container { 
  width: 90%; 
  max-width: 500px; 
  margin: 20px auto; 
  padding: 20px; 
  background: white; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  text-align: center; 
  border-radius: 10px; 
}

.table { width: 100%; margin-top: 10px; border-collapse: collapse; }
.th, .td { padding: 10px; border: 1px solid #ddd; text-align: center; color: black; }
.th { background: #4CAF50; color: white; }
.total { margin-top: 15px; font-size: 20px; font-weight: bold; }
.total span { color: #4CAF50; }
.empty-cart { font-size: 18px; color: gray; margin-top: 20px; }
.pay-btn { 
  background: #4CAF50; color: white; 
  padding: 10px 20px; border: none; 
  cursor: pointer; font-size: 16px; 
  border-radius: 5px; margin-top: 10px; 
}
.pay-btn:hover { background: #45a049; }
</style>
