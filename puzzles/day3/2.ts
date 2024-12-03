import { readFromFile } from "../../utils/read-from-file.ts";

const data: string = await readFromFile(3, false);

const regex = /mul\([0-9]+,[0-9]+\)/g

const split = data.split('do()');

let accumulator = 0;

split.forEach(element => {  
  const newEl = element.split('don\'t()');
  
  const matches = [...newEl[0].matchAll(regex)];

  matches.forEach(element => {
    const str = element[0];
    
    const phase1 = str.split('(');
    const phase2 = phase1[1].split(')');
    const phase3 = phase2[0].split(',');
  
    accumulator += phase3[0] * phase3[1];
  });

});

console.log(accumulator);
