const db = require("../data/config")


function getInstructions(recipe_id) {
	return db("instructions as i")
		.innerJoin("recipes as r", "r.id", "i.recipes_id")
		.where("r.id", recipe_id)
		.select([
            "r.id",
			"r.recipe_name",
			"i.step_id",
			"i.steps_instructions"
		])
}

module.exports = {
   getInstructions,	
}