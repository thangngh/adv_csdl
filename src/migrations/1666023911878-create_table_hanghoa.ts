import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableHanghoa1666023911878 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "hang-hoa" ("ma_hang" SERIAL NOT NULL, "ten_hang" text NOT NULL, "don_vi_tinh" text NOT NULL, "don_gia" integer NOT NULL, "ghi_chu" text NOT NULL, "ma_mat_hang" SERIAL NOT NULL, "ma_nha_cc" SERIAL NOT NULL, "ma_nhan_vien" SERIAL NOT NULL, "ma_kho" SERIAL NOT NULL, CONSTRAINT "PK_4a0d1e1c5b5f0a2b0d4f4b4e4a9" PRIMARY KEY ("ma_hang"))`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "hang-hoa";`)
    }

}
