<template>
  <div class="pesanan">
    <h2>📋 Daftar Pesanan Studio</h2>
    <div class="card" v-for="(item, index) in pesanan" :key="index">
      <h3>{{ item.nama }}</h3>
      <p><strong>Kategori:</strong> {{ item.kategori }}</p>
      <p><strong>Tanggal:</strong> {{ item.tanggal }} - {{ item.waktu }}</p>
      <p><strong>Durasi:</strong> {{ item.durasi }} jam</p>
      <p><strong>Total Harga:</strong> Rp{{ item.harga.toLocaleString() }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pesanan = ref([])

onMounted(() => {
  pesanan.value = JSON.parse(localStorage.getItem('pesanan')) || []
})
</script>

<style scoped>
.pesanan {
  padding: 20px;
}
.card {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 15px 0;
  box-shadow: 0 0 10px #ddd;
}
</style>
