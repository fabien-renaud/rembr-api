import Joi from '@hapi/joi';

export const card: Joi.ObjectSchema = Joi.object({
    id: Joi.string().uuid().description('the card id'),
    deckId: Joi.string().uuid().required().description('the card deck id'),
    rectoValue: Joi.string().required().description('the card recto value'),
    versoValue: Joi.string().required().description('the card verso value'),
    createdAt: Joi.date().timestamp(),
    updatedAt: Joi.date().timestamp()
})
    .unknown()
    .label('Card');

export const cardArray: Joi.ArraySchema = Joi.array()
    .items(card)
    .label('Array of cards');
