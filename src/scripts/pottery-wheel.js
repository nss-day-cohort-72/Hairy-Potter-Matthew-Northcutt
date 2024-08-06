// Initialize the primary key with a value of 1
let nextId = 1;

// Define and export the function to create a pottery piece
export const makePottery = (shape, weight, height) => {
  
    
    
    
    // Create a new pottery object
    const potteryPiece = {
        shape: shape,
        weight: weight,
        height: height,
        id: nextId++ //Adds 1 to the id every new pottery
    };

    // Return the created pottery object
    return potteryPiece;
};


