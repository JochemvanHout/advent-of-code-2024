import { readFromFile } from "../../utils/read-from-file.ts";

const data = await readFromFile(2, false);
const lines = data.split('\n');

let accumulator = 0;

lines.forEach((item) => {
  const splitstr = item.split(' ');
  const numArr = splitstr.map(Number)

  const numDiff: number[] = [];

  // get difference between all numbers
  numArr.forEach((number, index) => {
    if (!numArr[index + 1]) return;

    numDiff.push(numArr[index + 1] - numArr[index]);
  });

  let pos = 0;
  let neg = 0;
  // check if all nums are positive OR negative
  numDiff.forEach(number => {
    if (number > 0) pos++;
    if (number < 0) neg++;
  });

  // not ascending or descending
  if (pos > 0 && neg > 0) return;

  let tooBig = false;
  numDiff.forEach(number => {
    if (Math.abs(number) < 1 || Math.abs(number) > 3) tooBig = true;
  });

  if (tooBig) return;

  accumulator++;
});



console.log(accumulator);
