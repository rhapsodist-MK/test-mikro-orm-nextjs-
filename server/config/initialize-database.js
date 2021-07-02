import "reflect-metadata";
import { MikroORM } from "../server/entities/node_modules/@mikro-orm/core";
import config from "./mikro-orm";

const startOrm = async () => MikroORM.init(config);

export default startOrm;
