E-commerce API

This is an e-commerce API built with Express, TypeScript, and MongoDB. The API allows for managing products and orders, including creating, updating, retrieving, and deleting products and orders. It also includes inventory management and data validation using Zod.

Features

Product Management
Create a new product
Retrieve a list of all products
Retrieve a specific product by ID
Update product information
Delete a product
Search products by a search term

Order Management
Create a new order
Retrieve all orders
Retrieve orders by user email

Inventory Management
Update inventory quantity and status when an order is created

Data Validation
Validate product and order data using Zod

Prerequisites
Node.js (v14 or higher)
npm (v6 or higher)
MongoDB (local or cloud instance)

Getting Started

1. Clone the Repository
   git clone https://github.com/your-username/ecommerce-api.git
   cd ecommerce-api
2. Install Dependencies
   npm install
3. Set Up Environment Variables
   Create a .env file in the root directory and add the following environment variables:

PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce

4. Compile TypeScript
   npx tsc
5. Start the Application
   node dist/server.js

API Endpoints
Product Management
Create a New Product
Endpoint: /api/products

Method: POST

Request Body:
{
"name": "iPhone 13",
"description": "A sleek and powerful smartphone with cutting-edge features.",
"price": 999,
"category": "Electronics",
"tags": ["smartphone", "Apple", "iOS"],
"variants": [
{
"type": "Color",
"value": "Midnight Blue"
},
{
"type": "Storage Capacity",
"value": "256GB"
}
],
"inventory": {
"quantity": 50,
"inStock": true
}
}

Sample Response:
{
"success": true,
"message": "Product created successfully!",
"data": {
"name": "iPhone 13",
"description": "A sleek and powerful smartphone with cutting-edge features.",
"price": 999,
"category": "Electronics",
"tags": ["smartphone", "Apple", "iOS"],
"variants": [
{
"type": "Color",
"value": "Midnight Blue"
},
{
"type": "Storage Capacity",
"value": "256GB"
}
],
"inventory": {
"quantity": 50,
"inStock": true
}
}
}

Retrieve a List of All Products
Endpoint: /api/products
Method: GET
Sample Response:
{
"success": true,
"message": "Products fetched successfully!",
"data": [
{
"name": "iPhone 13",
"description": "A sleek and powerful smartphone with cutting-edge features.",
"price": 999,
"category": "Electronics",
"tags": ["smartphone", "Apple", "iOS"],
"variants": [
{
"type": "Color",
"value": "Midnight Blue"
},
{
"type": "Storage Capacity",
"value": "256GB"
}
],
"inventory": {
"quantity": 50,
"inStock": true
}
}
// Additional products...
]
}

Retrieve a Specific Product by ID
Endpoint: /api/products/:productId
Method: GET
Sample Response:
{
"success": true,
"message": "Product fetched successfully!",
"data": {
"name": "iPhone 13",
"description": "A sleek and powerful smartphone with cutting-edge features.",
"price": 999,
"category": "Electronics",
"tags": ["smartphone", "Apple", "iOS"],
"variants": [
{
"type": "Color",
"value": "Midnight Blue"
},
{
"type": "Storage Capacity",
"value": "256GB"
}
],
"inventory": {
"quantity": 50,
"inStock": true
}
}
}

Update Product Information
Endpoint: /api/products/:productId
Method: PUT
Request Body:
{
"name": "iPhone 13",
"description": "A sleek and powerful smartphone with cutting-edge features.",
"price": 999,
"category": "Electronics",
"tags": ["smartphone", "Apple", "iOS"],
"variants": [
{
"type": "Color",
"value": "Midnight Blue"
},
{
"type": "Storage Capacity",
"value": "256GB"
}
],
"inventory": {
"quantity": 50,
"inStock": true
}
}

Sample Response:
{
"success": true,
"message": "Product updated successfully!",
"data": {
"name": "iPhone 13",
"description": "A sleek and powerful smartphone with cutting-edge features.",
"price": 999,
"category": "Electronics",
"tags": ["smartphone", "Apple", "iOS"],
"variants": [
{
"type": "Color",
"value": "Midnight Blue"
},
{
"type": "Storage Capacity",
"value": "256GB"
}
],
"inventory": {
"quantity": 49,
"inStock": true
}
}
}

Delete a Product
Endpoint: /api/products/:productId
Method: DELETE
Sample Response:
{
"success": true,
"message": "Product deleted successfully!",
"data": null
}

Search Products
Endpoint: /api/products?searchTerm=iphone
Method: GET
Sample Response:
{
"success": true,
"message": "Products matching search term 'iphone' fetched successfully!",
"data": [
{
"name": "iPhone 13 Pro",
"description": "The latest flagship iPhone model with advanced camera features.",
"price": 999,
"category": "Smartphones",
"tags": ["iPhone", "Apple", "Mobile"],
"variants": [
{
"type": "Color",
"value": "Graphite"
},
{
"type": "Storage",
"value": "256GB"
}
],
"inventory": {
"quantity": 50,
"inStock": true
}
},
{
"name": "iPhone SE",
"description": "Compact and affordable iPhone model with powerful performance.",
"price": 399,
"category": "Smartphones",
"tags": ["iPhone", "Apple", "Mobile"],
"variants": [
{
"type": "Color",
"value": "White"
},
{
"type": "Storage",
"value": "128GB"
}
],
"inventory": {
"quantity": 20,
"inStock": true
}
}
]
}

Order Management
Create a New Order
Endpoint: /api/orders
Method: POST
Request Body:
{
"email": "level2@programming-hero.com",
"productId": "5fd67e890b60c903cd8544a3",
"price": 999,
"quantity": 1
}
Sample Response:

json
Copy code
{
"success": true,
"message": "Order created successfully!",
"data": {
"email": "level2@programming-hero.com",
"productId": "5fd67e890b60c903cd8544a3",
"price": 999,
"quantity": 1
}
}

Retrieve All Orders
Endpoint: /api/orders
Method: GET
Sample Response:
{
"success": true,
"message": "Orders fetched successfully!",
"data": [
{
"email": "level2@programming-hero.com",
"productId": "5fd67e890b60c903cd8544a3",
"price": 999,
"quantity": 1
},
{
"email": "user@example.com",
"productId": "5fd67e890b60c903cd8544a4",
"price": 199,
"quantity": 2
}
]
}

Retrieve Orders by User Email
Endpoint: /api/orders?email=level2@programming-hero.com
Method: GET
Sample Response:
{
"success": true,
"message": "Orders fetched successfully for user email!",
"data": [
{
"email": "level2@programming-hero.com",
"productId": "5fd67e890b60c903cd8544a3",
"price": 999,
"quantity": 1
}
]
}
