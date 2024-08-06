// scripts/Kiln.js

// Define and export the firePottery function
export const firePottery = (pottery, temperature) => {
//This line defines a function named firePottery.
//The function takes two pieces of information:
//pottery: The pottery object we want to update.
//temperature: The temperature at which the pottery is fired.


    // Add the 'fired' property to indicate the pottery has been fired
    pottery.fired = true;
//This line adds a new detail to the pottery object, saying that it has been fired.
    // Add the 'cracked' property based on the firing temperature
    if (temperature > 2200) {
        pottery.cracked = true;
    } else {
        pottery.cracked = false;
    }
/*This block checks the temperature:
If it's greater than 2200 degrees, it sets pottery.cracked to true (indicating the pottery cracked).
Otherwise, it sets pottery.cracked to false (indicating the pottery did not crack).*/

console.log(pottery)

    // Return the updated pottery object
    return pottery;
};
