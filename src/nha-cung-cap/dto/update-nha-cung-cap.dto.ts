import { PartialType } from '@nestjs/mapped-types';
import { CreateNhaCungCapDto } from './create-nha-cung-cap.dto';

export class UpdateNhaCungCapDto extends PartialType(CreateNhaCungCapDto) {}
