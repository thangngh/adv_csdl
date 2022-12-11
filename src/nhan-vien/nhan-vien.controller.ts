import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NhanVienService } from './nhan-vien.service';
import { CreateNhanVienDto } from './dto/create-nhan-vien.dto';
import { UpdateNhanVienDto } from './dto/update-nhan-vien.dto';

@Controller('nhan-vien')
export class NhanVienController {
  constructor(private readonly nhanVienService: NhanVienService) { }

  @Post()
  create(@Body() createNhanVienDto: CreateNhanVienDto) {
    return this.nhanVienService.create(createNhanVienDto);
  }

  @Get("/get-all-nhan-vien")
  async findAll() {
    return await this.nhanVienService.findAll();
  }

  @Get("/get-all-id-nhan-vien")
  async findAllIdNhanVien() {
    return await this.nhanVienService.findAllIdNhanVien();
  }

  @Get('/get-nhan-vien/:id')
  findOne(@Param('id') id: string) {
    return this.nhanVienService.findOne(+id);
  }

  @Get("/get-all-nhan-vien-kho")
  async findAllNhanVienKho() {
    return await this.nhanVienService.findAllNhanVienKho();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNhanVienDto: UpdateNhanVienDto) {
    return this.nhanVienService.update(+id, updateNhanVienDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nhanVienService.remove(+id);
  }

  @Get("/get-name-nhan-vien")
  async findNameNhanVien() {
    return await this.nhanVienService.findNameNhanVien();
  }
}
