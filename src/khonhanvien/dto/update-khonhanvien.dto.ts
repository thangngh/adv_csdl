import { PartialType } from '@nestjs/mapped-types';
import { CreateKhonhanvienDto } from './create-khonhanvien.dto';

export class UpdateKhonhanvienDto extends PartialType(CreateKhonhanvienDto) {}
