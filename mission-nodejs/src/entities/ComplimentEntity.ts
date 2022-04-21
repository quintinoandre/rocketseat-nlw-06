import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { TagEntity } from "./TagEntity";
import { UserEntity } from "./UserEntity";

@Entity("compliments")
class ComplimentEntity {
  constructor() {
    if (!this.id) this.id = uuid();
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_sender: string;

  @JoinColumn({ name: "user_sender" })
  @ManyToOne(() => UserEntity)
  UserSender: UserEntity;

  @Column()
  user_receiver: string;

  @JoinColumn({ name: "user_receiver" })
  @ManyToOne(() => UserEntity)
  UserReceiver: UserEntity;

  @Column()
  tag_id: string;

  @JoinColumn({ name: "tag_id" })
  @ManyToOne(() => TagEntity)
  tag: TagEntity;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;
}

export { ComplimentEntity };
