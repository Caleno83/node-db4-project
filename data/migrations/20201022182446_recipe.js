
exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
		table.increments("id")
		table.text("recipe_name", 128).notNull().unique()
    })
    
    await knex.schema.createTable("ingredients", (table) => {
		table.increments("id")
		table.text("ingredients_name", 128).notNull().unique()
    })
    
    await knex.schema.createTable("instructions", (table) => {
        table.increments("id")
        table.integer("step_id").notNull()
        table.text("steps_instructions", 128).notNull()
        table
            .integer("recipes_id")
            .references("id")
            .inTable("recipes")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")
    })
    
    await knex.schema.createTable("recipe_ingredients", (table) => {
        table
            .integer("recipes_id")
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()
        table
            .integer("ingredients_id")
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()
        table
            .float("quantity").notNull()
            table.primary(["recipes_id", "ingredients_id"])
    })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_ingredients")
    await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};
