import { Module } from '@nestjs/common';
import { LoaiMatHangService } from './loai-mat-hang.service';
import { LoaiMatHangController } from './loai-mat-hang.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoaiMatHang } from "./entities/loai-mat-hang.entity";

@Module({
  imports: [TypeOrmModule.forFeature([LoaiMatHang])],
  controllers: [LoaiMatHangController],
  providers: [LoaiMatHangService],
  exports: [LoaiMatHangService]
})
export class LoaiMatHangModule {}
