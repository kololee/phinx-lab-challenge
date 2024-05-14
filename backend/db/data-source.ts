import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: './db.sqlite',
  entities: ['dist/src/**/*.entity{.ts,.js}'],
  migrations: ['dist/db/migrations/*.js'],
};

export const dataSource = new DataSource(dataSourceOptions);
