function loanEvaltioncalc(customerName:string,creditScore:number,salary:number,emi:number):void{
      
    if(creditScore<650){
        console.log(`${customerName} loan is Rejected because credit Score is less then 650`);
    }else if(salary<25000){
            console.log(`${customerName} is Rejected because salary less then 25000`);
    }else if(emi>(salary*0.5)){
        console.log(`${customerName} is Rejected because Of existing emi`);
    }
    else{
        console.log(`${customerName} loan is Approved`);
    

}
 
}
loanEvaltioncalc("Dileep",700,100000,30000)