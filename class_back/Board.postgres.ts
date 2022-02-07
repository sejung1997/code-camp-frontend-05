import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  age!: number;
  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt!: Date;
  // 실제로 삭제하진 않고 isDelete가 false 인 값만 fetchBoard 한다.
}
