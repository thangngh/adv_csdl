import { IsNumber, IsOptional } from "class-validator";

export class CreateKhonhanvienDto {

	@IsOptional()
	@IsNumber()
	maKho: number;

	@IsOptional()
	@IsNumber()
	maNhanVien: number[];
}
