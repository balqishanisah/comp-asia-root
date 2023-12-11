import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CompService } from './comp.service';
import { CompEntity } from './entities/comp.entity';

@Controller('comps')
export class CompController {
  constructor(private readonly compService: CompService) {}

  @Post()
  async create(@Body() createCompDto: CompEntity) {
    return await this.compService.create(createCompDto);
  }

  @Get()
  async findAll() {
    return await this.compService.findAll();
  }

  @Patch(':id') // Updated route path to include ':id' parameter
  async update(
    @Param('id') id: string,
    @Body() updateCompDto: Partial<CompEntity>,
  ) {
    // Use the CompService to update the resource
    return await this.compService.update(id, updateCompDto);
  }
}
