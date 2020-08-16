import FontModel from './model';
import {Font} from '../types';

const fetchFonts = (): Promise<Font[]> => {
    return FontModel.findAll();
};

const fetchFontById = (id: string): Promise<Font> => {
    return FontModel.findByPk(id);
};

const createFont = (font: Font): Promise<Font | null> => {
    return FontModel.create(font);
};

const updateFont = (id: string, font: Font): Promise<[number, Font[]]> => {
    const options = {
        where: {id}
    };
    return FontModel.update(font, options);
};

const deleteFont = (id: string): Promise<number> => {
    const options = {
        where: {id}
    };
    return FontModel.destroy(options);
};

export default {
    fetchFonts,
    fetchFontById,
    createFont,
    updateFont,
    deleteFont
};
