import { readFromFile } from "../../utils/read-from-file.ts";

const debug = ms => new Promise(res => setTimeout(res, ms));

const rawData: string = await readFromFile(6, false);
const lines = rawData.split('\n').map(element => element.split(''));

const ySize = lines.length;
const xSize = lines[0].length;

let walkedTiles = new Set([])

let pos = {x: 62 - 1, y: 86 - 1};
let direction = 'u';
let onScreen = true;

const getMovement = (): {x: number, y: number} => {
  if (direction === 'u') return { x: 0, y: -1 };
  if (direction === 'r') return { x: 1, y: 0 };
  if (direction === 'd') return { x: 0, y: 1 };
  if (direction === 'l') return { x: -1, y: 0 };

  return { x: 0, y: 0 }; // shouldn't happen
}

const turn = (): void => {
  if (direction === 'u') { direction = 'r'; return; }
  if (direction === 'r') { direction = 'd'; return; }
  if (direction === 'd') { direction = 'l'; return; }
  if (direction === 'l') { direction = 'u'; return; }
}

const isGuardIsOutOfBounds = (): boolean => {
  if (pos.x < 0 || pos.x > xSize - 1 || pos.y < 0 || pos.y > ySize - 1) return true;
  return false;
}

const move = () => {
  const m = getMovement();
  
  // somethign wrong here
  if (isGuardIsOutOfBounds()) {
    console.log('triggered!');
    
    onScreen = false;
    return;
  }  
  
  if (lines[pos.y + m.y][pos.x + m.x] === '#') {    
    turn();
    return;
  }

  pos = {
    x: pos.x + m.x,
    y: pos.y + m.y
  };
}

while (onScreen) {
  walkedTiles.add(`${pos.x} ${pos.y}`);

  console.log(walkedTiles.size);
  move();
}


