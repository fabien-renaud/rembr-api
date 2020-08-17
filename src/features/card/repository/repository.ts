import {DestroyOptions, UpdateOptions} from 'sequelize';
import CardModel from './model';
import {Card} from '../types';

const fetchCards = (): Promise<Card[]> => {
    return CardModel.findAll();
};

const fetchCardById = (id: string): Promise<Card> => {
    return CardModel.findByPk(id);
};

const createCard = (card: Card): Promise<Card | null> => {
    return CardModel.create(card);
};

const updateCard = (id: string, card: Card): Promise<[number, Card[]]> => {
    const options: UpdateOptions = {
        where: {id}
    };
    return CardModel.update(card, options);
};

const deleteCard = (id: string): Promise<number> => {
    const options: DestroyOptions = {
        where: {id}
    };
    return CardModel.destroy(options);
};

export default {
    fetchCards,
    fetchCardById,
    createCard,
    updateCard,
    deleteCard
};
