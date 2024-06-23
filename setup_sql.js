const mysql = require('mysql2/promise');

async function main() {
  try {
    // Step 1: Connect to MySQL server to create the database
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'example',
    });

    await connection.query('SHOW DATABASES LIKE ?', 'Laptop', (err, results) => {
      if (err) {
        console.error('Error checking database:', err);
      } else if (results.length > 0) {
        console.log('Database exists!');
      } else {
        console.log('Database does not exist.');
      }
      connection.end();
    });

    // Create the database if it doesn't exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS Laptop`);
    console.log('Database Laptop created or already exists.');

    // Step 2: Connect to the newly created database
    const pool = mysql.createPool({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'example',
      database: process.env.MYSQL_DATABASE || 'Laptop',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    // Step 3: Create the table if it doesn't exist
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS Laptops (
        id INT AUTO_INCREMENT PRIMARY KEY,
        model VARCHAR(255) NOT NULL,
        speed VARCHAR(255),
        ram INT,
        hd INT,
        price DECIMAL(10, 2),
        screen VARCHAR(255)
      );
    `;
    
    await pool.query(createTableQuery);
    console.log('Table Laptops created or already exists.');

    // Close the connection pool
    await pool.end();
    process.exit(0); // Exit the process with code 0 (success)

  } catch (err) {
    console.error('Error occurred:', err);
  }
}

// Execute the main function
main();

module.exports = { main};
