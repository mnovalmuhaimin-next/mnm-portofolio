# Website Portofolio Muhammad Noval Muhaimin

Portofolio profesional resmi **Muhammad Noval Muhaimin** — Fullstack Developer, Administrasi Sistem & Data Management berbasis di Surakarta, Jawa Tengah.

🌐 **Domain Produksi:** [mnm-project.site](https://mnm-project.site)  
💼 **LinkedIn:** [linkedin.com/in/m-noval-muhaimin-5716aa2a0](https://linkedin.com/in/m-noval-muhaimin-5716aa2a0)  
📧 **Email:** mnovalmuhaimin@gmail.com  
📱 **WhatsApp:** +62 813-2669-0102

---

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 + Glassmorphism UI
- **Animations:** Motion (Framer Motion v12) + Canvas Confetti
- **Icons:** Lucide React
- **Deployment Target:** Vercel (100% Free Tier)

---

## 📦 Menjalankan di Lokal (Local Development)

```bash
# 1. Clone repository ini
git clone https://github.com/USERNAME-ANDA/portfolio-noval.git
cd portfolio-noval

# 2. Install dependensi
npm install

# 3. Jalankan development server
npm run dev
```

Buka browser Anda di `http://localhost:3000`.

---

## 🚢 Panduan Deploy ke Vercel (100% Gratis)

Project ini telah dilengkapi file konfigurasi `vercel.json` dan siap dideploy langsung ke Vercel tanpa perlu pengaturan tambahan.

### Langkah 1: Push ke GitHub
```bash
git init
git add .
git commit -m "feat: initial commit portofolio Muhammad Noval Muhaimin"
git branch -M main
git remote add origin https://github.com/USERNAME-ANDA/portfolio-noval.git
git push -u origin main
```

### Langkah 2: Deploy di Vercel
1. Buka [https://vercel.com/new](https://vercel.com/new) dan login dengan akun GitHub Anda.
2. Pilih repository `portfolio-noval` lalu klik **Import**.
3. Vercel akan otomatis mengenali preset **Vite**.
4. Klik tombol **Deploy**. Dalam waktu < 1 menit, portofolio Anda sudah online!

### Langkah 3: Hubungkan Domain `mnm-project.site` (Gratis)
1. Di dashboard project Vercel Anda, masuk ke **Settings** > **Domains**.
2. Masukkan domain `mnm-project.site` dan klik **Add**.
3. Di dashboard penyedia domain (registrar) Anda, atur DNS Record berikut:
   - **Type A**: `@` diarahkan ke IP `76.76.21.21`
   - **CNAME**: `www` diarahkan ke `cname.vercel-dns.com`
4. Selesai! Vercel akan menerbitkan sertifikat SSL HTTPS gratis secara otomatis.

---

## 📷 Cara Mengganti Foto Profil

1. Masukkan file foto Anda ke dalam folder `public/`, misalnya `public/foto-noval.jpg`.
2. Buka file `src/components/Hero.tsx`.
3. Cari komentar `<!-- Ganti dengan foto Anda nanti -->` dan ubah state default:
   ```tsx
   const [customPhoto, setCustomPhoto] = useState<string | null>('/foto-noval.jpg');
   ```
4. Atau Anda juga bisa langsung menggunakan tombol **"Unggah Foto Anda"** langsung dari antarmuka web.

---

## 📄 Lisensi
Hak Cipta © 2026 Muhammad Noval Muhaimin. All rights reserved.
