# Component Builder

A React application to render build compoents from provided json data according to the specification.

## Setup dev env

### Prerequisites
- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node](https://nodejs.org/en/download/)
- Make

### Running development server
- Setup the dev env by running `make set-up-dev`
- Start frontend and backend server by running `make start-dev`

### Running production server
- Start the server by running `make start`

> For more commands, please have a look at the [Makefile](../blob/master/Makefile).

## Project Configuration

Routes:
- To add a new route, add a config file(json format) in backend/public folder
- In browser go to that path, and you will be able to see the ui. 

for example, if we have data.json file in backend/public then you will be able to see the UI on path /data.

Add new Component
- Create a component in frontend/src/components
- Import the component in frontend/src/components/index.js

Add new Component
- Create a component in frontend/src/components
- Import the component in frontend/src/components/index.js

Module
- To maintain a state inside a component we need some modules.
- The modules, consist of state name and also functions to update the state.
- The parent/top component, contains these modules.
- During initialisation, the modules are 
