function createStudentMap(students) {
  const studentMap = new Map();
  for (const [name, score] of students) {
    studentMap.set(name, score);
  }
  return studentMap;
}

function removeDuplicates(array) {
  return [...new Set(array)];
}

function increaseScoresByFive(studentMap) {
  const newMap = new Map(studentMap);
  for (const [name, score] of newMap) {
    newMap.set(name, score + 5);
  }
  return newMap;
}

const students = [
  ['Alice', 90],
  ['Bob', 85],
  ['Charlie', 78]
];

const studentMap = createStudentMap(students);
console.log(studentMap);

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));

const updatedMap = increaseScoresByFive(studentMap);
console.log(updatedMap);