import {Request, ResponseObject, ResponseToolkit} from '@hapi/hapi';
import {Boom, badImplementation, conflict, notFound} from '@hapi/boom';
import DeckController from '../controller';
import {Deck} from '../types';

const fetchDecks = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    return DeckController.fetchDecks()
        .then((decks: Deck[]) => h.response(decks).code(200))
        .catch(() => badImplementation());
};

const fetchDeckById = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const id = req.params.id;
    return DeckController.fetchDeckById(id)
        .then((deck: Deck) => {
            if (!deck) return notFound();
            return h.response(deck).code(200);
        })
        .catch(() => notFound());
};

const createDeck = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const payload = req.payload as Deck;
    return DeckController.createDeck(payload)
        .then(() => h.response().code(201))
        .catch(() => conflict());
};

const updateDeck = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const id = req.params.id;
    const payload = req.payload as Deck;
    return DeckController.updateDeck(id, payload).then(() =>
        h.response().code(204)
    );
};

const deleteDeck = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const id = req.params.id;
    return DeckController.deleteDeck(id).then(() => h.response().code(204));
};

export default {
    fetchDecks,
    fetchDeckById,
    createDeck,
    updateDeck,
    deleteDeck
};
