import { Model, DataTypes} from 'sequelize';
import { sequelize  } from '../instances/pg';

interface UserAdminInstance extends Model {
  id: number;
  name: string;
  age: number;
  email: string;
  bairro: string;
  estado: string;
  numberphone: number;
}
export const UserAdmin = sequelize.define<UserAdminInstance>('UserAdmin', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING
  },
  age: { 
    type: DataTypes.INTEGER,
    defaultValue: 18
  },
  email: {
    type: DataTypes.STRING
  },
  bairro: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.STRING
  },
  numberphone: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'users',
  timestamps: false
})