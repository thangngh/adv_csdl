import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KhoService } from './kho.service';
import { CreateKhoDto } from './dto/create-kho.dto';
import { UpdateKhoDto } from './dto/update-kho.dto';

@Controller('kho')
export class KhoController {
  constructor(private readonly khoService: KhoService) { }

  @Post("/add-kho")
  create(@Body() createKhoDto: CreateKhoDto) {
    return this.khoService.create(createKhoDto);
  }

  @Post("/add-nhan-vien-vao-kho/:id")
  addNhanVienVaoKho(@Body() nhanvienId: number[], @Param('id') khoId: number) {
    return this.khoService.addNhanVienToKho(khoId, nhanvienId);
  }

  @Get("/get-all-kho")
  findAll() {
    return this.khoService.findAll();
  }

  @Get("/get-kho-nhan-vien")
  findKhoNhanVien() {
    return this.khoService.findAllKhoNhanVien();
  }


  @Get('/get-kho/:id')
  findOne(@Param('id') id: string) {
    return this.khoService.findOne(+id);
  }

  @Get("/get-kho-nhan-vien/:id")
  findKhoNhanVienById(@Param('id') id: string) {
    return this.khoService.findKhoNhanVienById(+id);
  }

  @Patch('/update-kho/:id')
  update(@Param('id') id: string, @Body() updateKhoDto: UpdateKhoDto) {
    return this.khoService.update(+id, updateKhoDto);
  }

  @Delete('/delete-kho/:id')
  remove(@Param('id') id: string) {
    return this.khoService.remove(+id);
  }
}
