# EHCOMM-E-COMMERCE

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Products](#products)
  - [Categories](#categories)
  - [Tags](#tags)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Description
EHCOMM-E-COMMERCE is a full-featured e-commerce application designed to facilitate product management, categorization, and tagging. Built with Node.js, Express, and Sequelize, this application provides a robust API for managing an online store.

## User Story
As an admin user, I want to manage products, categories, and tags, so that I can keep the online store organized and up to date.

## Acceptance Criteria
- **Product Management**:
  - Admin can create a new product with valid details.
  - Admin can retrieve a list of all products.
  - Admin can update an existing product's details.
  - Admin can delete a product from the database.
  
- **Category Management**:
  - Admin can create a new category.
  - Admin can retrieve all categories.
  - Admin can update an existing category.
  - Admin can delete a category.

- **Tagging System**:
  - Admin can create a new tag.
  - Admin can retrieve all tags.
  - Admin can update an existing tag.
  - Admin can delete a tag.

## Features
- **Product Management**: Create, read, update, and delete products.
- **Category Management**: Organize products into categories.
- **Tagging System**: Add tags to products for better searchability.
- **Sequelize ORM**: Simplifies database interactions with an intuitive API.

## Technologies Used
- Node.js
- Express
- Sequelize
- MySQL
- JavaScript

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/EHCOMM-E-COMMERCE.git
   ```
2. Navigate into the project directory:
   ```bash
   cd EHCOMM-E-COMMERCE
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Set up your database by importing the `schema.sql`:
   ```sql
   -- SQL commands from schema.sql
   ```

## Usage
1. Start the application:
   ```bash
   npm start
   ```
2. Use tools like Postman or Insomnia to test the API endpoints:
   - **GET /api/products**: Retrieve all products.
   - **GET /api/products/:id**: Retrieve a single product by ID.
   - **POST /api/products**: Create a new product.
   - **PUT /api/products/:id**: Update an existing product.
   - **DELETE /api/products/:id**: Delete a product by ID.

## API Endpoints
### Products
- **GET /api/products**
- **GET /api/products/:id**
- **POST /api/products**
- **PUT /api/products/:id**
- **DELETE /api/products/:id**

### Categories
- **GET /api/categories**
- **GET /api/categories/:id**
- **POST /api/categories**
- **PUT /api/categories/:id**
- **DELETE /api/categories/:id**

### Tags
- **GET /api/tags**
- **GET /api/tags/:id**
- **POST /api/tags**
- **PUT /api/tags/:id**
- **DELETE /api/tags/:id**

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Inspiration from various e-commerce platforms.
- Sequelize documentation for ORM usage.
