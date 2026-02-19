// function printNumbers(n: number): void {
//   let lastnumber = 0;
//   for (let i = 0; i <= n; i++) {
//     console.log(i);
//   }
// }
// printNumbers(100);

function sumOfNumbers(n: number): void {
  let sum: number = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}
sumOfNumbers(5);
