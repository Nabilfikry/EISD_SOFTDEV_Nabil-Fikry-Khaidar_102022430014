Jawaban Soal 1: Prioritas Perbaikan Sistem
Prioritas Utama:
Implementasi Validasi Sisi Server dan Database.

Alasan:
Jika hanya boleh memperbaiki satu hal, kita harus memilih lapisan pertahanan terakhir yang menjaga integritas data. Memperbaiki frontend (UI) saja tidak cukup karena validasi di browser mudah dimanipulasi atau di-bypass (misal: mematikan JavaScript atau serangan via API/Postman).

Dengan menerapkan validasi yang ketat di Backend dan Database, kita menyelesaikan 3 masalah sekaligus:

1. Masalah Data Ganda: Menerapkan Unique Constraint pada kolom email di database akan secara otomatis menolak input kedua jika email yang sama didaftarkan lagi, meskipun user menekan tombol berkali-kali.

2. Masalah Kuota Jebol: Menerapkan pengecekan kuota secara Atomic/Transactional di backend sebelum menyimpan data akan mencegah Race Condition, sehingga kelas tidak akan terisi melebihi kapasitas.

3. Masalah Data Asal: Validasi format (Regex untuk email, panjang karakter untuk nama) di backend menjamin data sampah tidak akan pernah masuk ke database, menjaga kebersihan data untuk rekap panitia.

Kesimpulan: 
Frontend membuat sistem nyaman digunakan, tetapi Backend memastikan sistem bekerja dengan benar dan aman.