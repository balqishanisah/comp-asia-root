import { Module } from '@nestjs/common';
import { CompService } from './comp.service';
import { CompController } from './comp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompEntity } from './entities/comp.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompEntity])],
  controllers: [CompController],
  providers: [CompService],
})
export class CompModule {}
