# Project Name - nodejs_with_dbs

# Description

This Node.js project demonstrates how to connect to both MySQL and MongoDB databases within separate Docker containers. It provides a simple API to store data:

- `/laptops/store` (GET request): Saves laptop data to a MySQL database.
- `/laptops/get` (GET request): retrieve laptop data to a MySQL database.

- `/users/store` (GET request): Saves user data to a MongoDB database.
- `/users/store` (GET request): Saves user data to a MongoDB database.
# Source Code:

This project is hosted on GitHub: [https://github.com/edencoania/nodejs_with_dbs.git](https://github.com/edencoania/nodejs_with_dbs.git)

# Prerequisites

- Docker installed and running (https://docs.docker.com/engine/install/)
- Docker Compose installed (https://docs.docker.com/compose/install/)
- Node.js and npm (or yarn) installed (https://nodejs.org/en/download/package-manager)

# Setup

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/edencoania/nodejs_with_dbs.git](https://github.com/edencoania/nodejs_with_dbs.git)


# Start the Databases

Navigate to the project directory 
Run the following command in your terminal to start the MySQL and MongoDB containers using Docker Compose:

   ```bash
   cd nodejs_with_dbs
   docker-compose -f composedb/stack.yml up -d

This command will:

Build the Docker images for MySQL and MongoDB from the composedb directory.
Start the containers in detached mode (-d) to run them in the background.

Install dependencies:

Navigate to the project directory and install the required Node.js dependencies:

Bash
cd your-project-name
npm install  # or yarn install
חשוב להשתמש בקוד בזהירות.
content_copy
Running the Application

Start the Node.js server:

Run the following command to start your Node.js application:

Bash
npm start  # or yarn start
חשוב להשתמש בקוד בזהירות.
content_copy
This will typically start your server on a default port (e.g., 3000).

API Endpoints

Store Laptop Data (MySQL):

Make a POST request to http://localhost:<port>/laptops/store with the laptop data in the request body (e.g., using tools like Postman, cURL, or a browser extension). The data will be saved to the MySQL database. Replace <port> with the actual port your server is running on.

Example Request Body (JSON):

JSON
{
  "brand": "Dell",
  "model": "XPS 13",
  "price": 1299
}
חשוב להשתמש בקוד בזהירות.
content_copy
Store User Data (MongoDB):

Make a POST request to http://localhost:<port>/users/store with the user data in the request body. The data will be saved to the MongoDB database. Replace <port> with the actual port your server is running on.

Example Request Body (JSON):

JSON
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
חשוב להשתמש בקוד בזהירות.
content_copy
Accessing the Application

There's no specific "enter browser" step in this example as there's likely no frontend component. The API endpoints are designed for backend application interactions.

Customization

Database Credentials: Update the database connection details (username, password, etc.) in your code to match your MySQL and MongoDB configurations.
API Endpoints: Modify the API endpoints (/laptops/store and /users/store) and their corresponding logic to suit your specific data models and requirements.
Error Handling: Implement robust error handling in your Node.js application to gracefully handle database connection failures or invalid data.
Additional Notes

This README serves as a basic guide. You'll likely need to modify it based on your project's specific implementation details.
