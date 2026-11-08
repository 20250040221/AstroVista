# LAPORAN PERANCANGAN ANTARMUKA PERANGKAT LUNAK
## PROJECT DOCUMENTATION: ASTROVISTA
### Astronomy Discovery & Observation Platform

---

**Mata Kuliah:** Rekayasa Perangkat Lunak (Software Engineering)  
**Pertemuan / Tugas:** Sesi 7 – Perancangan Antarmuka Perangkat Lunak (Software Interface Design)  
**Perguruan Tinggi:** Universitas Nusa Putra  
**Dosen Pengampu:** Anggun Fergina, M.Kom.  
**Jenis Tugas:** Tugas Individu (Individual Project)  
**Waktu Penyusunan:** Semester Ganjil 2026/2027  

---

## DAFTAR ISI

1. [BAB I: PENDAHULUAN (INTRODUCTION)](#bab-i-pendahuluan)
   - 1.1 Latar Belakang
   - 1.2 Rumusan Masalah
   - 1.3 Tujuan Proyek
   - 1.4 Ruang Lingkup dan Batasan
2. [BAB II: ANALISIS PENGGUNA (USER ANALYSIS)](#bab-ii-analisis-pengguna)
   - 2.1 Identifikasi Karakteristik Pengguna
   - 2.2 Persona Pengguna
   - 2.3 Skenario Penggunaan (User Scenarios)
3. [BAB III: ANALISIS TUGAS (TASK ANALYSIS)](#bab-iii-analisis-tugas)
   - 3.1 Hierarchical Task Analysis (HTA)
   - 3.2 Alur Kerja Observasi (Observation Workflow)
4. [BAB IV: ANALISIS LINGKUNGAN (ENVIRONMENT ANALYSIS)](#bab-iv-analisis-lingkungan)
   - 4.1 Kondisi Operasional Lapangan (Nighttime Dark Sky)
   - 4.2 Fisiologi Penglihatan Gelap (Scotopic Vision & Rhodopsin)
   - 4.3 Kendala Perangkat dan Jaringan
5. [BAB V: KEPUTUSAN DESAIN ANTARMUKA (UI DESIGN DECISIONS)](#bab-v-keputusan-desain-antarmuka)
   - 5.1 Teori Warna & Palet Visual (Color Palette)
   - 5.2 Tipografi dan Hirarki Visual (Typography Hierarchy)
   - 5.3 Penerapan Glassmorphism dan Efek Kedalaman
   - 5.4 Sistem Ikonografi dan Aset Grafis
6. [BAB VI: PENERAPAN 10 PRINSIP PERANCANGAN ANTARMUKA (DESIGN PRINCIPLES)](#bab-vi-penerapan-10-prinsip-perancangan-antarmuka)
   - 6.1 Consistency (Konsistensi)
   - 6.2 Simplicity (Kesederhanaan)
   - 6.3 Visibility (Visibilitas Status)
   - 6.4 Feedback (Umpan Balik)
   - 6.5 User Control & Freedom (Kontrol Pengguna)
   - 6.6 Accessibility (Aksesibilitas)
   - 6.7 Easy Navigation (Kemudahan Navigasi)
   - 6.8 Error Prevention (Pencegahan Kesalahan)
   - 6.9 Readability (Keterbacaan)
   - 6.10 User-Centered Design (Desain Berpusat pada Pengguna)
7. [BAB VII: STRATEGI DESAIN RESPONSIF (RESPONSIVE DESIGN)](#bab-vii-strategi-desain-responsif)
   - 7.1 Sistem Grid dan Breakpoint Bootstrap
   - 7.2 Adaptasi Antarmuka Mobile (Android Smartphone)
   - 7.3 Pengujian Fluiditas Layout & Pencegahan Horizontal Overflow
8. [BAB VIII: IMPLEMENTASI TEKNIS (IMPLEMENTATION)](#bab-viii-implementasi-teknis)
   - 8.1 Struktur Proyek dan Berkas
   - 8.2 Arsitektur Kode HTML5 Semantik
   - 8.3 Desain Sistem CSS3 dan Custom Properties
   - 8.4 Logika Pemrograman Vanilla JavaScript & LocalStorage CRUD
9. [BAB IX: PENGUJIAN DAN VALIDASI (TESTING & VALIDATION)](#bab-ix-pengujian-dan-validasi)
   - 9.1 Metodologi Pengujian
   - 9.2 Matriks Pengujian Fungsional (Test Matrix)
   - 9.3 Hasil Uji Responsivitas dan Kompatibilitas
10. [BAB X: KESIMPULAN DAN PENGEMBANGAN LANJUTAN (CONCLUSION)](#bab-x-kesimpulan)
    - 10.1 Kesimpulan
    - 10.2 Rencana Pengembangan Lanjutan

---

<div style="page-break-after: always;"></div>

## BAB I: PENDAHULUAN

### 1.1 Latar Belakang
Perkembangan ilmu astronomi dan minat publik terhadap eksplorasi luar angkasa mengalami peningkatan signifikan seiring diluncurkannya instrumen-instrumen antariksa modern seperti Teleskop Luar Angkasa James Webb (JWST) dan misi eksplorasi Artemis. Meskipun demikian, bagi mahasiswa ilmu komputer, pemula, dan komunitas astronomi amatir, akses terhadap antarmuka perangkat lunak yang memfasilitasi eksplorasi benda langit sekaligus pencatatan observasi lapangan secara terstruktur masih sangat terbatas.

Sebagian besar portal astronomi yang tersedia saat ini memiliki antarmuka yang padat data (cluttered), tidak ramah layar sentuh ponsel di lapangan malam hari, atau memerlukan ketergantungan server backend yang rumit hanya untuk menyimpan catatan jurnal pengamatan pribadi. Berdasarkan silabus mata kuliah **Rekayasa Perangkat Lunak (Session 7 – Software Interface Design)** di **Universitas Nusa Putra**, proyek **AstroVista** dirancang untuk menghadirkan solusi antarmuka web modern yang menerapkan sepuluh prinsip dasar Human-Computer Interaction (HCI) secara holistik.

### 1.2 Rumusan Masalah
1. Bagaimana merancang antarmuka astronomi multi-halaman yang konsisten, bersih, dan meminimalkan beban kognitif pengguna?
2. Bagaimana mengimplementasikan tema visual ruang angkasa (dark space theme) yang estetik tanpa mengorbankan keterbacaan (readability) dan aksesibilitas (accessibility) di kondisi malam hari?
3. Bagaimana membangun mekanisme penyimpanan data observasi lokal (client-side persistence) menggunakan `localStorage` dengan fungsionalitas CRUD lengkap tanpa memerlukan backend database?
4. Bagaimana memastikan responsivitas penuh pada beragam ukuran layar mulai dari desktop beresolusi tinggi hingga smartphone Android di lapangan?

### 1.3 Tujuan Proyek
- Menghasilkan aplikasi web astronomi multi-halaman yang utuh (7 halaman lengkap): Home Dashboard, Solar System Explorer, Sky Events, Observation Planner, Observation Journal, Astronomy Library, dan About Project.
- Menerapkan prinsip-prinsip desain antarmuka perangkat lunak: konsistensi, kesederhanaan, visibilitas, umpan balik, kontrol pengguna, aksesibilitas, navigasi mudah, pencegahan galat, keterbacaan, dan pendekatan berpusat pada pengguna.
- Memenuhi batasan teknologi perkuliahan: hanya menggunakan HTML5, CSS3, Bootstrap 5.3, Vanilla JavaScript, Bootstrap Icons, dan Google Fonts.
- Menyediakan dokumentasi akademik yang komprehensif untuk evaluasi tugas perkuliahan.

### 1.4 Ruang Lingkup dan Batasan
- Aplikasi berjalan sepenuhnya di sisi klien (client-side) tanpa ketergantungan pada backend framework seperti Node.js Express, Django, Laravel, React, Vue, atau Angular.
- Data persistensi jurnal observasi disimpan pada memori lokal peramban (`window.localStorage`).
- Data jadwal fenomena langit pada halaman Sky Events disajikan sebagai model edukatif representatif (sample illustrative data) dan tidak diklaim sebagai live astronomical feed real-time.

---

<div style="page-break-after: always;"></div>

## BAB II: ANALISIS PENGGUNA (USER ANALYSIS)

### 2.1 Identifikasi Karakteristik Pengguna
Berdasarkan konteks penggunaan platform astronomi, pengguna dikelompokkan ke dalam tiga kategori utama:
1. **Pengguna Pemula (Novice / Beginner Stargazers):** Mahasiswa atau masyarakat awam yang baru memiliki minat mengamati langit malam menggunakan mata telanjang atau binokular. Membutuhkan panduan orientasi langit yang sederhana, tidak membingungkan, dan bebas dari rumus-rumus rumit.
2. **Mahasiswa Akademik (Academic Astronomy Students):** Mahasiswa program studi teknik atau sains yang mengambil mata kuliah astronomi/fisika. Membutuhkan data spesifikasi planet yang akurat (diameter, massa, gravitasi, jarak AU, periode orbit) serta alat pembanding parameter antar-planet.
3. **Pengamat Lapangan & Astrofotografer Amatir (Amateur Astrophotographers):** Pengamat yang menggunakan teleskop (refraktor, reflektor, atau katadioptrik) dan membutuhkan formulir terstruktur untuk merencanakan sesi, mencatat kualitas seeing atmosferik, jenis optik, koordinat pengamatan, serta mencadangkan data jurnal ke format JSON.

### 2.2 Persona Pengguna

#### Persona 1: Rian Pratama (Beginner Stargazer)
- **Usia:** 19 Tahun
- **Peran:** Mahasiswa Semester 1 Teknik Informatika, Universitas Nusa Putra
- **Instrumen:** Binokular Porro Prism 10x50
- **Tujuan:** Mengetahui jadwal hujan meteor dan kenampakan bulan purnama tanpa perlu memahami koordinat ekuatorial yang rumit.
- **Kebutuhan UI:** Antarmuka dengan label kategori yang jelas (badge berwarna), tips observasi praktis, dan data panduan yang mudah dipahami.

#### Persona 2: Siti Nurhaliza (Undergraduate Astronomy Student)
- **Usia:** 21 Tahun
- **Peran:** Mahasiswa Fisika / Komputasi Sains
- **Instrumen:** Perangkat lunak simulasi dan buku ajar astrofisika
- **Tujuan:** Menganalisis karakteristik fisik dan atmosfer delapan planet dalam tata surya untuk tugas kuliah.
- **Kebutuhan UI:** Alat komparasi antar-planet berdampingan (side-by-side comparison modal), rincian misi wahana antariksa, dan data numerik yang terverifikasi.

#### Persona 3: Hendra Wijaya (Amateur Astrophotographer)
- **Usia:** 28 Tahun
- **Peran:** Praktisi IT & Pengamat Langit Lapangan
- **Instrumen:** Teleskop Schmidt-Cassegrain 8 Inci dengan Motorized GoTo Mount
- **Tujuan:** Merencanakan sesi pemotretan nebula/planet, mencatat kondisi seeing skala Bortle di lokasi basecamp pegunungan, dan mengekspor jurnal catatan ke komputer kerja.
- **Kebutuhan UI:** Formulir dengan live card preview, skala seeing 1-5, validasi cepat, dan fitur ekspor data JSON lokal.

### 2.3 Skenario Penggunaan (User Scenarios)
- **Skenario A (Perencanaan Cepat dari Event Langit):** Pengguna membuka halaman *Sky Events*, menemukan kartu "Perseid Meteor Shower Peak", menekan tombol *"Add to My Planner"*, sistem secara otomatis memindahkan pengguna ke halaman *Planner* dengan data judul, target, dan tanggal yang sudah terisi otomatis.
- **Skenario B (Pencatatan dan Pembaruan Jurnal Lapangan):** Pengguna mengisi formulir pengamatan pada halaman *Planner*, menekan simpan, melihat notifikasi toast hijau, kemudian beralih ke *Journal* untuk meninjau riwayat observasi, mengedit catatan seeing, atau mengekspor seluruh rekaman menjadi berkas JSON untuk cadangan arsip.

---

<div style="page-break-after: always;"></div>

## BAB III: ANALISIS TUGAS (TASK ANALYSIS)

### 3.1 Hierarchical Task Analysis (HTA)
Hierarchical Task Analysis memecah aktivitas pengguna platform menjadi sub-tugas yang terstruktur:

```
0. Mengelola Aktivitas Observasi Astronomi pada AstroVista
   1. Mengeksplorasi Objek Tata Surya (Solar System)
      1.1 Menavigasi ke halaman Solar System
      1.2 Menyaring planet berdasarkan kategori (Terrestrial, Gas, Ice, Dwarf)
      1.3 Mencari planet berdasarkan kata kunci nama atau karakteristik
      1.4 Membuka modal rincian spesifikasi planet (diameter, orbit, atmosfer, misi)
      1.5 Menggunakan alat komparasi planet (membandingkan 2 planet berdampingan)
   2. Menelusuri Fenomena Langit (Sky Events)
      2.1 Membuka halaman Sky Events
      2.2 Memeriksa siklus fase bulan pada visual synodic sequence
      2.3 Menyaring fenomena (Hujan Meteor, Gerhana, Konjungsi, Oposisi)
      2.4 Membaca panduan visibilitas dan waktu pengamatan optimal
      2.5 Memindahkan parameter event ke formulir planner
   3. Merencanakan Sesi Observasi (Observation Planner)
      3.1 Mengisi data sesi (Judul, Objek Langit, Kategori, Tanggal, Jam, Lokasi, Alat)
      3.2 Memilih preset siap pakai (Jupiter, Orion, Perseid) jika diperlukan
      3.3 Meninjau live synchronous preview card
      3.4 Menjalankan validasi input formulir
      3.5 Menyimpan sesi ke dalam memori peramban (localStorage)
   4. Mengelola Jurnal Observasi (Observation Journal)
      4.1 Meninjau metrik ringkasan (Total observasi, target unik, instrumen utama)
      4.2 Mencari dan menyaring arsip berdasarkan kata kunci dan kategori
      4.3 Mengurutkan arsip berdasarkan tanggal (Terbaru / Terlama)
      4.4 Memperbarui catatan melalui modal sunting (Edit modal)
      4.5 Menghapus catatan dengan dialog konfirmasi keamanan
      4.6 Mengunduh cadangan arsip dalam format JSON atau mencetak laporan (Print PDF)
   5. Mengakses Repositori Pengetahuan Astronomi (Library)
      5.1 Memilih kategori materi edukasi
      5.2 Mencari artikel berdasarkan topik astrofisika
      5.3 Membaca artikel lengkap dalam modal reader interaktif
```

### 3.2 Alur Kerja Observasi (Observation Workflow)
Alur kerja dirancang membentuk siklus berkelanjutan: **Eksplorasi (Discovery)** $\rightarrow$ **Perencanaan (Planning)** $\rightarrow$ **Pengamatan & Pencatatan (Recording)** $\rightarrow$ **Pengelolaan Data (Archiving & Analysis)** $\rightarrow$ **Pengayaan Wawasan (Learning)**.

---

<div style="page-break-after: always;"></div>

## BAB IV: ANALISIS LINGKUNGAN (ENVIRONMENT ANALYSIS)

### 4.1 Kondisi Operasional Lapangan (Nighttime Dark Sky)
Aplikasi astronomi memiliki konteks lingkungan operasional yang unik dibandingkan aplikasi web perkantoran pada umumnya. Pengamatan astronomi sering kali dilakukan di lingkungan luar ruangan (outdoor) berkondisi gelap pekat—seperti puncak gunung, area perkemahan terpencil, atau halaman belakang rumah yang minim penerangan buatan.

### 4.2 Fisiologi Penglihatan Gelap (Scotopic Vision & Rhodopsin)
Mata manusia memerlukan waktu adaptasi antara 20 hingga 30 menit dalam kegelapan agar sel batang (rod cells) pada retina dapat memproduksi pigmen peka cahaya yang disebut **rhodopsin**. Paparan terhadap cahaya putih terang (white glare) dengan intensitas tinggi dari layar komputer atau ponsel dapat menghancurkan adaptasi malam ini dalam hitungan detik.

Oleh karena itu, antarmuka AstroVista menerapkan prinsip:
- **Latar Belakang Obsidian Luar Angkasa:** Warna dasar `#070b19` dan `#0b1329` yang menyerap cahaya dan tidak menyilaukan mata pengamat.
- **Aksen Dingin Terkontrol:** Penggunaan warna biru elektrik (`#38bdf8`) dan ungu lembut (`#818cf8`) dengan pencahayaan halus (subtle glowing effect) yang tidak merusak sensitivitas retina.
- **Ketiadaan Warna Putih Mentah:** Elemen latar belakang tidak pernah menggunakan putih murni (`#ffffff`), melainkan permukaan semi-transparan dengan efek blur kaca (glassmorphism).

### 4.3 Kendala Perangkat dan Jaringan
Di lokasi pengamatan gelap (dark-sky sites), jaringan internet sering kali lemah atau tidak stabil. Desain arsitektur AstroVista yang mengandalkan **Vanilla JavaScript** dan **localStorage** menjamin bahwa seluruh data observasi pengguna dapat dicatat, disunting, dan dihapus secara mandiri tanpa memerlukan koneksi ke database eksternal.

---

<div style="page-break-after: always;"></div>

## BAB V: KEPUTUSAN DESAIN ANTARMUKA (UI DESIGN DECISIONS)

### 5.1 Teori Warna & Palet Visual (Color Palette)
Pemilihan palet warna AstroVista menggabungkan keindahan estetika luar angkasa dengan standar kontras WCAG:

| Token Desain | Nilai Heksadesimal | Peran Antarmuka |
| :--- | :--- | :--- |
| `--bg-dark` | `#070B19` | Kanvas latar belakang utama (deep space obsidian). |
| `--bg-card` | `rgba(13, 22, 42, 0.72)` | Permukaan kartu dengan efek blur kaca (backdrop blur 14px). |
| `--accent-cyan` | `#38BDF8` | Aksen biru elektrik untuk tautan aktif, tombol fokus, dan highlight target. |
| `--accent-indigo` | `#6366F1` | Gradien primer dan batas kartu bercahaya (subtle border glow). |
| `--accent-purple` | `#A855F7` | Penanda fenomena kosmik dan fase lunar. |
| `--accent-gold` | `#F59E0B` | Peringatan observasi, rating seeing, dan bintang. |
| `--text-white` | `#F8FAFC` | Tipografi primer berkontras tinggi (rasio kontras > 15:1 terhadap latar). |
| `--text-muted` | `#94A3B8` | Tipografi sekunder untuk deskripsi dan label penjelasan. |

### 5.2 Tipografi dan Hirarki Visual
AstroVista mengombinasikan dua jenis huruf dari Google Fonts:
- **Space Grotesk (Display Font):** Digunakan untuk logo, heading (H1–H5), metrik numerik, dan badge telemetri. Huruf ini memberikan karakter ilmiah, futuristik, dan presisi tinggi seperti pada antarmuka observatorium ruang angkasa modern.
- **Inter (Body Font):** Digunakan untuk seluruh paragraf, formulir input, dan modal bacaan. Karakter x-height yang proporsional pada Inter memastikan keterbacaan teks ilmiah yang panjang tanpa melelahkan mata.
- **JetBrains Mono (Monospace):** Digunakan khusus untuk penunjuk jam UTC, tanggal Julian (JD), dan kode telemetri pada cosmic ticker bar.

### 5.3 Penerapan Glassmorphism dan Efek Kedalaman
Teknik glassmorphism diterapkan secara disiplin dan tidak berlebihan:
- Nilai `backdrop-filter: blur(14px)` dan batas semi-transparan `1px solid rgba(99, 102, 241, 0.18)` menciptakan pemisahan visual bertingkat (visual hierarchy) tanpa memerlukan kontras warna yang tajam.
- Efek hover pada kartu menggunakan translasi mikro (`transform: translateY(-4px)`) disertai pendaran halus (`box-shadow: 0 12px 30px -10px rgba(99, 102, 241, 0.3)`) untuk memberikan kejelasan status interaktivitas.

### 5.4 Sistem Ikonografi dan Aset Grafis
- **Ikon Vektor Standar:** Menggunakan Bootstrap Icons (1.11.3) yang ringan dan kompatibel secara universal.
- **Logo Vektor Khusus (`images/logo.svg`):** Dibuat mandiri dengan format SVG murni, menampilkan lensa teleskop kosmik bergradien cyan-indigo yang dikelilingi orbit satelit dan kilauan bintang pulsar.
- **Favicon Vektor (`images/favicon.svg`):** Menampilkan simbol astronomi yang tajam pada tab peramban.

---

<div style="page-break-after: always;"></div>

## BAB VI: PENERAPAN 10 PRINSIP PERANCANGAN ANTARMUKA

Berikut adalah evaluasi rinci mengenai bagaimana kesepuluh prinsip antarmuka perangkat lunak diimplementasikan pada AstroVista:

### 6.1 Consistency (Konsistensi)
- **Struktur Halaman Seragam:** Ketujuh halaman mengadopsi struktur tata letak yang identik: Cosmic Ticker Bar di posisi paling atas, Sticky Navigation Bar dengan urutan menu tetap, Hero/Banner pengantar dengan badge berkilau, Kontainer konten utama berbasis grid Bootstrap, dan Footer multi-kolom yang konsisten.
- **Konsistensi Komponen UI:** Gaya tombol primer (`.btn-astro-primary`), tombol sekunder (`.btn-astro-outline`), kartu informasi (`.card-astro`), dan badge spesifikasi (`.spec-pill`) menggunakan kelas CSS terpusat pada `css/style.css`.

### 6.2 Simplicity (Kesederhanaan)
- **Bebas dari Ornamen Kartun Kekanak-kanakan:** Tampilan visual mempertahankan kesan instrumen ilmiah profesional yang elegan (clean & scientific).
- **Progressive Disclosure:** Informasi mendalam seperti rincian atmosfer planet, tabel komparasi, dan artikel ilmiah panjang disembunyikan di balik modal dialog interaktif, sehingga halaman utama tetap bersih dan mudah dipindai (scannable).

### 6.3 Visibility (Visibilitas Status Sistem)
- **Cosmic Telemetry Bar:** Di bagian atas setiap halaman, jam real-time UTC, tanggal kalender, dan estimasi waktu Julian Date (JD) berdetik setiap detik dengan indikator titik hijau berdenyut (`.ticker-dot`), mengomunikasikan bahwa stasiun AstroVista aktif dan beroperasi normal.
- **Status Navigasi Aktif:** Menu navigasi yang sedang dibuka secara otomatis ditandai dengan latar belakang terang, batas cyan, dan garis aksen bercahaya di bawah teks link (`.nav-link-astro.active`).

### 6.4 Feedback (Umpan Balik Cepat & Jelas)
- **Sistem Notifikasi Toast:** Setiap kali pengguna menyimpan observasi baru, memperbarui entri, menghapus data, atau menyalin parameter, sistem menampilkan toast notifikasi dinamis pada sudut kanan bawah layar selama 4,5 detik.
- **Respon Hover & Klik:** Tombol dan kartu memberikan umpan balik kinetik visual saat kursor diarahkan, mengonfirmasi kemampuan interaksi elemen.

### 6.5 User Control & Freedom (Kontrol dan Kebebasan Pengguna)
- **Kemampuan Penuh Mengedit & Menghapus:** Pengguna memiliki kontrol penuh terhadap riwayat jurnal pribadinya. Data dapat disunting kapan saja melalui modal *Edit*, atau dihapus secara permanen.
- **Reset Formulir:** Tombol *"Reset Form"* memungkinkan pengosongan input seketika tanpa perlu memuat ulang halaman.
- **Ekspor Data Mandiri:** Tombol *"Export JSON"* memberikan kebebasan pengguna untuk mengunduh salinan data observasi ke komputer lokal mereka.

### 6.6 Accessibility (Aksesibilitas)
- **Kepatuhan Kontras Warna:** Teks primer menggunakan `#f8fafc` dengan rasio kontras melebihi 15:1 terhadap latar belakang `#070b19`, melampaui standar WCAG AAA.
- **Semantik HTML:** Penggunaan elemen semantik `<nav>`, `<main>`, `<header>`, `<section>`, dan `<footer>` memudahkan pembaca layar (screen readers).
- **Dukungan Keyboard:** Seluruh tautan, input formulir, dan tombol modal dapat dijangkau dan dioperasikan menggunakan tombol `Tab`, `Enter`, dan `Space`.

### 6.7 Easy Navigation (Kemudahan Navigasi)
- **Sticky Navbar:** Menu navigasi tetap melayang di bagian atas layar saat pengguna menggulir ke bawah, dilengkapi efek peredupan kaca saat halaman digulir (`.navbar-astrovista.scrolled`).
- **Floating Back-to-Top Button:** Tombol panah kembali ke atas otomatis muncul ketika posisi gulir melewati 350 piksel, memungkinkan pengguna kembali ke puncak halaman dengan animasi halus (smooth scroll).
- **Tautan Silang Cerdas (Cross-Linking):** Menekan tombol *"Add to Planner"* pada kartu fenomena langit di halaman *Sky Events* langsung mengarahkan pengguna ke halaman *Planner* dengan data judul, target, dan tanggal yang terisi otomatis melalui URL query parameters.

### 6.8 Error Prevention & Recovery (Pencegahan & Pemulihan Kesalahan)
- **Validasi Formulir Real-Time:** Formulir perencana observasi menerapkan validasi constraint HTML5 dan penanganan kelas `.was-validated`. Bidang wajib (seperti Judul, Objek Langit, Lokasi, dan Tanggal) ditandai dengan jelas. Jika terdapat kolom kosong, sistem mencegah penyimpanan dan memberikan peringatan toast merah.
- **Dialog Konfirmasi Penghapusan:** Penghapusan catatan jurnal dilindungi dengan dialog konfirmasi (`window.confirm`), mencegah terjadinya kehilangan data yang tidak disengaja.

### 6.9 Readability (Keterbacaan Visual)
- **Hierarki Tipografi Terukur:** Menggunakan fungsi `clamp()` CSS untuk ukuran judul utama, memastikan teks tetap proporsional dan tidak mengalami pemenggalan janggal pada layar smartphone maupun desktop 4K.
- **Pills Spesifikasi Terkotak:** Parameter ilmiah (jarak AU, diameter, periode orbit, gravitasi) dikelompokkan ke dalam kotak-kotak kecil (`.spec-pill`) sehingga memudahkan pengguna menyerap data kuantitatif secara cepat.

### 6.10 User-Centered Design (Desain Berpusat Pengguna)
- **Sesuai Model Mental Astronom Amatir:** Struktur aplikasi memetakan alur pemikiran riil pengamat langit: melihat apa yang ada di langit (Planets & Events) $\rightarrow$ merencanakan persiapan alat dan lokasi (Planner) $\rightarrow$ mencatat hasil observasi saat di lapangan (Journal) $\rightarrow$ memperdalam teori sains (Library).

---

<div style="page-break-after: always;"></div>

## BAB VII: STRATEGI DESAIN RESPONSIF (RESPONSIVE DESIGN)

### 7.1 Sistem Grid dan Breakpoint Bootstrap
AstroVista memanfaatkan sistem 12-kolom Bootstrap 5.3 dengan breakpoint standar:
- **Extra Small (< 576px):** Tata letak satu kolom untuk kartu dan formulir, font hero disesuaikan menjadi 2.1rem.
- **Small ( $\ge$ 576px):** Elemen counter statistik ditampilkan dalam grid 2 kolom.
- **Medium ( $\ge$ 768px):** Kartu jurnal dan perencana beralih ke tata letak 2 kolom; telemetri ticker menampilkan data kalender lengkap.
- **Large ( $\ge$ 992px):** Menu navigasi horizontal terbuka penuh; kartu planet ditampilkan dalam format 4 kolom per baris; formulir perencana dan live card preview ditampilkan berdampingan (7 kolom : 5 kolom).
- **Extra Large ( $\ge$ 1200px):** Tata letak maksimal dengan ruang nafas (margin & padding) yang optimal.

### 7.2 Adaptasi Antarmuka Mobile (Android Smartphone)
Pengujian ekstensif dilakukan untuk menjamin pengalaman optimal pada smartphone Android:
- Tombol navigasi hamburger (`.navbar-toggler-astro`) membuka menu offcanvas/collapse dengan latar belakang gelap pekat semi-transparan (`rgba(7, 11, 25, 0.98)`), memastikan menu tidak menutupi atau bertabrakan dengan elemen hero di belakangnya.
- Target sentuh (touch targets) untuk seluruh tombol filter, tab, dan tautan memiliki tinggi minimum 44px sesuai rekomendasi pedoman antarmuka seluler Google Material Design.

### 7.3 Pengujian Fluiditas Layout & Pencegahan Horizontal Overflow
Kode CSS global menyertakan aturan proteksi:
```css
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}
*, *::before, *::after {
  box-sizing: border-box;
}
```
Hasil verifikasi menunjukkan **nol scrollbar horizontal (zero horizontal overflow)** pada seluruh viewport mulai dari lebar 360px hingga 2560px.

---

<div style="page-break-after: always;"></div>

## BAB VIII: IMPLEMENTASI TEKNIS (IMPLEMENTATION)

### 8.1 Struktur Proyek dan Berkas
Proyek diorganisasikan dengan struktur direktori yang bersih dan modular:
```
AstroVista/
├── index.html                  # Halaman 1: Dashboard Beranda
├── planets.html                # Halaman 2: Penjelajah Tata Surya
├── sky-events.html             # Halaman 3: Kalender Fenomena Langit
├── planner.html                # Halaman 4: Perencana Sesi Pengamatan
├── journal.html                # Halaman 5: Jurnal Observasi Pribadi
├── library.html                # Halaman 6: Perpustakaan Edukasi Astronomi
├── about.html                  # Halaman 7: Tentang Proyek & Prinsip Antarmuka
├── css/
│   └── style.css               # Desain Sistem & Master Stylesheet CSS3
├── js/
│   └── script.js               # Pengontrol Aplikasi Klien & Basis Data JavaScript
├── images/
│   ├── logo.svg                # Logo Vektor AstroVista
│   └── favicon.svg             # Ikon Tab Peramban
├── README.md                   # Panduan Repositori & Ringkasan Proyek
└── PROJECT_DOCUMENTATION.md    # Dokumen Laporan Lengkap Desain Antarmuka
```

### 8.2 Arsitektur Kode HTML5 Semantik
Setiap halaman mengimplementasikan struktur semantik berstandar W3C:
- Menggunakan deklarasi `<!DOCTYPE html>` dan atribut bahasa `<html lang="en">`.
- Tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">` terpasang di seluruh berkas untuk menjamin rendering responsif.
- Pemisahan wilayah kerja menggunakan tag `<header>`, `<nav>`, `<main>`, `<section>`, dan `<footer>`.

### 8.3 Desain Sistem CSS3 dan Custom Properties
Seluruh token desain dikelola melalui CSS Custom Properties di `:root`:
- Mengatur variabel warna, gradien cahaya kosmik, jenis font, ketebalan border, dan durasi transisi.
- Menggunakan efek bintang latar belakang yang digenerasi murni melalui CSS radial-gradients bertingkat, mengeliminasi kebutuhan berkas gambar latar belakang yang berat dan mempercepat proses rendering.

### 8.4 Logika Pemrograman Vanilla JavaScript & LocalStorage CRUD
Modul `js/script.js` dibangun menggunakan objek pengendali `AstroVista` dengan fungsionalitas modular:
- **CREATE (Simpan Baru):** Mengambil nilai input dari formulir `planner.html`, membuat objek observasi dengan ID unik `obs-${Date.now()}`, memasukkannya ke dalam larik data, dan menyimpan ke `localStorage` via `JSON.stringify()`.
- **READ (Tampilkan Data):** Mengambil larik data dari `localStorage.getItem("astrovista_observations")`, memparsing melalui `JSON.parse()`, memperbarui metrik statistik ringkasan, dan merender kartu-kartu observasi secara dinamis ke dalam elemen `#journalGrid`.
- **UPDATE (Perbarui Data):** Menampilkan modal penyuntingan dengan data entri terpilih, menangkap perubahan pengguna, memperbarui indeks yang sesuai dalam larik data, dan menyimpan kembali ke `localStorage`.
- **DELETE (Hapus Data):** Menghapus objek dengan ID tertentu setelah mendapatkan konfirmasi pengguna, lalu merender ulang tampilan secara instan.
- **EXPORT JSON:** Membungkus seluruh catatan observasi menjadi Data URI string (`data:text/json;charset=utf-8,...`) dan memicu proses unduh otomatis berkas `.json` pada peramban.

---

<div style="page-break-after: always;"></div>

## BAB IX: PENGUJIAN DAN VALIDASI (TESTING & VALIDATION)

### 9.1 Metodologi Pengujian
Pengujian dilakukan melalui dua pendekatan:
1. **Uji Fungsionalitas Otomatis:** Menggunakan skrip pengujian HTTP berbasis Node.js untuk memverifikasi ketersediaan seluruh berkas, tautan navigasi, dan integritas respon HTTP 200 OK.
2. **Uji Antarmuka Manual:** Menguji alur pengguna (user workflow) pada desktop browser, laptop, tablet, dan smartphone Android (Google Chrome Mobile DevTools).

### 9.2 Matriks Pengujian Fungsional (Test Matrix)

| ID Uji | Fitur / Komponen | Tindakan Pengujian | Hasil yang Diharapkan | Status |
| :---: | :--- | :--- | :--- | :---: |
| **UT-01** | Navigasi Antar-Halaman | Mengklik tautan Home, Solar System, Sky Events, Planner, Journal, Library, dan About di setiap halaman. | Berpindah halaman dengan lancar tanpa tautan rusak (404). Tautan aktif ditandai dengan badge bercahaya. | **BERHASIL** |
| **UT-02** | Telemetri Jam Real-time | Memantau Cosmic Ticker Bar pada bagian atas halaman. | Jam UTC bertambah setiap detik, tanggal akurat, dan Julian Date terkalkulasi secara tepat. | **BERHASIL** |
| **UT-03** | Penyaringan Planet | Mengklik tombol filter "Terrestrial", "Gas", "Ice", dan "Dwarf" pada `planets.html`. | Kartu planet yang relevan ditampilkan secara instan sesuai kategori yang dipilih. | **BERHASIL** |
| **UT-04** | Pencarian Planet | Mengetik "rings" atau "saturn" pada kolom pencarian planet. | Hanya planet yang memiliki kecocokan nama atau deskripsi yang ditampilkan. | **BERHASIL** |
| **UT-05** | Modal Rincian Planet | Mengklik tombol "Explore Details" pada kartu planet Jupiter. | Modal terbuka menampilkan model visual, diameter, massa, atmosfer, dan daftar misi penjelajahan. | **BERHASIL** |
| **UT-06** | Komparasi Dua Planet | Membuka modal komparasi dan memilih Earth vs Mars. | Tabel matriks komparasi berdampingan diperbarui secara otomatis menampilkan rasio ukuran dan orbit. | **BERHASIL** |
| **UT-07** | Alur Prefill Sky Events | Mengklik ikon kalender "Add to Planner" pada kartu Perseid Meteor Shower. | Pengguna diarahkan ke `planner.html` dengan judul, target, dan tanggal terisi otomatis dari parameter URL. | **BERHASIL** |
| **UT-08** | Live Card Preview | Mengetik teks pada formulir judul, objek, dan catatan di `planner.html`. | Kartu preview pada kolom kanan diperbarui secara instan (real-time synchronous reflection). | **BERHASIL** |
| **UT-09** | Validasi Input Planner | Menekan tombol "Save Observation Plan" saat bidang wajib masih kosong. | Formulir menampilkan feedback visual batas merah, dan notifikasi toast merah muncul memperingatkan pengguna. | **BERHASIL** |
| **UT-10** | Penyimpanan LocalStorage | Mengisi formulir observasi lengkap dan menekan tombol simpan. | Data tersimpan ke `localStorage`, notifikasi toast hijau muncul, formulir direset, dan entri tampil di jurnal. | **BERHASIL** |
| **UT-11** | Persistensi Setelah Refresh | Menyimpan data observasi baru, lalu me-refresh peramban (`Ctrl + R`). | Data pengamatan yang disimpan tetap utuh dan tampil sempurna di halaman `journal.html`. | **BERHASIL** |
| **UT-12** | Penyuntingan Jurnal | Menekan tombol "Edit" pada salah satu kartu jurnal dan mengubah teks catatan. | Modal sunting terbuka dengan data lama, perubahan berhasil diperbarui ke storage dan antarmuka. | **BERHASIL** |
| **UT-13** | Penghapusan Data Terproteksi | Menekan tombol "Delete" pada kartu jurnal, lalu menolak dialog konfirmasi (`Cancel`). | Data tidak terhapus. Jika memilih `OK`, data dihapus permanen dan metrik total observasi diperbarui. | **BERHASIL** |
| **UT-14** | Ekspor Berkas JSON | Menekan tombol "Export JSON" pada halaman jurnal. | Peramban mengunduh berkas `AstroVista_Journal_Export_YYYY-MM-DD.json` berisi seluruh data yang valid. | **BERHASIL** |
| **UT-15** | Modal Pembaca Perpustakaan | Mengklik "Read Full Guide" pada salah satu kartu artikel di `library.html`. | Modal reader terbuka menampilkan artikel edukasi ilmiah berformat lengkap disertai tabel dan rumus. | **BERHASIL** |
| **UT-16** | Tombol Kembali ke Atas | Menggulir halaman ke bawah melebihi 350px dan mengklik tombol panah melayang. | Halaman bergulir kembali ke puncak secara mulus (smooth scroll behavior). | **BERHASIL** |

### 9.3 Hasil Uji Responsivitas dan Kompatibilitas
- **Peramban Desktop:** Diuji pada Google Chrome (v131+), Mozilla Firefox (v133+), dan Microsoft Edge (v131+). Seluruh komponen CSS grid, flexbox, dan modal Bootstrap berjalan konsisten.
- **Perangkat Seluler:** Diuji pada resolusi 360×800 (Samsung Galaxy), 390×844 (iPhone 13/14), dan 768×1024 (iPad Tablet). Tidak ditemukan tumpang tindih teks (text overlapping), gambar terpotong, maupun pergeseran layout horizontal.

---

<div style="page-break-after: always;"></div>

## BAB X: KESIMPULAN DAN PENGEMBANGAN LANJUTAN

### 10.1 Kesimpulan
Proyek pengembangan **AstroVista – Astronomy Discovery & Observation Platform** telah berhasil diselesaikan secara utuh dan memenuhi seluruh spesifikasi tugas individu **Rekayasa Perangkat Lunak Sesi 7 (Perancangan Antarmuka Perangkat Lunak)** di **Universitas Nusa Putra**.

Pencapaian utama proyek ini meliputi:
1. **Kelengkapan Tujuh Halaman Inti:** Seluruh halaman (`index.html`, `planets.html`, `sky-events.html`, `planner.html`, `journal.html`, `library.html`, dan `about.html`) telah selesai dibangun dan terintegrasi secara fungsional.
2. **Kepatuhan Teknologi Sesuai Batasan Tugas:** Dibangun murni menggunakan HTML5 semantik, CSS3 modern dengan glassmorphism, Bootstrap 5.3, Vanilla JavaScript, Bootstrap Icons, dan Google Fonts tanpa ketergantungan pada backend framework.
3. **Penerapan Sepuluh Prinsip HCI:** Mengakomodasi prinsip konsistensi, kesederhanaan, visibilitas status, umpan balik seketika, kebebasan pengguna, aksesibilitas kontras tinggi, navigasi yang intuitif, pencegahan kesalahan melalui validasi, keterbacaan teks ilmiah, dan pendekatan yang berpusat pada alur kerja pengguna astronomi.
4. **Persistensi Data Lokal yang Handal:** Fitur perencana dan jurnal observasi beroperasi penuh dengan siklus CRUD lokal yang aman dan tidak hilang saat halaman disegarkan.

### 10.2 Rencana Pengembangan Lanjutan (Future Scope)
Untuk pengembangan di masa mendatang di luar batas tugas perkuliahan saat ini, AstroVista dapat ditingkatkan dengan:
- Integrasi API Terbuka NASA (seperti NASA APOD – Astronomy Picture of the Day dan NASA NeoWs untuk data asteroid real-time).
- Penambahan peta bintang interaktif (Interactive Sky Map Canvas) menggunakan WebGL / Three.js untuk visualisasi rasi bintang 3D.
- Fitur mode malam merah penuh (Deep Red Night Mode Toggle) yang mengubah seluruh spektrum antarmuka menjadi monokromatik merah demi perlindungan maksimal adaptasi penglihatan gelap pengamat lapangan.

---

**Lembar Pengesahan Laporan:**  
*Dokumentasi ini disusun secara lengkap dan objektif sebagai pemenuhan deliverable Tugas Individu Sesi 7 Mata Kuliah Rekayasa Perangkat Lunak pada Program Studi Teknik Informatika / Sistem Informasi, Universitas Nusa Putra, di bawah bimbingan Dosen Pengampu Anggun Fergina, M.Kom.*
