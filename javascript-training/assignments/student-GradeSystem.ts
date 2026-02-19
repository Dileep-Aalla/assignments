// 90–100 → A+
// 80–89 → A
// 70–79 → B
// 60–69 → C
// 50–59 → D
// Below 50 → Fail
// If marks > 100 or < 0 → Invalid Marks
function calculateGrade(marks: number): void {
  if (marks > 100 || marks < 0) {
    console.log("Invalid Marks");
  } else if (marks >= 90) {
    console.log("Grade A+");
  } else if (marks >= 80) {
    console.log("Grade A");
  } else if (marks >= 70) {
    console.log("Grade b");
  } else if (marks >= 60) {
    console.log("Grade c");
  } else if (marks >= 50) {
    console.log("Grade D");
  } else {
    console.log("Fail");
  }
}
calculateGrade(150);
