'use strict';

/**
 * Task 1:
 * Custom function that prints a course description message.
 * Output is handled inside the function.
 */
function courseDescription() {
  let course = 'WEB-215';
  let desc = 'vanilla JavaScript';
  let msg = `${course} covers mainly ${desc}.`;
  console.log(msg);
}

courseDescription();

/**
 * Task 2:
 * Custom function that extracts and displays the word "haystack" from a sentence.
 * Uses the substring() method on a constant string.
 *
 * @returns {void} Logs the substring "haystack" to the console.
 */
function needle() {
  const sentence = 'A needle in a haystack.';
  const haystackWord = sentence.substring(14, 22);
  console.log(haystackWord);
}

needle();

/**
 * Task 3:
 * Use parameters, arguments, and return a value.
 * Calculates the area of a triangle given base and height.
 * Formula: (1/2) * base * height.
 *
 * @param {number} base - The base length of the triangle.
 * @param {number} height - The height of the triangle.
 * @returns {number} The area of the triangle.
 */
function area(base, height) {
  return 0.5 * base * height;
}

console.log(area(10, 7));

/**
 * Task 4:
 * Pass data between functions.
 * Uses the area() function to calculate the area of a triangle
 * and then generates a message displaying the result.
 *
 * @param {number} b - Base of the triangle.
 * @param {number} h - Height of the triangle.
 * @returns {void} Logs the area message to the console.
 */
function areaMessage(b, h) {
  let theArea = area(b, h);
  let msg = `The area of the triangle is ${theArea}`;
  console.log(msg);
}

areaMessage(12, 7);

/*
Task 5:
Create an anonymous callback function
*/
const button = document.getElementsByTagName('button')[0];
button.addEventListener('mouseenter', function() {
  console.count('The button was entered');
});

/*
Task 6:
Create an anonymous callback arrow function
*/
button.addEventListener('click', () => console.count('The button was clicked'));

/**
 * Task 7:
 * Create an external callback function.
 * Logs a message when the button is exited (mouseleave).
 *
 * @returns {void} Logs the button exit message to the console.
 */
function handleLeave() {
  console.count('The button was exited');
}

button.addEventListener('mouseleave', handleLeave);

/**
 * Task 8:
 * Create an IIFE (Immediately Invoked Function Expression)
 * that logs a message indicating completion of a PoC assignment.
 *
 * @param {string} name - The name of the person completing the PoC.
 * @param {number} pocNum - The PoC number being completed.
 * @returns {void} Logs the completion message to the console immediately.
 */
(function poc(name, pocNum) {
  let msg = `${name} has completed the PoC${pocNum} assignment.`;
  console.log(msg);
})('Arthur', 2);
