<template>
  <div class="services-page">
    <h2>Daftar Tipe Studio</h2>
    <div class="studio-grid">
      <div class="studio-card" v-for="(studio, index) in studios" :key="index">
        <img :src="studio.img" :alt="studio.name" />
        <div class="studio-info">
          <h3>{{ studio.name }}</h3>
          <p>{{ studio.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      studios: [
        {
          name: "Studio Musik",
          price: "Rp100.000 / jam",
          img: "https://www.mystudio.co.id/tinymce/images/abbe_music_studio.jpg"
        },
        {
          name: "Studio Foto",
          price: "Rp150.000 / jam",
          img: "https://d1hjkbq40fs2x4.cloudfront.net/2021-03-02/files/03_-_BOOK_STUDIO_.jpg"
        },
        {
          name: "Studio Video",
          price: "Rp200.000 / jam",
          img: "https://cms.shootingstar.id/26/main.jpg"
        },
        {
          name: "Studio Podcast",
          price: "Rp120.000 / jam",
          img: "https://cdn.prod.website-files.com/6744f2c2c22cd5d4187b1106/6744f2c2c22cd5d4187b13ba_podcast%20studio%20image%201.avif"
        },
        {
          name: "Studio Green Screen",
          price: "Rp180.000 / jam",
          img: "https://images.stockcake.com/public/9/4/9/949c3d41-91b2-4e96-be20-c4a9e52347ca_large/green-studio-setup-stockcake.jpg"
        },
        {
          name: "Studio Tari",
          price: "Rp130.000 / jam",
          img: "https://media-cdn.tripadvisor.com/media/photo-s/19/f4/ed/b3/studio-tari-salihara.jpg"
        }
      ]
    }
  }
}
</script>

<style scoped>
.services-page {
  min-height: 100vh;
  padding: 60px 30px;
  background-image: url('https://i.pinimg.com/736x/f4/78/72/f4787270db60ce702fc1bddfed83e579.jpg'); /* Gambar tile kota kecil-kecil */
  background-repeat: repeat;
  background-size: 180px; /* ubah ukuran tile sesuai kebutuhan */
  background-position: top left;
}


h2 {
  text-align: center;
  color: #ffffff;
  font-size: 32px;
  margin-bottom: 40px;
  text-shadow: 1px 1px 2px #000;
}

.studio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: auto;
}

.studio-card {
  background-color: rgba(255, 255, 255, 0.96);
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.studio-card:hover {
  transform: translateY(-4px);
}

.studio-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid #ccc;
}

.studio-info h3 {
  margin: 0;
  font-size: 18px;
  color: #2c3e50;
}

.studio-info p {
  margin: 4px 0 0;
  color: #555;
}
</style>
