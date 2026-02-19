function electricbill(customername:string,units:number):void{

   let unitPrice :number=0;
   if(units<=0){
    console.log("Invalid Units");
    return;
   }
   if(units<=100){
    unitPrice=1;
   }else if(units<=200){
    unitPrice=2;
   }else if(units<=300){
    unitPrice=3;
   }else {
    unitPrice=5;
}


let totalCurrentbill= units * unitPrice;
console.log("******PowerBill******");
console.log("customerName  :"+customername);
console.log("NumberofUnits :"+units);
console.log("totalCurrentbill :"+totalCurrentbill);
}

electricbill("dileep",0);