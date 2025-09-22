// Task 1

'use strict';

// Task 2

var student = `Arthur Cathey`;

console.log(student);

// Task 3

let quote = `PoC #1`; 

console.log(quote);

quote = "She said, \"JavaScript is a 'cool' language.\"";

console.log(quote);

quote = 'She said, "JavaScript is a \'cool\' language."';

console.log(quote);

quote = `She said, "JavaScript is a 'cool' language."`;

console.log(quote);

quote = `${student} said, "JavaScript is a 'cool' language."`;

console.log(quote);

// Task 4

let haiku = "Chaos reigns within.\n" +
            "Reflect, repent, and reboot.\n" +
            "Order shall return.";

console.log(haiku);

// Task 5

let lyric = `There's a lady who's sure
all that glitters is gold
and she's buying the stairway to heaven.`;
console.log(lyric);

// Task 6

let totalDogs = 7;
let totalBalls = 20;

let ballsPerDog = Math.floor(totalBalls / totalDogs);
let leftoverBalls = totalBalls % totalDogs;

let summary = `There are ${totalDogs} dogs and ${totalBalls} tennis balls.
Each dog will get ${ballsPerDog} tennis balls.
There will be ${leftoverBalls} tennis balls left over.`;
console.log(summary);

// Task 7

let serverA = 221.24;
let serverB = 82.41;
let serverC = 225.00;

let numServers = 3;

let totalCents = Math.round(serverA * 100) + Math.round(serverB * 100) + Math.round(serverC * 100);

let shareCents = Math.floor(totalCents / numServers);

let leftoverCents = totalCents % numServers;

let tipsPerServer = (shareCents / 100).toFixed(2);
let leftover = (leftoverCents / 100).toFixed(2);

let totalTips = (totalCents / 100).toFixed(2);

let tipSummary = `There are ${numServers} servers.
Total tips: $${totalTips}.
Each server receives: $${tipsPerServer}.
Leftover amount: $${leftover} goes to community fund.`;

console.log(tipSummary);
