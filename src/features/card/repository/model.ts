import database from '../../../core/database';
import {Model, DATE, STRING, UUID, UUIDV4} from 'sequelize';
import DeckModel from '../../deck/repository/model';

interface CardAttributes {
    id: string;
    deckId: string;
    rectoValue: string;
    versoValue: string;
    createdAt: Date;
    updatedAt: Date;
}

interface CardInstance extends Model<CardAttributes>, CardAttributes {}

const CardModel = database.define<CardInstance>(
    'Card',
    {
        id: {
            type: UUID,
            allowNull: false,
            defaultValue: UUIDV4,
            primaryKey: true,
            field: 'id'
        },
        deckId: {
            type: UUID,
            allowNull: false,
            field: 'deck__id'
        },
        rectoValue: {
            type: STRING,
            allowNull: false,
            field: 'recto_value'
        },
        versoValue: {
            type: STRING,
            allowNull: false,
            field: 'verso_value'
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
        tableName: 'card',
        timestamps: true
    }
);

// Defining Card and Deck many-to-many association
CardModel.belongsTo(DeckModel, {foreignKey: 'deckId'});

export default CardModel;
