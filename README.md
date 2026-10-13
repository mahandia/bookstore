# MAHANDIA website starter

Template statis HTML/CSS/JavaScript untuk dikembangkan di repositori GitHub Pages MAHANDIA.

## Isi folder
- `index.html` — landing page dengan layanan Bookstore dan Publisher.
- `bookstore.html` — katalog tiga buku digital dengan sampul dummy berbasis CSS.
- `publisher.html` — halaman awal layanan penerbitan.
- `styles.css` — desain responsif akademik-profesional.
- `bookstore.js` — logika tombol pemesanan dan pengalihan ke Google Forms.

## Cara memasang ke repositori yang sudah ada
1. Unduh dan ekstrak ZIP.
2. Cadangkan berkas website yang sekarang.
3. Salin berkas starter ke folder publikasi repositori (umumnya root atau folder `/docs`, sesuai pengaturan GitHub Pages).
4. Jika repositori sudah punya `index.html` atau `styles.css`, tinjau dan gabungkan perubahan sebelum menimpa.
5. Uji halaman melalui GitHub Pages.

## Menghubungkan Google Forms
1. Buat Google Form untuk pemesanan. Disarankan memuat: nama lengkap, email akun Google yang akan menerima buku, nomor WhatsApp, buku yang dipilih, dan persetujuan kebijakan privasi.
2. Hubungkan form ke Google Sheets melalui tab **Respons** → **Tautkan ke Spreadsheet**.
3. Gunakan menu **Dapatkan link yang sudah diisi sebelumnya** pada Google Forms untuk mengetahui parameter field buku. Isi URL form dan `entry ID` pada bagian awal `bookstore.js`:

```js
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/FORM_ID/viewform";
const FORM_BOOK_FIELD_ENTRY = "entry.123456789";
```

Pastikan pertanyaan buku pada form memakai pilihan yang cocok dengan judul yang ada di katalog. Uji setiap tombol setelah konfigurasi.

## Catatan WhatsApp
Pada `publisher.html`, ganti nomor contoh `6280000000000` dengan nomor WhatsApp bisnis MAHANDIA (format internasional, angka saja). Untuk tindak lanjut pesanan, tautan WhatsApp bisa ditambahkan pada halaman konfirmasi Google Forms atau dikirim oleh tim setelah memeriksa Google Sheets.

## Keamanan buku digital
Jangan letakkan PDF berbayar di repositori publik, folder publik GitHub Pages, atau tautan yang hanya disembunyikan. Google Forms/Sheets adalah sarana pencatatan pesanan, bukan sistem akses berbayar. Untuk tahap manual, verifikasi pembayaran lalu kirim file melalui kanal privat ke email yang sudah diverifikasi. Jika perlu login dan akses ulang otomatis, tambahkan backend/authentication dan penyimpanan privat.

## Publikasi GitHub Pages
Di GitHub: **Settings → Pages**, pilih sumber publikasi yang sesuai (branch dan folder root atau `/docs`). Setelah deployment selesai, uji halaman di desktop dan ponsel. Nama file memakai huruf kecil agar tautan relatif tetap konsisten.
