import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableKhoinnhanvien1666509761625 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE "kho-nhan-vien" (
            "id" SERIAL NOT NULL,
            "ma_kho" SERIAL NOT NULL,
            "ma_nhan_vien" SERIAL NOT NULL,
            "created_at" TIMESTAMP NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP ,
            "deleted_at" TIMESTAMP,
            CONSTRAINT "PK_8e1b0b1b1e1e1e1e1e1e1e1e1e1" PRIMARY KEY ("id"),
            CONSTRAINT "FK_8e1b0b1b1e1e1e1e1e1e1e1e11" FOREIGN KEY ("ma_kho") REFERENCES "kho"("ma_kho") ON DELETE NO ACTION ON UPDATE NO ACTION,
            CONSTRAINT "FK_8e1b0b1b1e1e1e1e1e1e1e1e12" FOREIGN KEY ("ma_nhan_vien") REFERENCES "nhan-vien"("ma_nhan_vien") ON DELETE NO ACTION ON UPDATE NO ACTION
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE "kho_nhan_vien"
        `)
    }

}
