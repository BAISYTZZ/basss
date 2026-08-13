# Portfolio Front-End — Ahmad Khubaisy

Portfolio starter yang dibuat dengan HTML, CSS, dan JavaScript vanilla, dengan struktur yang siap dikembangkan menjadi aplikasi full-stack.

## Struktur
- `index.html` — halaman utama
- `assets/css/style.css` — seluruh styling/responsive
- `assets/js/app.js` — interaksi, project data, localStorage
- `database/schema.sql` — schema MySQL untuk projects, messages, dan skills
- `assets/img/` — tempat gambar project/profile

## Menjalankan
1. Ekstrak folder.
2. Buka `index.html` langsung di browser, atau gunakan Live Server.
3. Untuk database, import `database/schema.sql` ke MySQL/MariaDB.
4. Form saat ini menyimpan pesan ke `localStorage` agar frontend langsung bisa dites.
5. Untuk production, buat backend REST API dan arahkan submit form ke endpoint `/api/messages`.

## Upgrade full-stack yang disarankan
- Node.js + Express
- MySQL
- JWT/session authentication untuk admin
- Dashboard admin CRUD projects/skills/messages
- Cloud storage untuk gambar
- Deployment frontend + API + database
