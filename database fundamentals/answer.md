# Database Fundamentals – Conceptual Understanding

## 1. Why is `db.json` not suitable as a database for real projects?

`db.json` (or any JSON file used as storage) is an example of **file-based storage**, not a real database. It may work for learning or very small demos, but it fails in real-world applications.

### Limitations of file-based storage

* Data is stored in a single file, so every read/write operation loads the whole file into memory.
* No built-in support for indexing, relationships, or query optimization.
* Manual handling is required for updates, deletions, and consistency.

### Performance issues

* Reading or writing large JSON files is slow.
* As data grows, response time increases significantly.
* Not optimized for frequent queries or multiple operations.

### Scalability issues

* Cannot handle large amounts of data efficiently.
* Not suitable for multiple users accessing data at the same time.
* No support for horizontal or vertical scaling.

### Reliability issues

* High risk of data corruption if the file is written by multiple processes.
* No automatic backup, recovery, or crash handling.
* No transaction support (partial writes can break data).

**Conclusion:** `db.json` is good only for learning, testing APIs, or mock projects—not for production systems.


## 2. Ideal characteristics of a database system (apart from storage)

A real database system does much more than just store data.

### Performance

* Fast data retrieval and insertion.
* Uses indexing, caching, and optimized queries.
* Handles large datasets efficiently.

### Concurrency

* Supports multiple users accessing data at the same time.
* Prevents conflicts using locks or version control.
* Ensures consistent results even under heavy load.

### Reliability

* Data remains safe even if the system crashes.
* Supports backups and recovery mechanisms.
* Ensures minimal data loss.

### Data integrity

* Enforces rules like `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, and `NOT NULL`.
* Prevents invalid or duplicate data.
* Maintains accuracy and consistency of data.

### Scalability

* Can handle increasing users and data volume.
* Supports vertical scaling (better hardware) and horizontal scaling (more servers).

### Fault tolerance

* Continues working even if some components fail.
* Automatically recovers from failures.
* Ensures system availability.


## 3. Types of databases and their use cases

Broadly, databases are divided into **two main types**.

### 1. Relational Databases (SQL)

Relational databases store data in **tables (rows and columns)** and use structured schemas.

**Examples:** MySQL, PostgreSQL, Oracle, SQL Server

**Characteristics:**

* Fixed schema
* Uses SQL for queries
* Strong data integrity and relationships

**Use cases:**

* Banking systems (accounts, transactions)
* Student management systems
* E-commerce orders and payments
* Enterprise applications


### 2. Non-Relational Databases (NoSQL)

NoSQL databases store data in flexible formats like **documents, key-value pairs, graphs, or columns**.

**Examples:** MongoDB, Firebase, Redis, Cassandra

**Characteristics:**

* Flexible or schema-less design
* High scalability
* Better for unstructured or semi-structured data

**Use cases:**

* Social media applications
* Real-time chat applications
* Product catalogs
* Big data and analytics


