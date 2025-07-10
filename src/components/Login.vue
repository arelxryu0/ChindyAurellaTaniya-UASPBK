<template>
  <div class="login-page">
    <div class="login-container">
      <h2>Login Pelanggan</h2>
      <input v-model="username" type="text" placeholder="Masukkan Username" />
      <input v-model="password" type="password" placeholder="Masukkan Password" />
      <button @click="handleLogin">Login</button>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../stores/user';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      const userStore = useUserStore();
      userStore.setUsername(this.username);
      this.$router.push('/dashboard');
    }
  }
}
</script>

<style scoped>
/* ✅ FULL SCREEN BACKGROUND IMAGE WITH DARK OVERLAY */
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;

  background-image: url('https://i.pinimg.com/736x/db/32/b5/db32b5022a54d4e85a08537e26e7a2fe.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Efek gelap supaya form terlihat jelas */
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: darken;
}

/* ✅ LOGIN BOX */
.login-container {
  background-color: rgba(30, 30, 47, 0.95);
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 400px;
  text-align: center;
  color: #fff;
}

/* ✅ TITLE */
.login-container h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #caa9ff;
}

/* ✅ INPUT */
input {
  width: 90%;
  padding: 12px;
  margin: 12px 0;
  border-radius: 8px;
  border: none;
  background-color: #2c2c3e;
  color: #fff;
  font-size: 14px;
  outline: none;
  transition: 0.3s ease;
}

input::placeholder {
  color: #999;
}

input:focus {
  background-color: #3c3c5e;
  border: 1px solid #9d7dff;
}

/* ✅ BUTTON */
button {
  padding: 12px 30px;
  background-color: #9d7dff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
  margin-top: 10px;
}

button:hover {
  background-color: #b69bff;
  transform: scale(1.05);
}
</style>
