import { readFromFile } from "../../utils/read-from-file.ts";

const data = await readFromFile(1, false);
const lines = data.split('\n');

let left: number[] = [];
let right: number[] = [];

lines.forEach((item) => {
  const newArr = item.split('   ');

  left.push(Number(newArr[0]));
  right.push(Number(newArr[1]));
});

let accumulator = 0;

left.forEach(number => {
  
  let tally = 0;

  right.forEach(secondNumber => {
    if (number === secondNumber) tally++;
  });

  accumulator += number * tally;

});

console.log(accumulator);
