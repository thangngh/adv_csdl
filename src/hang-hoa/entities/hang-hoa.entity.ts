import { Column, Entity, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "../../common/common";
import { LoaiMatHang } from "../../loai-mat-hang/entities/loai-mat-hang.entity";
import { NhaCungCap } from "../../nha-cung-cap/entities/nha-cung-cap.entity";
import { NhanVien } from "../../nhan-vien/entities/nhan-vien.entity";
import { Kho } from "src/kho/entities/kho.entity";
import { donVitinh } from "../../common/common.inteface";

@Entity()
export class HangHoa extends CommonEntity {

  @PrimaryGeneratedColumn({
    name: "ma_hang"
  })
  maHang: number;

  @Column({
    name: "ten_hang"
  })
  tenHang: string;

  @Column({
    name: "don_vi_tinh",
    type: "enum",
    enum: donVitinh
  })
  donViTinh: donVitinh;

  @Column({
    name: "don_gia"
  })
  donGia: number;

  @Column({
    name: "ghi_chu",
    length: 250
  })
  note: string

  @OneToOne(() => LoaiMatHang, (hanghoa) => hanghoa.maMatHang)
  @JoinTable()
  maMatHang: number;

  @ManyToOne(() => NhaCungCap, (hanghoa) => hanghoa.maNhaCC)
  @JoinTable()
  maNhaCC: number;

  @ManyToOne(() => NhanVien, (hanghoa) => hanghoa.maNhanVien)
  @JoinTable()
  maNhanVien: number;

  @OneToOne(() => Kho, (hanghoa) => hanghoa.maKho)
  @JoinTable()
  maKho: number;

  constructor(partial: Partial<HangHoa>) {
    super();
    Object.assign(this, partial)
  }
}
