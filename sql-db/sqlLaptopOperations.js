const pool = require('./database');
const setup = require('./../setup_sql')
const laptopSchema = require('./../models/user')
/*
async function addLaptop(laptop) {
  const { model, speed, ram, hd, price, screen } = laptop;
  const [rows] = await pool.query('INSERT INTO Laptop (model, speed, ram, hd, price, screen) VALUES (?, ?, ?, ?, ?, ?)', [model, speed, ram, hd, price, screen]);
  return rows;
}*/


async function addLaptop(laptop) {
  setup.setup();
  const { model, speed, ram, hd, price, screen } = laptop;
  const connection = await pool.getConnection(); // Get a connection from the pool


  try {
    // Check if database exists
    const [databaseExists] = await connection.query('SELECT SCHEMA_NAME FROM information_schema.SCHEMATA WHERE SCHEMA_NAME = ?', ['Laptop']);

    if (!databaseExists.length) {
      console.log('Database "Laptop" does not exist. Creating it...');
      setup.main()

      await createDatabase('Laptop', connection); // Call createDatabase passing the connection
    }

    // Check if table exists within the database
    const [tableExists] = await connection.query('SHOW TABLES LIKE ?', ['Laptops']); // Use 'Laptops' as the table name

    if (!tableExists.length) {
      console.log('Table "Laptops" does not exist. Creating it...');
      await createTable('Laptops', laptopSchema); // Call createTable passing the connection
    }
    // Insert laptop data
    const [rows] = await connection.query('INSERT INTO Laptops (model, speed, ram, hd, price, screen) VALUES (?, ?, ?, ?, ?, ?)', [model, speed, ram, hd, price, screen]);
    console.log(`Laptops "${model}" added successfully.`);
    return rows;
  } catch (error) {
    console.error('Error adding Laptops:', error);
    throw error; // Re-throw the error for handling in the calling code
  } finally {
    connection.release(); // Release the connection back to the pool
  }
}


async function getAllLaptops() {
  const [rows] = await pool.query('SELECT * FROM Laptops');
  return rows;
}

async function createDatabase(db_name) {
  const connection = await pool.getConnection(); // Get a connection from the pool
  try {
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${db_name}`); // Use prepared statement for database name
    console.log(`Database '${db_name}' created successfully.`);
  } catch (error) {
    console.error('Error creating database:', error);
    throw error; // Re-throw the error for handling in the calling code
  } finally {
    connection.release(); // Release the connection back to the pool
  }
}

async function createTable(table_name, schema) {
  const connection = await pool.getConnection(); // Get a connection from the pool

  try {
    const columns = Object.keys(schema).map(key => `${key} ${schema[key]}`); // Construct column definitions
    const query = `CREATE TABLE IF NOT EXISTS ${table_name} (${columns.join(', ')})`;

    await connection.query(query);
    console.log(`Table '${table_name}' created successfully.`);
  } catch (error) {
    console.error('Error creating table:', error);
    throw error; // Re-throw the error for handling in the calling code
  } finally {
    connection.release(); // Release the connection back to the pool
  }
}
module.exports = { addLaptop, getAllLaptops,createTable ,createDatabase};
