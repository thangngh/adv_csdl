import { Injectable } from '@nestjs/common';
import { CreatePhieuNhapKhoDto } from './dto/create-phieu-nhap-kho.dto';
import { UpdatePhieuNhapKhoDto } from './dto/update-phieu-nhap-kho.dto';

@Injectable()
export class PhieuNhapKhoService {
  create(createPhieuNhapKhoDto: CreatePhieuNhapKhoDto) {
    return 'This action adds a new phieuNhapKho';
  }

  findAll() {
    return `This action returns all phieuNhapKho`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phieuNhapKho`;
  }

  update(id: number, updatePhieuNhapKhoDto: UpdatePhieuNhapKhoDto) {
    return `This action updates a #${id} phieuNhapKho`;
  }

  remove(id: number) {
    return `This action removes a #${id} phieuNhapKho`;
  }
}
