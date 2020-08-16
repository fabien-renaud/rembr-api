import Joi from '@hapi/joi';

const uuid: Joi.ObjectSchema = Joi.object({
    id: Joi.string().uuid().required().description('uuid')
}).label('UUID');

export default uuid;
