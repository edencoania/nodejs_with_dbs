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
   ```

This command will:

Build the Docker images for MySQL and MongoDB from the composedb directory.
Start the containers in detached mode (-d) to run them in the background.

# Install dependencies:

Navigate to the project directory and install the required Node.js dependencies:

 ```Bash
cd your-project-name
npm install  # or yarn install
 ```

# Running the Application

Start the Node.js server:

Run the following command to start your Node.js application:

 ```Bash
npm start  # or yarn start
 ```
This will start your server on a default port (e.g., 8000).

# API Endpoints
open browser 

## Store Laptop Data (MySQL):

Make a GET request to http://localhost:8000/laptops/store - It will save default data to MySql inside the docker container.

## Store User Data (MongoDB):

Make a GET request to http://localhost:8000/users/store It will save default data to mongoDB inside the docker container.


# Customization

Database Credentials: Update the database connection details (username, password, etc.) in your code to match your MySQL and MongoDB configurations.
API Endpoints: Modify the API endpoints (/laptops/store and /users/store) and their corresponding logic to suit your specific data models and requirements.
Error Handling: Implement robust error handling in your Node.js application to gracefully handle database connection failures or invalid data.
Additional Notes

- Update accordingly the composedb/stack.yml

This README serves as a basic guide. You'll likely need to modify it based on your project's specific implementation details.
