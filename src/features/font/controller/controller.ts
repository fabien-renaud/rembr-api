import FontRepository from '../repository';
import {Font} from '../types';

const fetchFonts = (): Promise<Font[]> => {
    return FontRepository.fetchFonts();
};

const fetchFontById = (id: string): Promise<Font> => {
    return FontRepository.fetchFontById(id);
};

const createFont = (font: Font): Promise<Font | null> => {
    return FontRepository.createFont(font);
};

const updateFont = (id: string, font: Font): Promise<[number, Font[]]> => {
    return FontRepository.updateFont(id, font);
};

const deleteFont = (id: string): Promise<number> => {
    return FontRepository.deleteFont(id);
};

export default {
    fetchFonts,
    fetchFontById,
    createFont,
    updateFont,
    deleteFont
};
