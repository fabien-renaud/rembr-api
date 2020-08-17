import {Request, ResponseObject, ResponseToolkit} from '@hapi/hapi';
import {Boom, badImplementation, conflict, notFound} from '@hapi/boom';
import LanguageController from '../controller';
import {Language} from '../types';

const fetchLanguages = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    return LanguageController.fetchLanguages()
        .then((languages: Language[]) => h.response(languages).code(200))
        .catch(() => badImplementation());
};

const fetchLanguageById = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const id = req.params.id;
    return LanguageController.fetchLanguageById(id)
        .then((language: Language) => {
            if (!language) return notFound();
            return h.response(language).code(200);
        })
        .catch(() => notFound());
};

const createLanguage = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const payload = req.payload as Language;
    return LanguageController.createLanguage(payload)
        .then(() => h.response().code(201))
        .catch(() => conflict());
};

const updateLanguage = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const id = req.params.id;
    const payload = req.payload as Language;
    return LanguageController.updateLanguage(id, payload).then(() =>
        h.response().code(204)
    );
};

const deleteLanguage = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const id = req.params.id;
    return LanguageController.deleteLanguage(id).then(() =>
        h.response().code(204)
    );
};

export default {
    fetchLanguages,
    fetchLanguageById,
    createLanguage,
    updateLanguage,
    deleteLanguage
};
