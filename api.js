
// Mock "database" table of students
export const mockStudentDb = [
  { firstName: "Jam", lastName: "Mel", email: "jam.mel@email.com" },
  { firstName: "Mel", lastName: "Ja", email: "mel.ja@email.com" },
];

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