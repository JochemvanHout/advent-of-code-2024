import { readFromFile } from "../../utils/read-from-file.ts";

const rawData: string = await readFromFile(4, false);
const lines = rawData.split('\n').map(element => element.split(''));

let accumulator = 0;

const letterExtractinator = (instructions: {x: number, y: number}[]) => {
  let wordConstructinator = '';
  instructions.forEach(instruction => {
    if (instruction.x < 0 || instruction.x > 139 || instruction.y < 0 || instruction.y > 139) return;
    
    wordConstructinator += lines[instruction.y][instruction.x];
  });

  if (wordConstructinator === 'XMAS') return 1;

  return 0;
}

const findXMAS = (x: number, y: number): number => {
  let found = 0;

  // straight up
  found += letterExtractinator([{x, y}, {x, y: y - 1}, {x, y: y - 2}, {x, y: y - 3}]);

  // diagonally right up
  found += letterExtractinator([{x, y}, {x: x + 1, y: y - 1}, {x: x + 2, y: y - 2}, {x: x + 3, y: y - 3}]);

  // straight right
  found += letterExtractinator([{x, y}, {x: x + 1, y}, {x: x + 2, y}, {x: x + 3, y}]);

  // diagonally right down
  found += letterExtractinator([{x, y}, {x: x + 1, y: y + 1}, {x: x + 2, y: y + 2}, {x: x + 3, y: y + 3}]);

  // straight down
  found += letterExtractinator([{x, y}, {x, y: y + 1}, {x, y: y + 2}, {x, y: y + 3}]);

  // diagonally left down
  found += letterExtractinator([{x, y}, {x: x - 1, y: y + 1}, {x: x - 2, y: y + 2}, {x: x - 3, y: y + 3}]);

  // straight left
  found += letterExtractinator([{x, y}, {x: x - 1, y}, {x: x - 2, y}, {x: x - 3, y}]);

  // diagonally left up
  found += letterExtractinator([{x, y}, {x: x - 1, y: y - 1}, {x: x - 2, y: y - 2}, {x: x - 3, y: y - 3}]);

  return found;
}

lines.forEach((line, indexY) => {
  line.forEach((char, indexX) => {
    accumulator += findXMAS(indexX, indexY);
  });
});


console.log(accumulator);
