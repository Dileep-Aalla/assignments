function loanEvaltion(
  employeeName: string,
  creditScore: number,
  income: number,
  IsEmployed: boolean,
  debtToTotalIncomeRatio: number,
): void {
  if (creditScore > 750) {
    console.log(`Loan is Approved for${employeeName}`);
  } else if (creditScore >= 650 && creditScore <= 750)
    if (income < 50000) {
      console.log(
        `${employeeName} loan is Rejected due to low income,income must be >50000`,
      );
    } else{
      if (!IsEmployed) {
        console.log(`${employeeName} loan denied because he is not employed`);
      }
       else {
        if (debtToTotalIncomeRatio < 40) {
          console.log(`${employeeName} loan is Approved`);
        } else {
          console.log(`${employeeName} loan is Not Approved due to income ratio is more than 40 `,
          );
        }
      }
    }
  else {
    console.log(`${employeeName} loan is not Approved`);
  }
}
loanEvaltion("John Doe", 750, 55000.0, true, 45);
