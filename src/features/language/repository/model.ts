import database from '../../../core/database';
import {Model, STRING, UUID, UUIDV4} from 'sequelize';
import FontModel from '../../font/repository/model';

interface LanguageAttributes {
    id: string;
    name: string;
    default_font__id: string;
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
            allowNull: false
        },
        name: {
            type: STRING,
            allowNull: false
        },
        default_font__id: {
            type: UUID,
            allowNull: false
        }
    },
    {
        tableName: 'language',
        timestamps: false
    }
);

// Defining Deck and Language many-to-one associations
LanguageModel.belongsTo(FontModel, {foreignKey: 'default_font__id'});

export default LanguageModel;
