export interface ExperienceItem {
  id: string;
  category: 'work' | 'project' | 'organization' | 'certification';
  title: string;
  roleOrDegree: string;
  organization: string;
  period: string;
  location: string;
  status?: string;
  summary: string; // Poin ringkas untuk homepage
  description: string[]; // Rincian lengkap untuk modal detail
  skills: string[];
  featured?: boolean;
  link?: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  items: {
    name: string;
    level: string;
    experience: string;
    highlight?: boolean;
  }[];
}

export const CV_DATA = {
  personal: {
    fullName: "Muhammad Noval Muhaimin",
    nickname: "Noval",
    title: "Fullstack Developer | Administrasi Sistem | Data Management",
    tagline: "Mengembangkan sistem informasi web dan tata kelola data yang terstruktur.",
    location: "Surakarta, Jawa Tengah, Indonesia",
    email: "mnovalmuhaimin@gmail.com",
    phone: "Tersedia via WhatsApp",
    phoneFormatted: "WhatsApp Langsung (Klik untuk Chat)",
    whatsappLink: "https://wa.me/6281326690102?text=Halo%20Noval,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.",
    linkedin: "https://linkedin.com/in/m-noval-muhaimin-5716aa2a0",
    linkedinUsername: "m-noval-muhaimin-5716aa2a0",
    portfolioUrl: "https://mnm-project.site",
    portfolioDomain: "mnm-project.site",
    statusBadge: "Terbuka untuk Peluang Kerja & Kolaborasi",
    bio: "Lulusan S1 Teknik Informatika Universitas Muhammadiyah Surakarta dengan pengalaman awal hingga menengah dalam pengembangan sistem informasi web (Laravel, Next.js, PostgreSQL) serta pengelolaan data dan administrasi digital.",
    gpa: "3.35 / 4.00",
    education: {
      degree: "S1 Teknik Informatika",
      institution: "Universitas Muhammadiyah Surakarta (UMS)",
      period: "2020 - 2024",
      gpa: "3.35 / 4.00",
      thesis: "Sistem Hybrid Manajemen Zakat Lazismu (Web & Mobile)"
    },
    languages: [
      { name: "Bahasa Indonesia", level: "Fasih (Native)" },
      { name: "Bahasa Inggris", level: "Menengah (Intermediate)" }
    ]
  },

  stats: [
    { label: "Pendidikan", value: "S1 Informatika", suffix: "", description: "Univ. Muhammadiyah Surakarta" },
    { label: "Proyek Selesai", value: "5+", suffix: " Proyek", description: "Web, Mobile & Basis Data" },
    { label: "Pengalaman Kerja", value: "4", suffix: " Peran", description: "Fullstack, BPS & Mobile" },
    { label: "Organisasi", value: "4+", suffix: " Tahun", description: "PDPM Wonogiri & IMM" }
  ],

  skillCategories: [
    {
      id: "web-dev",
      name: "Web & Fullstack",
      iconName: "Code2",
      items: [
        { name: "Laravel", level: "Menengah", experience: "± 2 tahun", highlight: true },
        { name: "PHP", level: "Menengah", experience: "± 2 tahun", highlight: true },
        { name: "Next.js", level: "Menengah", experience: "± 1 tahun", highlight: true },
        { name: "React.js", level: "Menengah", experience: "± 1 tahun", highlight: true },
        { name: "REST API", level: "Menengah", experience: "± 2 tahun", highlight: true },
        { name: "Tailwind CSS", level: "Menengah", experience: "± 1-2 tahun", highlight: false },
        { name: "JavaScript / TypeScript", level: "Menengah", experience: "± 2 tahun", highlight: false }
      ]
    },
    {
      id: "database",
      name: "Database & Keamanan",
      iconName: "Database",
      items: [
        { name: "PostgreSQL", level: "Menengah", experience: "± 1 tahun", highlight: true },
        { name: "MySQL", level: "Menengah", experience: "± 2 tahun", highlight: true },
        { name: "Laravel Sanctum", level: "Menengah", experience: "± 1 tahun", highlight: true },
        { name: "Role & Permission (RBAC)", level: "Menengah", experience: "± 1 tahun", highlight: true }
      ]
    },
    {
      id: "testing",
      name: "Testing & Tools",
      iconName: "FileCheck2",
      items: [
        { name: "Functional Testing & Debugging", level: "Menengah", experience: "± 2 tahun", highlight: true },
        { name: "Git / GitLab", level: "Menengah", experience: "± 2 tahun", highlight: true },
        { name: "Android Studio", level: "Menengah", experience: "± 1-2 tahun", highlight: true },
        { name: "API Documentation", level: "Menengah", experience: "± 1 tahun", highlight: false },
        { name: "Postman", level: "Menengah", experience: "± 1-2 tahun", highlight: false }
      ]
    },
    {
      id: "admin-data",
      name: "Administrasi & Data",
      iconName: "ClipboardList",
      items: [
        { name: "Data Entry & Data Validation", level: "Menengah", experience: "Pengalaman kerja", highlight: true },
        { name: "Document Management", level: "Menengah", experience: "Pengalaman kerja", highlight: false },
        { name: "Reporting", level: "Menengah", experience: "Pengalaman kerja", highlight: false },
        { name: "Microsoft Office (Excel/Word)", level: "Menengah", experience: "Pengalaman kerja", highlight: true }
      ]
    },
    {
      id: "tools",
      name: "Desain & Kreatif",
      iconName: "Wrench",
      items: [
        { name: "Figma", level: "Menengah", experience: "± 1-2 tahun", highlight: true },
        { name: "Canva", level: "Menengah", experience: "± 1-2 tahun", highlight: false },
        { name: "UI Wireframing & Mockup", level: "Menengah", experience: "± 1-2 tahun", highlight: false }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: "ums-peminjaman",
      category: "work",
      title: "Sistem Peminjaman Tempat Terpadu",
      roleOrDegree: "Fullstack Developer",
      organization: "Universitas Muhammadiyah Surakarta (UMS)",
      period: "2024 - 2025",
      location: "Surakarta",
      status: "Selesai",
      featured: true,
      summary: "Membangun sistem informasi peminjaman fasilitas kampus berbasis web secara mandiri (analisis, backend Laravel, frontend, hingga pengujian).",
      description: [
        "Mengembangkan sistem informasi peminjaman tempat dan fasilitas kampus secara mandiri dari tahap awal hingga produksi.",
        "Melakukan analisis kebutuhan stakeholder, perancangan diagram alir, skema database relasional, dan arsitektur UI/UX.",
        "Membangun frontend dan backend terintegrasi untuk mengelola siklus pengguna, ketersediaan fasilitas, reservasi jadwal, dan verifikasi birokrasi.",
        "Melaksanakan pengujian fungsional sistem, penanganan bug, serta mengoordinasikan proses deployment ke server kampus."
      ],
      skills: ["Laravel", "PHP", "MySQL", "REST API", "Tailwind CSS"],
      metrics: [
        { label: "Cakupan", value: "End-to-End Mandiri" },
        { label: "Modul", value: "Fasilitas & Jadwal" }
      ]
    },
    {
      id: "ums-mybeasiswa",
      category: "work",
      title: "Sistem Informasi Manajemen MyBeasiswa",
      roleOrDegree: "Fullstack Developer",
      organization: "MyBeasiswa - UMS",
      period: "Selesai Juni 2026",
      location: "Surakarta",
      status: "Aktif",
      featured: true,
      summary: "Mengembangkan platform manajemen beasiswa berbasis REST API Laravel & frontend Next.js dengan integrasi database PostgreSQL.",
      description: [
        "Mengembangkan sistem informasi manajemen beasiswa berbasis web modern menggunakan kombinasi Laravel dan Next.js.",
        "Membangun arsitektur RESTful API yang aman dengan integrasi database PostgreSQL dan otentikasi Laravel Sanctum.",
        "Merancang sistem hak akses bertingkat (Role & Permission) untuk pendaftar mahasiswa, verifikator berkas, dan pimpinan pengambil keputusan.",
        "Menyusun dokumentasi API komprehensif dan menjalankan pengujian sistem fungsional untuk memastikan reliabilitas data."
      ],
      skills: ["Laravel", "Next.js", "PostgreSQL", "Laravel Sanctum", "REST API"],
      metrics: [
        { label: "Arsitektur", value: "Next.js + Laravel" },
        { label: "Keamanan", value: "Sanctum Multi-Role" }
      ]
    },
    {
      id: "bps-sensus-2026",
      category: "work",
      title: "Mitra Sensus Ekonomi 2026",
      roleOrDegree: "Petugas Pendataan & Verifikasi",
      organization: "Badan Pusat Statistik (BPS)",
      period: "2026 (3 Bulan)",
      location: "BPS Wilayah",
      status: "Selesai",
      featured: false,
      summary: "Pendataan primer dan pemeriksaan konsistensi informasi usaha di lapangan sesuai metodologi resmi BPS.",
      description: [
        "Melakukan pendataan primer dan verifikasi langsung informasi entitas usaha di lapangan sesuai metodologi baku BPS.",
        "Memeriksa kelengkapan, validitas logis, serta konsistensi data sebelum dilakukan input ke sistem pusat.",
        "Melakukan koordinasi intensif dengan koordinator tim lapangan guna memastikan target enumerasi tercapai 100% tepat waktu."
      ],
      skills: ["Verifikasi Data", "Quality Control", "Koordinasi Lapangan"],
      metrics: [
        { label: "Periode", value: "3 Bulan Intensif" },
        { label: "Fokus", value: "Akurasi Metodologi BPS" }
      ]
    },
    {
      id: "plus-nexus-android",
      category: "work",
      title: "Pengembangan Aplikasi Android",
      roleOrDegree: "Android Developer",
      organization: "PT Plus Nexus",
      period: "April 2023 - Juni 2023",
      location: "Indonesia",
      status: "Selesai",
      featured: false,
      summary: "Mengembangkan fitur antarmuka aplikasi Android di Android Studio dan mengintegrasikan Google AdMob SDK.",
      description: [
        "Mengembangkan fitur aplikasi Android interaktif menggunakan lingkungan Android Studio.",
        "Mengintegrasikan Google AdMob SDK secara presisi sesuai panduan kebijakan Google.",
        "Melakukan debugging performa dan memantau interaksi pengguna harian."
      ],
      skills: ["Android Studio", "Java", "Google AdMob", "Debugging"],
      metrics: [
        { label: "Platform", value: "Android Studio" },
        { label: "Monetisasi", value: "Google AdMob SDK" }
      ]
    },

    // Proyek Pilihan
    {
      id: "project-lazismu-zakat",
      category: "project",
      title: "Sistem Hybrid Manajemen Zakat Lazismu (Tugas Akhir)",
      roleOrDegree: "Pengembang Utama (Tugas Akhir)",
      organization: "Informatika UMS x Lazismu",
      period: "2023 - 2024",
      location: "Surakarta",
      status: "Tugas Akhir S1",
      featured: true,
      summary: "Perancangan sistem manajemen zakat terintegrasi (portal web amil dan aplikasi donatur) dengan transparansi pencatatan donasi.",
      description: [
        "Perancangan dan implementasi sistem komprehensif manajemen zakat, infak, dan sedekah berbasis arsitektur hybrid (web portal administrasi & mobile interface donatur).",
        "Mengintegrasikan modul pencatatan muzakki, kriteria mustahik, verifikasi penyaluran bantuan, serta pelaporan keuangan donasi secara transparan.",
        "Menyediakan dashboard ringkas untuk memantau tren penghimpunan dana dan histori transaksi."
      ],
      skills: ["Laravel", "REST API", "Database Design", "UI/UX Figma"],
      metrics: [
        { label: "Platform", value: "Web & Mobile Hybrid" },
        { label: "Fokus", value: "Transparansi Penyaluran Zakat" }
      ]
    },

    // Pengalaman Organisasi
    {
      id: "org-pdpm-wonogiri",
      category: "organization",
      title: "Sekretaris Bidang Komunikasi, Informatika & Informasi",
      roleOrDegree: "Sekretaris Bidang Kominfo",
      organization: "PDPM Kabupaten Wonogiri",
      period: "2020 - Sekarang",
      location: "Wonogiri",
      status: "Aktif",
      featured: true,
      summary: "Mengelola tata kelola komunikasi publik, publikasi digital, dan sistem informasi organisasi tingkat daerah.",
      description: [
        "Memimpin tata kelola komunikasi publik, publikasi digital, dan sistem informasi organisasi tingkat daerah.",
        "Mengelola dokumentasi resmi, arsip korespondensi digital, dan rilis warta kegiatan organisasi ke masyarakat.",
        "Merancang strategi diseminasi informasi melalui media sosial dan platform web."
      ],
      skills: ["Komunikasi Digital", "Pengarsipan Dokumen", "Kerja Sama Tim"],
      metrics: [
        { label: "Masa Jabatan", value: "4+ Tahun (Aktif)" }
      ]
    },
    {
      id: "org-imm-ums",
      category: "organization",
      title: "Ketua Bidang Organisasi",
      roleOrDegree: "Ketua Bidang Organisasi",
      organization: "Ikatan Mahasiswa Muhammadiyah (IMM)",
      period: "2021 - 2022",
      location: "Surakarta",
      status: "Purna Tugas",
      featured: false,
      summary: "Bertanggung jawab atas konsolidasi internal pengurus, administrasi musyawarah kerja, dan evaluasi laporan berkala.",
      description: [
        "Bertanggung jawab atas konsolidasi internal, kaderisasi anggota, serta tata tertib organisasi mahasiswa.",
        "Memfasilitasi musyawarah kerja tahunan dan membantu koordinasi antar divisi.",
        "Menyusun evaluasi kinerja struktural dan laporan pertanggungjawaban (LPJ) periodik."
      ],
      skills: ["Kepemimpinan Organisasi", "Manajemen Tim", "Penyusunan LPJ"],
      metrics: [
        { label: "Jabatan", value: "Ketua Bidang" }
      ]
    },

    // Sertifikasi & Pelatihan
    {
      id: "cert-myskill-frontend",
      category: "certification",
      title: "Bootcamp Frontend JavaScript Intensive",
      roleOrDegree: "Certified Graduate",
      organization: "MySkill Indonesia",
      period: "2024",
      location: "Online",
      status: "Bersertifikat",
      summary: "Pelatihan pengembangan web berbasis JavaScript modern, DOM manipulation, asynchronous programming, dan best practices Clean Code.",
      description: [
        "Pelatihan intensif pengembangan aplikasi web berbasis JavaScript modern, DOM manipulation, asynchronous programming, dan best practices Clean Code.",
        "Mengerjakan mini-project frontend interaktif dengan standarisasi industri."
      ],
      skills: ["JavaScript ES6+", "DOM Manipulation", "Async/Await"],
      metrics: [{ label: "Penyelenggara", value: "MySkill" }]
    },
    {
      id: "cert-myskill-data-science",
      category: "certification",
      title: "Course Data Science & Analytics",
      roleOrDegree: "Certified Student",
      organization: "MySkill Indonesia",
      period: "2024",
      location: "Online",
      status: "Bersertifikat",
      summary: "Mempelajari dasar pembersihan data (data cleansing), analisis statistik deskriptif, dan interpretasi data.",
      description: [
        "Mempelajari dasar-dasar pembersihan data (data cleansing), analisis statistik deskriptif, dan interpretasi pola data untuk pengambilan keputusan bisnis."
      ],
      skills: ["Data Cleaning", "Statistik Deskriptif"],
      metrics: [{ label: "Penyelenggara", value: "MySkill" }]
    },
    {
      id: "cert-edspert-react",
      category: "certification",
      title: "Webinar React JS Fundamental",
      roleOrDegree: "Peserta & Bersertifikat",
      organization: "Edspert.id",
      period: "2023",
      location: "Online",
      status: "Bersertifikat",
      summary: "Pendalaman konsep komponen React, state management, hooks, dan integrasi consumable API pihak ketiga.",
      description: [
        "Pendalaman konsep arsitektur React, state management, hooks lifecycle, dan integrasi consumable API pihak ketiga."
      ],
      skills: ["React.js", "Hooks", "API Consumption"],
      metrics: [{ label: "Penyelenggara", value: "Edspert.id" }]
    }
  ] as ExperienceItem[]
};
