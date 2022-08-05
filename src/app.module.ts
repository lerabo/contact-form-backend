import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ContactModule } from './contact/contact.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      url: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
    }),
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
