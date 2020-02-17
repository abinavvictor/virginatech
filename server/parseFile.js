const excelToJson = require("convert-excel-to-json");
const result = excelToJson({
  sourceFile: "./artifacts/dataset.xlsx"
});
const store = [];

const parseFileToJson = () => {
  console.log("Parsing file has started");

  if (result !== undefined) {
    console.log("Parsing of data completed");
    const { universityData } = result;
    formatData(universityData);
    console.log("Formatting of data completed");
    // console.log("Store", store);
    return store;
  }
};

const doSanitize = str => {
  return str.replace(/\./g, "");
};

const formatData = universityData => {
  const keys = Object.keys(universityData);
  const headerKey = keys[0];
  for (let i = 1; i < keys.length; i++) {
    const valueJson = universityData[i]; // {A: 1, B: 'NCSU'}
    const eachUniversityData = {};
    const header = universityData[headerKey];

    for (let key in valueJson) {
      const eachValue = valueJson[key];
      const sanitizedKey = doSanitize(header[key]);
      eachUniversityData[sanitizedKey] = eachValue;
    }

    store.push(eachUniversityData);
  }
};

module.exports = parseFileToJson;
