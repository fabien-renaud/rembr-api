import database from '../../../core/database';
import {Model, STRING, UUID, UUIDV4} from 'sequelize';

interface CardAttributes {
    id: string;
    user__id: string;
    recto_value: string;
    recto_language__id: string;
    verso_value: string;
    verso_language__id: string;
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
        user__id: {
            type: UUID,
            allowNull: false
        },
        recto_value: {
            type: STRING,
            allowNull: false
        },
        recto_language__id: {
            type: UUID,
            allowNull: false
        },
        verso_value: {
            type: STRING,
            allowNull: false
        },
        verso_language__id: {
            type: UUID,
            allowNull: false
        }
    },
    {
        tableName: 'card',
        timestamps: true
    }
);

export default CardModel;
