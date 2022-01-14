import { __prod__ } from './constants';
console.log("hello world");
import { MikroORM } from "@mikro-orm/core";


const main = () => {
    const orm = MikroORM.init({
        entities: [],
        dbName: 'lireddit',
        user; '',
        password: '',
        debug: !__prod__,

    });

}
main();