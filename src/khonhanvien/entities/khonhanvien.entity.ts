import { CommonEntity } from "src/common/common";
import { Kho } from "src/kho/entities/kho.entity";
import { NhanVien } from "src/nhan-vien/entities/nhan-vien.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
	name: "kho-nhan-vien"
})
export class Khonhanvien extends CommonEntity {

	@PrimaryGeneratedColumn()
	id!: number;

	@Column({
		name: "ma_kho"
	})
	maKho!: number;

	@Column({
		name: "ma_nhan_vien"
	})
	maNhanVien!: number;

	@ManyToOne(() => NhanVien, (nhanVien) => nhanVien.khonhanvien)
	@JoinColumn({ name: "ma_nhan_vien" })
	nhanVien!: NhanVien;

	@ManyToOne(() => Kho, (kho) => kho.khonhanvien)
	@JoinColumn({
		name: "ma_kho"
	})
	kho!: Kho;

	constructor(partial: Partial<Khonhanvien>) {
		super();
		Object.assign(this, partial);
	}

}
