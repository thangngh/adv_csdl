import { Khonhanvien } from "src/khonhanvien/entities/khonhanvien.entity";
import { NhanVien } from "src/nhan-vien/entities/nhan-vien.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "../../common/common";
import { address } from "../../common/common.inteface";

@Entity()
export class Kho extends CommonEntity {

  @PrimaryGeneratedColumn({
    name: "ma_kho"
  })
  maKho!: number;

  @Column({
    name: "ten_kho"
  })
  tenKho!: string;

  @Column({
    name: "dia_diem",
    type: "jsonb",
    array: true
  })
  diaDiem!: address[];

  @OneToMany(() => Khonhanvien, (khonhanVien) => khonhanVien.kho)
  khonhanvien!: Khonhanvien[];

  constructor(partial: Partial<Kho>) {
    super();
    Object.assign(this, partial);
  }
}
