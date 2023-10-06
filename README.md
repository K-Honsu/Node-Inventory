# Node-Inventory - NOSQL Implementation using Sequelize on MYSQL

# Description
- This repo aims at basic CRUD functionalities with node using Sequelize and MYSQL DB.

### Prerequisites

Make sure you have the following prerequisites installed on your system:

- Node: You can download and install Node from [nodejs.org/](https://nodejs.org/en).

### Installation

- Follow these steps to set up the project
1. Clone the repository: 
    ```
    git clone https://github.com/K-Honsu/Node-Inventory.git
    ```

2. Navigate to the Project Directory
    ```
    cd Node-Inventory/
    ```

3. Install necessary dependencies
    ```
    npm install
    ```

4. Copy neccessary environment variables and fill necessary details
    ```
    - On MacOs/Linux
    cp .env.example .env
    ```

    ```
    - On Windows Command Prompt
    copy .env.example .env
    ```

## Running it on the Local Server 📡 

1. Start the development server:
    ```
    npm run dev
    ```

- This will start the development server on your local machine, and you should see output similar to the following:

```
listening on port: {PORT}s
Executing (default): SELECT 1+1 AS result
Connected to sql db successfully!
```

- Congratulations, you have now successfully run a node application on the local server!


## Usage / Documentation

- Please reference API DOCUMENTATION done with Postman Here [Postman-Reference](https://documenter.getpostman.com/view/25856069/2s9YJgSKzD)

- Note some endpoint require Token. Apply where necessary and {PORT} requires you to input the port value specified in .env file.


## Thank You.


