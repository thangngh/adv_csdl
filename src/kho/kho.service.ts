import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateKhoDto } from './dto/create-kho.dto';
import { UpdateKhoDto } from './dto/update-kho.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Kho } from "./entities/kho.entity";
import { Repository } from "typeorm";

@Injectable()
export class KhoService {

  constructor(
    @InjectRepository(Kho)
    public KhoRepository: Repository<Kho>,
  ) { }

  async create(createKhoDto: CreateKhoDto): Promise<void> {
    await this.KhoRepository.createQueryBuilder('kho')
      .insert()
      .into(Kho)
      .values(createKhoDto)
      .execute();
  }

  async findAll(): Promise<Kho[]> {
    try {
      const builder = await this.KhoRepository
        .createQueryBuilder('kho')
        .select()
        .getMany();

      return builder;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllKhoNhanVien() {
    try {
      const builder = await this.KhoRepository
        .createQueryBuilder('kho')
        .leftJoinAndSelect('kho.khonhanvien', 'kho-nhan-vien')
        .leftJoinAndSelect('kho-nhan-vien.nhanVien', 'nhan-vien')
        .select()
        .getMany();

      return builder;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number): Promise<Kho> {
    try {
      const builder = await this.KhoRepository
        .createQueryBuilder('kho')
        .select()
        .where('kho.ma_kho = :id', { id })
        .getOne();

      return builder;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findKhoNhanVienById(id: number): Promise<Kho> {
    try {
      const builder = await this.KhoRepository
        .createQueryBuilder('kho')
        .leftJoinAndSelect('kho.khonhanvien', 'kho-nhan-vien')
        .leftJoinAndSelect('kho-nhan-vien.nhanVien', 'nhan-vien')
        .select()
        .where('kho.ma_kho = :id', { id })
        .getOne();

      return builder;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async addNhanVienToKho(khoId: number, nhanvienId: number[]): Promise<void> {
    try {
      await this.KhoRepository
        .createQueryBuilder('kho')
        .relation('khonhanvien')
        .of(khoId)
        .add(nhanvienId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateKhoDto: UpdateKhoDto): Promise<void> {
    try {
      await this.KhoRepository
        .createQueryBuilder('kho')
        .update()
        .set(updateKhoDto)
        .where('kho.ma_kho = :id', { id })
        .execute();

    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.KhoRepository
        .createQueryBuilder('kho')
        .delete()
        .where('kho.ma_kho = :id', { id })
        .execute();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
