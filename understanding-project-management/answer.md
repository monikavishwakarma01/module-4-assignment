 ### (a)  Package Managers

## What is a Package Manager?
  A package manager is a tool that helps developers install, update, delete, and manage external libraries (packages) used in a project.
  In Node.js, these packages provide ready-made solutions such as creating servers, connecting databases, handling authentication, etc.

 # Example:
    To create a server, we can use the Express package instead of writing all code from scratch.


## Why do we need Package Managers in Backend Development?
  Package managers are required because:
   * Backend projects depend on many external libraries
   * They install required packages easily
   * They manage library versions
   * They keep projects organized
   * They make collaboration easy
   * They save development time


 #  Problems Faced If Package Managers Are Not Used
  Without package managers:
   * Libraries must be downloaded manually
   * Version conflicts may occur
   * Project setup becomes difficult
   * Dependency tracking is not possible
   * Updating libraries is risky and time-consuming


### (b)  NPM (Node Package Manager)

 # What is NPM?
  NPM (Node Package Manager) is the default package manager for Node.js.
  It is automatically installed when Node.js is installed.


 # Why is NPM Important for Node.js Applications?
  NPM is important because:
   * It provides access to thousands of Node.js packages
   * It manages project dependencies efficiently
   * It maintains consistency across different systems
   * It simplifies backend development


  # How NPM Helps in Managing Dependencies

 # NPM:
  * Installs required packages
  * Stores dependency details in package.json
  * Automatically installs correct versions
  * Maintains dependency structure

 # Example:
  npm install express


 ### (c)  Backend Project Initialization
   Command Used to Initialize a Backend (Node.js) Project
    -> npm init

  # Explanation of npm init and npm init -y
  * *  npm init
     * Asks questions about the project
     * Creates a package.json file
     * Allows custom project configuration

  * * npm init -y
    * Skips all questions
    * Uses default values
    * Quickly creates package.json

  ## d. Files and Folders Created After Project Initialization
   * 1. package.json

  # Purpose:
    * Stores project information
    * Lists dependencies and scripts

  # Importance:
    * Required to manage dependencies
    * Helps others understand and run the project

   * 2. node_modules

  # Purpose:
    Contains all installed packages

  # Importance:
     Stores actual code of dependencies used in the project

  * 3. package-lock.json

  # Purpose:
    Locks exact versions of dependencies

  # Importance:
     * Ensures same dependency versions on all systems
     * Prevents unexpected errors


  ## GitHub Rules
   # Files/Folders That Should NOT Be Pushed to GitHub
      * node_modules
      * .env

  # Reason:
  * node_modules is very large and auto-generated
  * .env contains sensitive information


  # Files That MUST Be Committed to GitHub
   * package.json
   * package-lock.json
   * Project source files

  # Reason:
   * These files define the project structure
   * Help others install dependencies correctly
   * Maintain project consistency