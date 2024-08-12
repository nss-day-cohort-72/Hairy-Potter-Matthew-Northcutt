// Import the usePottery function from PotteryCatalog.js
import { usePottery } from './pottery-catalog.js';

// Define and export the PotteryList function
export function PotteryList() {
    // Get the list of pottery items to be sold
    const potteryItems = usePottery();

    // Create HTML representation for each pottery item
    const potteryHTML = potteryItems.map(pottery => {
        return `
        <section class="pottery" id="pottery--${pottery.id}">
            <h2 class="pottery__shape">${pottery.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
            </div>
            <div class="pottery__price">Price is 20</div>
        </section>
        `;
    }).join(""); // Join all sections into a single string

    // Return the combined HTML string
    return potteryHTML;
}

