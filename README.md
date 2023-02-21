# Facepalm

Simple Express and MongoDB based server which emulates the basic social network function like Authentication and CRUD operations.

# Environment vars

This project uses the following environment variables:

| Name      | Description                     | Default Value |
| --------- | ------------------------------- | ------------- |
| MONGO_URI | MongoDB connection string       | "\*"          |
| PORT      | Port where the project will run | "\*"          |

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version 8.0.0

# Getting started

- Clone the repository

```
git clone  <git lab template url> <project_name>
```

- Install dependencies

```
cd <project_name>
npm install
```

- Add enviroment variables in the .env file in the root folder of the project

```
.env
```

- Build and run the project

```
npm start
```

```
## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src/controllers**      | Controllers define functions to serve various express routes.
| **src/middlewares**      | Express middlewares which process the incoming requests before handling them down to the routes
| **src/routes**           | Contain all express routes, separated by module/area of application
| **src/models**           | Models define schemas that will be used in storing and retrieving data from Application database  |
| **src**/index.js         | Entry point to express app                                                               |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   |


```

### Running the build

All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description                                                                     |
| ---------- | ------------------------------------------------------------------------------- |
| `start`    | Runs full build and runs node on dist/index.js. Can be invoked with `npm run start` |
| `dev`      | Runs full build before starting all watch tasks. Can be invoked with `npm run dev`  |

### API Endpoints

Coming soon

| Endpoint | Description |
| -------- | ----------- |
