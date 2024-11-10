students=[
    {student: "daviti", score: 65}, 
    {student: "gurami", score: 70}, 
    {student: "giorgi", score: 90},
    {student: "dachi", score: 85},
];

students.push({student: "daniel", score: 95})

const max = students.reduce((max, student) => (student.score > max.score ? student: max), students[0])
const topStudents = students.filter((student,score) => (student.score > 80))
console.log(max)
console.log(topStudents)