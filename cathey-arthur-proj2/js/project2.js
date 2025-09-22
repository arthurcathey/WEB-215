'use strict';

/**
 * Convert dollars to cents as an integer.
 *
 * @param {number} dollars - The dollar amount.
 *
 * @return {number} - Amount in cents.
 */
function dollarsToCents(dollars) {
  return Math.round(dollars * 100);
}

/**
 * Convert tip percent to decimal.
 *
 * @param {number} percent - The tip percent.
 *
 * @return {number} - Tip as decimal.
 */
function tipPercentToDecimal(percent) {
  return percent / 100;
}

/**
 * Calculate tip amount in cents.
 *
 * @param {number} billCents - Bill in cents.
 * @param {number} tipDecimal - Tip as decimal.
 *
 * @return {number} - Tip in cents.
 */
function calculateTip(billCents, tipDecimal) {
  return Math.round(billCents * tipDecimal);
}

/**
 * Calculate total bill, bill plus tip, in cents.
 *
 * @param {number} billCents - Bill in cents.
 * @param {number} tipCents - Tip in cents.
 *
 * @return {number} - Total cost in cents.
 */
function calculateTotal(billCents, tipCents) {
  return billCents + tipCents;
}

/**
 * Split bill evenly.
 *
 * @param {number} totalCents - Total cost in cents.
 * @param {number} people - Number of people.
 *
 * @return {number} - Each person's share in cents.
 */
function splitBill(totalCents, people) {
  return Math.floor(totalCents / people);
}

/**
 * Find remainder if split is uneven.
 *
 * @param {number} totalCents - Total cost in cents.
 * @param {number} people - Number of people.
 *
 * @return {number} - Leftover cents.
 */
function remainder(totalCents, people) {
  return totalCents % people;
}

/**
 * Calculate what the odd one out pays, even share plus remainder.
 *
 * @param {number} evenShareCents - Even share in cents.
 * @param {number} remainderCents - Remainder in cents.
 *
 * @return {number} - Odd one out's payment in cents.
 */
function oddOneOut(evenShareCents, remainderCents) {
  return evenShareCents + remainderCents;
}

/**
 * Convert cents to dollars, a string with 2 decimals.
 *
 * @param {number} cents - Amount in cents.
 *
 * @return {string} - Dollars formatted with two decimals.
 */
function centsToDollars(cents) {
  return (cents / 100).toFixed(2);
}

/**
 * Main function: calculates all amounts per person.
 *
 * @param {number} bill - The total bill in dollars.
 * @param {number} [tipPercent=20] - Tip percent with a default of 20.
 * @param {number} [people=1] - Number of people with a default of 1.
 *
 * @return {void} - Logs calculation results to the console.
 */
function totalPerPerson(bill, tipPercent = 20, people = 1) {

  let billCents = dollarsToCents(bill);
  let billDollars = centsToDollars(billCents);
  let tipDecimal = tipPercentToDecimal(tipPercent);
  let tipCents = calculateTip(billCents, tipDecimal);
  let tipDollars = centsToDollars(tipCents);
  let totalCents = calculateTotal(billCents, tipCents);
  let totalDollars = centsToDollars(totalCents);
  let evenShareCents = splitBill(totalCents, people);
  let evenShareDollars = centsToDollars(evenShareCents);
  let remainderCents = remainder(totalCents, people);
  let remainderDollars = centsToDollars(remainderCents);
  let oddOneOutCents = oddOneOut(evenShareCents, remainderCents);
  let oddOneOutDollars = centsToDollars(oddOneOutCents);

  let endProduct = 
  `A ${tipPercent}% tip on $${billDollars} is $${tipDollars}. 
  The total bill plus tip is $${totalDollars}. 
  Split between ${people} people, it's $${evenShareDollars} each. 
  But with $${remainderDollars} that can't be split, one person owes $${oddOneOutDollars}.`;

  console.log(endProduct);
}

totalPerPerson(62.75, 15.5, 4);
totalPerPerson(62.77, 17, 4);
totalPerPerson(19, undefined, 7);
totalPerPerson(46.29, 22.5, undefined);
