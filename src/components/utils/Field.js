import {Deck} from "./Deck";

export class Field{
    static deck = [];
    static playerCards = [];
    static cpuCards = [];
    static poolCards = [];

    static init(){
        Field.deck = new Deck();

        for (let i = 0; i<15; i++){
            Field.playerCards[i]= Field.deck.pop();
            Field.cpuCards.push(Field.deck.pop());
        }

        Field.poolCards.push(Field.deck.pop());
    }
}