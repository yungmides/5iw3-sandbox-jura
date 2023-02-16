import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { Task } from './tasks/entities/task.entity';

export default {
  entities: [Task],
  password: 'rootpw',
  dbName: 'task',
  type: 'mysql', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
} as MikroOrmModuleOptions;
