import database from '../../../core/database';
import {Model, STRING, UUID, UUIDV4} from 'sequelize';
import DeckModel from '../../deck/repository/model';

interface CardAttributes {
    id: string;
    deck__id: string;
    recto_value: string;
    verso_value: string;
}

interface CardInstance extends Model<CardAttributes>, CardAttributes {}

const CardModel = database.define<CardInstance>(
    'Card',
    {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        deck__id: {
            type: UUID,
            allowNull: false
        },
        recto_value: {
            type: STRING,
            allowNull: false
        },
        verso_value: {
            type: STRING,
            allowNull: false
        }
    },
    {
        tableName: 'card',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

// Defining Card and Deck many-to-many association
CardModel.belongsTo(DeckModel, {foreignKey: 'deck__id'});

export default CardModel;
