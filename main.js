import { getStudentsAPI, addStudentsAPI } from "./api.js";

// Test Case 1
console.log("\nInitial DB State:", getStudentsAPI());

// Test Case 2
const savedStudent = addStudentsAPI({
  firstName: "Light",
  lastName: "Yagami",
  email: "light.yagami@example.com",
});
console.log("\nReturned Saved Object:", savedStudent);

// Test Case 3
console.log("\nUpdated DB State:", getStudentsAPI());
