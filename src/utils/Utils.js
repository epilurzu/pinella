const Suit = {CLUBS: "clubs", DIAMOND: "diamonds", HEARTS: "hearts", SPADES: "spades"};

function Card(rank, suit, number, points){
    this.rank= rank;
    this.suit= suit;
    this.number= number;
    this.points= points;
}

function Deck(){
    let deck = [];

    for(let suit in Suit){      //Todo: manage pinnacoli
        for (let i=1; i <= 13; i++){
            let card;
            let {value}= suit;
            console.log(JSON.stringify(suit));
            console.log(JSON.stringify(Suit.valueOf("diamonds")));

            if (i === 1) {
                card = new Card("Ace", suit, i, 15)
            }
            else if (i === 11) {
                card = new Card("Jack", suit, i, 10)
            }
            else if (i === 12) {
                card = new Card("Queen", suit, i, 10)
            }
            else if (i === 13) {
                card = new Card("king", suit, i, 10)
            }
            else if (i < 7) {
                card = new Card(i.toString(), suit, i, 5)
            }
            else if (i >= 7) {
                card = new Card(i.toString(), suit, i, 10)
            }
            deck.push(card);
        }
    }

    deck = deck.filter(function (card) {
        console.log(card.suit);
        console.log(Suit.DIAMOND);

        return (card.number !== 2 && card.suit != Suit.DIAMOND);
    });

    return deck;
};