import {ServerRoute} from '@hapi/hapi';
import uuid from '../../common/validators';
import {card, cardArray} from './validators';
import CardHandler from './handler';

const routes: ServerRoute[] = [
    {
        method: 'GET',
        path: '/cards',
        options: {
            handler: CardHandler.fetchCards,
            description: 'Get cards',
            notes: 'Returns all cards',
            tags: ['api', 'card'],
            response: {
                status: {
                    200: cardArray,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/cards/{id}',
        options: {
            handler: CardHandler.fetchCardById,
            description: 'Get card by id',
            notes: 'Returns card by id',
            tags: ['api', 'card'],
            validate: {
                params: uuid
            },
            response: {
                status: {
                    200: card,
                    400: undefined,
                    404: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/cards',
        options: {
            handler: CardHandler.createCard,
            description: 'Create card',
            notes: 'Creates a new card',
            tags: ['api', 'card'],
            validate: {
                payload: card
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
        path: '/cards/{id}',
        options: {
            handler: CardHandler.updateCard,
            description: 'Update card by id',
            notes: 'Updates a card by id',
            tags: ['api', 'card'],
            validate: {
                params: uuid,
                payload: card
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
        path: '/cards/{id}',
        options: {
            handler: CardHandler.deleteCard,
            description: 'Delete card by id',
            notes: 'Deletes a card by id',
            tags: ['api', 'card'],
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
