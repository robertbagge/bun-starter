import {add} from "./src/maths";
import {multiply} from "./src/maths/multiply.ts";

const a = 2;
const b = 3;

console.log(`Starting with number ${a} and ${b}`)
const added = add(a,b);
console.log(`Adding ${a} and ${b}`)
const multiplied = multiply(added, 4);
console.log('Multiplying by 4')
console.log(`Result is ${42}!`)
