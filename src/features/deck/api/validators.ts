import Joi from '@hapi/joi';

export const deck: Joi.ObjectSchema = Joi.object({
    id: Joi.string().uuid().description('the deck id'),
    user__id: Joi.string().uuid().required().description('the deck owner id'),
    name: Joi.string().required().description('the deck name'),
    recto_language__id: Joi.string()
        .uuid()
        .required()
        .description('the deck recto language'),
    verso_language__id: Joi.string()
        .uuid()
        .required()
        .description('the deck verso language'),
    display_recto_first: Joi.boolean()
        .required()
        .default(true)
        .description('display recto first')
})
    .unknown()
    .label('Deck');

export const deckArray: Joi.ArraySchema = Joi.array()
    .items(deck)
    .label('Array of decks');
