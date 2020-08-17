import database from '../../../core/database';
import {Model, BOOLEAN, STRING, UUID, UUIDV4} from 'sequelize';
import LanguageModel from '../../language/repository/model';

interface DeckAttributes {
    id: string;
    user__id: string;
    name: string;
    recto_language__id: string;
    verso_language__id: string;
    display_recto_first: boolean;
}

interface DeckInstance extends Model<DeckAttributes>, DeckAttributes {}

const DeckModel = database.define<DeckInstance>(
    'Deck',
    {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        user__id: {
            type: UUID,
            allowNull: false
        },
        name: {
            type: STRING,
            allowNull: false
        },
        recto_language__id: {
            type: UUID,
            allowNull: false
        },
        verso_language__id: {
            type: UUID,
            allowNull: false
        },
        display_recto_first: {
            type: BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    },
    {
        tableName: 'deck',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

// Defining Deck and Language many-to-one associations
DeckModel.belongsTo(LanguageModel, {foreignKey: 'recto_language__id'});
DeckModel.belongsTo(LanguageModel, {foreignKey: 'verso_language__id'});

export default DeckModel;
