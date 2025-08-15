# Portfolio Website - Next.js Migration

Portfolio website migrasi dari HTML static ke Next.js dengan mempertahankan tampilan dan fitur yang sama.

## 🚀 Fitur

- **Home Page**: Halaman utama dengan hero section, about, skills, projects, dan contact
- **Blog Page**: Halaman blog dengan layout Bootstrap dan carousel
- **404 Page**: Halaman error 404 custom
- **Responsive Design**: Tampilan mobile-friendly
- **Modern Architecture**: Menggunakan Next.js dengan komponen terstruktur

## 🛠️ Teknologi

- **Next.js 15**: React framework
- **React**: JavaScript library
- **CSS Custom**: Styling original dipertahankan
- **Bootstrap 5**: Untuk halaman blog
- **Ionicons**: Icon library
- **AOS**: Animate On Scroll library

## 📁 Struktur Project

```
profiles-nextjs/
├── public/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── style.css
│   │   │   └── style-404.css
│   │   ├── images/
│   │   └── js/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   └── page.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── not-found.js
│   │   └── page.js
│   └── components/
│       ├── Header.js
│       └── Footer.js
└── package.json
```

## 🚀 Cara Menjalankan

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Jalankan development server**
   ```bash
   npm run dev
   ```

3. **Buka browser**
   ```
   http://localhost:3000
   ```

## 📱 Halaman

- **Home**: `/` - Halaman utama portfolio
- **Blog**: `/blog` - Halaman blog dengan layout khusus
- **404**: `/404` atau URL tidak ditemukan

## 🎨 Komponen

### Header
- Navigation menu responsive
- Logo dinamis (dark/light)
- Social media links
- Mobile menu dengan hamburger

### Footer
- Copyright information
- Social media links

## 🔧 Customization

- **CSS**: Edit file di `public/assets/css/`
- **Images**: Tambah/edit di `public/assets/images/`
- **Content**: Edit komponen di `src/app/` dan `src/components/`

## 📝 Migration Notes

- ✅ HTML static berhasil dikonversi ke Next.js
- ✅ Semua assets (CSS, images, JS) dipindahkan ke public folder
- ✅ Komponen Header dan Footer dibuat reusable
- ✅ Routing Next.js dikonfigurasi
- ✅ Bootstrap terintegrasi untuk halaman blog
- ✅ Ionicons dan AOS library terintegrasi

## 🚀 Production

Untuk build production:

```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

© 2024 arioveisa. All rights reserved.