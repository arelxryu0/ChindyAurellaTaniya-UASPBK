<template>
  <div class="tentang">
    <h2>🏢 Tentang <span>Studio MusikPro</span></h2>
    <p class="intro">Kami menyediakan studio dengan berbagai kategori terbaik untuk kebutuhan musik Anda.</p>

    <div class="studio-gallery">
      <div class="studio-card">
        <img src="https://varaamo.hel.fi/v1/media/reservation_unit_images/studio5sm.jpg.0x728_q85.jpg" alt="Studio Modern" />
        <p><strong>Studio Vokal:</strong> Suasana akustik yang nyaman dan kedap suara untuk penyanyi solo atau grup kecil.</p>
      </div>
      <div class="studio-card">
        <img src="https://nusantara-news.co/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-12-at-16.44.13.jpeg" alt="Ruang Latihan" />
        <p><strong>Studio Latihan:</strong> Ruangan luas untuk latihan band, grup musik, atau orkestra kecil.</p>
      </div>
      <div class="studio-card">
        <img src="https://storage.googleapis.com/storage-ajaib-prd-platform-wp-artifact/2019/11/bisnis-studio-rekaman.jpeg" alt="Studio Rekaman" />
        <p><strong>Studio Rekaman:</strong> Fasilitas profesional untuk rekaman lagu, podcast, dan mixing audio berkualitas tinggi.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Container Utama */
.tentang {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(to right, #f8f8ff, #f0f0ff);
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
}

/* Judul Section */
.tentang h2 {
  font-size: 32px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #4a00e0;
  text-shadow: 1px 1px 3px rgba(74, 0, 224, 0.2);
}

.tentang h2 span {
  color: #8e2de2;
  font-weight: bold;
}

/* Intro Paragraph */
.intro {
  font-size: 16px;
  margin-bottom: 30px;
  color: #333;
}

/* Galeri Studio */
.studio-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

/* Kartu Studio */
.studio-card {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.studio-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

/* Gambar Studio */
.studio-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.studio-card:hover img {
  transform: scale(1.05);
}

/* Deskripsi Studio */
.studio-card p {
  padding: 15px;
  font-size: 15px;
  line-height: 1.5;
  color: #444;
}
</style>

