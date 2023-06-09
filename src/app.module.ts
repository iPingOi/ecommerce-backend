import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSOWRD,
      database: process.env.DB_DATABASE,
      port: Number(process.env.DB_PORT),
      synchronize: true,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
