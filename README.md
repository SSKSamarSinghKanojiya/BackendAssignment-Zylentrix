# User Management REST API

- Introduction

This is a simple RESTful API built using Node.js and Express for managing users. It provides basic CRUD operations, allowing users to be created, retrieved, updated, and deleted. The API uses MongoDB as the database.

`Features`

- Create a new user with name, email, and age.

- Retrieve all users.

- Retrieve a single user by ID.

- Update a user by ID.

- Delete a user by ID.

- Proper error handling for invalid input and non-existent users.

- Responses are returned in JSON format.

`Technologies Used`

- Node.js

- Express.js

- MongoDB (Mongoose as ODM)

- Postman (for testing API endpoints)

`Setup Instructions`

Prerequisites

- Ensure you have the following installed:

- Node.js (https://nodejs.org/)

- MongoDB (https://www.mongodb.com/)

- npm (comes with Node.js)

1. Install dependencies:

```
npm install
```

2. Start the server:

```
npm start
```

3. The API will be running at http://localhost:3000

`API Endpoints`

1. Create a User

- Endpoint: `POST /user`
- Request Body
```
{

        "name": "poonam",
        "email": "poonam@gmail.com",
        "age": 25

}

```
- Response:
```
{
    "success": true,
    "message": "Create User Successfully",
    "user": {
        "name": "Samar",
        "email": "Samar@gmail.com",
        "age": 15,
        "_id": "67d1ab0e9a4e4dccb7e5bce6",
        "__v": 0
    }
}
```

2. Retrieve All Users
- Endpoint: GET /user
- Response: 
```
{
    "success": true,
    "message": "All User Details ",
    "user": [
        {
            "_id": "67d1ab0e9a4e4dccb7e5bce6",
            "name": "Samar",
            "email": "Samar@gmail.com",
            "age": 15,
            "__v": 0
        }
    ]
}
```

3. Retrieve a Single User by ID
- Endpoint: GET /user/:id
- Response: 
```
{
    "success": true,
    "message": "Get User Detail By ID",
    "user": {
        "_id": "67d1ab0e9a4e4dccb7e5bce6",
        "name": "Samar",
        "email": "Samar@gmail.com",
        "age": 15,
        "__v": 0
    }
}
```

4. Update a User
- Endpoint: PUT /user/:id
- Request Body:
```
{
    "name":"Samar Update",
    "email":"Samar@gmail.com",
    "age":15
}
```
- Response:
```
{
    "success": true,
    "message": "User updated successfully",
    "user": {
        "_id": "67d1ab0e9a4e4dccb7e5bce6",
        "name": "Samar Update",
        "email": "Samar@gmail.com",
        "age": 15,
        "__v": 0
    }
}
```

5. Delete a User
- Endpoint: DELETE /user/:id

- Response:
```
{
    "success": true,
    "message": "User Delete Successfully "
}
```