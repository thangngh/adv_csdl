import { Module } from '@nestjs/common';
import { KhoService } from './kho.service';
import { KhoController } from './kho.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Kho } from "./entities/kho.entity";
import { NhanVienModule } from "../nhan-vien/nhan-vien.module";
import { NhanVien } from "../nhan-vien/entities/nhan-vien.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Kho, NhanVien]),
    NhanVienModule
  ],
  controllers: [KhoController],
  providers: [KhoService]
})
export class KhoModule { }
