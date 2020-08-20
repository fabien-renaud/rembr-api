import {DestroyOptions, FindOptions, UpdateOptions} from 'sequelize';
import DeckModel from './model';
import CardModel from '../../card/repository/model';
import {Deck} from '../types';
import {Card} from '../../card/types';

const fetchDecks = (): Promise<Deck[]> => {
    const options: FindOptions = {
        include: ['rectoLanguage', 'versoLanguage']
    };
    return DeckModel.findAll(options);
};

const fetchDeckById = (id: string): Promise<Deck> => {
    const options: FindOptions = {
        include: ['rectoLanguage', 'versoLanguage']
    };
    return DeckModel.findByPk(id, options);
};

const fetchCardDeckById = (id: string): Promise<Card[]> => {
    const options: FindOptions = {
        where: {deck__id: id}
    };
    return CardModel.findAll(options);
};

const createDeck = (deck: Deck): Promise<Deck | null> => {
    return DeckModel.create(deck);
};

const updateDeck = (id: string, deck: Deck): Promise<[number, Deck[]]> => {
    const options: UpdateOptions = {
        where: {id}
    };
    return DeckModel.update(deck, options);
};

const deleteDeck = (id: string): Promise<number> => {
    const options: DestroyOptions = {
        where: {id}
    };
    return DeckModel.destroy(options);
};

export default {
    fetchDecks,
    fetchDeckById,
    fetchCardDeckById,
    createDeck,
    updateDeck,
    deleteDeck
};
