import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { address } from 'src/common/common.inteface';
import { CreateKhoDto } from './create-kho.dto';

export class UpdateKhoDto extends PartialType(CreateKhoDto) {

	@IsOptional()
	tenKho?: string;

	@IsOptional()
	diaDiem?: address[];

}
