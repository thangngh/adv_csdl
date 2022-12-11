import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "../../common/common";
import { ChucVu, fullName } from "../interface/nhan-vien.interface";
import { address } from "src/common/common.inteface";
import { Khonhanvien } from "src/khonhanvien/entities/khonhanvien.entity";
@Entity({
  name: 'nhan-vien'
})
export class NhanVien extends CommonEntity {

  @PrimaryGeneratedColumn({
    name: "ma_nhan_vien"
  })
  maNhanVien!: number;

  @Column({
    name: "full_name",
    nullable: false,
    type: "jsonb",
  })
  fullName!: fullName;

  @Column({
    name: "pass_word",
    nullable: false
  })
  password!: string;

  @Column({
    type: "jsonb"
  })
  address!: address;

  @Column({
    name: "dien_thoai",
    type: "jsonb",
  })
  phone!: string[];

  @Column({
    name: "chuc_vu",
    type: "enum",
    enum: ChucVu
  })
  ChucVu!: ChucVu;

  @OneToMany(() => Khonhanvien, (khonhanVien) => khonhanVien.nhanVien, { cascade: true })
  khonhanvien!: Khonhanvien[];

  constructor(partial: Partial<NhanVien>) {
    super();
    Object.assign(this, partial);
  }

}
