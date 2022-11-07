import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableLoaimathang1666023919673 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "loai-mat-hang" (
                "ma_mat_hang" SERIAL NOT NULL primary key,
                "ten_mat_hang" text NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP ,
                "deleted_at" TIMESTAMP
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "loai-mat-hang";`)
    }

}
