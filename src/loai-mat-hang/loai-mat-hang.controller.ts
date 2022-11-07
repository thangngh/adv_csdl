import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoaiMatHangService } from './loai-mat-hang.service';
import { CreateLoaiMatHangDto } from './dto/create-loai-mat-hang.dto';
import { UpdateLoaiMatHangDto } from './dto/update-loai-mat-hang.dto';

@Controller('loai-mat-hang')
export class LoaiMatHangController {
  constructor(private readonly loaiMatHangService: LoaiMatHangService) {}

  @Post()
  create(@Body() createLoaiMatHangDto: CreateLoaiMatHangDto) {
    return this.loaiMatHangService.create(createLoaiMatHangDto);
  }

  @Get()
  findAll() {
    return this.loaiMatHangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loaiMatHangService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoaiMatHangDto: UpdateLoaiMatHangDto) {
    return this.loaiMatHangService.update(+id, updateLoaiMatHangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loaiMatHangService.remove(+id);
  }
}
