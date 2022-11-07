import { Column, Entity, OneToMany, OneToOne, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "../../common/common";
import { NhanVien } from "../../nhan-vien/entities/nhan-vien.entity";
import { HangHoa } from "../../hang-hoa/entities/hang-hoa.entity";

@Entity()
export class PhieuNhapKho extends CommonEntity {

  @PrimaryGeneratedColumn({
    name: "ma_phieu_nhap_kho"
  })
  maPhieuNhapKho: number;

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

  constructor(partial: Partial<PhieuNhapKho>) {
    super();
    Object.assign(this, partial)
  }
}
