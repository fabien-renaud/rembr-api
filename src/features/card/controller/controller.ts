import CardRepository from '../repository';
import {Card} from '../types';

const fetchCards = (): Promise<Card[]> => {
    return CardRepository.fetchCards();
};

const fetchCardById = (id: string): Promise<Card> => {
    return CardRepository.fetchCardById(id);
};

const createCard = (card: Card): Promise<Card | null> => {
    return CardRepository.createCard(card);
};

const updateCard = (id: string, card: Card): Promise<[number, Card[]]> => {
    return CardRepository.updateCard(id, card);
};

const deleteCard = (id: string): Promise<number> => {
    return CardRepository.deleteCard(id);
};

export default {
    fetchCards,
    fetchCardById,
    createCard,
    updateCard,
    deleteCard
};
