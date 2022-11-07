import { Injectable } from '@nestjs/common';
import { CreateHangHoaDto } from './dto/create-hang-hoa.dto';
import { UpdateHangHoaDto } from './dto/update-hang-hoa.dto';

@Injectable()
export class HangHoaService {
  create(createHangHoaDto: CreateHangHoaDto) {
    return 'This action adds a new hangHoa';
  }

  findAll() {
    return `This action returns all hangHoa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hangHoa`;
  }

  update(id: number, updateHangHoaDto: UpdateHangHoaDto) {
    return `This action updates a #${id} hangHoa`;
  }

  remove(id: number) {
    return `This action removes a #${id} hangHoa`;
  }
}
