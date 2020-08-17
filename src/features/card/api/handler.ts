import {Request, ResponseObject, ResponseToolkit} from '@hapi/hapi';
import {Boom, badImplementation, conflict, notFound} from '@hapi/boom';
import CardController from '../controller';
import {Card} from '../types';

const fetchCards = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    return CardController.fetchCards()
        .then((cards: Card[]) => h.response(cards).code(200))
        .catch(() => badImplementation());
};

const fetchCardById = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const id = req.params.id;
    return CardController.fetchCardById(id)
        .then((card: Card) => {
            if (!card) return notFound();
            return h.response(card).code(200);
        })
        .catch(() => notFound());
};

const createCard = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const payload = req.payload as Card;
    return CardController.createCard(payload)
        .then(() => h.response().code(201))
        .catch(() => conflict());
};

const updateCard = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const id = req.params.id;
    const payload = req.payload as Card;
    return CardController.updateCard(id, payload).then(() =>
        h.response().code(204)
    );
};

const deleteCard = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const id = req.params.id;
    return CardController.deleteCard(id).then(() => h.response().code(204));
};

export default {
    fetchCards,
    fetchCardById,
    createCard,
    updateCard,
    deleteCard
};
