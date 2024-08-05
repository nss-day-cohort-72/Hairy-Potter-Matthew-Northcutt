// scripts/PotteryWheel.js

// Initialize the primary key with a value of 1
let nextId = 1;

// Define and export the function to create a pottery piece
export const makePottery = (shape, weight, height) => {
    // Create a new pottery object
    const potteryPiece = {
        shape: shape,
        weight: weight,
        height: height,
        id: nextId++ // Assign the current id and increment for the next piece
    };

    // Return the created pottery object
    return potteryPiece;
};


