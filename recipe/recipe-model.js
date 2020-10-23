const db = require("../data/config")

function getRecipes() {
	return db("recipes")
}

function getShoppingList(recipe_id) {
    return db("recipe_ingredients as ri")
        .innerJoin("recipes as r", "r.id", "ri.recipes_id")
		.innerJoin("ingredients as i", "i.id", "ri.ingredients_id")
		.where("r.id", recipe_id)
		.select([
			"r.id",
			"r.recipe_name",
			"i.ingredients_name",
			"ri.quantity"
		])
}


module.exports = {
    getRecipes,
    getShoppingList,	
}