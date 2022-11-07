import { PartialType } from '@nestjs/mapped-types';
import { CreatePhieuXuatKhoDto } from './create-phieu-xuat-kho.dto';

export class UpdatePhieuXuatKhoDto extends PartialType(CreatePhieuXuatKhoDto) {}
