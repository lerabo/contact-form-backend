import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from './contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Form)
    private formRepository: Repository<Form>,
  ) {}

  findAll(): Promise<Form[]> {
    return this.formRepository.find();
  }

  findOne(id: number): Promise<Form> {
    return this.formRepository.findOne({ where: { id } });
  }

  createForm(form: Form): Promise<Form> {
    return this.formRepository.save(form);
  }
}
