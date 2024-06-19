const { MongoClient } = require('mongodb');

// Replace these with your actual connection details
const uri = "mongodb://localhost:27017/";  // Use the container name or IP address if needed
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const databaseName = "students";  // Replace with your actual database name

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

async function addStudent(student) {
  const db = await connectToMongo(); // Get the database object
  const collection = db.collection("students");
  const result = await collection.insertOne(student);
  console.log(`Student added with ID: ${result.insertedId}`);
}

async function getAllStudents() {
  const db = await connectToMongo();
  const collection = db.collection("students");
  const students = await collection.find().toArray();
  console.log("All students:", students);
  return students;
}

async function deleteStudent(studentId) {
  const db = await connectToMongo();
  const collection = db.collection("students");
  const result = await collection.deleteOne({ _id: studentId }); // Use _id for deletion
  console.log(`Deleted student count: ${result.deletedCount}`);
}

async function updateStudent(studentId, updateData) {
  const db = await connectToMongo();
  const collection = db.collection("students");
  const result = await collection.updateOne({ _id: studentId }, { $set: updateData }); // Use $set for updates
  console.log(`Updated student count: ${result.modifiedCount}`);
}


async function findStudentsByAgeRange(minAge, maxAge) {
  const db = await connectToMongo();
  const collection = db.collection("students");
  const filter = { age: { $gte: minAge, $lte: maxAge } };  // Filter by age range
  const students = await collection.find(filter).toArray();
  console.log("Students in age range:", students);
  return students;
}
module.exports = { addStudent, getAllStudents, deleteStudent, updateStudent,findStudentsByAgeRange }; // Export all functions