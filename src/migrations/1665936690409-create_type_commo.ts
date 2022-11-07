import { MigrationInterface, QueryRunner } from "typeorm";

export class createTypeCommo1665936690409 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`
        //     CREATE TYPE "address" AS (
        //        "city" text,
        //        "street" text,
        //        "state" text,
        //        "zipCode" int,
        //        "province" text
        //     );
        // `);
        // await queryRunner.query(`
        //     CREATE TYPE "full_name" AS (
        //         "firstName" text,
        //         "lastName" text
        //     );
        // `);
        await queryRunner.query(`
            CREATE TYPE "chuc_vu" AS ENUM(
                'NV_KHO',
                'CHU_KHO'
            )
        `);
        await queryRunner.query(`
            CREATE TYPE "don_vi_tinh" AS ENUM (
                'KG',
                'GOI',
                'Thung',
                'Hop'
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`DROP TYPE "address";`);
        // await queryRunner.query(`DROP TYPE "full_name";`);
        await queryRunner.query(`DROP TYPE "chuc_vu";`);
        await queryRunner.query(`DROP TYPE "don_vi_tinh";`)
    }

}
