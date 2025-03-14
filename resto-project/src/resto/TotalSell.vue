<template>
  <RestoHeader />
  <section>
    <h1>💰 Payment History</h1>
        <div class="table-header">
            <table v-if="payments.length" cellpadding="0" border="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Transaction ID</th>
                        <th>Amount (₹)</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="table-content">
            <table cellpadding="0" cellspacing="0">
                <tr v-for="payment in payments" :key="payment.id">
                    <td>{{ payment.id }}</td>
                    <td>{{ payment.transaction_id }}</td>
                    <td>₹{{ payment.amount }}</td>
                </tr>
            </table>
        </div>
    <div v-if="payments.length" class="total-section">
      <h3 class="h3">🔹 Total Amount: <span>₹{{ totalAmount }}</span></h3>
      <button @click="clearPayments" class="clear-btn">Clear Payments</button>
    </div>

    <p v-else class="empty-msg">No payment records found! 🛒</p>
  
  </section>
</template>

<script>
import RestoHeader from "./RestoHeader.vue";
import axios from "axios";
import { ref, computed, onMounted } from "vue";

export default {
  name: "PaymentHistory",
  components: { RestoHeader },

  setup() {
    const payments = ref([]);

    // ✅ Payment API से डेटा लाना
    const fetchPayments = async () => {
      try {
        const response = await axios.get("http://localhost:3000/payment");
        payments.value = response.data;
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    // 🔢 कुल Amount निकालना
    const totalAmount = computed(() => 
      payments.value.reduce((sum, payment) => sum + payment.amount, 0)
    );

    // ❌ Payment API का पूरा डेटा Delete करना
    const clearPayments = async () => {
      const confirmClear = confirm("Are you sure you want to clear all payment records?");
      if (!confirmClear) return;

      try {
        await Promise.all(payments.value.map(payment => axios.delete(`http://localhost:3000/payment/${payment.id}`)));
        payments.value = []; // 🔄 UI अपडेट
        alert("✅ All payments cleared successfully!");
      } catch (error) {
        console.error("Error clearing payments:", error);
        alert("❌ Failed to clear payments!");
      }
    };

    onMounted(fetchPayments);

    return { payments, totalAmount, clearPayments };
  }
};
</script>

<style>
.h3{
    color:white;
    background-color:rgba(50, 255, 255, 0.3);
    height:50px;
    font-size:25px;
    padding:10px 2px 2px 2px;
}
</style>
