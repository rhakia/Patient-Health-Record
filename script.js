document.getElementById("patientForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let diagnosis = document.getElementById("diagnosis").value;
    let medication = document.getElementById("medication").value;
    let bloodType = document.getElementById("bloodType").value;

    // Add patient to table
    let table = document.getElementById("patientTable").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow();
    newRow.innerHTML = `<td>${name}</td><td>${age}</td><td>${diagnosis}</td><td>${medication}</td><td>${bloodType}</td>`;

    // Show popup
    alert("Patient added successfully!");

    // Clear form fields
    document.getElementById("patientForm").reset();
});
