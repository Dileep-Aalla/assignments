let studentName: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];
let updatedMarks: number[] = [];

for (let i = 0; i < marks.length; i++) {
  marks[i] += 10;
  updatedMarks.push(marks[i]);
}
console.log("Updated Marks:");
for (let i = 0; i < studentName.length; i++) {
  console.log(`${studentName[i]}:${updatedMarks[i]}`);
}
let total: number=0;
for (let marks of updatedMarks) {
  total += marks;
}
let averageMarks = total / studentName.length;
console.log("Average marks :" + averageMarks);
