import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const ormConfig: TypeOrmModuleOptions = {
    url: process.env.DATABASE_URL,
    type: 'postgres',
    ssl: {
      rejectUnauthorized: false,
    },
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    autoLoadEntities: true,
  };