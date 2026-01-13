# Node.js Architecture
Node.js is a runtime environment that allows JavaScript to run outside the browser. It is designed to handle multiple tasks efficiently using an event-driven, non-blocking architecture.


## JavaScript Engine (V8)
* V8 is the JavaScript engine developed by Google.
* It converts JavaScript code into machine code that the computer can understand.
* V8 is fast because it uses Just-In-Time (JIT) compilation.
* In Node.js, V8 executes all JavaScript code.


## Node.js Core APIs
* Core APIs are built-in modules provided by Node.js.
* Examples: fs, http, path, os, events, stream
* These APIs allow developers to perform tasks like file handling, networking, and system operations.
* They internally use native code and libuv to perform asynchronous operations.


## Native Bindings
* Native bindings connect JavaScript code with low-level C/C++ code.
* They act as a bridge between Node.js Core APIs and system-level functionality.
* Native bindings allow Node.js to use features written in C/C++ for better performance.


## Event Loop
* The event loop is the heart of Node.js.
* It continuously checks for pending tasks and executes callbacks.
* It allows Node.js to perform non-blocking operations even though JavaScript runs on a single thread.
* The event loop is managed by libuv.


### What is libuv?
* libuv is a C library used by Node.js.
* It provides an event loop and handles asynchronous operations.
* It works across different operating systems.

### Why Node.js needs libuv?
* JavaScript alone cannot perform low-level system tasks.
* libuv allows Node.js to handle file system, networking, and timers efficiently.
* It makes Node.js non-blocking and scalable.

### Responsibilities of libuv
* Managing the event loop
* Handling asynchronous I/O operations
* Managing the thread pool
* Handling timers and callbacks


### What is a thread pool?
* A thread pool is a group of background threads.
* These threads perform heavy or blocking operations.
* Default size of thread pool in Node.js is 4 threads.

### Why Node.js uses a thread pool
* To avoid blocking the main JavaScript thread
* To perform slow operations in the background
* To improve performance and responsiveness

### Operations handled by the thread pool
* File system operations (fs module)
* DNS lookup operations
* Cryptographic operations
* Compression tasks


### What are worker threads?
* Worker threads are separate JavaScript threads.
* They allow running JavaScript code in parallel.
* Each worker has its own event loop and memory.

### Why are worker threads needed?
* To handle CPU-intensive tasks
* To avoid blocking the main thread
* To improve performance for heavy computations

### Difference between thread pool and worker threads
* Thread pool runs background tasks written in C/C++
* Worker threads run JavaScript code
* Thread pool is managed by libuv
* Worker threads are created manually by developers


## Event Loop Queues

### Macro Task Queue
* Contains tasks like timers and I/O callbacks
* Examples:
  * setTimeout
  * setInterval
  * setImmediate
  * I/O operations

### Micro Task Queue
* Contains small, high-priority tasks
* Examples:

  * Promise.then()
  * process.nextTick()

### Execution priority between them
* Micro Task Queue is executed before Macro Task Queue
* All microtasks are completed before moving to the next macrotask

