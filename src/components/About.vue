<template>
  <div class="about-page">
    <div class="about-container">
      <h2>Tentang Kami</h2>
      <p>Kami adalah layanan penyewaan studio modern yang menyediakan sistem booking online.</p>
      <p>Lokasi: Jl. Soekarno Hatta No. 22, Jakarta</p>
      <p>Jam Operasional: Senin - Sabtu, 08:00 - 22:00</p>
    </div>
  </div>
</template>

<style scoped>
.about-page {
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
}

.about-container {
  max-width: 600px;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.08);
}

h2 {
  color: #34495e;
  text-align: center;
}

p {
  margin-top: 10px;
  color: #555;
}
</style>
