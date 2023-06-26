import knex from "knex";
import { development } from "../../knexfile";

export const connection = knex(development);