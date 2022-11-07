import { ArrayMaxSize, IsArray, IsEnum, IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";
import { address } from "src/common/common.inteface";
import { ChucVu, fullName } from "../interface/nhan-vien.interface";

export class UpdateNhanVienDto  {
  @IsObject()
  @IsOptional()
  public fullName!: fullName;

  @IsString()
  @IsOptional()
  public password!: string;

  @IsObject()
  @IsOptional()
  public address!: address;

  @IsArray()
  @IsOptional()
  @ArrayMaxSize(5)
  public phone!: string[];

  @IsEnum({
    default: ChucVu.NV_KHO,
  })
  @IsOptional()
  public ChucVu!: ChucVu;
}
