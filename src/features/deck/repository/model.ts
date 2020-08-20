import database from '../../../core/database';
import {Model, BOOLEAN, DATE, STRING, UUID, UUIDV4} from 'sequelize';
import LanguageModel from '../../language/repository/model';

interface DeckAttributes {
    id: string;
    userId: string;
    name: string;
    rectoLanguageId: string;
    versoLanguageId: string;
    displayRectoFirst: boolean;
    createdAt: Date;
    updatedAt: Date;
}

interface DeckInstance extends Model<DeckAttributes>, DeckAttributes {}

const DeckModel = database.define<DeckInstance>(
    'Deck',
    {
        id: {
            type: UUID,
            allowNull: false,
            defaultValue: UUIDV4,
            primaryKey: true,
            field: 'id'
        },
        userId: {
            type: UUID,
            allowNull: false,
            field: 'user__id'
        },
        name: {
            type: STRING,
            allowNull: false,
            field: 'name'
        },
        rectoLanguageId: {
            type: UUID,
            allowNull: false,
            field: 'recto_language__id'
        },
        versoLanguageId: {
            type: UUID,
            allowNull: false,
            field: 'verso_language__id'
        },
        displayRectoFirst: {
            type: BOOLEAN,
            allowNull: false,
            defaultValue: true,
            field: 'display_recto_first'
        },
        createdAt: {
            type: DATE,
            allowNull: false,
            field: 'created_at'
        },
        updatedAt: {
            type: DATE,
            allowNull: false,
            field: 'updated_at'
        }
    },
    {
        tableName: 'deck',
        timestamps: true
    }
);

// Defining Deck and Language many-to-one associations
DeckModel.belongsTo(LanguageModel, {
    as: 'rectoLanguage',
    foreignKey: 'rectoLanguageId'
});
DeckModel.belongsTo(LanguageModel, {
    as: 'versoLanguage',
    foreignKey: 'versoLanguageId'
});

export default DeckModel;
