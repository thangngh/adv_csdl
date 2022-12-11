import { IsArray, IsNumber, IsOptional } from "class-validator";

export class CreateKhonhanvienDto {

	@IsOptional()
	@IsNumber()
	maKho: number;

	@IsOptional()
	@IsArray()
	maNhanVien: number[];
}
