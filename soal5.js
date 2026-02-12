var classes = [
    { name: "Web Development Dasar", students: 18 },
    { name: "Logic & Algorithm", students: 15 },
    { name: "Frontend Fundamental", students: 10 },
    { name: "Backend Introduction", students: 10 }
];

function calculateStatistics(data) {
    var totalStudents = 0;
    console.log("--- DATA PESERTA PER KELAS ---");

    for (var i = 0; i < data.length; i++) {
        console.log("".concat(i + 1, ". ").concat(data[i].name, ": ").concat(data[i].students, " peserta"));
        totalStudents = totalStudents + data[i].students;
    }

    var averageStudents = totalStudents / data.length;

    console.log("------------------------------");
    console.log("Total Seluruh Peserta: ".concat(totalStudents));
    console.log("Rata-rata Peserta:     ".concat(averageStudents));
}

calculateStatistics(classes);
