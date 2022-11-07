import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KhonhanvienService } from './khonhanvien.service';
import { CreateKhonhanvienDto } from './dto/create-khonhanvien.dto';
import { UpdateKhonhanvienDto } from './dto/update-khonhanvien.dto';

@Controller('kho-nhan-vien')
export class KhonhanvienController {
  constructor(private readonly khonhanvienService: KhonhanvienService) { }

  @Post("/add-kho-nhan-vien/:maKho")
  create(@Body() createKhonhanvienDto: CreateKhonhanvienDto, @Param('maKho') maKho: number) {
    return this.khonhanvienService.create(createKhonhanvienDto, maKho);
  }

  // @Get("/get-kho-nhan-vien")
  // findAll() {
  //   return this.khonhanvienService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.khonhanvienService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKhonhanvienDto: UpdateKhonhanvienDto) {
    return this.khonhanvienService.update(+id, updateKhonhanvienDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.khonhanvienService.remove(+id);
  }
}
