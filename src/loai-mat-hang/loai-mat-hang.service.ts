import { Injectable } from '@nestjs/common';
import { CreateLoaiMatHangDto } from './dto/create-loai-mat-hang.dto';
import { UpdateLoaiMatHangDto } from './dto/update-loai-mat-hang.dto';

@Injectable()
export class LoaiMatHangService {
  create(createLoaiMatHangDto: CreateLoaiMatHangDto) {
    return 'This action adds a new loaiMatHang';
  }

  findAll() {
    return `This action returns all loaiMatHang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loaiMatHang`;
  }

  update(id: number, updateLoaiMatHangDto: UpdateLoaiMatHangDto) {
    return `This action updates a #${id} loaiMatHang`;
  }

  remove(id: number) {
    return `This action removes a #${id} loaiMatHang`;
  }
}
