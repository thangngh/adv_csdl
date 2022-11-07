import { Module } from '@nestjs/common';
import { PhieuXuatKhoService } from './phieu-xuat-kho.service';
import { PhieuXuatKhoController } from './phieu-xuat-kho.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PhieuNhapKho } from "../phieu-nhap-kho/entities/phieu-nhap-kho.entity";
import { NhanVien } from "../nhan-vien/entities/nhan-vien.entity";
import { HangHoa } from "../hang-hoa/entities/hang-hoa.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([PhieuNhapKho, NhanVien, HangHoa])
  ],
  controllers: [PhieuXuatKhoController],
  providers: [PhieuXuatKhoService]
})
export class PhieuXuatKhoModule { }
