function electricityBillCalC(cname: string, units: number): void {
  let unitPrice = 0;

  if (units > 0 && units <= 100) {
    unitPrice = 1;
  } else {
    if (units > 101 && units <= 200) {
      unitPrice = 2;
    } else {
      if (units > 201 && units <= 300) {
        unitPrice = 3;
      } else {
        if (units > 301) {
          unitPrice = 5;
        }
      }
    }
  }

  let totalBill = unitPrice * units;

  console.log("customer name :" + cname);
  console.log("Number of units Used :" + units);
  console.log("totalbill :" + totalBill);
}

electricityBillCalC("dileep", 301);
