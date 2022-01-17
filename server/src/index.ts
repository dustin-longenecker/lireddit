import { __prod__ } from './constants';
console.log("hello world");
import { MikroORM } from "@mikro-orm/core";
import { Post } from './entities/Post';
import mikroOrmConfig from './mikro-orm.config';


const main = async () => {
    console.log("dirname: ", __dirname);
    const orm = await MikroORM.init(mikroOrmConfig);
    // const post = orm.em.create(Post, { title: "my first post" });
    const post = (await orm).em.create(Post, { title: "my first post" });
    // await orm.em.persisAndFlush(post);
    await (await orm).em.persistAndFlush(post);

};

main().catch((err) => {
    console.log(err);
});