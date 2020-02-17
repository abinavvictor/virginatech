const parseFileToJson = require("./parseFile");
const writeToMongo = require("./dbManager");

const index = () => {
  // 1. Parse the File.
  const result = parseFileToJson();
  // 2. Store them in Database. Call DBService.
  return writeToMongo(result);
};

module.exports = index;
