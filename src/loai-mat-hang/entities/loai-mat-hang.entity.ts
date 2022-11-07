import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LoaiMatHang extends BaseEntity {

  @PrimaryGeneratedColumn(
    { name: "ma_mat_hang" }
  )
  maMatHang: number;

  @Column({
    name: "ten_mat_hang",
    nullable: false
  })
  tenMatHang: string


  constructor(partial: Partial<LoaiMatHang>) {
    super();
    Object.assign(this, partial);
  }
}
