// If withdrawAmount <= 0 → Print "Invalid amount"
// If withdrawAmount > balance → Print "Insufficient balance"
// If withdrawAmount % 100 !== 0 → Print "Amount must be multiple of 100"
// Otherwise:
// Deduct amount
// Print remaining balance
function ATMWithDrawalSystem(balance:number,withdrawalAmount:number):void{

 if (withdrawalAmount<=0){
    console.log("Invalid amount");
 }else if(withdrawalAmount>balance){
    console.log("Insufficient balance");
 }else if(withdrawalAmount%100!==0){
    console.log("Amount must be multiple of 100");
 }

 else{
     let RemaingBalance =balance - withdrawalAmount;

    console.log("Deductude amount is :"+withdrawalAmount);
    console.log("Remaing balance is :"+RemaingBalance);
 }
}

ATMWithDrawalSystem(10000,750)