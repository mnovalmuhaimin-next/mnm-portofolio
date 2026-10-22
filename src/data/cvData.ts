export interface ExperienceItem {
  id: string;
  category: 'work' | 'project' | 'organization' | 'certification';
  title: string;
  roleOrDegree: string;
  organization: string;
  period: string;
  location: string;
  status?: string;
  description: string[];
  skills: string[];
  featured?: boolean;
  link?: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  items: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate' | 'Familiar';
    highlight?: boolean;
    description?: string;
  }[];
}

export const CV_DATA = {
  personal: {
    fullName: "Muhammad Noval Muhaimin",
    nickname: "Noval",
    title: "Fullstack Developer | Administrasi Sistem | Data Management",
    tagline: "Membangun sistem informasi tangguh dari perancangan hingga deployment, memadukan keahlian Fullstack web modern dengan manajemen data yang presisi.",
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
    bio: "Lulusan S1 Teknik Informatika Universitas Muhammadiyah Surakarta (IPK 3.35/4.00) dengan pengalaman komprehensif mengembangkan sistem informasi berbasis web, mengelola basis data relasional, serta mendukung proses administrasi digital. Terbiasa bekerja mandiri secara end-to-end mulai dari analisis kebutuhan bisnis, perancangan arsitektur, implementasi frontend & backend, penulisan pengujian fungsional, hingga koordinasi deployment produksi.",
    gpa: "3.35 / 4.00",
    education: {
      degree: "S1 Teknik Informatika",
      institution: "Universitas Muhammadiyah Surakarta (UMS)",
      period: "2020 - 2024",
      gpa: "3.35 / 4.00",
      thesis: "Sistem Hybrid Manajemen Zakat Lazismu (Web & Mobile)"
    },
    languages: [
      { name: "Bahasa Indonesia", level: "Penutur Asli / Fasih (Native)" },
      { name: "Bahasa Inggris", level: "Menengah (Intermediate / Professional Working)" }
    ]
  },

  stats: [
    { label: "IPK Kelulusan S1", value: "3.35", suffix: "/4.00", description: "Teknik Informatika UMS" },
    { label: "Proyek Sistem Informasi", value: "6+", suffix: "", description: "Web, Mobile & Data Management" },
    { label: "Pengalaman Kerja & Magang", value: "4", suffix: " Posisi", description: "Fullstack, Sensus BPS & Android" },
    { label: "Pengalaman Organisasi", value: "4+", suffix: " Tahun", description: "Kepemimpinan di PDPM & IMM" }
  ],

  skillCategories: [
    {
      id: "web-dev",
      name: "Web & Fullstack Development",
      iconName: "Code2",
      description: "Pengembangan aplikasi web end-to-end dengan arsitektur modern, performa tinggi, dan clean code.",
      items: [
        { name: "Laravel", level: "Advanced", highlight: true, description: "MVC, Eloquent ORM, Service Layer, Blade" },
        { name: "PHP", level: "Advanced", highlight: true, description: "OOP, modern PHP 8+, PSR Standards" },
        { name: "Next.js", level: "Advanced", highlight: true, description: "App Router, Server Components, SSR/SSG" },
        { name: "React.js", level: "Advanced", highlight: true, description: "Hooks, Context API, Modular Components" },
        { name: "REST API", level: "Expert", highlight: true, description: "API Design, Endpoint Routing, JSON Specs" },
        { name: "Tailwind CSS", level: "Advanced", highlight: false, description: "Responsive Utility-First Styling" },
        { name: "JavaScript / TypeScript", level: "Advanced", highlight: false, description: "ES6+, Async/Await, Strict Types" }
      ]
    },
    {
      id: "database",
      name: "Database & Access Control",
      iconName: "Database",
      description: "Pengelolaan struktur data terstruktur, optimasi relasi, dan sistem otentikasi serta otorisasi yang aman.",
      items: [
        { name: "PostgreSQL", level: "Advanced", highlight: true, description: "Relational modeling, indexing, queries" },
        { name: "MySQL", level: "Advanced", highlight: true, description: "Normalization, stored procedures, joins" },
        { name: "Laravel Sanctum", level: "Expert", highlight: true, description: "Token authentication, SPA security" },
        { name: "Role & Permission (RBAC)", level: "Expert", highlight: true, description: "Multi-user access control, policy gates" },
        { name: "Database Migration", level: "Advanced", highlight: false, description: "Schema versioning, seeding, rollback" }
      ]
    },
    {
      id: "testing",
      name: "Testing & Dokumentasi",
      iconName: "FileCheck2",
      description: "Jaminan mutu aplikasi melalui pengujian fungsional terarah dan dokumentasi teknis yang jelas.",
      items: [
        { name: "Functional Testing", level: "Advanced", highlight: true, description: "End-to-end user scenario validation" },
        { name: "Debugging & Troubleshooting", level: "Expert", highlight: true, description: "Error isolation, log analysis" },
        { name: "API Documentation", level: "Advanced", highlight: true, description: "Postman collections, Swagger/OpenAPI" },
        { name: "Git / GitLab / GitHub", level: "Advanced", highlight: false, description: "Branching strategies, merge requests" }
      ]
    },
    {
      id: "admin-data",
      name: "Administrasi & Manajemen Data",
      iconName: "ClipboardList",
      description: "Akurasi tinggi dalam verifikasi data, konsistensi pelaporan, dan tata kelola arsip digital.",
      items: [
        { name: "Data Entry & Validation", level: "Expert", highlight: true, description: "Pemeriksaan konsistensi & integritas data" },
        { name: "Document Management", level: "Advanced", highlight: true, description: "Pengarsipan digital & standardisasi format" },
        { name: "Reporting & Analytics", level: "Advanced", highlight: true, description: "Penyusunan laporan berkala & rekapitulasi" },
        { name: "Pemeriksaan Sensus Lapangan", level: "Advanced", highlight: false, description: "Standar metodologi BPS" }
      ]
    },
    {
      id: "tools",
      name: "Tools & Software",
      iconName: "Wrench",
      description: "Perangkat lunak penunjang produktivitas, desain antarmuka, dan pengembangan sistem.",
      items: [
        { name: "Microsoft Excel", level: "Expert", highlight: true, description: "VLOOKUP, Pivot Table, Rumus Logika" },
        { name: "Microsoft Word & PPT", level: "Expert", highlight: false, description: "Dokumen formal & presentasi bisnis" },
        { name: "Android Studio", level: "Intermediate", highlight: false, description: "Java/Kotlin, Gradle, Layout XML" },
        { name: "Figma & Canva", level: "Advanced", highlight: false, description: "UI Wireframing, mockup, aset visual" },
        { name: "Postman", level: "Expert", highlight: true, description: "Testing endpoint, environment variables" }
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
      location: "Surakarta, Jawa Tengah",
      status: "Selesai & Diterapkan",
      featured: true,
      description: [
        "Mengembangkan sistem informasi peminjaman tempat dan fasilitas kampus secara mandiri dari tahap awal hingga produksi.",
        "Melakukan analisis kebutuhan stakeholder, perancangan diagram alir, skema database relasional, dan arsitektur UI/UX.",
        "Membangun frontend dan backend terintegrasi untuk mengelola siklus pengguna, ketersediaan fasilitas, reservasi jadwal, dan verifikasi birokrasi.",
        "Melaksanakan pengujian fungsional sistem, penanganan bug, serta mengoordinasikan proses deployment ke server kampus."
      ],
      skills: ["Laravel", "PHP", "MySQL", "REST API", "Tailwind CSS", "Role & Permission", "Functional Testing"],
      metrics: [
        { label: "Pengembangan", value: "Mandiri (End-to-End)" },
        { label: "Modul", value: "Fasilitas, Jadwal & Approval" },
        { label: "Dampak", value: "Digitalisasi Birokrasi Manual" }
      ]
    },
    {
      id: "ums-mybeasiswa",
      category: "work",
      title: "Sistem Informasi Manajemen MyBeasiswa",
      roleOrDegree: "Fullstack Developer",
      organization: "MyBeasiswa - Universitas Muhammadiyah Surakarta",
      period: "Selesai Juni 2026",
      location: "Surakarta, Jawa Tengah",
      status: "Produksi & Aktif",
      featured: true,
      description: [
        "Mengembangkan sistem informasi manajemen beasiswa berbasis web modern menggunakan kombinasi Laravel dan Next.js.",
        "Membangun arsitektur RESTful API yang aman dengan integrasi database PostgreSQL dan otentikasi Laravel Sanctum.",
        "Merancang sistem hak akses bertingkat (Role & Permission) untuk pendaftar mahasiswa, verifikator berkas, dan pimpinan pengambil keputusan.",
        "Menyusun dokumentasi API komprehensif dan menjalankan pengujian sistem fungsional untuk memastikan reliabilitas data beasiswa bernilai tinggi."
      ],
      skills: ["Laravel", "Next.js", "PostgreSQL", "Laravel Sanctum", "REST API", "RBAC", "Postman", "GitLab"],
      metrics: [
        { label: "Arsitektur", value: "Decoupled (Next.js + Laravel)" },
        { label: "Keamanan", value: "Sanctum Multi-Role RBAC" },
        { label: "Database", value: "PostgreSQL High Integrity" }
      ]
    },
    {
      id: "bps-sensus-2026",
      category: "work",
      title: "Mitra Sensus Ekonomi 2026",
      roleOrDegree: "Mitra Petugas Pendataan & Verifikasi",
      organization: "Badan Pusat Statistik (BPS)",
      period: "2026 (3 Bulan)",
      location: "Wilayah Penugasan BPS",
      status: "Selesai",
      featured: false,
      description: [
        "Melakukan pendataan primer dan verifikasi langsung informasi entitas usaha di lapangan sesuai metodologi baku BPS.",
        "Memeriksa kelengkapan, validitas logis, serta konsistensi data sebelum dilakukan input ke sistem pusat.",
        "Melakukan koordinasi intensif dengan koordinator tim lapangan dan pengawas guna memastikan target enumerasi tercapai 100% tepat waktu."
      ],
      skills: ["Data Verification", "Data Quality Control", "Field Coordination", "Reporting", "Analytical Thinking"],
      metrics: [
        { label: "Periode", value: "3 Bulan Intensif" },
        { label: "Ketepatan Data", value: "Standar Metodologi BPS" }
      ]
    },
    {
      id: "plus-nexus-android",
      category: "work",
      title: "Aplikasi Mobile Android & Monetisasi",
      roleOrDegree: "Android Developer",
      organization: "PT Plus Nexus",
      period: "April 2023 - Juni 2023",
      location: "Indonesia",
      status: "Selesai",
      featured: false,
      description: [
        "Mengembangkan fitur aplikasi Android interaktif menggunakan lingkungan Android Studio.",
        "Mengintegrasikan Google AdMob SDK (banner, interstitial, rewarded) secara presisi dengan kepatuhan kebijakan Google.",
        "Melakukan debugging performa, meminimalisir crash rate, serta menganalisis metrik engagement pengguna harian."
      ],
      skills: ["Android Studio", "Java / Kotlin", "Google AdMob", "Debugging", "Mobile UI", "Engagement Analytics"],
      metrics: [
        { label: "Integrasi", value: "Google AdMob SDK" },
        { label: "Fokus", value: "Performa & User Retention" }
      ]
    },

    // Proyek Pilihan
    {
      id: "project-lazismu-zakat",
      category: "project",
      title: "Sistem Hybrid Manajemen Zakat Lazismu (Tugas Akhir)",
      roleOrDegree: "Lead Designer & Developer (Final Project)",
      organization: "Program Studi Teknik Informatika UMS x Lazismu",
      period: "2023 - 2024",
      location: "Surakarta, Jawa Tengah",
      status: "Tugas Akhir S1 - Nilai A",
      featured: true,
      description: [
        "Perancangan dan implementasi sistem komprehensif manajemen zakat, infak, dan sedekah berbasis arsitektur hybrid (web portal administrasi & mobile interface donatur).",
        "Mengintegrasikan modul pencatatan muzakki, kriteria mustahik, verifikasi penyaluran bantuan, serta pelaporan keuangan donasi secara transparan.",
        "Menyediakan dashboard analytics untuk memantau tren penghimpunan dana dan histori transaksi real-time."
      ],
      skills: ["Laravel", "REST API", "Database Design", "Mobile Integration", "Financial Reporting", "UI/UX Figma"],
      metrics: [
        { label: "Jenis Proyek", value: "Sistem Hybrid Web & Mobile" },
        { label: "Target Pengguna", value: "Amil Lazismu, Muzakki & Mustahik" },
        { label: "Nilai TA", value: "Sangat Memuaskan (A)" }
      ]
    },

    // Pengalaman Organisasi
    {
      id: "org-pdpm-wonogiri",
      category: "organization",
      title: "Sekretaris Bidang Komunikasi, Informatika & Informasi",
      roleOrDegree: "Sekretaris Bidang Kominfo",
      organization: "Pimpinan Daerah Pemuda Muhammadiyah (PDPM) Kab. Wonogiri",
      period: "2020 - Sekarang",
      location: "Kabupaten Wonogiri, Jawa Tengah",
      status: "Aktif",
      featured: true,
      description: [
        "Memimpin tata kelola komunikasi publik, publikasi digital, dan sistem informasi organisasi tingkat daerah.",
        "Mengelola dokumentasi resmi, arsip korespondensi digital, dan rilis warta kegiatan organisasi ke masyarakat.",
        "Merancang strategi diseminasi informasi melalui media sosial dan platform web untuk meningkatkan keterlibatan anggota."
      ],
      skills: ["Digital Communication", "Arsip & Administrasi", "Public Relations", "Team Leadership", "Content Management"],
      metrics: [
        { label: "Masa Pengabdian", value: "4+ Tahun (Aktif)" },
        { label: "Cakupan", value: "Tingkat Kabupaten Wonogiri" }
      ]
    },
    {
      id: "org-imm-ums",
      category: "organization",
      title: "Ketua Bidang Organisasi",
      roleOrDegree: "Ketua Bidang Organisasi",
      organization: "Ikatan Mahasiswa Muhammadiyah (IMM)",
      period: "2021 - 2022",
      location: "Surakarta, Jawa Tengah",
      status: "Purna Tugas",
      featured: false,
      description: [
        "Bertanggung jawab atas konsolidasi internal, kaderisasi anggota, serta tata tertib organisasi mahasiswa.",
        "Memfasilitasi musyawarah kerja tahunan, memantau kinerja divisi, dan menyelesaikan problematika manajerial.",
        "Menyusun evaluasi kinerja struktural dan laporan pertanggungjawaban (LPJ) periodik secara terstruktur."
      ],
      skills: ["Organizational Leadership", "Konsolidasi Tim", "Manajemen Konflik", "Penyusunan LPJ", "Event Management"],
      metrics: [
        { label: "Jabatan", value: "Ketua Bidang Organisasi" },
        { label: "Periode", value: "2021 - 2022" }
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
      status: "Bersertifikat Resmi",
      featured: true,
      description: [
        "Pelatihan intensif pengembangan aplikasi web berbasis JavaScript modern, DOM manipulation, asynchronous programming, dan best practices Clean Code.",
        "Mengerjakan mini-project frontend interaktif dengan standarisasi industri."
      ],
      skills: ["JavaScript ES6+", "DOM Manipulation", "Async/Await", "Frontend Architecture"],
      metrics: [{ label: "Penerbit", value: "MySkill Indonesia" }, { label: "Tahun", value: "2024" }]
    },
    {
      id: "cert-myskill-data-science",
      category: "certification",
      title: "Online Course Data Science & Analytics",
      roleOrDegree: "Certified Student",
      organization: "MySkill Indonesia",
      period: "2024",
      location: "Online",
      status: "Bersertifikat Resmi",
      featured: false,
      description: [
        "Mempelajari dasar-dasar pembersihan data (data cleansing), analisis statistik deskriptif, dan interpretasi pola data untuk pengambilan keputusan bisnis."
      ],
      skills: ["Data Cleaning", "Data Analytics", "Statistical Analysis", "Data Visualization"],
      metrics: [{ label: "Penerbit", value: "MySkill Indonesia" }, { label: "Tahun", value: "2024" }]
    },
    {
      id: "cert-edspert-react",
      category: "certification",
      title: "Webinar & Workshop React JS Fundamental to Advanced",
      roleOrDegree: "Participant & Certified",
      organization: "Edspert.id",
      period: "2023",
      location: "Online",
      status: "Bersertifikat Resmi",
      featured: false,
      description: [
        "Pendalaman konsep arsitektur React, state management, hooks lifecycle, dan integrasi consumable API pihak ketiga."
      ],
      skills: ["React.js", "Hooks", "Component Lifecycle", "API Integration"],
      metrics: [{ label: "Penerbit", value: "Edspert.id" }, { label: "Tahun", value: "2023" }]
    }
  ] as ExperienceItem[]
};
