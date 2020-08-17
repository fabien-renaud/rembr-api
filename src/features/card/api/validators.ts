import Joi from '@hapi/joi';

export const card: Joi.ObjectSchema = Joi.object({
    id: Joi.string().uuid().description('the card id'),
    deck__id: Joi.string().uuid().required().description('the card deck id'),
    recto_value: Joi.string().required().description('the card recto value'),
    verso_value: Joi.string().required().description('the card verso value')
})
    .unknown()
    .label('Card');

export const cardArray: Joi.ArraySchema = Joi.array()
    .items(card)
    .label('Array of cards');
