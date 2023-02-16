import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    TasksModule,
    MikroOrmModule.forRoot({
      autoLoadEntities: true,
      dbName: 'task',
      type: 'mysql',
    }),
  ],
})
export class AppModule {}
