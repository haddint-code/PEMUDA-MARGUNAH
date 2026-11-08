/* ============================================================
   DATA KONTEN — edit file ini untuk menambah/ganti foto & video.
   Semua path relatif terhadap folder situs. Tidak perlu server.
   ============================================================ */

/* MEMORIES — tambahkan foto baru ke array tahun yang sesuai.
   Format: { src:"assets/memories/2027/foto-01.webp", ratio:"4/3", alt:"...", caption:"..." }
   ratio = lebar/tinggi foto (contoh "4/3" landscape, "3/4" potret, "1/1" kotak).
   Jika foto kurang dari `slots`, sisanya otomatis jadi placeholder. */
window.MEMORIES = [
  { year: 2026, slots: 6, note: "Dokumentasi tahun 2026.", items: [
    { src: "assets/memories/2026/foto-01.webp", ratio: "4/3", alt: "Anggota komunitas berfoto bersama dengan kaos hitam", caption: "" },
    { src: "assets/memories/2026/foto-02.webp", ratio: "3/4", alt: "Anggota komunitas berfoto di depan panggung sound system", caption: "" },
    { src: "assets/memories/2026/foto-03.webp", ratio: "3/4", alt: "Patung besar diarak di jalan bersama warga", caption: "" }
  ]},
  { year: 2027, slots: 6, note: "Dokumentasi 2027 belum tersedia. Slot di bawah siap diisi.", items: [
    /* contoh: { src:"assets/memories/2027/foto-01.webp", ratio:"4/3", alt:"", caption:"" }, */
  ]}
];

/* MERCHANDISE — kategori, produk, foto, dan video. */
window.MERCH = [
  { id: "kaos", title: "Kaos Komunitas", intro: "Sablon dengan ilustrasi khas komunitas. Tersedia dalam beberapa edisi dan model.",
    items: [
      { src: "assets/merch/kaos/2026-lengan-pendek.webp", ratio: "1/1", name: "Edisi 2026 — Lengan Pendek", desc: "Hitam, ilustrasi malam berbulan di bagian depan, nama komunitas di punggung." },
      { src: "assets/merch/kaos/2026-lengan-panjang.webp", ratio: "1204/1600", name: "Edisi 2026 — Lengan Panjang", desc: "Hitam, model lengan panjang dengan ilustrasi yang sama. Tersedia ukuran S–XXL dan custom." },
      { src: "assets/merch/kaos/2027-lengan-pendek.webp", ratio: "1066/1600", name: "Edisi 2027 — Lengan Pendek", desc: "Putih dan navy, desain depan–belakang dengan logo Brotherhood dan ilustrasi pohon." },
      { src: "assets/merch/kaos/2027-lengan-panjang.webp", ratio: "2/3", name: "Edisi 2027 — Lengan Panjang", desc: "Putih dan navy, model lengan panjang dengan detail cetak di lengan." }
    ],
    video: { src: "assets/video/proses-sablon.mp4", poster: "assets/video/proses-sablon-poster.webp", title: "Proses sablon", desc: "Dokumentasi proses pencetakan desain pada kaos." }
  },
  { id: "gantungan", title: "Gantungan Kunci", intro: "Foto dan video gantungan kunci belum tersedia. Slot siap diisi.",
    items: [ /* { src:"assets/merch/gantungan-kunci/foto-01.webp", ratio:"1/1", name:"...", desc:"..." } */ ],
    slots: 3,
    video: null
  }
];

/* HOME — foto pilihan diambil dari MEMORIES (nomor urut foto 2026). */
window.FEATURED = [0, 1, 2];
