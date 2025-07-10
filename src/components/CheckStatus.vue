<template>
  <div class="status-wrapper">
    <!-- Tampilkan booking jika ditemukan -->
    <div class="status-card" v-if="bookingData">
      <h2>Status Booking Berhasil 🎉</h2>
      <div class="booking-info">
        <p><strong>👤 Nama:</strong> {{ bookingData.nama }}</p>
        <p><strong>📅 Tanggal:</strong> {{ bookingData.tanggal }}</p>
        <p><strong>⏰ Jam:</strong> {{ bookingData.jam }}</p>
        <p><strong>💇‍♂️ Layanan:</strong> {{ bookingData.layanan }}</p>
      </div>
      <div class="success-message">✅ Booking Anda telah dikonfirmasi!</div>

      <!-- 🔁 Tombol Edit dan Delete -->
      <div class="booking-actions">
        <button @click="goToEdit">✏️ Edit</button>
        <button @click="handleDelete">🗑️ Hapus</button>
      </div>
    </div>

    <!-- Jika belum ditemukan, tampilkan form manual -->
    <div v-else class="manual-check">
      <h2>Booking tidak ditemukan</h2>
      <p>Silakan cek kembali nama atau lakukan pencarian manual.</p>
      <input v-model="kodeInput" type="text" placeholder="Masukkan Nama Booking" />
      <button @click="handleManualCheck">Cek</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckStatus',
  data() {
    return {
      bookingData: null,
      kodeInput: ''
    };
  },
  mounted() {
    const namaQuery = this.$route.query.nama;
    console.log("Query nama:", namaQuery);

    if (namaQuery) {
      fetch('http://localhost:3000/bookings')
        .then(res => res.json())
        .then(data => {
          const found = data.find(b => b.nama.toLowerCase() === namaQuery.toLowerCase());
          this.bookingData = found || null;
        })
        .catch(error => {
          console.error('Gagal mengambil data booking:', error);
        });
    }
  },
  methods: {
    handleManualCheck() {
      if (!this.kodeInput) {
        alert('Masukkan nama terlebih dahulu.');
        return;
      }

      fetch('http://localhost:3000/bookings')
        .then(res => res.json())
        .then(data => {
          const found = data.find(b => b.nama.toLowerCase() === this.kodeInput.toLowerCase());
          this.bookingData = found || null;

          if (!found) {
            alert('Data tidak ditemukan. Pastikan nama sesuai.');
          }
        })
        .catch(error => {
          console.error('Gagal mengambil data booking:', error);
          alert('Terjadi kesalahan saat mencari booking.');
        });
    },

    goToEdit() {
      this.$router.push(`/edit/${this.bookingData.id}`);
    },

    handleDelete() {
      const konfirmasi = confirm('Yakin ingin menghapus booking ini?');
      if (!konfirmasi) return;

      fetch(`http://localhost:3000/bookings/${this.bookingData.id}`, {
        method: 'DELETE'
      })
        .then(() => {
          alert('Booking berhasil dihapus.');
          this.bookingData = null;
        })
        .catch(error => {
          console.error('Gagal menghapus booking:', error);
          alert('Terjadi kesalahan saat menghapus.');
        });
    }
  }
}
</script>

<style scoped>
.status-wrapper {
  min-height: 100vh;
  background-image: url('https://i.pinimg.com/736x/f4/78/72/f4787270db60ce702fc1bddfed83e579.jpg'); /* Background kota kecil */
  background-repeat: repeat;
  background-size: 180px;
  background-attachment: fixed;
  background-position: top left;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
}

.status-card {
  background: #ffffff;
  padding: 40px 50px;
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
  animation: fadeSlideIn 0.8s ease;
  max-width: 500px;
  width: 100%;
}

.status-card h2 {
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 25px;
}

.booking-info p {
  font-size: 18px;
  margin: 10px 0;
  color: #34495e;
  text-align: left;
}

.success-message {
  margin-top: 25px;
  padding: 12px;
  background-color: #d4edda;
  border-left: 6px solid #28a745;
  color: #155724;
  font-weight: bold;
  border-radius: 6px;
}

.booking-actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.booking-actions button {
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.booking-actions button:first-child {
  background-color: #f1c40f;
  color: #fff;
}

.booking-actions button:last-child {
  background-color: #e74c3c;
  color: #fff;
}

.manual-check {
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.manual-check input {
  padding: 10px;
  width: 70%;
  margin: 20px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.manual-check button {
  padding: 10px 25px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
.manual-check button:hover {
  background-color: #2980b9;
}

@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
