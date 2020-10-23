exports.seed = async function(knex) {
	await knex("ingredients").insert([   
		{ ingredients_name: "fish" },
    { ingredients_name: "lemon" },
    { ingredients_name: "rice" },
    { ingredients_name: "beans"},
	])
}
