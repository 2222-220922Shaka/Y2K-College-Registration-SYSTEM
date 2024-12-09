/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


document.addEventListener("DOMContentLoaded", function () {
    // Hide both forms initially
    document.getElementById('highschoolForm').style.display = 'none';
    document.getElementById('shortcoursesForm').style.display = 'none';
});

// Function to toggle forms
function showForm(formType) {
    const highSchoolForm = document.getElementById('highschoolForm');
    const shortCoursesForm = document.getElementById('shortcoursesForm');

    if (formType === 'highschool') {
        highSchoolForm.style.display = 'block';
        shortCoursesForm.style.display = 'none';
    } else {
        shortCoursesForm.style.display = 'block';
        highSchoolForm.style.display = 'none';
    }
}

// File validation
function validateForm() {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    for (let input of fileInputs) {
        const file = input.files[0];
        if (file && file.type !== 'application/pdf') {
            alert("Only PDF files are allowed!");
            return false;
        }
    }
    alert("Form submitted successfully!");
    return true;
}
function toggleDisabilityInput(formType) {
    const disabilitySelect = document.getElementById(`disability${formType === 'highschool' ? 'High' : 'Short'}`);
    const disabilityContainer = document.getElementById(`disability-type-container-${formType}`);

    if (disabilitySelect.value === "yes") {
        disabilityContainer.style.display = "block";
    } else {
        disabilityContainer.style.display = "none";
        document.getElementById(`disabilityType${formType === 'highschool' ? 'High' : 'Short'}`).value = "";
    }
}
