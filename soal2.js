var studyGroups = [
    { name: "Software Development", quota: 20, registered: 18 },
    { name: "UI/UX Design", quota: 15, registered: 15 },
    { name: "Technopreneur", quota: 25, registered: 10 },
    { name: "Intelligence System", quota: 10, registered: 10 }
];

function checkGroupAvailability(groups) {
    console.log("--- HASIL ANALISIS KUOTA STUDY GROUP ---");
    groups.forEach(function (group) {
        if (group.registered < group.quota) {
            var remainingSlots = group.quota - group.registered;
            console.log("[TERSEDIA] Group: ".concat(group.name, " | Sisa Kuota: ").concat(remainingSlots));
        }
        else {
            console.log("[PENUH]    Group: ".concat(group.name, " | Kuota Terisi Penuh"));
        }
    });
}

checkGroupAvailability(studyGroups);
