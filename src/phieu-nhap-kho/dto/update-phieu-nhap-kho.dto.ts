import { PartialType } from '@nestjs/mapped-types';
import { CreatePhieuNhapKhoDto } from './create-phieu-nhap-kho.dto';

export class UpdatePhieuNhapKhoDto extends PartialType(CreatePhieuNhapKhoDto) {}
