import { Module } from '@nestjs/common';
import { CompModule } from './comp/comp.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      // port: 5432,
      ssl: true,
      autoLoadEntities: true,
      synchronize: false,
      // connection: {
      //   options: `project=${ENDPOINT_ID}`,
      // },
    }),
    CompModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
