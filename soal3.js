function cekStatusPendaftaran(kuota, jumlahTerdaftar) {
    if (jumlahTerdaftar < (kuota - 3)) {
        return "Pendaftaran diterima";
    }
    else if (jumlahTerdaftar >= (kuota - 3) && jumlahTerdaftar < kuota) {
        return "Hampir penuh";
    }
    else if (jumlahTerdaftar === kuota) {
        return "Pendaftaran ditutup";
    }
    else {
        return "Pendaftaran ditolak";
    }
}

console.log("--- HASIL PENGECEKAN STATUS ---");
console.log("Kasus 1 (10/20): ".concat(cekStatusPendaftaran(20, 10)));
console.log("Kasus 2 (18/20): ".concat(cekStatusPendaftaran(20, 18)));
console.log("Kasus 3 (20/20): ".concat(cekStatusPendaftaran(20, 20)));
console.log("Kasus 4 (25/20): ".concat(cekStatusPendaftaran(20, 25)));
