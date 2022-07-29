import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '0644758842kkk',
  database: 'newBase',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
