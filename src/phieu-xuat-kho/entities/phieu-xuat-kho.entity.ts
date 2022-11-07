import { Column, Entity, OneToMany, JoinTable, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "../../common/common";
import { NhanVien } from "../../nhan-vien/entities/nhan-vien.entity";
import { HangHoa } from "../../hang-hoa/entities/hang-hoa.entity";

@Entity()
export class PhieuXuatKho extends CommonEntity {

  @PrimaryGeneratedColumn({
    name: "ma_phieu_xuat_kho"
  })
  maPhieuXuatKho: number;

  @Column({
    name: "so_luong"
  })
  soLuong: number;

  @OneToOne(() => NhanVien, (phieu) => phieu.maNhanVien)
  @JoinTable()
  maNhanVien: number;

  @OneToMany(() => HangHoa, (phieu) => phieu.maHang)
  @JoinTable()
  maHang: number;

  constructor(partial: Partial<PhieuXuatKho>) {
    super();
    Object.assign(this, partial)
  }
}
