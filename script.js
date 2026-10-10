/**
 * BimaKS Personal Portfolio JavaScript
 * Author: Bima Kurnia Sandi
 * Description: Vanilla JS interactivity for modern developer portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. DATA SKILLS (INTERACTIVE TIMELINE & ACCORDION)
  // --------------------------------------------------------------------------
  const skillsData = [
    // Software Development
    {
      id: "skill-html",
      name: "HTML5",
      category: "software",
      categoryLabel: "Software Development",
      icon: "fa-brands fa-html5",
      level: "Mahir / Inti",
      period: "Fondasi Web",
      tagline: "Struktur semantik dokumen web modern & aksesibilitas standar.",
      description: "Penguasaan struktur markup semantik HTML5 standar W3C. Memastikan penataan konten yang mudah dirayapi mesin pencari (SEO friendly), aksesibilitas pembaca layar (ARIA roles), serta integrasi form input dan multimedia yang kokoh tanpa tag usang.",
      highlights: [
        "Penyusunan struktur semantik (header, nav, main, section, article, footer)",
        "Optimasi metadata SEO, Open Graph & Twitter Card",
        "Formulir interaktif dengan validasi atribut HTML5 bawaan"
      ]
    },
    {
      id: "skill-css",
      name: "CSS3 & Modern Layout",
      category: "software",
      categoryLabel: "Software Development",
      icon: "fa-brands fa-css3-alt",
      level: "Mahir / Desain",
      period: "Styling & Responsive",
      tagline: "Desain responsif, custom properties, animasi, & glassmorphism.",
      description: "Merancang tata letak web menggunakan Flexbox dan CSS Grid modern tanpa ketergantungan library luar. Berpengalaman dengan sistem tema data-attribute melalui CSS Custom Properties (variabel), animasi keyframes ringan, dan transisi cubic-bezier yang dinamis.",
      highlights: [
        "Sistem tema dinamis (Dark / Light mode) via CSS Custom Properties",
        "Penerapan sistem layout CSS Grid tingkat lanjut & Flexbox responsif",
        "Efek modern: Glassmorphism, backdrop-filter, dan spotlight hover"
      ]
    },
    {
      id: "skill-js",
      name: "JavaScript (ES6+)",
      category: "software",
      categoryLabel: "Software Development",
      icon: "fa-brands fa-js",
      level: "Mahir / Interaktif",
      period: "Logika Klien",
      tagline: "Manipulasi DOM cepat, async/await, event listener, & vanilla logic.",
      description: "Membangun interaktivitas kaya tanpa framework pihak ketiga. Menguasai konsep dasar ES6+ seperti modularitas, promise, async/await, IntersectionObserver API untuk animasi gulir efisien, local storage state, dan manipulasi DOM performa tinggi.",
      highlights: [
        "Animasi & Scroll Reveal dengan IntersectionObserver performa tinggi",
        "Manipulasi DOM terstruktur, kustom kursor, dan efek 3D tilt matematis",
        "Manajemen state tema lokal (localStorage) & validasi input klien"
      ]
    },
    {
      id: "skill-php",
      name: "PHP Native",
      category: "software",
      categoryLabel: "Software Development",
      icon: "fa-brands fa-php",
      level: "Menengah / Backend",
      period: "Logika Server",
      tagline: "Pemrograman sisi server, arsitektur MVC dasar, & session management.",
      description: "Mengembangkan logika backend dari nol menggunakan PHP Native. Memahami alur kerja HTTP Request/Response, penanganan sesi pengguna, otentikasi login berbasis enkripsi kata sandi, serta sanitasi data guna mencegah serangan SQL Injection dan XSS.",
      highlights: [
        "Pengembangan logika CRUD backend & modularisasi kode",
        "Otentikasi aman (password_hash, session management)",
        "Konektivitas dan eksekusi query relasional dengan PDO / MySQLi"
      ]
    },
    {
      id: "skill-mysql",
      name: "MySQL & Relational DB",
      category: "software",
      categoryLabel: "Software Development",
      icon: "fa-solid fa-database",
      level: "Menengah / Database",
      period: "Arsitektur Data",
      tagline: "Perancangan skema relasional, normalisasi tabel, & indexing.",
      description: "Merancang skema basis data relasional terstruktur mulai dari diagram ERD hingga implementasi fisik. Berpengalaman menyusun query kompleks (JOIN, subquery, indexing) dan menerapkan normalisasi database untuk menjaga integritas data.",
      highlights: [
        "Perancangan ERD dan skema database relasional",
        "Query penggabungan data multi-tabel (INNER / LEFT JOIN)",
        "Integritas referensial (Foreign Key, ON DELETE CASCADE, indexing)"
      ]
    },
    {
      id: "skill-laravel",
      name: "Laravel Framework",
      category: "software",
      categoryLabel: "Software Development",
      icon: "fa-brands fa-laravel",
      level: "Menengah / Framework",
      period: "Modern Web Arch",
      tagline: "Arsitektur MVC elegan, Eloquent ORM, migrasi, & RESTful routing.",
      description: "Memanfaatkan kekuatan ekosistem Laravel untuk membangun aplikasi web berskala lebih besar secara teratur. Menggunakan fitur artisan, migrasi database, Eloquent ORM untuk relasi data elegan, Blade templating engine, dan middleware proteksi rute.",
      highlights: [
        "Arsitektur Model-View-Controller (MVC) yang bersih dan terisolasi",
        "Relasi database modern dengan Eloquent ORM (1-to-many, many-to-many)",
        "Sistem routing aman, validasi form request, dan middleware"
      ]
    },
    {
      id: "skill-android",
      name: "Android Development",
      category: "software",
      categoryLabel: "Software Development",
      icon: "fa-brands fa-android",
      level: "Eksplorasi / Mobile",
      period: "Mobile System",
      tagline: "Dasar aplikasi mobile, siklus hidup activity, & interaksi UI.",
      description: "Mengeksplorasi pengembangan aplikasi mobile menggunakan Android Studio. Memahami siklus hidup activity, navigasi intent, pemetaan tata letak XML/View, dan integrasi logika dasar pemrograman mobile.",
      highlights: [
        "Pemahaman Lifecycle Activity & Fragment Android",
        "Desain antarmuka mobile responsif pada berbagai ukuran layar",
        "Navigasi data antar antarmuka dengan Intent"
      ]
    },

    // Data Analysis
    {
      id: "skill-dataclean",
      name: "Data Cleaning & Preprocessing",
      category: "data",
      categoryLabel: "Data Analysis",
      icon: "fa-solid fa-broom",
      level: "Menengah / Data Pipeline",
      period: "Pembersihan Data",
      tagline: "Penanganan nilai hilang, deteksi outlier, & transformasi tipe data.",
      description: "Mempersiapkan dataset mentah agar layak dimasukkan ke dalam model analitik. Berpengalaman menangani nilai kosong (imputasi mean/median/modus), menghapus duplikasi, standardisasi format string, dan deteksi nilai pencilan (outliers).",
      highlights: [
        "Imputasi data hilang terstruktur via Pandas & Scikit-learn",
        "Normalisasi skala numerik (MinMaxScaler, StandardScaler)",
        "Encoding variabel kategorikal (One-Hot Encoding, Label Encoding)"
      ]
    },
    {
      id: "skill-eda",
      name: "Exploratory Data Analysis (EDA)",
      category: "data",
      categoryLabel: "Data Analysis",
      icon: "fa-solid fa-magnifying-glass-chart",
      level: "Menengah / Analisis",
      period: "Eksplorasi Pola",
      tagline: "Analisis distribusi statistik, matriks korelasi, & pola perilaku.",
      description: "Melakukan penyelidikan mendalam terhadap data untuk menemukan anomali, tren tersembunyi, korelasi antar fitur, dan hipotesis awal sebelum tahap pemodelan machine learning dilakukan.",
      highlights: [
        "Analisis korelasi Pearson & Spearman antarfaktor",
        "Pemahaman skewness distribusi dan kuartil statistik",
        "Penyusunan insight awal untuk perumusan solusi bisnis"
      ]
    },
    {
      id: "skill-dataviz",
      name: "Data Visualization",
      category: "data",
      categoryLabel: "Data Analysis",
      icon: "fa-solid fa-chart-line",
      level: "Menengah / Visual",
      period: "Komunikasi Visual",
      tagline: "Penyajian grafik informatif (Matplotlib, Seaborn, Chart.js).",
      description: "Mengubah angka statistik mentah menjadi grafik visual yang intuitif dan mudah dipahami oleh audiens teknis maupun non-teknis melalui diagram pencar, heatmap, histogram, dan grafik garis.",
      highlights: [
        "Heatmap korelasi variabel untuk reduksi redundansi fitur",
        "Visualisasi distribusi data & perbandingan performa model",
        "Penyusunan grafik bercerita (visual storytelling)"
      ]
    },
    {
      id: "skill-modeleval",
      name: "Model Evaluation Metrics",
      category: "data",
      categoryLabel: "Data Analysis",
      icon: "fa-solid fa-square-poll-vertical",
      level: "Menengah / Evaluasi",
      period: "Validasi Performa",
      tagline: "Pengukuran metrik akurasi, MSE, RMSE, MAE, & R² Score.",
      description: "Mengevaluasi keandalan model prediktif regresi maupun klasifikasi secara objektif menggunakan metrik matematis baku untuk memastikan model tidak mengalami overfitting atau underfitting.",
      highlights: [
        "Evaluasi model regresi: Mean Squared Error (MSE), RMSE, R² Score",
        "K-Fold Cross Validation untuk validasi konsistensi hasil",
        "Komparasi objektif antara beberapa algoritma sekaligus"
      ]
    },

    // AI & Machine Learning
    {
      id: "skill-ml",
      name: "Machine Learning (Regresi & Ensembles)",
      category: "ai",
      categoryLabel: "AI & Machine Learning",
      icon: "fa-solid fa-robot",
      level: "Menengah / Eksperimental",
      period: "Pemodelan Algoritma",
      tagline: "Penerapan Random Forest, SVR, XGBoost, & hyperparameter tuning.",
      description: "Melakukan pelatihan model pembelajaran mesin untuk menyelesaikan persoalan prediksi berbasis data historis. Berpengalaman membandingkan algoritma ensemble Random Forest, Support Vector Regression (SVR), dan XGBoost.",
      highlights: [
        "Pemisahan dataset (Train/Test Split) yang proporsional",
        "Penyetelan hyperparameter (GridSearchCV) untuk akurasi optimal",
        "Analisis kepentingan fitur (Feature Importance ranking)"
      ]
    },
    {
      id: "skill-cv",
      name: "Computer Vision & OpenCV",
      category: "ai",
      categoryLabel: "AI & Machine Learning",
      icon: "fa-solid fa-eye",
      level: "Menengah / Eksperimental",
      period: "Pengolahan Citra",
      tagline: "Pemrosesan citra digital, deteksi tepi Canny/Sobel, tekstur GLCM & LBP.",
      description: "Mengeksplorasi manipulasi visual dan ekstraksi fitur citra digital menggunakan pustaka Python OpenCV. Berpengalaman dalam analisis ketidakkonsistenan tekstur dokumen melalui matriks GLCM dan Local Binary Patterns (LBP).",
      highlights: [
        "Transformasi grayscale, thresholding adaptif, & filtering noise",
        "Deteksi tepi berbasis operator Canny, Sobel, dan Laplacian",
        "Ekstraksi statistik tekstur matriks spasial citra dokumen"
      ]
    },
    {
      id: "skill-deeplearning",
      name: "Deep Learning Foundations",
      category: "ai",
      categoryLabel: "AI & Machine Learning",
      icon: "fa-solid fa-network-wired",
      level: "Eksplorasi / Riset",
      period: "Arsitektur Neural",
      tagline: "Konsep perceptron, aktivasi, backpropagation, & layer CNN.",
      description: "Mempelajari dasar-dasar arsitektur jaringan saraf tiruan (Artificial Neural Network) dan Convolutional Neural Network (CNN) untuk pemrosesan data berpola spasial dan citra beresolusi tinggi.",
      highlights: [
        "Fungsi aktivasi (ReLU, Sigmoid, Softmax) & loss function",
        "Konsep operasi konvolusi, pooling, dan flatten pada citra",
        "Eksplorasi dasar framework komputasi tensor"
      ]
    },

    // Computer Hardware
    {
      id: "skill-pcbuild",
      name: "Perakitan PC Kustom",
      category: "hardware",
      categoryLabel: "Computer & Hardware",
      icon: "fa-solid fa-screwdriver-wrench",
      level: "Mahir / Praktisi",
      period: "Hardware Assembly",
      tagline: "Perakitan presisi, manajemen kabel, & optimasi alur pendinginan.",
      description: "Pengalaman langsung dalam merakit sistem komputer desktop dari nol. Melakukan pemasangan prosesor, heatsink/AIO cooler, pasta termal berstandar, RAM dual-channel, hingga manajemen kabel rapi untuk efisiensi aliran udara casing.",
      highlights: [
        "Pemasangan komponen presisi tanpa resiko korsleting pin",
        "Manajemen kabel terstruktur untuk estetika & sirkulasi udara optimal",
        "Pengujian POST (Power-On Self-Test) & verifikasi deteksi BIOS"
      ]
    },
    {
      id: "skill-hwtroubleshoot",
      name: "Troubleshooting Hardware",
      category: "hardware",
      categoryLabel: "Computer & Hardware",
      icon: "fa-solid fa-triangle-exclamation",
      level: "Mahir / Diagnostik",
      period: "Diagnosa Masalah",
      tagline: "Isolasi masalah sistem, diagnosa kode beep/LED, & penanganan crash.",
      description: "Keahlian menemukan akar penyebab kegagalan perangkat keras komputer—mulai dari masalah RAM tidak terbaca, overheat prosesor, ketidakstabilan PSU, artefak GPU, hingga masalah penyimpanan bad-sector.",
      highlights: [
        "Diagnosa kode Debug LED motherboard & kode bunyi speaker",
        "Pembersihan pin korosi, uji modul RAM mandiri (MemTest86)",
        "Pemeriksaan kesehatan hard disk/SSD & tegangan daya"
      ]
    },
    {
      id: "skill-hwselect",
      name: "Seleksi & Sinergi Komponen",
      category: "hardware",
      categoryLabel: "Computer & Hardware",
      icon: "fa-solid fa-memory",
      level: "Mahir / Perencanaan",
      period: "Spesifikasi Sistem",
      tagline: "Kalkulasi watt PSU, kecocokan soket, & pencegahan bottleneck.",
      description: "Merencanakan racikan komponen PC yang proporsional sesuai anggaran dan peruntukan (coding, pengolahan data, rendering, atau gaming). Menghindari ketimpangan performa (bottleneck) dan memastikan pasokan daya aman.",
      highlights: [
        "Kecocokan soket CPU dan chipset motherboard (VRM tier)",
        "Kalkulasi efisiensi daya & sertifikasi PSU (80 Plus Tier)",
        "Analisis kecepatan transfer bandwidth bus PCIe dan M.2 NVMe"
      ]
    },
    {
      id: "skill-osinstall",
      name: "Sistem Operasi & Pemeliharaan",
      category: "hardware",
      categoryLabel: "Computer & Hardware",
      icon: "fa-brands fa-windows",
      level: "Mahir / Pemeliharaan",
      period: "Sistem Komputer",
      tagline: "Instalasi Windows/Linux, manajemen partisi, driver, & debloating.",
      description: "Melakukan instalasi bersih sistem operasi Windows maupun Linux, konfigurasi partisi GPT/MBR pada UEFI, instalasi driver chipset terbaru, serta pemeliharaan berkala untuk menjaga kecepatan respon sistem.",
      highlights: [
        "Instalasi bersih UEFI GPT dengan media bootable terverifikasi",
        "Optimasi startup, penonaktifan bloatware, dan manajemen registry dasar",
        "Backup data sistem dan pemulihan recovery drive"
      ]
    },

    // Supporting Skills
    {
      id: "skill-git",
      name: "Git & Version Control",
      category: "other",
      categoryLabel: "Keterampilan Pendukung",
      icon: "fa-brands fa-git-alt",
      level: "Menengah / Alur Kerja",
      period: "Version Control",
      tagline: "Pengelolaan riwayat revisi, branching, commit bersih, & GitHub.",
      description: "Menggunakan Git dalam alur kerja pengembangan perangkat lunak sehari-hari. Mencatat riwayat perubahan kode dengan pesan commit deskriptif, mengisolasi fitur pada branch terpisah, serta sinkronisasi remote repository di GitHub.",
      highlights: [
        "Manajemen cabang (branching) & penggabungan fitur (merge)",
        "Penulisan riwayat commit yang jelas dan terstruktur",
        "Pengelolaan repositori kode remote di platform GitHub"
      ]
    },
    {
      id: "skill-office",
      name: "Administrasi & Microsoft Office",
      category: "other",
      categoryLabel: "Keterampilan Pendukung",
      icon: "fa-solid fa-file-word",
      level: "Mahir / Administrasi",
      period: "Dokumentasi",
      tagline: "Penyusunan berkas formal, pengolahan spreadsheet Excel, & kearsipan.",
      description: "Didukung latar belakang pendidikan Manajemen Perkantoran di SMK Negeri 1 Metro dan magang administratif. Sangat terbiasa menyusun dokumen bisnis rapi, formula spreadsheet lanjutan, korespondensi, dan tata kelola arsip digital.",
      highlights: [
        "Pengolahan tabel, formula logika, & rekapitulasi data Excel",
        "Penyusunan dokumen formal berstandar korespondensi resmi",
        "Tata kelola kearsipan digital yang rapi dan mudah ditelusuri"
      ]
    },
    {
      id: "skill-softskills",
      name: "Problem Solving & Kolaborasi",
      category: "other",
      categoryLabel: "Keterampilan Pendukung",
      icon: "fa-solid fa-people-group",
      level: "Karakter / Personal",
      period: "Soft Skills",
      tagline: "Ketelitian analitis, pembelajaran mandiri cepat, & komunikasi tim.",
      description: "Kemampuan memecah persoalan kompleks menjadi sub-masalah yang dapat dieksekusi secara logis. Memiliki rasa ingin tahu tinggi terhadap teknologi baru dan kenyamanan berkolaborasi dalam tim multidisiplin.",
      highlights: [
        "Kemampuan memecah bug sistem secara runut dan metodis",
        "Kemandirian tinggi dalam membaca dokumentasi teknis resmi",
        "Komunikasi jujur, sopan, dan transparan dalam kerjasama tim"
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // 2. DATA PROJECT (ARRAY OF PROJECTS)
  // --------------------------------------------------------------------------
  const projectsData = [
    {
      id: "project-1",
      title: "Digital Library System",
      category: "Web Development",
      filterCategory: "software",
      description: "Aplikasi perpustakaan digital untuk pengelolaan data buku, pengguna, pencarian koleksi, dan sirkulasi peminjaman.",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      status: "Coming Soon",
      details: {
        overview: "Aplikasi web perpustakaan digital yang dirancang untuk mempermudah sirkulasi buku, pengelolaan data anggota, serta penyediaan fitur pencarian katalog koleksi secara intuitif dan responsif.",
        features: [
          "Autentikasi Pengguna & Petugas Perpustakaan",
          "Pengelolaan Data Buku, Pengarang, & Kategori",
          "Sistem Transaksi Peminjaman & Pengembalian",
          "Pencarian Koleksi Real-time berbasis Kata Kunci",
          "Laporan Rekapitulasi Sirkulasi Data Buku"
        ],
        developmentProcess: "Dikembangkan menggunakan metodologi alur perangkat lunak bertahap mulai dari perancangan skema ERD basis data MySQL, pembangunan fungsi backend PHP Native, hingga desain antarmuka HTML/CSS.",
        challenges: "Mengelola konsistensi transaksi data saat terjadi peminjaman bersamaan dan menyusun struktur relasi database agar pencarian koleksi buku berjalan cepat.",
        lessonsLearned: "Memperkuat pemahaman arsitektur basis data relasional, sanitasi input untuk keamanan web dasar, dan manajemen alur logika sistem informasi."
      }
    },
    {
      id: "project-2",
      title: "Academic Performance Prediction",
      category: "Data Analysis / Machine Learning",
      filterCategory: "data",
      description: "Proyek analisis dan perbandingan model Random Forest, Support Vector Regression, dan XGBoost untuk memprediksi performa akademik siswa.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Random Forest", "SVR", "XGBoost"],
      status: "Coming Soon",
      details: {
        overview: "Proyek eksperimen data science untuk menganalisis faktor-faktor yang mempengaruhi performa siswa dan mengevaluasi kinerja algoritma machine learning regresi.",
        features: [
          "Pembersihan Data (Data Cleaning) & Imputasi Nilai Hilang",
          "Analisis Korelasi & Engineering Fitur Terpilih",
          "Pelatihan Model Random Forest, SVR, dan XGBoost",
          "Evaluasi Metrik (MSE, RMSE, R² Score)",
          "Visualisasi Hasil Prediksi & Distribusi Data"
        ],
        developmentProcess: "Prosedur diawali dengan eksplorasi data deskriptif (EDA), transformasi skala variabel numerik, splitting dataset, hyperparameter tuning, dan pembandingan metrik regresi.",
        challenges: "Menghindari overfitting pada model kompleks serta menangani keterkaitan antarfaktor numerik dan kategorikal.",
        lessonsLearned: "Pentingnya tahap pra-pemrosesan data yang akurat dan kemampuan menganalisis kelebihan serta kekurangan setiap jenis model machine learning secara objektif."
      }
    },
    {
      id: "project-3",
      title: "Document Authenticity Analysis",
      category: "Computer Vision",
      filterCategory: "ai",
      description: "Eksperimen image processing klasik untuk menganalisis indikasi ketidakkonsistenan visual dan tekstur pada dokumen.",
      technologies: ["Python", "OpenCV", "GLCM", "LBP", "Edge Analysis", "Image Processing"],
      status: "Coming Soon",
      details: {
        overview: "Alat bantu eksperimental berbasis pengolahan citra digital untuk mendeteksi anomali tekstur dan tepi pada artefak gambar dokumen. (Sistem ini berfungsi sebagai alat bantu analisis visual dan bukan penentu keaslian dokumen secara mutlak).",
        features: [
          "Grayscale Transformation & Noise Filtering",
          "Edge Detection berbasis Canny & Sobel Operator",
          "Ekstraksi Tekstur Gray-Level Co-occurrence Matrix (GLCM)",
          "Analisis Pola Lokal Local Binary Patterns (LBP)",
          "Penandaan Area Ketidakkonsistenan Tekstur Image"
        ],
        developmentProcess: "Pipeline dibangun menggunakan OpenCV Python untuk mengekstraksi matriks statistik dari gambar mentah kemudian membandingkan variansi tekstur pada area terpilih.",
        challenges: "Menghadapi variasi kualitas pemindaian citra serta perbedaan intensitas pencahayaan sampel dokumen.",
        lessonsLearned: "Memahami konsep matematika dasar di balik transformasi citra digital dan batas kapabilitas teknik pengolahan citra klasik."
      }
    },
    {
      id: "project-4",
      title: "Personal Portfolio",
      category: "Web Development",
      filterCategory: "software",
      description: "Landing page personal portfolio minimalis modern dengan interaktivitas vanilla JavaScript, custom theme, dan modal dinamis.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
      status: "Active",
      details: {
        overview: "Landing page personal portfolio modern satu halaman yang dirancang untuk menampilkan profil BimaKS, kapabilitas teknis, perjalanan akademik, dan proyek secara interaktif.",
        features: [
          "Desain Minimalist Warm Palette & Bento Grid",
          "Interactive Terminal with Command Runner",
          "Skills Explorer Interaktif dengan Konsep Timeline Experience",
          "Modal Detail Proyek Dinamis",
          "Theme Switcher (Dark / Light Mode) dengan Persistence",
          "Ambient Spotlight & Card Hover Highlights"
        ],
        developmentProcess: "Dibuat dari nol tanpa framework luar. Menggunakan CSS Custom Properties untuk sistem tema, Flexbox & Grid untuk tata letak, dan Vanilla JS terstruktur untuk interaktivitas.",
        challenges: "Mengoptimalkan performa animasi tanpa library external dan memastikan estetika tetap bersih, minimalis, dan berkarakter.",
        lessonsLearned: "Meningkatkan penguasaan teknik dasar modern web development (HTML5, CSS3, Vanilla JS) dan prinsip UI/UX portfolio developer."
      }
    }
  ];

  // --------------------------------------------------------------------------
  // 3. DOM ELEMENTS SELECTION
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const navMenu = document.getElementById('navMenu');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.querySelectorAll('.nav-link');
  const typingText = document.getElementById('typingText');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTopBtn = document.getElementById('backToTop');
  const projectsGrid = document.getElementById('projectsGrid');
  const skillsGrid = document.getElementById('skillsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectModal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const currentYearSpan = document.getElementById('currentYear');
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyEmailText = document.getElementById('copyEmailText');
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const ambientSpotlight = document.getElementById('ambientSpotlight');

  // Set Current Year in Footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 4. MOBILE NAVIGATION MENU
  // --------------------------------------------------------------------------
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target) && navMenu.classList.contains('active')) {
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. ANIMATED TYPING EFFECT
  // --------------------------------------------------------------------------
  const typingWords = [
    "Fullstack Web Engineering",
    "Data Exploration & Modeling",
    "Computer Vision with OpenCV",
    "PC Hardware & Diagnostics",
    "Algorithmic Problem Solving"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeEffect() {
    if (!typingText) return;

    const currentWord = typingWords[wordIndex];

    if (isDeleting) {
      typingText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typingText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 2200;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % typingWords.length;
      typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();

  // --------------------------------------------------------------------------
  // 7. SCROLL PROGRESS & NAVBAR SCROLL & BACK TO TOP
  // --------------------------------------------------------------------------
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (scrollProgress) {
      scrollProgress.style.width = `${scrollPercent}%`;
    }

    if (navbar) {
      if (scrollTop > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollTop > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const currentNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollTop > sectionTop && scrollTop <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (currentNavLink) {
          currentNavLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 8. RENDER SKILLS GRID (GROUPED BY CATEGORY - LOGO ONLY)
  // --------------------------------------------------------------------------
  const skillsCategoryMeta = {
    software: { label: "Software Development", sub: "Web & Application Engineering", icon: "fa-solid fa-code" },
    data: { label: "Data Analysis", sub: "Pemrosesan & Visualisasi Informasi", icon: "fa-solid fa-chart-pie" },
    ai: { label: "AI & Machine Learning", sub: "Regresi, Klasifikasi & Computer Vision", icon: "fa-solid fa-brain" },
    hardware: { label: "Computer & Hardware", sub: "Perakitan & Troubleshooting Perangkat", icon: "fa-solid fa-microchip" },
    other: { label: "Keterampilan Pendukung", sub: "Alur Kerja & Kolaborasi Tim", icon: "fa-solid fa-user-gear" }
  };

  function renderSkills(filterValue = 'all') {
    if (!skillsGrid) return;
    skillsGrid.innerHTML = '';

    const categoriesToShow = filterValue === 'all' ? Object.keys(skillsCategoryMeta) : [filterValue];

    let hasContent = false;

    categoriesToShow.forEach(catId => {
      const meta = skillsCategoryMeta[catId];
      if (!meta) return;
      const catSkills = skillsData.filter(s => s.category === catId);
      if (catSkills.length === 0) return;
      hasContent = true;

      const card = document.createElement('div');
      card.className = 'skill-category-card spotlight-card reveal-on-scroll is-visible';
      card.setAttribute('data-category', catId);

      const logosHtml = catSkills.map(skill => `
        <button class="skill-logo-btn" data-id="${skill.id}" aria-label="${skill.name}" title="${skill.name} - Klik untuk detail">
          <i class="${skill.icon}"></i>
          <span class="skill-logo-name">${skill.name}</span>
        </button>
      `).join('');

      card.innerHTML = `
        <div class="category-header">
          <i class="${meta.icon} category-icon"></i>
          <div class="category-info">
            <h3>${meta.label}</h3>
            <span class="category-sub">${meta.sub}</span>
          </div>
          <span class="category-count">${catSkills.length}</span>
        </div>
        <div class="skill-logo-grid">
          ${logosHtml}
        </div>
      `;

      card.querySelectorAll('.skill-logo-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const skill = skillsData.find(s => s.id === btn.getAttribute('data-id'));
          if (skill) openSkillModal(skill);
        });
      });

      skillsGrid.appendChild(card);
    });

    if (!hasContent) {
      skillsGrid.innerHTML = '<p class="skills-empty">Tidak ada keahlian dalam kategori ini.</p>';
    }
  }

  function openSkillModal(skill) {
    if (!projectModal || !modalContent) return;

    const highlightsHtml = skill.highlights.map(h => `<li>${h}</li>`).join('');

    modalContent.innerHTML = `
      <div class="skill-modal-header-row">
        <div class="skill-modal-icon">
          <i class="${skill.icon}"></i>
        </div>
        <div>
          <h3 class="modal-title">${skill.name}</h3>
          <span class="modal-category">${skill.categoryLabel} • ${skill.period}</span>
        </div>
      </div>
      <p class="modal-lead">${skill.tagline}</p>
      <span class="status-coming-soon"><i class="fa-solid fa-gauge-high"></i> Tingkat Penguasaan: ${skill.level}</span>

      <div class="modal-section-block">
        <h4><i class="fa-solid fa-circle-info"></i> Gambaran &amp; Pemahaman</h4>
        <p>${skill.description}</p>
      </div>

      <div class="modal-section-block">
        <h4><i class="fa-solid fa-list-check"></i> Penerapan &amp; Penguasaan Kunci</h4>
        <ul>${highlightsHtml}</ul>
      </div>

      <div class="modal-section-block">
        <h4><i class="fa-solid fa-layer-group"></i> Kategori Domain</h4>
        <div class="chips-grid modal-chips">
          <span class="skill-chip"><i class="${skill.icon}"></i> ${skill.name}</span>
          <span class="skill-chip"><i class="fa-solid fa-tag"></i> ${skill.categoryLabel}</span>
          <span class="skill-chip"><i class="fa-solid fa-clock"></i> ${skill.period}</span>
        </div>
      </div>
    `;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  renderSkills('all');

  // --------------------------------------------------------------------------
  // 9. RENDER PROJECTS (SHOWCASE CARDS)
  // --------------------------------------------------------------------------
  function renderProjects(filterValue = 'all') {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const filteredProjects = projectsData.filter(p => {
      if (filterValue === 'all') return true;
      return p.filterCategory === filterValue;
    });

    if (filteredProjects.length === 0) {
      projectsGrid.innerHTML = '<p class="projects-empty">Tidak ada proyek dalam kategori ini.</p>';
      return;
    }

    filteredProjects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card-item spotlight-card reveal-on-scroll is-visible';
      card.setAttribute('data-id', project.id);

      const statusDot = project.status === 'Coming Soon'
        ? '<span class="chip-status-dot" title="Coming Soon"></span>'
        : '<span class="chip-status-dot active" title="Active"></span>';

      const statusLabel = project.status === 'Coming Soon' ? 'Coming Soon' : 'Active Project';

      const techBadges = project.technologies.slice(0, 4).map(t => `<span class="project-tech-pill">${t}</span>`).join('');

      card.innerHTML = `
        <div class="project-card-top">
          <span class="project-card-badge">${project.category}</span>
          <div class="project-status-indicator">
            ${statusDot}
            <span>${statusLabel}</span>
          </div>
        </div>

        <div>
          <h3 class="project-card-title">${project.title}</h3>
          <p class="project-card-desc">${project.description}</p>
        </div>

        <div>
          <div class="project-card-techs">
            ${techBadges}
          </div>
          <div class="project-card-footer">
            <span>Rincian Lengkap</span>
            <span class="project-view-action">
              <span>Buka Modal</span>
              <i class="fa-solid fa-arrow-right-long"></i>
            </span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openProjectModal(project);
      });

      projectsGrid.appendChild(card);
    });
  }

  renderProjects('all');

  // Unified Filter Buttons (Filters both Skills and Projects)
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        renderSkills(filterValue);
        renderProjects(filterValue);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 10. PROJECT MODAL LOGIC
  // --------------------------------------------------------------------------
  function openProjectModal(project) {
    if (!projectModal || !modalContent) return;

    const techList = project.technologies.map(t => `<span class="skill-chip">${t}</span>`).join(' ');
    const featuresList = project.details.features.map(f => `<li>${f}</li>`).join('');

    modalContent.innerHTML = `
      <h3 class="modal-title">${project.title}</h3>
      <span class="modal-category">${project.category}</span>
      <p class="modal-lead">${project.description}</p>
      ${project.status ? `<span class="status-coming-soon">${project.status}</span>` : ''}

      <div class="modal-section-block">
        <h4><i class="fa-solid fa-circle-info"></i> Gambaran Umum</h4>
        <p>${project.details.overview}</p>
      </div>

      <div class="modal-section-block">
        <h4><i class="fa-solid fa-code"></i> Teknologi yang Digunakan</h4>
        <div class="chips-grid modal-chips">
          ${techList}
        </div>
      </div>

      <div class="modal-section-block">
        <h4><i class="fa-solid fa-list-check"></i> Fitur Utama</h4>
        <ul>${featuresList}</ul>
      </div>

      <div class="modal-section-block">
        <h4><i class="fa-solid fa-diagram-project"></i> Proses Pengembangan</h4>
        <p>${project.details.developmentProcess}</p>
      </div>

      <div class="modal-section-block">
        <h4><i class="fa-solid fa-triangle-exclamation"></i> Tantangan Teknis</h4>
        <p>${project.details.challenges}</p>
      </div>

      <div class="modal-section-block">
        <h4><i class="fa-solid fa-graduation-cap"></i> Pembelajaran &amp; Nilai</h4>
        <p>${project.details.lessonsLearned}</p>
      </div>
    `;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // --------------------------------------------------------------------------
  // 11. COPY EMAIL BUTTON
  // --------------------------------------------------------------------------
  if (copyEmailBtn && copyEmailText) {
    copyEmailBtn.addEventListener('click', () => {
      const email = "bimakurniasandi23@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        copyEmailText.textContent = "Email Disalin!";
        copyEmailBtn.style.borderColor = "var(--primary)";

        setTimeout(() => {
          copyEmailText.textContent = "Salin Email";
          copyEmailBtn.style.borderColor = "";
        }, 2000);
      }).catch(() => {
        copyEmailText.textContent = "Gagal Menyalin";
      });
    });
  }

  // --------------------------------------------------------------------------
  // 12. CONTACT FORM VALIDATION & MAILTO FALLBACK
  // --------------------------------------------------------------------------
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('nameInput');
      const emailInput = document.getElementById('emailInput');
      const messageInput = document.getElementById('messageInput');

      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');

      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';
      formFeedback.className = 'form-feedback';
      formFeedback.style.display = 'none';

      let isValid = true;

      if (!nameInput.value.trim()) {
        nameError.textContent = 'Silakan masukkan nama Anda.';
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Silakan masukkan alamat email Anda.';
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Format email tidak valid.';
        isValid = false;
      }

      if (!messageInput.value.trim()) {
        messageError.textContent = 'Silakan tuliskan pesan Anda.';
        isValid = false;
      }

      if (isValid) {
        const subject = encodeURIComponent(`Pesan Portfolio dari ${nameInput.value.trim()}`);
        const body = encodeURIComponent(`Nama: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nPesan:\n${messageInput.value.trim()}`);

        window.location.href = `mailto:bimakurniasandi23@gmail.com?subject=${subject}&body=${body}`;

        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = 'Klien email Anda akan terbuka dengan draf pesan siap kirim.';
        formFeedback.style.display = 'block';

        contactForm.reset();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 13. INTERSECTION OBSERVER FOR SCROLL REVEAL ANIMATIONS
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --------------------------------------------------------------------------
  // 14. CUSTOM CURSOR & AMBIENT SPOTLIGHT (DESKTOP)
  // --------------------------------------------------------------------------
  if (window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
      }

      if (ambientSpotlight) {
        ambientSpotlight.style.left = `${mouseX}px`;
        ambientSpotlight.style.top = `${mouseY}px`;
      }

      const cards = document.querySelectorAll('.spotlight-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    }, { passive: true });

    function animateCursor() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (cursorRing) {
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
      }

      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .skill-card-item, .info-card, .exploring-card, .project-card-item');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (cursorRing) {
          cursorRing.style.width = '44px';
          cursorRing.style.height = '44px';
          cursorRing.style.borderColor = 'var(--primary)';
          cursorRing.style.opacity = '0.7';
        }
      });
      el.addEventListener('mouseleave', () => {
        if (cursorRing) {
          cursorRing.style.width = '32px';
          cursorRing.style.height = '32px';
          cursorRing.style.borderColor = 'var(--primary)';
          cursorRing.style.opacity = '0';
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 15. INTERACTIVE TERMINAL TAB SWITCHER & QUICK RUNNER
  // --------------------------------------------------------------------------
  const terminalTabs = document.querySelectorAll('.terminal-tab-btn');
  const tabContentProfile = document.getElementById('tabContentProfile');
  const tabContentStack = document.getElementById('tabContentStack');

  terminalTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      terminalTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.getAttribute('data-tab');
      if (targetTab === 'profile') {
        tabContentProfile.classList.add('active');
        tabContentStack.classList.remove('active');
      } else if (targetTab === 'stack') {
        tabContentProfile.classList.remove('active');
        tabContentStack.classList.add('active');
      }
    });
  });

  const quickCmdBtns = document.querySelectorAll('.quick-cmd-btn');
  quickCmdBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd === 'whoami') {
        terminalTabs[0].click();
      } else if (cmd === 'skills') {
        terminalTabs[1].click();
      } else if (cmd === 'clear') {
        tabContentProfile.classList.remove('active');
        tabContentStack.classList.remove('active');
        setTimeout(() => {
          tabContentProfile.classList.add('active');
        }, 200);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 16. SUBTLE 3D TILT EFFECT ON CARDS
  // --------------------------------------------------------------------------
  if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const tiltElements = document.querySelectorAll('.profile-card, .terminal-window, .info-card, .project-card-item, .skill-card-item');

    tiltElements.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        card.style.transform = `perspective(1000px) rotateX(${-deltaY * 3}deg) rotateY(${deltaX * 3}deg) translateY(-2px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });

    const magneticElements = document.querySelectorAll('.hero-socials a, .theme-toggle-btn');
    magneticElements.forEach(elem => {
      elem.addEventListener('mousemove', (e) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        elem.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      });

      elem.addEventListener('mouseleave', () => {
        elem.style.transform = '';
      });
    });
  }
});
