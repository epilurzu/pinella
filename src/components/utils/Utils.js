export const Suit = ["clubs", "diamonds", "hearts", "spades"];
export const Rank = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
export const Points = ["15", "20", "5", "5", "5", "5", "10", "10", "10", "10", "10", "10", "10"];

export function shuffle(array) {
    var ctr = array.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
    }
    return array;
};