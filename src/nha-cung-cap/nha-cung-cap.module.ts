import { Module } from '@nestjs/common';
import { NhaCungCapService } from './nha-cung-cap.service';
import { NhaCungCapController } from './nha-cung-cap.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { NhaCungCap } from "./entities/nha-cung-cap.entity";

@Module({
  imports: [TypeOrmModule.forFeature([NhaCungCap])],
  controllers: [NhaCungCapController],
  providers: [NhaCungCapService],
  exports: [NhaCungCapService]
})
export class NhaCungCapModule {}
