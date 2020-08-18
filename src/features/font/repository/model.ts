import database from '../../../core/database';
import {Model, STRING, UUID, UUIDV4} from 'sequelize';

interface FontAttributes {
    id: string;
    userId: string;
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
            allowNull: false,
            field: 'id'
        },
        userId: {
            type: UUID,
            allowNull: true,
            field: 'user__id'
        },
        name: {
            type: STRING,
            allowNull: false,
            field: 'name'
        },
        source: {
            type: STRING,
            allowNull: false,
            field: 'source'
        }
    },
    {
        tableName: 'font',
        timestamps: false
    }
);

export default FontModel;
