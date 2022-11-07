import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhieuNhapKhoService } from './phieu-nhap-kho.service';
import { CreatePhieuNhapKhoDto } from './dto/create-phieu-nhap-kho.dto';
import { UpdatePhieuNhapKhoDto } from './dto/update-phieu-nhap-kho.dto';

@Controller('phieu-nhap-kho')
export class PhieuNhapKhoController {
  constructor(private readonly phieuNhapKhoService: PhieuNhapKhoService) {}

  @Post()
  create(@Body() createPhieuNhapKhoDto: CreatePhieuNhapKhoDto) {
    return this.phieuNhapKhoService.create(createPhieuNhapKhoDto);
  }

  @Get()
  findAll() {
    return this.phieuNhapKhoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phieuNhapKhoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhieuNhapKhoDto: UpdatePhieuNhapKhoDto) {
    return this.phieuNhapKhoService.update(+id, updatePhieuNhapKhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phieuNhapKhoService.remove(+id);
  }
}
