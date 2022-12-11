import { HttpStatus, Injectable } from '@nestjs/common';
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


  async create(createKhonhanvienDto: CreateKhonhanvienDto, maKho: number) {
    const groupNhanVien: Khonhanvien[] = []

    for await (const maNhanVien of createKhonhanvienDto.maNhanVien) {
      const khoNhanVien = new Khonhanvien({
        maKho,
        maNhanVien
      });
      groupNhanVien.push(khoNhanVien);
    }
    await this.khoNhanVienRepository.save(groupNhanVien);

    return { status: HttpStatus.OK, message: "Thêm thành công" };

  }

  async findAll() {
    const builder = await this.khoNhanVienRepository.
      createQueryBuilder("khoNhanVien")
      .leftJoinAndSelect("khoNhanVien.nhanVien", "nhanVien")
      .leftJoinAndSelect("khoNhanVien.kho", "kho")
      .select()
      .getMany();

    return builder;
  }

  async findOne(id: number) {
    const builder = await this.khoNhanVienRepository.findOne({
      where: {
        maKho: id
      },
      relations: ["nhanVien", "kho"]
    })

    return builder ? builder : { status: HttpStatus.BAD_REQUEST, message: "Không tìm thấy kho nhân viên" };
  }

  async update(id: number, updateKhonhanvienDto: UpdateKhonhanvienDto) {
    const builder = await this.khoNhanVienRepository.findOne({
      where: {
        maKho: id
      },
      relations: ["nhanVien", "kho"]
    })

    if (!builder) {
      return { status: HttpStatus.BAD_REQUEST, message: "Không tìm thấy kho nhân viên" };
    }

    const groupNhanVien: Khonhanvien[] = []

    for await (const maNhanVien of updateKhonhanvienDto.maNhanVien) {
      const khoNhanVien = new Khonhanvien({
        maKho: id,
        maNhanVien
      });
      groupNhanVien.push(khoNhanVien);
    }
    await this.khoNhanVienRepository.save(groupNhanVien);

    return { status: HttpStatus.OK, message: "Cập nhật thành công" };
  }

  async remove(id: number) {
    await this.khoNhanVienRepository.delete({
      maKho: id
    })

    return { status: HttpStatus.OK, message: "Xóa thành công" };
  }
}
