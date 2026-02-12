function validateRegistration(nama, email, pilihanDivisi, jumlahPeserta) {
    var isNameValid = nama.trim() !== "";
    var isEmailValid = email.trim() !== "" && email.includes("@");
    var isDivisionValid = pilihanDivisi.trim() !== "";
    var isCountValid = jumlahPeserta >= 1;

    if (isNameValid && isEmailValid && isDivisionValid && isCountValid) {
        console.log("Data valid");
    }
    else {
        console.log("Data tidak valid");
    }
}

console.log("--- HASIL VALIDASI DATA ---");
process.stdout.write("Test 1 (Semua Benar): ");
validateRegistration("Nafi", "nafi@student.telkom.ac.id", "Software Dev", 1);
process.stdout.write("Test 2 (Nama Kosong): ");
validateRegistration("", "nafi@gmail.com", "UI/UX", 1);
process.stdout.write("Test 3 (Email Salah): ");
validateRegistration("samsul", "samsul@gmail.com", "Technopreneur", 1);
process.stdout.write("Test 4 (Jumlah 0):    ");
validateRegistration("paksi", "paksi@gmail.com", "Data Science", 0);
