import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableNhacungcap1666023928713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "nha-cung-cap" (
                "ma_nha_cc" SERIAL NOT NULL primary key,
                "ten_nha_cc" text NOT NULL,
                "dien_thoai" text NOT NULL,
                "dia_chi" text NOT NULL,
                "ghi_chu" text,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP ,
                "deleted_at" TIMESTAMP
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "nha-cung-cap";`)
    }

}
