import database from '../../../core/database';
import {Model, STRING, UUID, UUIDV4} from 'sequelize';
import FontModel from '../../font/repository/model';

interface LanguageAttributes {
    id: string;
    name: string;
    defaultFontId: string;
}

interface LanguageInstance
    extends Model<LanguageAttributes>,
        LanguageAttributes {}

const LanguageModel = database.define<LanguageInstance>(
    'Language',
    {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false,
            field: 'id'
        },
        name: {
            type: STRING,
            allowNull: false,
            field: 'name'
        },
        defaultFontId: {
            type: UUID,
            allowNull: false,
            field: 'default_font__id'
        }
    },
    {
        tableName: 'language',
        timestamps: false
    }
);

// Defining Deck and Language many-to-one associations
LanguageModel.belongsTo(FontModel, {foreignKey: 'defaultFontId'});

export default LanguageModel;
