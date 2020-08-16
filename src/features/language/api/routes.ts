import {ServerRoute} from '@hapi/hapi';
import uuid from '../../common/validators';
import {language, languageArray} from './validators';
import LanguageHandler from './handler';

const routes: ServerRoute[] = [
    {
        method: 'GET',
        path: '/languages',
        options: {
            handler: LanguageHandler.fetchLanguages,
            description: 'Get languages',
            notes: 'Returns all languages',
            tags: ['api', 'language'],
            response: {
                status: {
                    200: languageArray,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/languages/{id}',
        options: {
            handler: LanguageHandler.fetchLanguageById,
            description: 'Get language by id',
            notes: 'Returns language by id',
            tags: ['api', 'language'],
            validate: {
                params: uuid
            },
            response: {
                status: {
                    200: language,
                    400: undefined,
                    404: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/languages',
        options: {
            handler: LanguageHandler.createLanguage,
            description: 'Create language',
            notes: 'Creates a new language',
            tags: ['api', 'language'],
            validate: {
                payload: language
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
        path: '/languages/{id}',
        options: {
            handler: LanguageHandler.updateLanguage,
            description: 'Update language by id',
            notes: 'Updates a language by id',
            tags: ['api', 'language'],
            validate: {
                params: uuid,
                payload: language
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
        path: '/languages/{id}',
        options: {
            handler: LanguageHandler.deleteLanguage,
            description: 'Delete language by id',
            notes: 'Deletes a language by id',
            tags: ['api', 'language'],
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
