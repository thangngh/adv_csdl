import { Module } from '@nestjs/common';
import { KhonhanvienService } from './khonhanvien.service';
import { KhonhanvienController } from './khonhanvien.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Khonhanvien } from './entities/khonhanvien.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Khonhanvien])
  ],
  controllers: [KhonhanvienController],
  providers: [KhonhanvienService]
})
export class KhonhanvienModule { }
