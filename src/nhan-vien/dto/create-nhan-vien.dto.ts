
import {
	ArrayMaxSize,
	IsArray,
	IsNotEmpty,
	IsOptional,
	IsString,
	IsObject,
	IsEnum
} from 'class-validator';
import { address } from 'src/common/common.inteface';
import { ChucVu, fullName } from '../interface/nhan-vien.interface';

export class CreateNhanVienDto {

	@IsObject()
	@IsNotEmpty()
	public fullName: fullName;

	@IsString()
	@IsNotEmpty()
	public password: string;

	@IsObject()
	@IsOptional()
	public address: address;

	@IsArray()
	@IsOptional()
	@ArrayMaxSize(5)
	public phone: string[];

	@IsEnum({
		default: ChucVu.NV_KHO,
	})
	public ChucVu: ChucVu;
}
