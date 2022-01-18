import { __prod__ } from './constants';
console.log("hello world");
// import { MikroORM } from "@mikro-orm/core";
import * as Post from './entities/Post';
// import mikroOrmConfig from './mikro-orm.config';
import { createConnection } from 'typeorm';
import path from 'path';


const main = async () => {
    // console.log("dirname: ", __dirname);
    // const orm = await MikroORM.init(mikroOrmConfig);
    // // const post = orm.em.create(Post, { title: "my first post" });
    // const post = orm.em.create(Post, { title: "my first post" });
    // // await orm.em.persisAndFlush(post);
    // await orm.em.persistAndFlush(post)
    const conn = await createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL,
        logging: true,
        // synchronize: true,
        migrations: [path.join(__dirname, "./migrations/*")],
        entities: [Post.Post],
    });

};

main().catch((err) => {
    console.log("error", err);
});