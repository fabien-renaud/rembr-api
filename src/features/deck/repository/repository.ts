import DeckModel from './model';
import {Deck} from '../types';

const fetchDecks = (): Promise<Deck[]> => {
    return DeckModel.findAll();
};

const fetchDeckById = (id: string): Promise<Deck> => {
    return DeckModel.findByPk(id);
};

const createDeck = (deck: Deck): Promise<Deck | null> => {
    return DeckModel.create(deck);
};

const updateDeck = (id: string, deck: Deck): Promise<[number, Deck[]]> => {
    const options = {
        where: {id}
    };
    return DeckModel.update(deck, options);
};

const deleteDeck = (id: string): Promise<number> => {
    const options = {
        where: {id}
    };
    return DeckModel.destroy(options);
};

export default {
    fetchDecks,
    fetchDeckById,
    createDeck,
    updateDeck,
    deleteDeck
};
