const students = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

const result = Object.entries(students).map(([student, subjects]) => {
    let average = Object.values(subjects).reduce((sum, marks) => sum + marks, 0) / Object.values(subjects).length;
    return { [student]: { average: Math.floor(average) } }; 
});

console.log(result);
