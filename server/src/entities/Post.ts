import { Entity, PrimaryKey, SerializedPrimaryKey, Property } from "@mikro-orm/core";


@Entity()
export class Post {

    @PrimaryKey()
    @SerializedPrimaryKey()
    id!: string;

    @Property()
    createdAt: Date = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    @PrimaryKey()
    title!: string;

}