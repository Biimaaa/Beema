/**
 * BimaKS Personal Portfolio JavaScript
 * Author: Bima Kurnia Sandi
 * Description: Vanilla JS interactivity for modern developer portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. DATA PROJECT (ARRAY OF PROJECTS)
  // --------------------------------------------------------------------------
  const projectsData = [
    {
      id: "project-1",
      title: "Digital Library System",
      category: "Web Development",
      filterCategory: "software",
      description: "Aplikasi perpustakaan digital untuk pengelolaan data buku, pengguna, pencarian koleksi, dan berbagai kebutuhan sistem perpustakaan.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
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
      description: "Eksperimen image processing klasik untuk menganalisis indikasi ketidakkonsistenan visual pada dokumen.",
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
      description: "Landing page personal portfolio untuk memperkenalkan profil, skill, pengalaman, dan proyek.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      status: "Active",
      details: {
        overview: "Landing page personal portfolio modern satu halaman yang dirancang untuk menampilkan personal brand BimaKS, kapabilitas teknis, perjalanan akademik, dan proyek secara interaktif.",
        features: [
          "Desain Modern Dark Developer UI & Glassmorphism",
          "Animasi Teks Ketik (Typing Effect) Vanilla JS",
          "Interactive Skill Categories Filtering",
          "Modal Detail Proyek Dinamis",
          "Theme Switcher (Dark / Light Mode) dengan Persistence",
          "Desain 100% Responsif & Aksesibel"
        ],
        developmentProcess: "Dibuat dari nol tanpa framework luar. Menggunakan CSS Custom Properties untuk sistem tema, Flexbox & Grid untuk tata letak, dan Vanilla JS terstruktur untuk interaktivitas.",
        challenges: "Mengoptimalkan performa animasi tanpa library external dan memastikan tata letak tetap konsisten di berbagai ukuran layar.",
        lessonsLearned: "Meningkatkan penguasaan teknik dasar modern web development (HTML5, CSS3, Vanilla JS) dan prinsip UX portfolio developer."
      }
    }
  ];

  // --------------------------------------------------------------------------
  // 2. DOM ELEMENTS SELECTION
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const navMenu = document.getElementById('navMenu');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.querySelectorAll('.nav-link');
  const themeToggle = document.getElementById('themeToggle');
  const typingText = document.getElementById('typingText');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTopBtn = document.getElementById('backToTop');
  const projectsGrid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');
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

  // Set Current Year in Footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 3. THEME TOGGLE (DARK / LIGHT MODE)
  // --------------------------------------------------------------------------
  const savedTheme = localStorage.getItem('bimaks-theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('bimaks-theme', newTheme);
    });
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

    // Close menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target) && navMenu.classList.contains('active')) {
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. ANIMATED TYPING EFFECT
  // --------------------------------------------------------------------------
  const typingWords = [
    "Software Developer",
    "Web Developer",
    "AI Enthusiast",
    "Data Analysis Enthusiast",
    "Computer Vision Explorer"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    if (!typingText) return;

    const currentWord = typingWords[wordIndex];

    if (isDeleting) {
      typingText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % typingWords.length;
      typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();

  // --------------------------------------------------------------------------
  // 6. SCROLL PROGRESS & NAVBAR SCROLL & BACK TO TOP
  // --------------------------------------------------------------------------
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // Update Progress Bar
    if (scrollProgress) {
      scrollProgress.style.width = `${scrollPercent}%`;
    }

    // Navbar scrolled state
    if (navbar) {
      if (scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollTop > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active Nav Item highlighting based on section scroll
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

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. RENDER PROJECTS & FILTERING (SAME CATEGORY CARD CONCEPT AS SKILLS)
  // --------------------------------------------------------------------------
  const projectCategories = [
    {
      id: "software",
      title: "Software & Web Development",
      icon: "fa-solid fa-code"
    },
    {
      id: "data",
      title: "Data Analysis & Machine Learning",
      icon: "fa-solid fa-chart-pie"
    },
    {
      id: "ai",
      title: "AI & Computer Vision",
      icon: "fa-solid fa-brain"
    }
  ];

  function renderProjects(filterValue = 'all') {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const categoriesToRender = projectCategories.filter(cat => {
      if (filterValue === 'all') return true;
      return cat.id === filterValue;
    });

    if (categoriesToRender.length === 0) {
      projectsGrid.innerHTML = '<p class="projects-empty">Tidak ada proyek dalam kategori ini.</p>';
      return;
    }

    categoriesToRender.forEach(cat => {
      const catProjects = projectsData.filter(p => p.filterCategory === cat.id);
      if (catProjects.length === 0) return;

      const catCard = document.createElement('div');
      catCard.className = 'skill-category-card reveal-on-scroll is-visible';
      catCard.setAttribute('data-category', cat.id);

      const itemsHtml = catProjects.map(project => {
        const statusDot = project.status === 'Coming Soon'
          ? '<span class="chip-status-dot" title="Coming Soon"></span>'
          : '<span class="chip-status-dot active" title="Active"></span>';
        return `
          <button type="button" class="skill-chip project-chip" data-id="${project.id}">
            <i class="fa-solid fa-folder"></i>
            <span>${project.title}</span>
            ${statusDot}
          </button>
        `;
      }).join('');

      catCard.innerHTML = `
        <div class="category-header">
          <i class="${cat.icon} category-icon"></i>
          <h3>${cat.title}</h3>
        </div>
        <div class="chips-grid">
          ${itemsHtml}
        </div>
      `;

      projectsGrid.appendChild(catCard);
    });

    // Open project modal when a project chip is clicked
    const projectChips = projectsGrid.querySelectorAll('.project-chip');
    projectChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const proj = projectsData.find(p => p.id === chip.getAttribute('data-id'));
        if (proj) {
          openProjectModal(proj);
        }
      });
    });
  }

  // Initial Project Render
  renderProjects('all');

  // Skill & Projects Filter Logic
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // Filter Skills Categories
        skillCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });

        // Filter Projects Categories Grid
        renderProjects(filterValue);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 8. PROJECT MODAL LOGIC
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
        <h4><i class="fa-solid fa-circle-info"></i> Overview</h4>
        <p>${project.details.overview}</p>
      </div>

      <div class="modal-section-block">
        <h4><i class="fa-solid fa-code"></i> Technologies Used</h4>
        <div class="chips-grid modal-chips">
          ${techList}
        </div>
      </div>

      <div class="modal-section-block">
        <h4><i class="fa-solid fa-list-check"></i> Key Features</h4>
        <ul>${featuresList}</ul>
      </div>

      <div class="modal-section-block">
        <h4><i class="fa-solid fa-diagram-project"></i> Development Process</h4>
        <p>${project.details.developmentProcess}</p>
      </div>

      <div class="modal-section-block">
        <h4><i class="fa-solid fa-triangle-exclamation"></i> Challenges</h4>
        <p>${project.details.challenges}</p>
      </div>

      <div class="modal-section-block">
        <h4><i class="fa-solid fa-graduation-cap"></i> Lessons Learned</h4>
        <p>${project.details.lessonsLearned}</p>
      </div>
    `;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
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

  // Escape key listener for closing modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // --------------------------------------------------------------------------
  // 9. COPY EMAIL BUTTON
  // --------------------------------------------------------------------------
  if (copyEmailBtn && copyEmailText) {
    copyEmailBtn.addEventListener('click', () => {
      const email = "bimakurniasandi23@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        copyEmailText.textContent = "Email Copied!";
        copyEmailBtn.style.borderColor = "var(--secondary)";

        setTimeout(() => {
          copyEmailText.textContent = "Copy Email";
          copyEmailBtn.style.borderColor = "";
        }, 2000);
      }).catch(() => {
        copyEmailText.textContent = "Copy Failed";
      });
    });
  }

  // --------------------------------------------------------------------------
  // 10. CONTACT FORM VALIDATION & MAILTO FALLBACK
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

      // Clear previous error messages
      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';
      formFeedback.className = 'form-feedback';
      formFeedback.style.display = 'none';

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Please enter your email address.';
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageError.textContent = 'Please enter your message.';
        isValid = false;
      }

      if (isValid) {
        const subject = encodeURIComponent(`Portfolio Message from ${nameInput.value.trim()}`);
        const body = encodeURIComponent(`Name: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`);
        
        // Open mailto client
        window.location.href = `mailto:bimakurniasandi23@gmail.com?subject=${subject}&body=${body}`;

        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = 'Your email client will open with your message prepared.';
        formFeedback.style.display = 'block';

        contactForm.reset();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 11. INTERSECTION OBSERVER FOR SCROLL REVEAL ANIMATIONS
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Reveal once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --------------------------------------------------------------------------
  // 12. CUSTOM CURSOR TRACKING (DESKTOP)
  // --------------------------------------------------------------------------
  if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;

      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-chip, .component-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorRing.style.width = '50px';
        cursorRing.style.height = '50px';
        cursorRing.style.borderColor = 'var(--primary)';
      });
      el.addEventListener('mouseleave', () => {
        cursorRing.style.width = '36px';
        cursorRing.style.height = '36px';
        cursorRing.style.borderColor = 'var(--secondary)';
      });
    });
  }
});
