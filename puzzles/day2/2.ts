import { readFromFile } from "../../utils/read-from-file.ts";

const data = await readFromFile(2, false);
const lines = data.split('\n');

let accumulator = 0;

const checkPosOrNegOutOfLine = (arr: number[]): number => {
  let countPos = 0;
  let countNeg = 0;

  arr.forEach(element => element === 1 ? countPos++ : countNeg++);

  if (countPos < countNeg) return countPos;

  return countNeg;
}

const testArray = (numArr: number[]): boolean => {
  const numDiff: number[] = [];

  numArr.forEach((number, index) => {
    if (!numArr[index + 1]) return;

    numDiff.push(numArr[index] - numArr[index + 1]);
  });

  let posOrNeg: number[] = []
  
  numDiff.forEach(number => {
    if (number > 0) posOrNeg.push(-1);
    if (number < 0) posOrNeg.push(1);
  });

  let tooBig: number[] = [];
  numDiff.forEach((number, index) => {
    if (Math.abs(number) < 1 || Math.abs(number) > 3) tooBig.push(index);
  });

  if (checkPosOrNegOutOfLine(posOrNeg) === 0 && tooBig.length === 0) { 
    return true;
  }

  return false;
}

lines.forEach((item) => {
  const splitstr = item.split(' ');
  const numArr: number[] = splitstr.map(Number)

  if (testArray(numArr)) {
    accumulator++;
  } else {
    for (let index = 0; index < numArr.length; index++) {
      const newArr = numArr.slice(0);
      newArr.splice(index, 1);

      if (testArray(newArr)) {
        accumulator++;
        return;
      }
      
    }
  }
});

console.log(accumulator);
