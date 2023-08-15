const getDietsControllers = require("../controllers/getDietsControllers");

const getDietsHandlers = async (request, response) => {
   try {
      const result = await getDietsControllers();
      response.status(200).json(result);
   } catch (error) {
      response.status(404).json({ error: error.message });
   }
};

module.exports = getDietsHandlers;
