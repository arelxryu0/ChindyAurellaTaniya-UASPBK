<template>
  <div class="app-container">
    <!-- Navbar hanya jika bukan halaman login -->
    <nav v-if="!isLoginPage" class="navbar">
      <div class="navbar-inner">
        <div class="navbar-brand">
          <span class="logo">🎧</span>
          <h1>Sewa Studio</h1>
        </div>
        <div class="navbar-links">
          <router-link to="/dashboard">Beranda</router-link>
          <router-link to="/services">Tipe Studio</router-link>
          <router-link to="/booking">Sewa</router-link>
          <router-link to="/status">Cek Status</router-link>
          <router-link to="/about">Tentang</router-link>
          <router-link to="/login">Logout</router-link>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    isLoginPage() {
      return this.$route.path === '/login';
    }
  }
}
</script>

<style scoped>
/* === RESET & BASE === */
:global(html),
:global(body),
:global(#app) {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background-color: #f4f4f4;
  font-family: 'Segoe UI', sans-serif;
}

.app-container {
  height: 100vh;
  overflow: hidden;
}

/* === NAVBAR STYLING === */
.navbar {
  width: 100%;
  background: linear-gradient(90deg, #1f1c2c, #928dab); /* Gradien elegan */
  padding: 12px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

/* Logo dan Judul */
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
}

.navbar-brand h1 {
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  color: #ffffff;
}

.logo {
  font-size: 24px;
}

/* Link Navigasi */
.navbar-links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.navbar-links a {
  text-decoration: none;
  color: #fdfdfd;
  font-weight: 600;
  font-size: 16px;
  position: relative;
  transition: all 0.3s ease;
}

.navbar-links a::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #ffd700;
  bottom: -4px;
  left: 0;
  transition: width 0.3s ease;
}

.navbar-links a:hover {
  color: #ffd700;
}

.navbar-links a:hover::after {
  width: 100%;
}

/* Responsif */
@media (max-width: 768px) {
  .navbar-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-links {
    flex-direction: column;
    gap: 10px;
    margin-top: 12px;
  }

  .navbar-brand h1 {
    font-size: 20px;
  }

  .navbar-links a {
    font-size: 15px;
  }
}
</style>
