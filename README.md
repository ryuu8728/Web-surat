# 💌 Website Surat Digital Interaktif untuk Elis

Website surat digital interaktif dengan estetika **cute, soft, dreamy pastel pink**, dibuat khusus dari **Ryuu / Robby** untuk **Elis**.

---

## ✨ Fitur & Keunggulan

1. **Welcome Screen yang Hangat & Aesthetic**:
   - Nuansa warna pastel pink yang lembut dengan ornamen bunga, hati, dan sparkle.
   - Efek partikel melayang (floating hearts & sparkles) secara halus di background.
   - Micro-interaction: setiap sentuhan/tap di layar memunculkan semburan mini love & sparkle yang menggemaskan.

2. **Amplop Surat Interaktif (3D CSS Envelope)**:
   - Amplop cute warna pastel pink dengan wax seal berbentuk hati.
   - Label pita tape bertuliskan *"For Elis 💌"*.
   - Animasi buka amplop yang halus: amplop bergoyang lembut, tutup amplop terbuka ke atas, dan kertas surat meluncur keluar dengan efek glow.

3. **Sistem 4 Kartu Surat Digital**:
   - Desain ala kertas surat / stationery berpola halus dengan aksen washi tape di atasnya.
   - Menampilkan 1 surat dalam satu waktu agar pengalaman membaca terasa intim dan personal.
   - **Navigasi Lengkap**:
     - Tombol **Previous** & **Next** yang besar, nyaman, dan ramah sentuhan jari di HP.
     - Di Surat 1, tombol *Previous* dinonaktifkan otomatis.
     - Di Surat 4, tombol *Next* bertransformasi menjadi **"Finish 💗"** dengan animasi glowing pulse.
     - **Gesture Touch Swipe**: Pada smartphone, Elis juga bisa melakukan swipe kiri / swipe kanan untuk berpindah surat!
     - Indikator halaman `1 / 4` sampai `4 / 4` dan 4 titik progres yang bisa diklik.
   - **Transisi Halus**:
     - Klik Next: Surat lama meluncur ke kiri, surat berikutnya masuk dari kanan.
     - Klik Previous: Surat lama meluncur ke kanan, surat sebelumnya masuk dari kiri.

4. **Isi Surat yang Spesial**:
   - **Surat 1**: *"Surat Pertama 💌"* — Sambutan hangat dan manis sebagai pembuka kejutan kecil.
   - **Surat 2**: *"Something for You 🎁"* — Kejutan hadiah untuk akun Roblox Elis!
   - **Surat 3**: *"Jangan Lupa Semangat 🌸"* — Pesan tulus penuh perhatian dan penguat di saat lelah.
   - **Surat 4**: *"One Last Thing... 🤍"* — Janji manis, dukungan tanpa henti, dan teaser *"Coming soon yaa"* untuk kejutan kedua!

5. **Halaman Akhir & Interaksi Penutup**:
   - Konfeti hati bermekaran menyambut akhir surat.
   - Pesan manis: *"That's all for now, Elis 🌸"*, *"Semoga surat kecil ini bisa bikin kamu senyum hari ini."*, dan *"See you on the next surprise... 👀"*.
   - Tombol **Read Again 💌** untuk membaca ulang surat dari awal.
   - Tombol interaktif **Send Smile Back ✨** yang memunculkan hujan hati dan notifikasi toast manis.

6. **Audio & Background Music**:
   - Tombol mengambang di pojok kanan atas: **♪ Music [OFF / ON]**.
   - Default awal **OFF** (sesuai standar browser modern yang memblokir autoplay pada smartphone).
   - **Dual Music Engine**:
     1. Jika kamu menambahkan file lagu MP3 sendiri (`music.mp3`), website otomatis memutar lagu tersebut saat tombol ditekan.
     2. Jika tidak ada file MP3, website memiliki **Built-in Procedural Music Box Synthesizer** (Web Audio API) yang memainkan melodi musik kotak nada lembut nan romantis secara langsung tanpa perlu download asset apapun!

7. **100% Mobile First & Responsive**:
   - Didesain khusus agar nyaman dibuka di layar HP (dari 360px ke atas) maupun di tablet dan desktop.
   - Tidak ada elemen yang terpotong, tanpa zoom, dan ukuran font mudah dibaca.

---

## 📂 Struktur File

```
websitesurat/
├── index.html        # Struktur halaman dan konten
├── style.css         # Styling aesthetic pastel pink, animasi, & responsiveness
├── script.js         # Logika interaktif, data surat, audio box, & partikel
├── music.mp3         # (Opsional) Tempatkan file MP3 lagu favorit jika ingin lagu kustom
└── README.md         # Dokumentasi petunjuk penggunaan
```

---

## 🎨 Cara Menyesuaikan / Edit Isi Surat

Jika di kemudian hari Ryuu / Robby ingin mengubah kata-kata atau menambah surat, buka file `script.js` pada bagian paling atas (`lettersData`):

```javascript
const lettersData = [
  {
    tag: "Surat #1",
    stamp: "💌",
    title: "Surat Pertama 💌",
    paragraphs: [
      "Hallo cantik 💗",
      "Aku punya sesuatu nih buat kamu...",
      // Tambahkan / ubah kalimat di sini
    ],
    signature: "— dari Ryuu / Robby 🌸"
  },
  // ...
];
```

---

## 🎵 Cara Memasang Lagu Sendiri (Opsional)

1. Siapkan file lagu berformat `.mp3` (misalnya lagu romantis / lofi favorit Elis).
2. Ubah nama file menjadi `music.mp3`.
3. Letakkan file tersebut di folder yang sama dengan `index.html`.
4. Selesai! Saat tombol **Music** ditekan, lagu tersebut akan otomatis dimainkan.

---

## 🚀 Cara Menjalankan & Membuka Website

### 1. Membuka Langsung di Browser
Kamu bisa langsung klik dua kali file `index.html` untuk membukanya di browser (Chrome, Edge, Safari, dll).

### 2. Membuka Menggunakan Local Server (Direkomendasikan untuk uji coba di HP dalam satu Wi-Fi)
Jalankan perintah ini di terminal:
```bash
npx serve
# atau
python -m http.server 8000
```
Lalu buka alamat IP lokal komputer kamu di browser HP (contoh: `http://192.168.1.xxx:8000`).

### 3. Deploy Online Gratis (Agar bisa dikirimkan linknya ke HP Elis)
Kamu bisa mengunggah folder ini secara gratis ke salah satu layanan berikut:
- **Vercel** / **Netlify**: Drag & drop folder `websitesurat`, link langsung jadi dalam hitungan detik.
- **GitHub Pages**: Upload ke repository GitHub lalu aktifkan GitHub Pages di menu Settings.
- **Cloudflare Pages**: Hubungkan repository GitHub kamu.

Setelah dideploy, cukup bagikan link websitenya ke Elis lewat chat! 🌸💌
