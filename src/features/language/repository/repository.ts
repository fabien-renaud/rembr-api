import {DestroyOptions, FindOptions, UpdateOptions} from 'sequelize';
import LanguageModel from './model';
import {Language} from '../types';

const fetchLanguages = (): Promise<Language[]> => {
    const options: FindOptions = {
        include: ['defaultFont']
    };
    return LanguageModel.findAll(options);
};

const fetchLanguageById = (id: string): Promise<Language> => {
    const options: FindOptions = {
        include: ['defaultFont']
    };
    return LanguageModel.findByPk(id, options);
};

const createLanguage = (language: Language): Promise<Language | null> => {
    return LanguageModel.create(language);
};

const updateLanguage = (
    id: string,
    language: Language
): Promise<[number, Language[]]> => {
    const options: UpdateOptions = {
        where: {id}
    };
    return LanguageModel.update(language, options);
};

const deleteLanguage = (id: string): Promise<number> => {
    const options: DestroyOptions = {
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
