import {ServerRoute} from '@hapi/hapi';
import uuid from '../../common/validators';
import {deck, deckArray} from './validators';
import DeckHandler from './handler';

const routes: ServerRoute[] = [
    {
        method: 'GET',
        path: '/decks',
        options: {
            handler: DeckHandler.fetchDecks,
            description: 'Get decks',
            notes: 'Returns all decks',
            tags: ['api', 'deck'],
            response: {
                status: {
                    200: deckArray,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/decks/{id}',
        options: {
            handler: DeckHandler.fetchDeckById,
            description: 'Get deck by id',
            notes: 'Returns deck by id',
            tags: ['api', 'deck'],
            validate: {
                params: uuid
            },
            response: {
                status: {
                    200: deck,
                    400: undefined,
                    404: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/decks',
        options: {
            handler: DeckHandler.createDeck,
            description: 'Create deck',
            notes: 'Creates a new deck',
            tags: ['api', 'deck'],
            validate: {
                payload: deck
            },
            response: {
                status: {
                    201: undefined,
                    400: undefined,
                    409: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'PATCH',
        path: '/decks/{id}',
        options: {
            handler: DeckHandler.updateDeck,
            description: 'Update deck by id',
            notes: 'Updates a deck by id',
            tags: ['api', 'deck'],
            validate: {
                params: uuid,
                payload: deck
            },
            response: {
                status: {
                    204: undefined,
                    400: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'DELETE',
        path: '/decks/{id}',
        options: {
            handler: DeckHandler.deleteDeck,
            description: 'Delete deck by id',
            notes: 'Deletes a deck by id',
            tags: ['api', 'deck'],
            validate: {
                params: uuid
            },
            response: {
                status: {
                    204: undefined,
                    400: undefined,
                    500: undefined
                }
            }
        }
    }
];

export default routes;
