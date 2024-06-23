const { MongoClient } = require('mongodb');

// Replace these with your actual connection details
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const databaseName = "Users";  // Replace with your actual database name

async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db(databaseName); // Return the database object for further operations
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Re-throw the error for handling in the calling function
  }
}

async function addUser(User) {
  const db = await connectToMongo(); // Get the database object
  const collection = db.collection("Users");
  const result = await collection.insertOne(User);
  console.log(`User added with ID: ${result.insertedId}`);
}

async function getAllUsers() {
  const db = await connectToMongo();
  const collection = db.collection("Users");
  const Users = await collection.find().toArray();
  console.log("All Users:", Users);
  return Users;
}

async function deleteUser(UserId) {
  const db = await connectToMongo();
  const collection = db.collection("Users");
  const result = await collection.deleteOne({ _id: UserId }); // Use _id for deletion
  console.log(`Deleted User count: ${result.deletedCount}`);
}

async function updateUser(UserId, updateData) {
  const db = await connectToMongo();
  const collection = db.collection("Users");
  const result = await collection.updateOne({ _id: UserId }, { $set: updateData }); // Use $set for updates
  console.log(`Updated User count: ${result.modifiedCount}`);
}


async function findUsersByAgeRange(minAge, maxAge) {
  const db = await connectToMongo();
  const collection = db.collection("Users");
  const filter = { age: { $gte: minAge, $lte: maxAge } };  // Filter by age range
  const Users = await collection.find(filter).toArray();
  console.log("Users in age range:", Users);
  return Users;
}
module.exports = { addUser, getAllUsers, deleteUser, updateUser,findUsersByAgeRange }; // Export all functions