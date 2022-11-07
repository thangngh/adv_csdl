import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKhonhanvienDto } from './dto/create-khonhanvien.dto';
import { UpdateKhonhanvienDto } from './dto/update-khonhanvien.dto';
import { Khonhanvien } from './entities/khonhanvien.entity';

@Injectable()
export class KhonhanvienService {

  constructor(
    @InjectRepository(Khonhanvien)
    private readonly khoNhanVienRepository: Repository<Khonhanvien>,
  ) { }


  async create(createKhonhanvienDto: CreateKhonhanvienDto, maKho: number): Promise<void> {
    await this.khoNhanVienRepository.createQueryBuilder('kho-nhan-vien')
      .insert()
      .into(Khonhanvien)
      .values({
        ...CreateKhonhanvienDto,
        maKho: maKho,
        maNhanVien: +createKhonhanvienDto
      })
      .execute();
  }

  // async findAll() {
  //   const builder = this.khoNhanVienRepository.
  //     createQueryBuilder("khoNhanVien")
  //     .leftJoinAndSelect("khoNhanVien.nhanVien", "nhanVien")
  //     .leftJoinAndSelect("khoNhanVien.kho", "kho")
  //     .select()
  //     .getMany();

  //   return builder;
  // }

  async findOne(id: number) {
    return `This action returns a #${id} khonhanvien`;
  }

  async update(id: number, updateKhonhanvienDto: UpdateKhonhanvienDto) {
    return `This action updates a #${id} khonhanvien`;
  }

  async remove(id: number) {
    return `This action removes a #${id} khonhanvien`;
  }
}
