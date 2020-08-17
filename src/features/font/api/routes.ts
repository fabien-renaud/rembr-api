import {ServerRoute} from '@hapi/hapi';
import uuid from '../../common/validators';
import {font, fontArray} from './validators';
import FontHandler from './handler';

const routes: ServerRoute[] = [
    {
        method: 'GET',
        path: '/fonts',
        options: {
            handler: FontHandler.fetchFonts,
            description: 'Get fonts',
            notes: 'Returns all fonts',
            tags: ['api', 'font'],
            response: {
                status: {
                    200: fontArray,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/fonts/{id}',
        options: {
            handler: FontHandler.fetchFontById,
            description: 'Get font by id',
            notes: 'Returns font by id',
            tags: ['api', 'font'],
            validate: {
                params: uuid
            },
            response: {
                status: {
                    200: font,
                    400: undefined,
                    404: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/fonts',
        options: {
            handler: FontHandler.createFont,
            description: 'Create font',
            notes: 'Creates a new font',
            tags: ['api', 'font'],
            validate: {
                payload: font
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
        path: '/fonts/{id}',
        options: {
            handler: FontHandler.updateFont,
            description: 'Update font by id',
            notes: 'Updates a font by id',
            tags: ['api', 'font'],
            validate: {
                params: uuid,
                payload: font
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
        path: '/fonts/{id}',
        options: {
            handler: FontHandler.deleteFont,
            description: 'Delete font by id',
            notes: 'Deletes a font by id',
            tags: ['api', 'font'],
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
