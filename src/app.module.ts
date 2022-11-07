import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database/database.module";
import { NhanVienModule } from './nhan-vien/nhan-vien.module';
import { KhoModule } from './kho/kho.module';
import { PhieuNhapKhoModule } from './phieu-nhap-kho/phieu-nhap-kho.module';
import { PhieuXuatKhoModule } from './phieu-xuat-kho/phieu-xuat-kho.module';
import { HangHoaModule } from './hang-hoa/hang-hoa.module';
import { NhaCungCapModule } from './nha-cung-cap/nha-cung-cap.module';
import { LoaiMatHangModule } from './loai-mat-hang/loai-mat-hang.module';
import { KhonhanvienModule } from './khonhanvien/khonhanvien.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    NhanVienModule,
    KhoModule,
    PhieuNhapKhoModule,
    PhieuXuatKhoModule,
    HangHoaModule,
    NhaCungCapModule,
    LoaiMatHangModule,
    KhonhanvienModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
