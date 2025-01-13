console.log("Anti-spam script aktif");

// Inisialisasi variabel
let transitionTimes = [];
const maxTransitions = 5; // Jumlah maksimal perpindahan halaman dalam 1 detik
const blockDuration = 30 * 60 * 1000; // Durasi blokir dalam milidetik (30 menit)

// Fungsi untuk memeriksa aktivitas mencurigakan
function checkSuspiciousActivity() {
  console.log("Memeriksa aktivitas mencurigakan...");
  const now = Date.now();
  transitionTimes.push(now);

  // Hapus data lama yang tidak relevan
  transitionTimes = transitionTimes.filter(time => now - time <= 1000);

  console.log("Transition times (jumlah):", transitionTimes.length);

  // Jika jumlah perpindahan halaman melebihi batas
  if (transitionTimes.length > maxTransitions) {
    console.log("User terdeteksi mencurigakan!");
    alert("Anda diblokir selama 30 menit karena aktivitas mencurigakan!");
    localStorage.setItem("blockedUntil", now + blockDuration);
  }
}

// Periksa apakah user sedang diblokir
const blockedUntil = localStorage.getItem("blockedUntil");
if (blockedUntil && Date.now() < blockedUntil) {
  console.log("User sedang diblokir hingga:", new Date(parseInt(blockedUntil)));
  alert("Anda sedang diblokir hingga " + new Date(parseInt(blockedUntil)).toLocaleString());
} else {
  localStorage.removeItem("blockedUntil");
}

// Deteksi aktivitas mencurigakan setiap kali halaman dimuat
window.addEventListener("load", () => {
  console.log("Halaman dimuat. Memeriksa aktivitas mencurigakan...");
  checkSuspiciousActivity();
});