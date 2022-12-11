import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateNhanVienDto } from './dto/create-nhan-vien.dto';
import { UpdateNhanVienDto } from './dto/update-nhan-vien.dto';
import { NhanVien } from './entities/nhan-vien.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class NhanVienService {

  constructor(
    @InjectRepository(NhanVien)
    public NhanVienRepository: Repository<NhanVien>
  ) { }

  async create(createNhanVienDto: CreateNhanVienDto): Promise<void> {
    await this.NhanVienRepository.
      createQueryBuilder('nhanvien').
      insert().
      values(createNhanVienDto).
      execute();
  }
  async findNameNhanVien() {
    const builder = await this.NhanVienRepository.
      createQueryBuilder('nhanvien').
      select()
      .where(
        'nhanvien.ma_nhan_vien < 3'
      )
      .getMany()
    return builder;
  }

  async findAll(): Promise<NhanVien[]> {
    try {
      const builder = await this.NhanVienRepository.
        createQueryBuilder('nhanvien').
        select().
        getMany();


      return builder;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  async findAllIdNhanVien(): Promise<string[]> {
    const builder = await this.NhanVienRepository.
      createQueryBuilder('nhanvien').
      select("nhanvien.maNhanVien").
      getMany();

    return builder as unknown as string[];
  }

  async findAllNhanVienKho() {
    try {
      const builder = await this.NhanVienRepository.
        createQueryBuilder('nhanvien').
        leftJoinAndSelect('nhanvien.khonhanvien', 'kho-nhan-vien').
        leftJoinAndSelect('kho-nhan-vien.kho', 'kho').
        select().
        getMany();

      return builder;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number): Promise<NhanVien> {
    const builder = await this.NhanVienRepository.
      createQueryBuilder('nhanvien').
      select().
      where('nhanvien.ma_nhan_vien = :id', { id: id }).
      getOne();

    return builder;
  }

  async update(id: number, updateNhanVienDto: UpdateNhanVienDto): Promise<void> {
    await this.NhanVienRepository.
      createQueryBuilder('nhanvien').
      update().
      set(updateNhanVienDto).
      where('nhanvien.ma_nhan_vien = :id', { id: id }).
      execute();

  }

  async remove(id: number): Promise<void> {
    await this.NhanVienRepository.
      createQueryBuilder('nhanvien').
      delete().
      where('nhanvien.ma_nhan_vien = :id', { id: id }).
      execute();

  }

  async findName(name: string): Promise<NhanVien> {
    const builder = await this.NhanVienRepository.
      createQueryBuilder('nhanvien').
      select().
      where(
        'nhanvien.full_name->>"firstName" =: name', { name: name }
      ).getOne()
    return builder;
  }
}
