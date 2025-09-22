'use strict';

let species = `Wormy Chestnut`;
let width = 10;        
let length = 125;      
let thickness = 1.25;  
let costPerBF = 8.90;   
let amountPaid = 100.00; 

let costPerBFCents = Math.round(costPerBF * 100);
let amountPaidCents = Math.round(amountPaid * 100);

let boardFeet = Math.round((length * width * thickness) / 144);

let totalCostCents = boardFeet * costPerBFCents;
let changeDueCents = amountPaidCents - totalCostCents;

let costPerBFFormatted = `$${(costPerBFCents / 100).toFixed(2)}`;
let totalCostFormatted = `$${(totalCostCents / 100).toFixed(2)}`;
let amountPaidFormatted = `$${(amountPaidCents / 100).toFixed(2)}`;
let changeDueFormatted = `$${(changeDueCents / 100).toFixed(2)}`;

let lumberCalculations = `${species} with dimensions:
  width = ${width}"
  length = ${length}"
  thickness = ${thickness}"
  Total board feet: ${boardFeet}bf
Cost per board foot: ${costPerBFFormatted}
Total: ${totalCostFormatted}
-----
Amount paid: ${amountPaidFormatted}
Change due: ${changeDueFormatted}`;

console.group("Lumber Calculations");
console.log(lumberCalculations);
console.groupEnd();
