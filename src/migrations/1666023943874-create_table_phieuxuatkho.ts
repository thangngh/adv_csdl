import { MigrationInterface, QueryRunner } from "typeorm";

export class createTablePhieuxuatkho1666023943874 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "phieu-xuat-kho" (
                "ma_phieu_xuat" SERIAL NOT NULL primary key,
                "ma_nhan_vien" SERIAL NOT NULL,
                "ma_kho" SERIAL NOT NULL,
                "ngay_xuat" date NOT NULL,
                "tong_tien" integer NOT NULL,
                "ghi_chu" text,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP ,
                "deleted_at" TIMESTAMP,
                Foreign key ("ma_nhan_vien") references "nhan-vien" ("ma_nhan_vien"),
                Foreign key ("ma_kho") references "kho" ("ma_kho")
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "phieu-xuat-kho";`)
    }

}
