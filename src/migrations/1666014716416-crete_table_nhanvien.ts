import { MigrationInterface, QueryRunner } from "typeorm";

export class creteTableNhanvien1666014716416 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "nhan-vien" (
                "ma_nhan_vien" SERIAL NOT NULL primary key,
                "full_name" text NOT NULL,
                "pass_word" text NOT NULL,
                "address" text NOT NULL,
                "dien_thoai" text NOT NULL,
                "chuc_vu" "chuc_vu" NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP ,
                "deleted_at" TIMESTAMP
            )
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "nhan-vien";`)
    }

}
