import { MigrationInterface, QueryRunner } from "typeorm";

export class updateFkHanghoa1666026113344 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hang-hoa" ADD CONSTRAINT "FK_2b9f9c7b1e8e6a2f6e0b6d1b6a8" FOREIGN KEY ("ma_mat_hang") REFERENCES "loai-mat-hang"("ma_mat_hang") `);
        await queryRunner.query(`ALTER TABLE "hang-hoa" ADD CONSTRAINT "FK_5f5e1c5b5d5b2c5b5d5b2c5b5d5" FOREIGN KEY ("ma_nha_cc") REFERENCES "nha-cung-cap"("ma_nha_cc") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hang-hoa" DROP CONSTRAINT "FK_2b9f9c7b1e8e6a2f6e0b6d1b6a8"`);
        await queryRunner.query(`ALTER TABLE "hang-hoa" DROP CONSTRAINT "FK_5f5e1c5b5d5b2c5b5d5b2c5b5d5"`);
    }

}
