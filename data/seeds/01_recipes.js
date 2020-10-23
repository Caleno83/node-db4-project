
exports.seed = async function(knex) {
	await knex("recipes").insert([   
		{ recipe_name: "fish, and lemon" },
    	{ recipe_name: "saltarin" },
    	{ recipe_name: "rice, and beans" },
	])
}
