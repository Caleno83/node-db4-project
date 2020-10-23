const db = require("../data/config")


function getInstructionsRecipe(recipe_id) {
	return db("recipe_ingredients as ri")
		.innerJoin("recipes as r", "r.id", "ri.recipes_id")
		.innerJoin("ingredients as i", "i.id", "ri.ingredients_id")
		.where("i.id", recipe_id)
		.select([
            "i.*",
			"r.recipe_name"
		])
}

module.exports = {
   getInstructionsRecipe,	
}