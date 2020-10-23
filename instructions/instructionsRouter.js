
const express = require("express")
const db = require("../instructions/instructions_model")

const router = express.Router()


// to get instructions of a specific recipe
router.get("/:id/recipes", async (req, res, next) => {
	try {
		const ingredients = await db.getInstructionsRecipe(req.params.id)
		res.json(ingredients)
	} catch (err) {
		next(err)
	}
})


module.exports = router