# Ehcom-E-Commerce

## Description

Ehcom-E-Commerce is an e-commerce application that allows users to manage products, categories, and tags. It provides a RESTful API for CRUD operations on products, categories, and tags, enabling efficient management of an online store.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Database Structure](#database-structure)
- [Video Walkthrough](#video-walkthrough)
- [Links](#links)
- [Contributing](#contributing)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/awb2987/Ehcom-E-Commerce.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Ehcom-E-Commerce
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your database connection details:
   ```plaintext
   DB_NAME='ecommerce_db'
   DB_USER='your_username'
   DB_PASSWORD='your_password'
   DB_URL='your_database_url'  # Optional
   ```

5. Run the database seeders:
   ```bash
   npm run seed
   ```

6. Start the server:
   ```bash
   npm start
   ```

## Usage

Once the server is running, you can interact with the API using tools like Postman or cURL. 

### Example Endpoints:

- **Categories**:
  - `GET /api/categories` - Retrieve all categories
  - `POST /api/categories` - Create a new category
  - `PUT /api/categories/:id` - Update a category by ID
  - `DELETE /api/categories/:id` - Delete a category by ID

- **Products**:
  - `GET /api/products` - Retrieve all products
  - `POST /api/products` - Create a new product
  - `PUT /api/products/:id` - Update a product by ID
  - `DELETE /api/products/:id` - Delete a product by ID

- **Tags**:
  - `GET /api/tags` - Retrieve all tags
  - `POST /api/tags` - Create a new tag
  - `PUT /api/tags/:id` - Update a tag by ID
  - `DELETE /api/tags/:id` - Delete a tag by ID

## API Routes

The API is structured as follows:

- `/api/categories`
- `/api/products`
- `/api/tags`

Each route supports standard HTTP methods: GET, POST, PUT, and DELETE.

## Database Structure

The database consists of the following tables:

- **Categories**: Contains category information.
- **Products**: Contains product information linked to categories.
- **Tags**: Contains tag information for products.
- **ProductTags**: A join table that facilitates the many-to-many relationship between products and tags.

## Video Walkthrough

Watch the video walkthrough for a demonstration of the application:
[Video Walkthrough](https://drive.google.com/file/d/1jjnzOPPkG4EWf_4tV1wkEf9K2AcG5bx4/view)
Backup Link to Walkthrough Video [Backup Tutorial Link](https://drive.google.com/file/d/1jjnzOPPkG4EWf_4tV1wkEf9K2AcG5bx4/view?usp=sharing)

![Project Screenshot](./Images/Screenshot%20of%20Schema.png)

## Links

- GitHub Repository: [Ehcom-E-Commerce GitHub](https://github.com/awb2987/Ehcom-E-Commerce)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Create a pull request.
