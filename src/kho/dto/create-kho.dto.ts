import { IsArray, IsNotEmpty, IsString } from "class-validator";
import { address } from "src/common/common.inteface";
import { NhanVien } from "src/nhan-vien/entities/nhan-vien.entity";
export class CreateKhoDto {

	@IsNotEmpty()
	@IsString()
	tenKho: string;

	@IsNotEmpty()
	@IsArray()
	diaDiem: address[];

}
