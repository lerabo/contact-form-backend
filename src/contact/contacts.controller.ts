import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Form } from './contact.entity';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async createForm(@Res() response, @Body() form: Form) {
    const newForm = await this.contactsService.createForm(form);
    return response.status(HttpStatus.CREATED).json({
      newForm,
    });
  }

  @Get()
  async fetchAll(@Res() response) {
    const contacts = await this.contactsService.findAll();
    return response.status(HttpStatus.OK).json({
      contacts,
    });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const form = await this.contactsService.findOne(id);
    return response.status(HttpStatus.OK).json({
      form,
    });
  }
}
