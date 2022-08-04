import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDTO, UpdateContactDTO } from './contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get()
  public getAll() {
    return this.contactService.getAll();
  }

  @Post()
  public add(@Body() contact: CreateContactDTO) {
    return this.contactService.add(contact);
  }

  @Get(':id')
  public findOne(@Param('id', ParseIntPipe) id: number) {
    return this.contactService.get(id);
  }

  @Put(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() contact: UpdateContactDTO,
  ) {
    return this.contactService.update(id, contact);
  }

  @Delete(':id')
  public remove(@Param('id', ParseIntPipe) id: number) {
    return this.contactService.remove(id);
  }
}
