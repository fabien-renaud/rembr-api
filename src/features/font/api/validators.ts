import Joi from '@hapi/joi';

export const font: Joi.ObjectSchema = Joi.object({
    id: Joi.string().uuid().description('the font id'),
    user__id: Joi.string()
        .uuid()
        .description('the default font id - can be null if global font'),
    name: Joi.string().required().description('the font name'),
    source: Joi.string().required().description('the font source')
})
    .unknown()
    .label('Font');

export const fontArray: Joi.ArraySchema = Joi.array()
    .items(font)
    .label('Array of fonts');
