import { __prod__ } from './constants';
console.log("hello world");
import { MikroORM } from "@mikro-orm/core";
import { Post } from './entities/Post';
import mikroConfig from './mikro-orm.config';


const main = async () => {
    const orm = MikroORM.init(mikroConfig);
    const post = orm.em.create(Post, { title: "my first post" });
    await orm.em.persisAndFlush(post);
};
main();