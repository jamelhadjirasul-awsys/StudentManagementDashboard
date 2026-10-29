    import { getStudentsAPI, addStudentsAPI } from "./api.js";

    let localStudents = [];

    const studentForm = document.getElementById("studentForm");
    const studentTableBody = document.getElementById("studentTableBody");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");

    const renderTable = (dataArray) => {
    studentTableBody.innerHTML = "";

    if (dataArray.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 4;
        cell.className = "empty-cell";
        cell.textContent = "No student records found.";
        row.appendChild(cell);
        studentTableBody.appendChild(row);
        return;
    }

    dataArray.forEach((student, index) => {
        const row = document.createElement("tr");

        [index + 1, student.firstName, student.lastName, student.email].forEach(
        (value) => {
            const cell = document.createElement("td");
            cell.textContent = value; 
            row.appendChild(cell);
        }
        );

        studentTableBody.appendChild(row);
    });
    };

    studentForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const studentData = {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        email: emailInput.value.trim(),
    };

    if (!studentData.firstName || !studentData.lastName || !studentData.email) {
        alert("Please fill out all input fields!");
        return;
    }

    addStudentsAPI(studentData); 
    localStudents = getStudentsAPI(); 
    renderTable(localStudents); 

    studentForm.reset(); 
    });

    const initApp = () => {
    localStudents = getStudentsAPI();
    renderTable(localStudents);
    };

    initApp();