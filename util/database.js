const mongoDb = require("mongodb");
const mongoDbClient = mongoDb.MongoClient;


let _db;
const mongoConnect=(callback)=>{
  mongoDbClient
  .connect("mongodb+srv://harsh:QartsBgC2RuaQfs3@cluster0.odidjca.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0")
  .then((client) => {
    _db=client.db();
    console.log("Connected!");
    callback()
  })
  .catch((err) => {
    console.log(err);
  });
}

const getDb=()=>{
  if(_db){
    return _db;
  }
  else{
    throw 'No database found';
  }
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;

