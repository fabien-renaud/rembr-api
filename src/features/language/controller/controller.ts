import LanguageRepository from '../repository';
import {Language} from '../types';

const fetchLanguages = (): Promise<Language[]> => {
    return LanguageRepository.fetchLanguages();
};

const fetchLanguageById = (id: string): Promise<Language> => {
    return LanguageRepository.fetchLanguageById(id);
};

const createLanguage = (language: Language): Promise<Language | null> => {
    return LanguageRepository.createLanguage(language);
};

const updateLanguage = (
    id: string,
    language: Language
): Promise<[number, Language[]]> => {
    return LanguageRepository.updateLanguage(id, language);
};

const deleteLanguage = (id: string): Promise<number> => {
    return LanguageRepository.deleteLanguage(id);
};

export default {
    fetchLanguages,
    fetchLanguageById,
    createLanguage,
    updateLanguage,
    deleteLanguage
};
