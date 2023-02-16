import { Table, Column, Model, Unique } from 'sequelize-typescript';

@Table
export class Task extends Model {
  @Unique
  @Column
  name: string;

  @Column
  dueDate: Date;

  @Column
  done: boolean;
}
