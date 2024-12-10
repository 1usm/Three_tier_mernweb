import mysql from "mysql2/promise";

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost",     // Your MariaDB host
  user: "root",          // Your MariaDB user
  password: "123",  // Your MariaDB password
  database: "your_database_name",   // Your MariaDB database
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;


// import { MongoClient, ServerApiVersion } from "mongodb";

// const URI = "mongodb://mongodb:27017";
// const client = new MongoClient(URI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// try {
//   // Connect the client to the server
//   await client.connect();
//   // Send a ping to confirm a successful connection
//   await client.db("admin").command({ ping: 1 });
//   console.log("Pinged your deployment. You successfully connected to MongoDB!");
// } catch (err) {
//   console.error(err);
// }

// let db = client.db("employees");

// export default db;
