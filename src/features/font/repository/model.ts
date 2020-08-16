import database from '../../../core/database';
import {Model, STRING, UUID, UUIDV4} from 'sequelize';

interface FontAttributes {
    id: string;
    user__id: string;
    name: string;
    source: string;
}

interface FontInstance extends Model<FontAttributes>, FontAttributes {}

const FontModel = database.define<FontInstance>(
    'Font',
    {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        user__id: {
            type: UUID,
            allowNull: true
        },
        name: {
            type: STRING,
            allowNull: false
        },
        source: {
            type: STRING,
            allowNull: false
        }
    },
    {
        tableName: 'font',
        timestamps: false
    }
);

export default FontModel;
