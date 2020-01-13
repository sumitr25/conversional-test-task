# Component Builder

  

A React application to render build compoents from provided json data according to the specification.

  

## Setup dev env

  

### Prerequisites

-  [Docker](https://docs.docker.com/install/)

-  [Docker Compose](https://docs.docker.com/compose/install/)

-  [Node](https://nodejs.org/en/download/)

- Make

  

### Running development server

- Setup the dev env by running `make set-up-dev`

- Start frontend and backend server by running `make start-dev`

  

### Running production server

- Start the server by running `make start`

  

> For more commands, please have a look at the [Makefile](../blob/master/Makefile).


## Project Configuration

### Add a Route:
- To add a new route, add a config file(json format) in backend/public folder
- In browser go to that path, and you will be able to see the ui. 

for example, if we have data.json file in backend/public then you will be able to see the UI on path /data.

### Add New Component
- Create a component in `frontend/src/components`
- Import the component in file `frontend/src/components/index.js`
- To see the component, just add the component in the config file.

### Add New Module
- If we want to maintain a state and the update it, we need to add a module.
- To add a new Module, go to `frontend/src/modules`, create a module file, add states, and states update functions(see file `frontend/src/modules/modal.js` for reference).
- Import module in `frontend/src/modules/index.js`

## Updates to Config file

### Maintain State
- To add any state to a page, add the module details in `injectedModules` key(see [data2.json](../blob/master/backend/public/data2.json#L7))  
- To pass the state or state changing functions, add `injectedProps` key to that component, and mention the state and functions that we want to pass.(see [data2.json](../blob/master/backend/public/data2.json#L24))
 
By the above method, we can create states in the top level component, and then pass the states and functions to any child component. 

## Things to be done

- By using the above approach, we can only add one state component. So need to modify the code, so that we can add the same component multiple times. 
