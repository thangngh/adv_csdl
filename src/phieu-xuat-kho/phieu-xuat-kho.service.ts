import { Injectable } from '@nestjs/common';
import { CreatePhieuXuatKhoDto } from './dto/create-phieu-xuat-kho.dto';
import { UpdatePhieuXuatKhoDto } from './dto/update-phieu-xuat-kho.dto';

@Injectable()
export class PhieuXuatKhoService {
  create(createPhieuXuatKhoDto: CreatePhieuXuatKhoDto) {
    return 'This action adds a new phieuXuatKho';
  }

  findAll() {
    return `This action returns all phieuXuatKho`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phieuXuatKho`;
  }

  update(id: number, updatePhieuXuatKhoDto: UpdatePhieuXuatKhoDto) {
    return `This action updates a #${id} phieuXuatKho`;
  }

  remove(id: number) {
    return `This action removes a #${id} phieuXuatKho`;
  }
}
