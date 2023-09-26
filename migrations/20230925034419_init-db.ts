import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.string("id", 25).primary();
    table.string("email", 280).notNullable().unique();
    table.string("name").nullable();
  });

  await knex.schema.createTable("posts", (table) => {
    table.string("id", 25).primary();
    table.string("title", 256).notNullable();
    table.string("content", 280).notNullable();
    table.boolean("published").notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now()).index();
    table.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("users")
  await knex.schema.dropTable("posts")
}
