import { getStudentsAPI, addStudentsAPI } from "./api.js";

let localStudents = [];

const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");

/**
 * Checks that an email looks like name@domain.tld
 * (no spaces, at least one dot in the domain, TLD of 2+ letters).
 */
const isValidEmail = (email) =>
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/.test(
    email,
  );

/**
 * Rebuilds the table body from an array of students.
 * Shows "No student records found." when the array is empty.
 */
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
      },
    );

    studentTableBody.appendChild(row);
  });
};

/**
 * Form submit handler: validates the fields, saves the student through the
 * mock API, refreshes the table, and clears the form.
 */
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

  if (!isValidEmail(studentData.email)) {
    alert("Please enter a valid email address!");
    return;
  }

  addStudentsAPI(studentData);
  localStudents = getStudentsAPI();
  renderTable(localStudents);

  studentForm.reset();
});

/**
 * Loads the initial students from the mock API and renders them.
 */
const initApp = () => {
  localStudents = getStudentsAPI();
  renderTable(localStudents);
};

initApp();
