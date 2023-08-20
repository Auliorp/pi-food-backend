const getRecipesNameControllers = require("../controllers/getRecipesNameControllers");

const getRecipesNameHandlers = async (request, response) => {
   const { type } = request.query;

   try {
      const result = await getRecipesNameControllers(type);
      response.status(200).json(result);
   } catch (error) {
      response.status(404).json({ error: error.message });
   }
};

module.exports = getRecipesNameHandlers;
