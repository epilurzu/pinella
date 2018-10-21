import {Points, Rank, shuffle, Suit} from "./Utils";
import {Card} from "./Card";

export class Deck {
    constructor() {
        this.deck = [];
        this.populateDeck();
        this.deck = shuffle(this.deck)
    }

    populateDeck() {
        for (let i = 0; i < Rank.length * Object.keys(Suit).length; i++) {
            let rank = Rank[i % 13];
            let suit = Suit[Math.floor(i / 13)];
            let number = (i % 13) + 1;
            let points = Points[i % 13];

            this.deck.push(new Card(rank, suit, number, points));
        }

        this.deck.push(new Card("joker", "red", 0, 25));
        this.deck.push(new Card("joker", "black", 0, 25));

        this.deck = this.deck.filter(function (card) {
            return !(card.number === 2 && (card.suit === Suit[1] || card.suit === Suit[2]));
        });
    }

    pop(){
       return this.deck.pop();
    }

    printAll(){
        this.deck.forEach(function (card) {
            console.log(card);
        });
    }
}