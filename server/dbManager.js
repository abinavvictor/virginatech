const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/victorProject";
let db, collection;
let data;

const writeToDB = data => {
  console.log("inside mongo manager");
  mongo.connect(
    process.env.MONGODB_URI || url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    (err, client) => {
      if (err) {
        console.error(err);
        return;
      }

      db = client.db();
      collection = db.collection("universityData");
      // console.log("Data being written", data);
      collection.insertMany(data, (err, result) => {
        data = result;
        return result;
        if (err) console.log("Writing Error to MongoDB", err);
      });
    }
  );
};

const getAllData = (request, response) => {
  console.log("inside getall");
  collection.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
};

module.exports = writeToDB;
module.exports.getAllData = getAllData;
