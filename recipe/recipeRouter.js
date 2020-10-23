
const express = require("express")
const db = require("../recipe/recipe-model")

const router = express.Router()

// to get all recipies
router.get("/", async (req, res, next) => {
	try {
		const recipe = await db.getRecipes()
		res.json(recipe)
	} catch(err) {
		next(err)
	}
})

// to get all ingredients, and quantity of recipies
router.get("/:id/shoppingList", async (req, res, next) => {
	try {
		const ingredients = await db.getShoppingList(req.params.id)
		res.json(ingredients)
	} catch (err) {
		next(err)
	}
})


module.exports = router