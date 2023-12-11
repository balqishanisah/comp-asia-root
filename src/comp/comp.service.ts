import { Injectable, NotFoundException } from '@nestjs/common';
import { CompEntity } from './entities/comp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CompService {
  constructor(
    @InjectRepository(CompEntity)
    private readonly compRepository: Repository<CompEntity>,
  ) {}

  async create(createCompDto: CompEntity): Promise<CompEntity> {
    return await this.compRepository.save(createCompDto);
  }

  async findAll(): Promise<CompEntity[]> {
    return this.compRepository.find();
  }

  // async update(id: string): Promise<UpdateResult> {
  //   return this.compRepository.update(id, {
  //     status: 'ORDERED',
  //     orderTime: new Date(), // Set orderTime to current timestamp
  //   });
  // }

  async update(
    id: string,
    updateCompDto: Partial<CompEntity>,
  ): Promise<UpdateResult> {
    // Find the existing CompEntity by ID
    // const existingComp = await this.compRepository.findOne(id);

    // // If not found, throw a NotFoundException
    // if (!existingComp) {
    //   throw new NotFoundException(`CompEntity with ID ${id} not found`);
    // }

    // // Update the properties based on the provided DTO
    // this.compRepository.merge(existingComp, updateCompDto);

    // // Save the updated CompEntity
    // return await this.compRepository.save(existingComp);

    return this.compRepository.update(id, {
      status: 'ORDERED',
      orderTime: new Date(), // Set orderTime to current timestamp
    });
  }
}
