import { Injectable } from '@nestjs/common';
import { Contact } from './contact.entity';
import { CreateContactDTO, UpdateContactDTO } from './contact.dto';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async getAll(): Promise<Contact[]> {
    return await this.contactRepository.find();
  }
  async add(contact: CreateContactDTO): Promise<Contact> {
    const newContact = await this.contactRepository.create(contact);
    console.log(newContact, 'newContact');
    return await this.contactRepository.save(newContact);
  }
  async get(id: number): Promise<Contact> {
    return await this.contactRepository.findOne({
      where: {
        id,
      },
    });
  }
  async update(id: number, contact: UpdateContactDTO): Promise<Contact> {
    await this.contactRepository.update(id, contact);
    return await this.contactRepository.findOne({
      where: {
        id,
      },
    });
  }
  async remove(id: number): Promise<DeleteResult> {
    await this.contactRepository.findOneOrFail({
      where: {
        id,
      },
    });
    return await this.contactRepository.delete(id);
  }
}
