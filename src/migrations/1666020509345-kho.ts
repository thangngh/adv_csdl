import { MigrationInterface, QueryRunner } from "typeorm";

export class kho1666020509345 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "kho" (
                "ma_kho" SERIAL NOT NULL primary key,
                "ten_kho" text NOT NULL,
                "dia_diem" json NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP ,
                "deleted_at" TIMESTAMP
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "kho";`)
    }

}
