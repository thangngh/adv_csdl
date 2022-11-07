import { Column, Entity, BaseEntity } from "typeorm";

@Entity()
export class CommonEntity extends BaseEntity {
  @Column({
    name: "created_at",
  })
  createAt: Date;

  @Column({
    name: "updated_at",
  })
  updateAt: Date;

  @Column({
    name: "deleted_at"
  })
  deleteAt: Date;
}