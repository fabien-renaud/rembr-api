import Joi from '@hapi/joi';

export const language: Joi.ObjectSchema = Joi.object({
    id: Joi.string().uuid().description('the language id'),
    name: Joi.string().required().description('the language name'),
    default_font__id: Joi.string()
        .uuid()
        .required()
        .description('the default font id')
})
    .unknown()
    .label('Language');

export const languageArray: Joi.ArraySchema = Joi.array()
    .items(language)
    .label('Array of languages');
