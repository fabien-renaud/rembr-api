import Joi from '@hapi/joi';

export const deck: Joi.ObjectSchema = Joi.object({
    id: Joi.string().uuid().description('the deck id'),
    userId: Joi.string().uuid().required().description('the deck owner id'),
    name: Joi.string().required().description('the deck name'),
    rectoLanguageId: Joi.string()
        .uuid()
        .required()
        .description('the deck recto language'),
    versoLanguageId: Joi.string()
        .uuid()
        .required()
        .description('the deck verso language'),
    displayRectoFirst: Joi.boolean()
        .required()
        .default(true)
        .description('display recto first'),
    createdAt: Joi.date().timestamp(),
    updatedAt: Joi.date().timestamp()
})
    .unknown()
    .label('Deck');

export const deckArray: Joi.ArraySchema = Joi.array()
    .items(deck)
    .label('Array of decks');
