import Joi from '@hapi/joi';

export const card: Joi.ObjectSchema = Joi.object({
    id: Joi.string().uuid().description('the card id'),
    user__id: Joi.string().uuid().required().description('the card owner id'),
    recto_value: Joi.string().required().description('the card recto value'),
    recto_language__id: Joi.string()
        .uuid()
        .required()
        .description('the card recto language'),
    verso_value: Joi.string().required().description('the card verso value'),
    verso_language__id: Joi.string()
        .uuid()
        .required()
        .description('the card verso language')
})
    .unknown()
    .label('Card');

export const cardArray: Joi.ArraySchema = Joi.array()
    .items(card)
    .label('Array of cards');
