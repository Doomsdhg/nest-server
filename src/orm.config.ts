import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const ormConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    database: 'nest_api',
    username: 'anton',
    password : 'qwe123',
    host: 'localhost',
    port: 5432,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false
};