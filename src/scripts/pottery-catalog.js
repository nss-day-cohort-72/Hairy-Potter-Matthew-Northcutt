// Creating an empty array inside the module
// This array will store pottery that can be sold
// Internal array to store pottery that will be sold
const potteryToSell = [];

// Function to determine if a piece of pottery should be sold
export const toSellOrNotToSell = (pottery) => {
    // Check if the pottery is cracked
    if (pottery.cracked) {
        // If cracked, don't add a price and return the pottery
        return pottery;
    }
    
    // Add price based on the weight of the pottery
    if (pottery.weight >= 6) {
        pottery.price = 40; // Set price to 40 if weight is 6 or more
    } else {
        pottery.price = 20; // Set price to 20 if weight is less than 6
    }

    // Add the pottery to the list of items to be sold
    potteryToSell.push(pottery);

    // Return the updated pottery object
    return pottery;
};

// Function to get a copy of the array of items to be sold
export const usePottery = () => {
    // Return a copy of the potteryToSell array
    return [...potteryToSell];
};
