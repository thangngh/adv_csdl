import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HangHoaService } from './hang-hoa.service';
import { CreateHangHoaDto } from './dto/create-hang-hoa.dto';
import { UpdateHangHoaDto } from './dto/update-hang-hoa.dto';

@Controller('hang-hoa')
export class HangHoaController {
  constructor(private readonly hangHoaService: HangHoaService) {}

  @Post()
  create(@Body() createHangHoaDto: CreateHangHoaDto) {
    return this.hangHoaService.create(createHangHoaDto);
  }

  @Get()
  findAll() {
    return this.hangHoaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hangHoaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHangHoaDto: UpdateHangHoaDto) {
    return this.hangHoaService.update(+id, updateHangHoaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hangHoaService.remove(+id);
  }
}
