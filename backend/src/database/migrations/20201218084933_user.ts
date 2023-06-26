
export const up = (knex: { schema: { createTable: (arg0: string, arg1: (table: any) => void) => any; }; }) => {
  return knex.schema
    .createTable("users", function (table) {
       table.increments("id");
       table.string("name", 255).notNullable();
       table.boolean("admin").notNullable();
       table.string("email", 255).notNullable();
       table.string("password", 255).notNullable();
    });
};

export const down = (knex: { schema: { dropTable: (arg0: string) => any; }; }) => {
  return knex.schema
    .dropTable("users");
};
