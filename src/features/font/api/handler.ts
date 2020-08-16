import {Request, ResponseObject, ResponseToolkit} from '@hapi/hapi';
import {Boom, badImplementation, conflict, notFound} from '@hapi/boom';
import FontController from '../controller';
import {Font} from '../types';

const fetchFonts = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    return FontController.fetchFonts()
        .then((fonts: Font[]) => h.response(fonts).code(200))
        .catch(() => badImplementation());
};

const fetchFontById = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const id = req.params.id;
    return FontController.fetchFontById(id)
        .then((font: Font) => {
            if (!font) return notFound();
            return h.response(font).code(200);
        })
        .catch(() => notFound());
};

const createFont = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const payload = req.payload as Font;
    return FontController.createFont(payload)
        .then(() => h.response().code(201))
        .catch(() => conflict());
};

const updateFont = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const id = req.params.id;
    const payload = req.payload as Font;
    return FontController.updateFont(id, payload).then(() =>
        h.response().code(204)
    );
};

const deleteFont = (
    req: Request,
    h: ResponseToolkit
): Promise<ResponseObject | Boom> => {
    const id = req.params.id;
    return FontController.deleteFont(id).then(() => h.response().code(204));
};

export default {
    fetchFonts,
    fetchFontById,
    createFont,
    updateFont,
    deleteFont
};
