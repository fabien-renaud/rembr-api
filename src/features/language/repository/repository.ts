import LanguageModel from './model';
import {Language} from '../types';

const fetchLanguages = (): Promise<Language[]> => {
    return LanguageModel.findAll();
};

const fetchLanguageById = (id: string): Promise<Language> => {
    return LanguageModel.findByPk(id);
};

const createLanguage = (language: Language): Promise<Language | null> => {
    return LanguageModel.create(language);
};

const updateLanguage = (
    id: string,
    language: Language
): Promise<[number, Language[]]> => {
    const options = {
        where: {id}
    };
    return LanguageModel.update(language, options);
};

const deleteLanguage = (id: string): Promise<number> => {
    const options = {
        where: {id}
    };
    return LanguageModel.destroy(options);
};

export default {
    fetchLanguages,
    fetchLanguageById,
    createLanguage,
    updateLanguage,
    deleteLanguage
};
