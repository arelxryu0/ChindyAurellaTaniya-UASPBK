<template>
  <div class="dashboard">
    <div class="hero">
      <h1>🎵 Selamat Datang di <span>Studio MusikPro</span></h1>
      <p class="subtitle">
        Satu tempat untuk semua kebutuhan musikmu. Booking studio, latihan, dan rekaman dengan mudah!
      </p>
      <router-link to="/booking" class="cta-button">🎸 Mulai Booking Sekarang</router-link>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: linear-gradient(to right, #4a00e0, #8e2de2);
  color: #fff;
  text-align: center;
  padding: 40px 20px;
  font-family: 'Segoe UI', sans-serif;
}

.hero {
  max-width: 800px;
}

.hero h1 {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 15px;
  line-height: 1.3;
}

.hero h1 span {
  color: #ffc107;
}

.subtitle {
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.6;
}

.cta-button {
  display: inline-block;
  background-color: #ffc107;
  color: #333;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #e0a800;
}

/* Navbar style (optional if used globally) */
.navbar {
  background-color: #222;
  padding: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.navbar a:hover {
  color: #ffc107;
}
</style>
