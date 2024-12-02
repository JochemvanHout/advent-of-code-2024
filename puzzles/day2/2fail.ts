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

const checkNumbers = (numArr: number[]) => {
  const numDiff: number[] = [];

  // get difference between all numbers
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

  return {

  }
    
  // if posOrNeg all positive or negative and tooBig is empty, correct
  if (checkPosOrNegOutOfLine(posOrNeg) === 0 && tooBig.length === 0) { 
    accumulator += 1;
    return;
  }
}

lines.forEach((item) => {
  const splitstr = item.split(' ');
  const numArr = splitstr.map(Number)

  const {
    
  } = checkNumbers(numArr);
  
  if (tooBig.length <= 1 && checkPosOrNegOutOfLine(posOrNeg) <= 1) {
    let newArr;
    if (tooBig[0]) {
      newArr = numArr.splice(tooBig[0], 1);
    } else {
      newA
    }

  } else {
    return;
  }
});

console.log(accumulator);
