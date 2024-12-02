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

for (let index = 0; index < lines.length; index++) {
  const li = left.indexOf(Math.min(...left));
  const ri = right.indexOf(Math.min(...right));
  
  accumulator += Math.abs(left[li] - right[ri]);

  left.splice(li, 1);
  right.splice(ri, 1);
}


console.log(accumulator);
