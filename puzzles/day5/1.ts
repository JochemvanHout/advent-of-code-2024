import { readFromFile } from "../../utils/read-from-file.ts";

const rawData: string = await readFromFile(5, false);
const [first, second] = rawData.split('\n\n');

const rules = first.split('\n');
const pages = second.split('\n');

console.log(rules);

// Get all sorting pairs where both numbers exist in the current sequence / line
// Go through the sorting pairs, swap bad orders if they exist and keep track of number of iterations
// If a swap occured, repeat to check if there is more. When done, return number of iterations.
// When iterations = 0, add score to day 1, if iterations > 0, add score to day 2

let accumulator = 0;

// lines.forEach((line) => {

// });

console.log(accumulator);
