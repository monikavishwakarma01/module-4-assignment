## 1️ Definition of Database Relationship
   A database relationship shows how two or more tables are connected to each other in a database.

# It helps us understand:
  * How data in one table is related to data in another table
  * How we can store data without repetition
  * How we can retrieve correct and meaningful data

 --> Relationships are created using primary key and foreign key.

# Example:
   A user places an order → user table is related to order table.



## 2️ Types of Database Relationships
  * * There are mainly three types of relationships:
    * One-to-One (1:1)
    * One-to-Many (1:N)
    * Many-to-Many (M:N)



## 3️ Types with Clear E-commerce Examples

## 1. One-to-One Relationship (1:1)

# Definition :
      In a one-to-one relationship, one record in Table A is related to only one record in Table B, and vice versa.

# E-commerce Example

User <-> User Profile
One user has only one profile
One profile belongs to only one user

users table	user_profiles table
user_id	profile_id
name	address
email	phone_number

--> user_id is linked to profile_id

#  Use case
   Used when data needs to be separated for security or clarity.


## 2. One-to-Many Relationship (1:N)
 # Definition : 
        In a one-to-many relationship, one record in Table A can be related to many records in Table B, but Table B record belongs to only one record in Table A.

# E-commerce Example

User → Orders
One user can place many orders
Each order belongs to only one user

users table	orders table
user_id	order_id
name	user_id (FK)
email	order_date

--> One user_id appears many times in orders table

# Use case
  Most commonly used relationship in databases.



## 3. Many-to-Many Relationship (M:N)
# Definition :
     In a many-to-many relationship, many records in Table A are related to many records in Table B.
    To handle this, a junction (bridge) table is used.

# E-commerce Example

Orders ↔ Products
One order can contain many products
One product can be part of many orders

* Tables involved:
  orders
  products

order_items (junction table)

order_items table
order_id (FK)
product_id (FK)
quantity

--> This table connects orders and products

# Use case => 
    * Used when both sides can have multiple records.