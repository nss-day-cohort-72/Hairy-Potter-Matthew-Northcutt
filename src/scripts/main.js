import { makePottery } from "./pottery-wheel.js";
import { firePottery } from "./kiln.js";
import { toSellOrNotToSell, usePottery } from './pottery-catalog.js';
// Make 5 pieces of pottery at the wheel
let mug = makePottery()

const pottery1 = makePottery("Mug", 1, 4);
const pottery2 = makePottery("Platter", 2, 7);
const pottery3 = makePottery("Vase", 3, 10);
const pottery4 = makePottery("Teapot", 2, 6);
const pottery5 = makePottery("Bowl", 1, 5);

const firedPottery1 = firePottery(pottery1, 2100);
const firedPottery2 = firePottery(pottery2, 2300); 
const firedPottery3 = firePottery(pottery3, 2200);
const firedPottery4 = firePottery(pottery4, 2000);
const firedPottery5 = firePottery(pottery5, 2500); 

// Determine if each piece should be sold
toSellOrNotToSell(firedPottery1);
toSellOrNotToSell(firedPottery2);
toSellOrNotToSell(firedPottery3);
toSellOrNotToSell(firedPottery4);
toSellOrNotToSell(firedPottery5);

// Get the list of pottery to be sold
const potteryForSale = usePottery();

// Log the list to the console
console.log(potteryForSale);









// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

