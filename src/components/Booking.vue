<template>
  <div class="booking-page">
    <div class="form-container">
      <h2 class="form-title">Form Sewa Studio</h2>
      <form @submit.prevent="handleBooking">
        <label>Nama Penyewa:</label>
        <input v-model="nama" type="text" required />

        <label>Tanggal Sewa:</label>
        <input v-model="tanggal" type="date" required />

        <label>Jam Mulai:</label>
        <input v-model="jam" type="time" required />

        <label>Pilih Studio:</label>
        <select v-model="layanan" required>
          <option value="">Pilih Studio</option>
          <option v-for="(studio, index) in studios" :key="index" :value="studio.name">
            {{ studio.name }}
          </option>
        </select>

        <label>Durasi (jam):</label>
        <input v-model.number="durasi" type="number" min="1" required />

        <div class="total-harga" v-if="layanan && durasi">
          Total Harga: <strong>{{ formatHarga(totalHarga) }}</strong>
        </div>

        <button type="submit">Sewa Sekarang</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Booking',
  data() {
    return {
      nama: '',
      tanggal: '',
      jam: '',
      layanan: '',
      durasi: 1,
      studios: [
        { name: "Studio Musik", price: 100000 },
        { name: "Studio Foto", price: 150000 },
        { name: "Studio Video", price: 200000 },
        { name: "Studio Podcast", price: 120000 },
        { name: "Studio Green Screen", price: 180000 },
        { name: "Studio Tari", price: 130000 }
      ]
    };
  },
  computed: {
    hargaPerJam() {
      const selected = this.studios.find(s => s.name === this.layanan);
      return selected ? selected.price : 0;
    },
    totalHarga() {
      return this.hargaPerJam * this.durasi;
    }
  },
  methods: {
    formatHarga(val) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
      }).format(val);
    },
    handleBooking() {
      const newBooking = {
        nama: this.nama,
        tanggal: this.tanggal,
        jam: this.jam,
        layanan: this.layanan,
        durasi: this.durasi,
        totalHarga: this.totalHarga
      };

      fetch('http://localhost:3000/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBooking)
      })
        .then(() => {
          this.$router.push({
            path: '/status',
            query: { nama: this.nama }
          });
        })
        .catch(error => {
          console.error('Gagal menyewa studio:', error);
          alert('Terjadi kesalahan saat menyewa.');
        });
    }
  }
};
</script>

<style scoped>
.booking-page {
  min-height: 100vh;
  background-image: url('https://i.pinimg.com/736x/f4/78/72/f4787270db60ce702fc1bddfed83e579.jpg');
  background-repeat: repeat;
  background-size: 180px;
  background-position: top left;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 40px;
  padding-bottom: 80px;
}

.form-container {
  background-color: rgba(255, 255, 255, 0.45); /* Lebih terang agar teks kontras */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 30px 40px;
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  max-width: 500px;
  width: 100%;
  animation: fadeIn 0.8s ease;
  color: #2c3e50; /* Warna teks utama */
}

.form-title {
  text-align: center;
  margin-bottom: 25px;
  font-size: 26px;
  color: #2c3e50;
  text-shadow: 0 1px 2px rgba(255,255,255,0.6);
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 16px;
  font-weight: bold;
  font-size: 15px;
  color: #2c3e50;
  text-shadow: 0 1px 1px rgba(255,255,255,0.7);
}

input,
select {
  padding: 10px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border 0.3s ease;
  font-size: 14px;
  background-color: rgba(255,255,255,0.9);
  color: #2c3e50;
}

input:focus,
select:focus {
  border-color: #1abc9c;
  outline: none;
}

.total-harga {
  margin-top: 20px;
  font-size: 17px;
  color: #2c3e50;
  text-align: center;
  text-shadow: 0 1px 1px rgba(255,255,255,0.6);
}

button {
  margin-top: 30px;
  padding: 12px;
  background-color: #1abc9c;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: 15px;
  text-shadow: 0 1px 1px rgba(0,0,0,0.2);
}

button:hover {
  background-color: #16a085;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
