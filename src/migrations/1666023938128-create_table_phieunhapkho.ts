import { MigrationInterface, QueryRunner } from "typeorm";

export class createTablePhieunhapkho1666023938128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "phieu-nhap-kho" (
                "ma_phieu_nhap" SERIAL NOT NULL primary key,
                "ma_nhan_vien" SERIAL NOT NULL,
                "ma_kho" SERIAL NOT NULL,
                "ma_nha_cc" SERIAL NOT NULL,
                "ngay_nhap" date NOT NULL,
                "tong_tien" integer NOT NULL,
                "ghi_chu" text,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP ,
                "deleted_at" TIMESTAMP,
                Foreign key ("ma_nhan_vien") references "nhan-vien" ("ma_nhan_vien"),
                Foreign key ("ma_kho") references "kho" ("ma_kho"),
                Foreign key ("ma_nha_cc") references "nha-cung-cap" ("ma_nha_cc")
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "phieu-nhap-kho";`)
    }

}
