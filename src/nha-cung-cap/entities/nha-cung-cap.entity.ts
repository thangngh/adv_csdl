import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "../../common/common";
import { address } from "../../common/common.inteface";


@Entity()
export class NhaCungCap extends CommonEntity {

  @PrimaryGeneratedColumn({
    name: "ma_ncc"
  })
  maNhaCC: number;

  @Column({
    name: "ten_ncc",
    nullable: false
  })
  tenNhaCC: string;

  @Column({
    name: "dien_thoai",
    type: "simple-array",
  })
  phone: string;

  @Column({
    name: "dia_chi",
    nullable: false,
    type: "simple-json",
  })
  diaChi: address

  @Column({
    name: "ghi_chu",
    length: 250,
  })
  note: string

  constructor(partial: Partial<NhaCungCap>) {
    super();
    Object.assign(this, partial);
  }
}
