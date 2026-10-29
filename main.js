import { getStudentsAPI, addStudentsAPI } from "./api.js";

// Test Case 1: Display the initial populated database
console.log("Test Case 1 - Initial database:");
console.log(getStudentsAPI());
 
// Test Case 2: Create a new student and display it
const newStudent = addStudentsAPI({
  firstName: "Jose",
  lastName: "Rizal",
  email: "jose.rizal@example.com",
});
console.log("\nTest Case 2 - Newly added student:");
console.log(newStudent);
 
// Test Case 3: Display the updated database
console.log("\nTest Case 3 - Updated database:");
console.log(getStudentsAPI());
 
