let transactions: number[] = [
  50000, -2000, 3000, -15000, -200, -300, 4000, -3000,
];
let creditTransactions = 0;
let debitTransaction = 0;
let totalCreditBalance = 0;
let totalDebitBalance = 0;
let remaingBalance = 0;
let suspeciosCount = 0;

for (let amount of transactions) {
  if (amount > 0) {
    creditTransactions++;
    totalCreditBalance += amount;
  } else {
    debitTransaction++;
    totalDebitBalance += amount;
  }
  if (amount > 10000 || amount < -10000) {
    console.log(`Suspecios debit and credit :${amount}`);
    suspeciosCount++;
  }
  remaingBalance += amount;
}
console.log("credit Transactions :" + creditTransactions);
console.log("debit Transactions :" + debitTransaction);
console.log("Total credited amount :" + Math.abs(totalCreditBalance));
console.log("Total debited amount :" + Math.abs(totalDebitBalance));
console.log("Remaing balance : " + remaingBalance);
console.log("Suspecios Transactions :" + suspeciosCount);
