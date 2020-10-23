
exports.seed = async function(knex) {
	await knex("recipe_ingredients").insert([
		{ recipes_id: 1, ingredients_id: 1, quantity: 1 },
    { recipes_id: 2, ingredients_id: 2, quantity: 1 },
    { recipes_id: 3, ingredients_id: 3, quantity: 1 },
    { recipes_id: 1, ingredients_id: 2, quantity: 3 },
    { recipes_id: 1, ingredients_id: 3, quantity: 1 },
	])
}
