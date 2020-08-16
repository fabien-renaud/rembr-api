import DeckRepository from '../repository';
import {Deck} from '../types';

const fetchDecks = (): Promise<Deck[]> => {
    return DeckRepository.fetchDecks();
};

const fetchDeckById = (id: string): Promise<Deck> => {
    return DeckRepository.fetchDeckById(id);
};

const createDeck = (deck: Deck): Promise<Deck | null> => {
    return DeckRepository.createDeck(deck);
};

const updateDeck = (id: string, deck: Deck): Promise<[number, Deck[]]> => {
    return DeckRepository.updateDeck(id, deck);
};

const deleteDeck = (id: string): Promise<number> => {
    return DeckRepository.deleteDeck(id);
};

export default {
    fetchDecks,
    fetchDeckById,
    createDeck,
    updateDeck,
    deleteDeck
};
