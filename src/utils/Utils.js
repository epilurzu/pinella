export const Suit = {CLUBS: "clubs", DIAMOND: "diamonds", HEARTS: "hearts", SPADES: "spades"};

export function Card(rank, suit, number, points){
    this.rank= rank;
    this.suit= suit;
    this.number= number;
    this.points= points;
}

export default function Deck(){
    let deck = [];

    for(let suit in Suit){      //Todo: manage pinnacoli
        for (let i=1; i <= 13; i++){
            let card;

            if (i === 1) {
                card = new Card("Ace", Suit[suit], i, 15)
            }
            else if (i === 11) {
                card = new Card("Jack", Suit[suit], i, 10)
            }
            else if (i === 12) {
                card = new Card("Queen", Suit[suit], i, 10)
            }
            else if (i === 13) {
                card = new Card("king", Suit[suit], i, 10)
            }
            else if (i < 7) {
                card = new Card(i.toString(), Suit[suit], i, 5)
            }
            else if (i >= 7) {
                card = new Card(i.toString(), Suit[suit], i, 10)
            }
            deck.push(card);
        }
    }

    deck.push(new Card("Jolly", "red", 0, 25));
    deck.push(new Card("Jolly", "black", 0, 25));

    deck = deck.filter(function (card) {
        return !(card.number === 2 && (card.suit === Suit.DIAMOND || card.suit === Suit.HEARTS));
    });

    return deck;
}