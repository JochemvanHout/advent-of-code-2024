import { readFromFile } from "../../utils/read-from-file.ts";

const rawData: string = await readFromFile(4, false);
const lines = rawData.split('\n').map(element => element.split(''));

const ySize = lines.length;
const xSize = lines[0].length;

let accumulator = 0;

// shapes
const shape1 = [
  ['M','','M'],
  ['','A','' ],
  ['S','','S'],
]

const shape2 = [
  ['M','','S'],
  ['','A','' ],
  ['M','','S'],
]

const shape3 = [
  ['S','','S'],
  ['','A','' ],
  ['M','','M'],
]

const shape4 = [
  ['S','','M'],
  ['','A','' ],
  ['S','','M'],
]

const shapeBuilder = (x: number, y: number) => {  
  return [
    [lines[y - 1][x - 1], '', lines[y - 1][x + 1]],
    ['', lines[y][x], ''],
    [lines[y + 1][x - 1], '', lines[y + 1][x + 1]],
  ];
}

const shapeMatches = (shape): boolean => {
  const stringified = JSON.stringify(shape);

  if (stringified === JSON.stringify(shape1)) return true;
  if (stringified === JSON.stringify(shape2)) return true;
  if (stringified === JSON.stringify(shape3)) return true;
  if (stringified === JSON.stringify(shape4)) return true;

  return false;
};

const findXMAS = (x: number, y: number): number => {
  let found = 0;

  if (x < 1 || x > xSize - 2 || y < 1 || y > ySize - 2) return;

  const shape = shapeBuilder(x, y)

  return shapeMatches(shape);
}

lines.forEach((line, indexY) => {
  line.forEach((char, indexX) => {
    accumulator += findXMAS(indexX, indexY) ? 1 : 0;
  });
});

console.log(accumulator);
