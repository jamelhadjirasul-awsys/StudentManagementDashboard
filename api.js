// Mock "database" table of students (each record has an id, like a saved record would)
export const mockStudentDb = [
  {
    id: Date.now(),
    firstName: "Leslie",
    lastName: "Andrews",
    email: "leslie.andrews@example.com",
  },
  {
    id: Date.now() + 1,
    firstName: "Emma",
    lastName: "Baumgarten",
    email: "emma.baumgarten@example.com",
  },
];

// Simulates a GET request: returns the current array of students
export function getStudentsAPI() {
  return mockStudentDb;
}

// Simulates a POST request: saves a new student and returns it
export function addStudentsAPI(newStudentData) {
  const savedStudent = {
    id: Date.now(), 
    ...newStudentData, 
  };

  mockStudentDb.push(savedStudent);

  return savedStudent;
}