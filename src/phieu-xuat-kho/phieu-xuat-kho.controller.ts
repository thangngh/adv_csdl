import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhieuXuatKhoService } from './phieu-xuat-kho.service';
import { CreatePhieuXuatKhoDto } from './dto/create-phieu-xuat-kho.dto';
import { UpdatePhieuXuatKhoDto } from './dto/update-phieu-xuat-kho.dto';

@Controller('phieu-xuat-kho')
export class PhieuXuatKhoController {
  constructor(private readonly phieuXuatKhoService: PhieuXuatKhoService) {}

  @Post()
  create(@Body() createPhieuXuatKhoDto: CreatePhieuXuatKhoDto) {
    return this.phieuXuatKhoService.create(createPhieuXuatKhoDto);
  }

  @Get()
  findAll() {
    return this.phieuXuatKhoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phieuXuatKhoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhieuXuatKhoDto: UpdatePhieuXuatKhoDto) {
    return this.phieuXuatKhoService.update(+id, updatePhieuXuatKhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phieuXuatKhoService.remove(+id);
  }
}
