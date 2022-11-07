import { PartialType } from '@nestjs/mapped-types';
import { CreateLoaiMatHangDto } from './create-loai-mat-hang.dto';

export class UpdateLoaiMatHangDto extends PartialType(CreateLoaiMatHangDto) {}
