import { Model, DataTypes} from 'sequelize';
import { sequelize  } from '../instances/pg';

interface UserClientInstance extends Model {
  id: number;
  name: string;
  age: number;
  email: string;
  bairro: string;
  estado: string;
  numberphone: number;
  numberphoneadmin: number;
}
export const UserClient = sequelize.define<UserClientInstance>('UserClient', {
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
  },
  numberphoneadmin: { 
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'usersclients',
  timestamps: false
})