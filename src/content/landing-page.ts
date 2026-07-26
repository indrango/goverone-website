import type {
  Action,
  Benefit,
  Capability,
  ComparisonRow,
  NavItem,
  Step,
  TextItem,
} from '../types/content';

export const seo = {
  title: 'GoverOne — Workspace Implementasi ISO 27001 untuk Konsultan dan Perusahaan',
  description:
    'Kelola risk register, Statement of Applicability, dokumen, approval, dan evidence ISO 27001 bersama client dalam satu workspace yang terstruktur.',
  canonicalPath: '/',
};

export const navigation = {
  brand: 'GoverOne',
  items: [
    { label: 'Product', href: '#product-capabilities' },
    { label: 'Untuk Konsultan', href: '#consultants' },
    { label: 'Untuk Perusahaan', href: '#companies' },
    { label: 'Cara Kerja', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ] satisfies NavItem[],
  primaryCta: { label: 'Jadwalkan Demo', href: '#final-cta', variant: 'primary' } satisfies Action,
};

export const hero = {
  eyebrow: 'Workspace Implementasi ISO 27001 untuk Konsultan & Klien',
  title: 'Satu workspace untuk menjalankan setiap proyek ISO 27001.',
  body:
    'Kelola project setup, risk register, Statement of Applicability, dokumen, approval, dan evidence bersama client—tanpa memisahkan proses implementasi ke banyak spreadsheet, folder, dan percakapan.',
  actions: [
    { label: 'Jadwalkan Demo', href: '#final-cta', variant: 'primary' },
    { label: 'Lihat Cara Kerja', href: '#how-it-works', variant: 'secondary' },
  ] satisfies Action[],
  supportingLine:
    'Dibangun khusus untuk proses implementasi ISO/IEC 27001 oleh konsultan dan tim perusahaan.',
};

export const problemSection = {
  title: 'Masalahnya bukan kekurangan template. Masalahnya, seluruh implementasi berjalan terpisah.',
  paragraphs: [
    'Risk register disimpan di spreadsheet. Statement of Applicability berada di file lain. Dokumen berpindah melalui email. Evidence masuk ke folder tanpa konteks yang jelas.',
    'Ketika semua bagian berdiri sendiri, konsultan harus terus menyusun ulang status project dan client kesulitan memahami hubungan antara risk, control, dokumen, dan bukti implementasi.',
  ],
  cards: [
    {
      title: 'Konteks project mudah hilang',
      body: 'Keputusan, revisi, dan hasil diskusi tersebar di meeting notes, chat, email, dan file pribadi.',
    },
    {
      title: 'Versi dan approval sulit ditelusuri',
      body: 'Tim tidak selalu tahu dokumen mana yang masih draft, sedang direview, sudah disetujui, atau perlu direvisi.',
    },
    {
      title: 'Evidence tidak terhubung ke control',
      body: 'File mungkin sudah tersedia, tetapi alasan file tersebut relevan dan control yang didukungnya tidak terlihat jelas.',
    },
    {
      title: 'Setiap client dimulai dari awal',
      body: 'Struktur file dan cara kerja berbeda-beda, sehingga kualitas delivery terlalu bergantung pada kebiasaan masing-masing konsultan.',
    },
  ] satisfies TextItem[],
  diagram: ['Spreadsheet', 'Drive', 'Email', 'Chat'],
};

export const transitionSection = {
  title: 'Ubah kumpulan file menjadi catatan implementasi yang saling terhubung.',
  body:
    'GoverOne memberikan satu struktur kerja untuk setiap client project. Risk, control, document, approval, dan evidence dikelola dalam konteks yang sama sehingga tim dapat memahami bukan hanya apa yang tersedia, tetapi juga mengapa hal tersebut dibutuhkan dan bagaimana statusnya.',
  relationship: ['Project', 'Risk', 'Control & Statement of Applicability', 'Document', 'Approval & Version', 'Evidence'],
  supporting:
    'Setiap bagian tetap dapat dikelola secara mandiri, tetapi tidak lagi kehilangan hubungan dengan bagian implementasi lainnya.',
};

export const howItWorks = {
  title: 'Satu alur kerja dari project setup hingga bukti implementasi.',
  steps: [
    {
      title: 'Siapkan client project',
      body: 'Buat project, masukkan konteks awal, dan tambahkan konsultan serta anggota tim client ke workspace yang sesuai.',
    },
    {
      title: 'Kelola asset dan risk',
      body: 'Catat asset, identifikasi risk, nilai tingkat risikonya, dan dokumentasikan keputusan acceptance atau treatment.',
    },
    {
      title: 'Tentukan control dan SoA',
      body: 'Kelola applicability serta implementation status Annex A control dan hubungkan control dengan risk yang relevan.',
    },
    {
      title: 'Susun dan review dokumen',
      body: 'Gunakan template, buat dokumen dalam project, ajukan approval, tangani revisi, dan pertahankan version history.',
    },
    {
      title: 'Hubungkan evidence',
      body: 'Upload evidence dan kaitkan dengan control agar bukti implementasi tersimpan bersama konteks yang mendukungnya.',
    },
  ] satisfies Step[],
  cta: { label: 'Lihat Demo Alur Project', href: '#final-cta', variant: 'outline' } satisfies Action,
};

export const capabilities = {
  title: 'Fondasi yang dibutuhkan untuk mengelola implementasi ISO 27001.',
  items: [
    {
      title: 'Client project workspace',
      body: 'Kelola beberapa project client dari satu workspace dan pisahkan member serta akses berdasarkan project.',
      badge: 'Portfolio',
    },
    {
      title: 'Project onboarding',
      body: 'Bangun struktur awal project dan simpan informasi penting sebagai fondasi implementasi.',
      badge: 'Onboarding',
    },
    {
      title: 'Asset & risk register',
      body: 'Kelola asset, risk assessment, risk scoring, acceptance, dan treatment dalam konteks satu project.',
      badge: 'Risk',
    },
    {
      title: 'Control mapping & SoA',
      body: 'Tentukan applicability, implementation status, linked risk, dan progress Annex A control.',
      badge: 'Controls',
    },
    {
      title: 'Document lifecycle',
      body: 'Buat, simpan, review, approve, reject, revise, dan archive dokumen dengan riwayat versi yang jelas.',
      badge: 'Documents',
    },
    {
      title: 'Document templates',
      body: 'Kelola reusable templates untuk membantu tim memulai dokumen dengan struktur yang lebih konsisten.',
      badge: 'Templates',
    },
    {
      title: 'Evidence management',
      body: 'Upload, simpan, download, dan hubungkan evidence dengan control yang didukung.',
      badge: 'Evidence',
    },
    {
      title: 'Role-based collaboration',
      body: 'Atur workspace dan project member agar konsultan dan client dapat bekerja dalam akses yang sesuai.',
      badge: 'Access',
    },
  ] satisfies Capability[],
};

export const consultants = {
  eyebrow: 'Untuk Konsultan ISO 27001',
  title: 'Berikan cara kerja yang konsisten kepada setiap client.',
  body:
    'GoverOne membantu tim konsultasi membawa struktur delivery yang sama ke setiap project tanpa menghilangkan kebutuhan untuk menyesuaikan implementasi dengan konteks client.',
  benefits: [
    {
      title: 'Lihat seluruh client project dalam satu tempat',
      body: 'Gunakan project portfolio untuk membuka dan mengelola setiap engagement tanpa bergantung pada struktur folder pribadi.',
    },
    {
      title: 'Bangun struktur implementasi yang konsisten',
      body: 'Kelola risk, control, dokumen, dan evidence melalui pola yang sama pada setiap project.',
    },
    {
      title: 'Gunakan kembali document templates',
      body: 'Kurangi kebutuhan memulai dokumen dari halaman kosong sambil tetap menyesuaikannya dengan organisasi client.',
    },
    {
      title: 'Review bersama client di dalam project',
      body: 'Minta approval, tangani rejection atau revision, dan pertahankan riwayat dokumen dalam workspace yang sama.',
    },
    {
      title: 'Kurangi ketergantungan pada ingatan konsultan',
      body: 'Simpan hubungan antara keputusan risiko, control yang diterapkan, dokumen pendukung, dan evidence di dalam sistem.',
    },
  ] satisfies Benefit[],
  cta: { label: 'Jadwalkan Demo untuk Tim Konsultan', href: '#final-cta', variant: 'primary' } satisfies Action,
  supporting: 'GoverOne memperkuat metode dan judgment konsultan—bukan menggantikannya.',
};

export const companies = {
  eyebrow: 'Untuk ISO PIC dan Tim Perusahaan',
  title: 'Pahami apa yang sedang dibangun bersama konsultan Anda.',
  body:
    'GoverOne memberikan satu workspace bersama agar tim perusahaan dapat mengikuti implementasi, mengakses dokumen yang relevan, menyelesaikan review, dan mengumpulkan evidence tanpa kehilangan konteks project.',
  benefits: [
    {
      title: 'Satu tempat untuk catatan implementasi',
      body: 'Risk, control, dokumen, dan evidence tidak lagi tersebar di banyak channel.',
    },
    {
      title: 'Kolaborasi sesuai peran',
      body: 'Libatkan ISO PIC, management, approver, dan anggota project melalui workspace dan project access.',
    },
    {
      title: 'Approval dokumen yang dapat ditelusuri',
      body: 'Lihat status dokumen, berikan keputusan approval, dan akses revision history.',
    },
    {
      title: 'Evidence memiliki konteks',
      body: 'Simpan evidence bersama control yang didukung agar lebih mudah dipahami saat dibutuhkan.',
    },
    {
      title: 'Pengetahuan tidak berhenti di percakapan',
      body: 'Catatan project tetap tersusun dalam workspace dan tidak hanya tersimpan di akun pribadi atau chat.',
    },
  ] satisfies Benefit[],
  cta: { label: 'Lihat Cara Tim Perusahaan Menggunakan GoverOne', href: '#final-cta', variant: 'outline' } satisfies Action,
};

export const traceability = {
  title: 'Jangan hanya menyimpan dokumen. Hubungkan alasan, keputusan, dan buktinya.',
  body:
    'Sebuah dokumen atau evidence memiliki nilai lebih besar ketika tim dapat melihat risk yang melatarbelakanginya, control yang diterapkan, dan status implementasinya.',
  example: [
    'Risk',
    'Akses tidak sah ke informasi penting',
    'Control',
    'Pengendalian akses ditetapkan',
    'Document',
    'Kebijakan dan prosedur akses',
    'Evidence',
    'Review akses dan bukti penerapan',
  ],
  supporting:
    'GoverOne membantu tim membangun traceability yang lebih mudah dipahami selama implementasi dan ketika informasi perlu diperiksa kembali.',
};

export const comparison = {
  title: 'Dibangun untuk pekerjaan implementasi, bukan sekadar penyimpanan file.',
  rows: [
    {
      label: 'Spreadsheet',
      manageable: 'Daftar risk, control, atau progress',
      limitation: 'Hubungan antar-record dan lifecycle dokumen sulit dipertahankan',
    },
    {
      label: 'Shared Drive',
      manageable: 'Penyimpanan file',
      limitation: 'Status, approval, dan konteks implementasi tidak terstruktur',
    },
    {
      label: 'Generic project tool',
      manageable: 'Task dan deadline',
      limitation: 'Tidak memiliki struktur risk, SoA, document, dan evidence ISO 27001',
    },
    {
      label: 'GoverOne',
      manageable: 'Project, risk, control/SoA, document lifecycle, dan evidence',
      limitation: 'Dibangun khusus untuk implementasi ISO 27001',
      highlight: true,
    },
  ] satisfies ComparisonRow[],
  supporting:
    'GoverOne tidak mencoba menjadi semua jenis GRC tool. Produk ini berfokus pada pekerjaan yang dilakukan konsultan dan client ketika membangun implementasi ISO 27001 bersama.',
};

export const trustBoundary = {
  title: 'Peran profesional tetap berada pada orang yang bertanggung jawab.',
  body:
    'GoverOne membantu menyusun pekerjaan dan catatan implementasi. GoverOne tidak:',
  items: [
    'Menerbitkan sertifikat ISO 27001',
    'Bertindak sebagai certification body',
    'Menggantikan konsultan atau auditor',
    'Menentukan bahwa organisasi pasti compliant',
    'Menjamin kelulusan audit',
    'Membuat keputusan acceptance atau approval tanpa pengguna yang berwenang',
  ],
  supporting:
    'Konsultan memberikan arahan profesional. Perusahaan memiliki dan menjalankan ISMS. Auditor atau certification body independen memberikan penilaian sesuai kewenangannya.',
};

export const finalCta = {
  title: 'Mulai satu proyek ISO 27001 dengan struktur yang lebih baik.',
  body:
    'Tunjukkan bagaimana tim Anda mengelola client project hari ini. Kami akan memperlihatkan bagaimana GoverOne dapat menyatukan risk, control, dokumen, approval, dan evidence dalam satu workspace bersama.',
  actions: [
    { label: 'Jadwalkan Demo', href: '#final-cta', variant: 'primary' },
    { label: 'Diskusikan Pilot Project', href: '#footer', variant: 'secondary' },
  ] satisfies Action[],
  microcopy:
    'Demo dapat disesuaikan untuk konsultan individual, consulting firm, atau perusahaan yang sedang bekerja bersama konsultan.',
  leadFormFields: [
    'Nama',
    'Email kerja',
    'Tipe organisasi: Konsultan / Perusahaan',
    'Jumlah active project atau entity',
    'Apakah sedang menjalankan ISO 27001?',
    'Catatan kebutuhan',
    'Preferred demo schedule',
  ],
};

export const footer = {
  product: [
    { label: 'Overview', href: '#hero' },
    { label: 'Features', href: '#product-capabilities' },
    { label: 'Cara Kerja', href: '#how-it-works' },
  ],
  solutions: [
    { label: 'Untuk Konsultan', href: '#consultants' },
    { label: 'Untuk Perusahaan', href: '#companies' },
  ],
  company: [
    { label: 'Contact', href: '#final-cta' },
    { label: 'FAQ', href: '#faq' },
  ],
  closingLine: 'GoverOne — ISO 27001 implementation workspace for consultants and clients.',
};
