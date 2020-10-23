
exports.seed = async function(knex) {
	await knex("instructions").insert([   
		{ step_id: 1, steps_instructions: "warm water", recipes_id: 2 },
    { step_id: 2, steps_instructions: "cook fish", recipes_id: 1 },
    { step_id: 2, steps_instructions: "make rice", recipes_id: 2 },
    { step_id: 3, steps_instructions: "cut fish", recipes_id: 2},
	])
}
