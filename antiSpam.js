// Konfigurasi
const maxTransitions = 5; // Maksimal perpindahan halaman
const timeWindow = 10000; // Waktu untuk reset (10 detik)
const blockDuration = 30 * 60 * 1000; // Durasi blokir (30 menit)

// Fungsi untuk mengecek apakah user diblokir
function checkBlockStatus() {
    const blockTime = localStorage.getItem('blockTime');
    if (blockTime) {
        const now = Date.now();
        if (now < parseInt(blockTime)) {
            // Jika masih dalam masa blokir, alihkan ke block.html
            window.location.href = '/block';
        } else {
            // Jika masa blokir selesai, hapus data blokir
            localStorage.removeItem('blockTime');
        }
    }
}

// Fungsi untuk memblokir user
function blockUser() {
    const blockUntil = Date.now() + blockDuration;
    localStorage.setItem('blockTime', blockUntil);
    window.location.href = '/block'; // Alihkan ke block.html
}

// Mengecek status blokir setiap kali halaman dimuat
checkBlockStatus();

// Pemantauan aktivitas user
let transitionTimes = [];
document.addEventListener('DOMContentLoaded', () => {
    const now = Date.now();
    transitionTimes.push(now);

    // Hapus data yang lebih lama dari timeWindow
    transitionTimes = transitionTimes.filter(time => now - time < timeWindow);

    // Jika jumlah perpindahan halaman melebihi batas, blokir user
    if (transitionTimes.length > maxTransitions) {
        blockUser();
    }
});