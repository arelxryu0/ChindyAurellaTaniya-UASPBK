<template>
  <div class="dashboard-page">
    <div class="dashboard">
      <div class="welcome-box">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5df0d26ebbdf986d02a31efe/8e458001-b676-485d-9338-eb724bcfae26/2024.03.05_LittleStreetStudio_MARCH24_Photo-23813_FINALEdit_LR.jpg?format=1000w"
          alt="Barber Shop Illustration"
          class="dashboard-image"
        />
        <h2 class="fade-in">Selamat Datang di Dashboard</h2>
        <p class="fade-in-delay">
          Silakan pilih menu di navigasi untuk melakukan booking atau cek status.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped>
/* FULL BACKGROUND TILE KOTA */
.dashboard-page {
  min-height: 100vh;
  background-image: url('https://i.pinimg.com/736x/f4/78/72/f4787270db60ce702fc1bddfed83e579.jpg');
  background-repeat: repeat;
  background-size: 180px;
  background-attachment: fixed;
  background-position: top left;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  box-sizing: border-box;
}

/* Container utama */
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/* Kotak Sambutan */
.welcome-box {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 36px 40px;
  text-align: center;
  color: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  max-width: 600px;
  width: 100%;
  animation: fadeInBox 0.6s ease;
  transition: all 0.3s ease;
}

.welcome-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6);
}

.dashboard-image {
  width: 100%;
  max-width: 360px;
  border-radius: 12px;
  margin-bottom: 24px;
  border: 2px solid #00bfff;
  box-shadow: 0 0 12px rgba(0, 191, 255, 0.3);
  opacity: 0;
  animation: fadeInImage 1s ease forwards;
}

h2 {
  font-size: 26px;
  color: #00bfff;
  margin-bottom: 12px;
  text-shadow: 0 0 4px rgba(0, 191, 255, 0.2);
  animation: fadeInText 0.8s ease forwards;
  opacity: 0;
}

p {
  font-size: 15px;
  color: #e0e0e0;
  line-height: 1.6;
  margin-top: 8px;
  animation: fadeInText 1.4s ease forwards;
  opacity: 0;
}

/* Animasi */
@keyframes fadeInBox {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInImage {
  to {
    opacity: 1;
  }
}

@keyframes fadeInText {
  to {
    opacity: 1;
  }
}

.fade-in {
  animation-delay: 0.5s;
}

.fade-in-delay {
  animation-delay: 1s;
}

/* Responsive */
@media (max-width: 768px) {
  .welcome-box {
    padding: 24px 20px;
  }

  h2 {
    font-size: 22px;
  }

  p {
    font-size: 14px;
  }

  .dashboard-image {
    max-width: 300px;
  }
}
</style>
