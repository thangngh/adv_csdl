import { Module } from '@nestjs/common';
import { HangHoaService } from './hang-hoa.service';
import { HangHoaController } from './hang-hoa.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { HangHoa } from "./entities/hang-hoa.entity";
import { LoaiMatHang } from "../loai-mat-hang/entities/loai-mat-hang.entity";
import { NhaCungCap } from "../nha-cung-cap/entities/nha-cung-cap.entity";
import { NhanVien } from "../nhan-vien/entities/nhan-vien.entity";
import { Kho } from "../kho/entities/kho.entity";

@Module({
  imports: [TypeOrmModule.forFeature([HangHoa, LoaiMatHang, NhaCungCap, NhanVien, Kho])],
  controllers: [HangHoaController],
  providers: [HangHoaService],
  exports: [HangHoaService]
})
export class HangHoaModule { }
