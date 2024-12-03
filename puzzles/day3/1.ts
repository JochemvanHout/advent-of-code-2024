import { readFromFile } from "../../utils/read-from-file.ts";

const data: string = await readFromFile(3, false);

const regex = /mul\([0-9]+,[0-9]+\)/g

const matches = [...data.matchAll(regex)];

let accumulator = 0;

matches.forEach(element => {
  const str = element[0]
  
  // get first number
  const phase1 = str.split('(');
  const phase2 = phase1[1].split(')');
  const phase3 = phase2[0].split(',')

  accumulator += phase3[0] * phase3[1]
});


console.log(accumulator);
