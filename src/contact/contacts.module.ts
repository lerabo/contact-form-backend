import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsController } from './contacts.controller';

import { Form } from './contact.entity';
import { ContactsService } from './contacts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Form])],
  providers: [ContactsService],
  controllers: [ContactsController],
})
export class ContactsModule {}
