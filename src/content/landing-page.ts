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
  title: 'GoverOne - Workspace Implementasi ISO 27001 untuk Konsultan dan Perusahaan',
  description:
    'Kelola risk register, Statement of Applicability, dokumen, approval, dan evidence ISO 27001 bersama klien dalam satu workspace yang terstruktur.',
  canonicalPath: '/',
};

export const navigation = {
  brand: 'GoverOne',
  items: [
    { label: 'Produk', href: '#product-capabilities' },
    { label: 'Solusi', href: '#consultants' },
    { label: 'Cara Kerja', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ] satisfies NavItem[],
  primaryCta: { label: 'Jadwalkan Demo', href: '#final-cta', variant: 'primary' } satisfies Action,
};

export const hero = {
  title: 'Jalankan implementasi ISO 27001 dalam satu workspace bersama',
  body:
    'Satukan risk, control, dokumen, approval, dan evidence agar konsultan dan klien bekerja dari konteks project yang sama.',
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
      body: 'Tiap klien mengikuti struktur kerja yang berbeda.',
    },
  ] satisfies TextItem[],
  diagram: ['Risk', 'Control', 'Document', 'Approval', 'Evidence'],
};

export const transitionSection = {
  title: 'Ubah file terpisah menjadi satu catatan implementasi',
  body:
    'GoverOne menyatukan risk, control, dokumen, approval, dan evidence dalam satu workspace klien, sehingga setiap artefak punya status, relasi, dan konteks yang jelas.',
  relationship: ['Risk', 'Control', 'Document', 'Approval', 'Evidence'],
  supporting:
    'Tim tidak hanya melihat file yang tersedia. Tim memahami alasan file itu dibutuhkan dan progress implementasinya.',
};

export const howItWorks = {
  title: 'Bangun catatan implementasi lewat satu alur kerja',
  body:
    'Ikuti alur dari setup project sampai evidence agar risk, control, dokumen, dan bukti implementasi tetap berada dalam konteks yang sama.',
  steps: [
    {
      title: 'Setup project',
      body: 'Buat workspace klien dan simpan konteks awal implementasi.',
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
      body: 'Pisahkan project klien, atur member, dan bangun konteks implementasi sejak awal.',
      badge: 'Foundation',
      signal: 'Konteks project siap',
      details: ['Workspace klien', 'Project onboarding', 'Role-based access'],
      visual: ['Project klien', 'Team context', 'Access scope'],
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
  audienceTitle: 'Delivery lebih konsisten di setiap klien',
  audienceBody:
    'Bawa metode kerja yang sama ke banyak project klien, tetap fleksibel mengikuti konteks organisasi.',
  benefits: [
    {
      title: 'Kelola banyak project klien',
      body: 'Buka setiap engagement dari portfolio project tanpa bergantung pada struktur folder pribadi.',
    },
    {
      title: 'Gunakan struktur delivery yang sama',
      body: 'Risk, control, dokumen, dan evidence mengikuti pola kerja yang konsisten di setiap project.',
    },
    {
      title: 'Review bersama klien',
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
  cta: { label: 'Jadwalkan Demo', href: '#final-cta', variant: 'outline' } satisfies Action,
};

export const traceability = {
  title: 'Setiap evidence punya konteks',
  body:
    'Hubungkan risk, control, dokumen, owner, dan status implementasi dalam satu alur yang mudah diperiksa kembali.',
  frameTitle: 'Traceability map',
  frameCaption:
    'Satu control dapat ditelusuri ke alasan, dokumen pendukung, dan bukti penerapannya.',
  map: {
    control: 'Pengendalian akses ditetapkan',
    risk: 'Akses tidak sah ke informasi penting',
    document: 'Kebijakan dan prosedur akses',
    evidence: 'Review akses dan bukti penerapan',
    owner: 'PIC, progress, dan keputusan review',
  },
};

export const comparison = {
  title: 'Dibangun untuk implementasi ISO 27001, bukan sekadar menyimpan file',
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
      limitation: 'Struktur implementasi ISO 27001 terjaga dari risk sampai evidence',
      highlight: true,
    },
  ] satisfies ComparisonRow[],
  supporting:
    'GoverOne tidak mencoba menjadi semua jenis GRC tool. Fokusnya adalah pekerjaan harian konsultan dan klien saat membangun implementasi ISO 27001 bersama.',
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
  title: 'Satukan pekerjaan ISO 27001 tanpa kehilangan konteks',
  body:
    'Tunjukkan workflow Anda hari ini. Kami akan bantu petakan risk, control, dokumen, approval, dan evidence ke dalam satu workspace bersama.',
  submitLabel: 'Jadwalkan Demo',
  microcopy:
    'Demo disesuaikan untuk konsultan individual, consulting firm, atau perusahaan yang sedang bekerja bersama konsultan.',
  leadFormFields: [
    'Nama',
    'Email kerja',
    'Tipe organisasi: Konsultan / Perusahaan',
    'Jumlah proyek atau entitas aktif',
    'Apakah sedang menjalankan ISO 27001?',
    'Catatan kebutuhan',
    'Jadwal demo yang diinginkan',
  ],
};

export const footer = {
  product: [
    { label: 'Overview', href: '#hero' },
    { label: 'Fitur', href: '#product-capabilities' },
    { label: 'Cara Kerja', href: '#how-it-works' },
  ],
  solutions: [
    { label: 'Untuk Konsultan', href: '#consultants' },
    { label: 'Untuk Perusahaan', href: '#consultants' },
  ],
  company: [
    { label: 'Kontak', href: '#final-cta' },
    { label: 'FAQ', href: '#faq' },
  ],
  closingLine: 'Workspace implementasi ISO 27001 untuk konsultan dan klien, dari risk sampai evidence.',
};
