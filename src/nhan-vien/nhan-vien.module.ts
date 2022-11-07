import { Module } from '@nestjs/common';
import { NhanVienService } from './nhan-vien.service';
import { NhanVienController } from './nhan-vien.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NhanVien } from './entities/nhan-vien.entity';
import { Kho } from 'src/kho/entities/kho.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([NhanVien, Kho])
  ],
  controllers: [NhanVienController],
  providers: [NhanVienService],
  exports: [NhanVienService]
})
export class NhanVienModule { }
