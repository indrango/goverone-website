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
  title: 'Jalankan implementasi ISO 27001 dalam satu workspace bersama',
  body:
    'Satukan risk, control, dokumen, approval, dan evidence agar konsultan dan client bekerja dari konteks project yang sama.',
  actions: [
    { label: 'Jadwalkan Demo', href: '#final-cta', variant: 'primary' },
    { label: 'Lihat Cara Kerja', href: '#how-it-works', variant: 'secondary' },
  ] satisfies Action[],
};

export const problemSection = {
  title: 'Risk, dokumen, approval, dan evidence hidup di tempat berbeda',
  paragraphs: [
    'Saat project tersebar di spreadsheet, folder, email, dan chat, status implementasi harus dirangkai ulang setiap kali tim ingin mengambil keputusan.',
    'Akibatnya: progress terlihat sibuk, tapi konteks sulit dipercaya.',
  ],
  cards: [
    {
      title: 'Konteks hilang',
      body: 'Keputusan dan revisi tersebar di banyak tempat.',
    },
    {
      title: 'Approval kabur',
      body: 'Draft, review, approved, dan revisi sulit dibedakan.',
    },
    {
      title: 'Evidence lepas konteks',
      body: 'File tersedia, tapi tidak jelas mendukung control apa.',
    },
    {
      title: 'Delivery tidak konsisten',
      body: 'Tiap client mengikuti struktur kerja yang berbeda.',
    },
  ] satisfies TextItem[],
  diagram: ['Risk', 'Control', 'Document', 'Approval', 'Evidence'],
};

export const transitionSection = {
  title: 'Ubah file terpisah menjadi satu catatan implementasi',
  body:
    'GoverOne menyatukan risk, control, dokumen, approval, dan evidence dalam satu workspace client, sehingga setiap artefak punya status, relasi, dan konteks yang jelas.',
  relationship: ['Risk', 'Control', 'Document', 'Approval', 'Evidence'],
  supporting:
    'Tim tidak hanya melihat file yang tersedia. Tim memahami alasan file itu dibutuhkan dan progress implementasinya.',
};

export const howItWorks = {
  title: 'Bangun catatan implementasi lewat satu alur kerja',
  steps: [
    {
      title: 'Setup project',
      body: 'Buat workspace client dan simpan konteks awal implementasi.',
    },
    {
      title: 'Petakan risk',
      body: 'Catat asset, risk, impact, dan treatment decision.',
    },
    {
      title: 'Hubungkan control',
      body: 'Tentukan applicability Annex A dan relasikan ke risk terkait.',
    },
    {
      title: 'Review dokumen',
      body: 'Susun policy, ajukan approval, dan simpan version history.',
    },
    {
      title: 'Lampirkan evidence',
      body: 'Kaitkan bukti implementasi langsung ke control yang didukung.',
    },
  ] satisfies Step[],
  cta: { label: 'Lihat Alur Kerja', href: '#final-cta', variant: 'outline' } satisfies Action,
};

export const capabilities = {
  title: 'Satu workspace untuk menjalankan ISO 27001',
  body:
    'Kelola project, risk, control, dokumen, dan evidence dalam alur kerja yang terhubung sejak onboarding sampai audit readiness.',
  items: [
    {
      title: 'Project foundation',
      body: 'Pisahkan project client, atur member, dan bangun konteks implementasi sejak awal.',
      badge: 'Foundation',
      signal: 'Konteks project siap',
      details: ['Client workspace', 'Project onboarding', 'Role-based access'],
      visual: ['Client project', 'Team context', 'Access scope'],
    },
    {
      title: 'Risk & control',
      body: 'Hubungkan asset, risk assessment, treatment plan, dan Annex A control dalam satu alur keputusan.',
      badge: 'Traceability',
      signal: 'Risk masuk ke SoA',
      details: ['Asset register', 'Risk scoring', 'Treatment plan', 'Control mapping'],
      visual: ['Asset', 'Risk', 'Treatment', 'Control'],
      featured: true,
    },
    {
      title: 'Document system',
      body: 'Buat dokumen dari template, jalankan review, approval, revision, dan version history tanpa berpindah tempat.',
      badge: 'Review flow',
      signal: 'Dokumen punya riwayat',
      details: ['Templates', 'Review', 'Approval', 'Version history'],
      visual: ['Draft', 'Review', 'Approved', 'Archived'],
    },
    {
      title: 'Evidence readiness',
      body: 'Simpan evidence dan hubungkan langsung ke control yang didukung agar audit trail lebih mudah ditelusuri.',
      badge: 'Audit trail',
      signal: 'Evidence siap ditelusuri',
      details: ['Evidence file', 'Linked control', 'Download access'],
      visual: ['Control A.5.15', 'Evidence attached', 'Traceable record'],
    },
  ] satisfies Capability[],
};

export const consultants = {
  title: 'Dua pihak bekerja dari struktur project yang sama',
  body:
    'Konsultan dapat menjaga pola delivery. Tim perusahaan dapat mengikuti progress, review dokumen, dan memahami evidence dalam konteks yang sama.',
  audienceLabel: 'Untuk Konsultan',
  audienceTitle: 'Delivery lebih konsisten di setiap client',
  audienceBody:
    'Bawa metode kerja yang sama ke banyak engagement tanpa kehilangan ruang untuk menyesuaikan implementasi dengan konteks organisasi client.',
  benefits: [
    {
      title: 'Kelola banyak client project',
      body: 'Buka setiap engagement dari portfolio project tanpa bergantung pada struktur folder pribadi.',
    },
    {
      title: 'Gunakan struktur delivery yang sama',
      body: 'Risk, control, dokumen, dan evidence mengikuti pola kerja yang konsisten di setiap project.',
    },
    {
      title: 'Review bersama client',
      body: 'Minta approval, tangani revision, dan pertahankan riwayat dokumen dalam workspace yang sama.',
    },
  ] satisfies Benefit[],
  workflowTitle: 'Satu alur kerja yang dipahami bersama',
  workflowBody:
    'GoverOne menghubungkan pekerjaan konsultan dengan keputusan, dokumen, dan evidence yang perlu dipahami tim perusahaan.',
  workflow: ['Project', 'Risk & control', 'Document review', 'Evidence', 'History'],
  cta: { label: 'Jadwalkan Demo', href: '#final-cta', variant: 'primary' } satisfies Action,
};

export const companies = {
  audienceLabel: 'Untuk Perusahaan',
  audienceTitle: 'Implementasi lebih mudah diikuti',
  audienceBody:
    'ISO PIC, approver, dan management dapat melihat konteks project yang sama tanpa menunggu rekap manual dari banyak channel.',
  benefits: [
    {
      title: 'Ikuti progress implementasi',
      body: 'Lihat dokumen, status review, dan catatan project dalam workspace yang sama.',
    },
    {
      title: 'Review dan approve dokumen',
      body: 'Berikan keputusan approval, revision, atau rejection dengan riwayat yang dapat ditelusuri.',
    },
    {
      title: 'Pahami konteks evidence',
      body: 'Evidence tersimpan bersama control yang didukung agar lebih mudah dipahami saat dibutuhkan.',
    },
  ] satisfies Benefit[],
};

export const traceability = {
  title: 'Jangan hanya menyimpan dokumen. Hubungkan alasan, keputusan, dan buktinya',
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
  title: 'Dibangun untuk pekerjaan implementasi, bukan sekadar penyimpanan file',
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
  title: 'Peran profesional tetap berada pada orang yang bertanggung jawab',
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
  title: 'Mulai satu proyek ISO 27001 dengan struktur yang lebih baik',
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
