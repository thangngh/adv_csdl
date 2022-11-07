import { Module } from '@nestjs/common';
import { PhieuNhapKhoService } from './phieu-nhap-kho.service';
import { PhieuNhapKhoController } from './phieu-nhap-kho.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PhieuNhapKho } from "./entities/phieu-nhap-kho.entity";
import { NhanVien } from "../nhan-vien/entities/nhan-vien.entity";
import { HangHoa } from "../hang-hoa/entities/hang-hoa.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([PhieuNhapKho, NhanVien, HangHoa])
  ],
  controllers: [PhieuNhapKhoController],
  providers: [PhieuNhapKhoService]
})
export class PhieuNhapKhoModule { }
