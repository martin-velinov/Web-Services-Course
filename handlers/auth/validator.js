const { Validator } = require("node-input-validator");
// RULES TO VALIDATE BY
const validateCreateNewAccountRule = {
	username: "required",
	email: "required|email",
	password: "required",
};
const validateLoginRule = {
	email: "required|email",
	password: "required",
};

// FUNCTION THAT VALIDATES

const validate = async (requestBody, ruleToValidateBy) => {
	const v = new Validator(requestBody, ruleToValidateBy);
	const matched = await v.check();

	if (!matched) {
		throw v.errors;
		throw {
			status: 400,
			message: v.errors
		};
	}
};

module.exports = {
	validate,
	validateCreateNewAccountRule,
	validateLoginRule,
};