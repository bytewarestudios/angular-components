# angular-components
A collection of Angular Components and example implementations

## Running the application
npm start

## Running the mock api server
npm run mock-server

## Adding mock get requests

1. Create a folder within the test/mocks/api directory and name it.  The name
should be the name of the end point you want to consume.

2. Within the folder you created in step 1 add a json file named data.json and add
the json that you would like to return from the endpoint.

3. Add the api route to the apiRoutes array in the test/mocks/api/routes/index.js file. 

4. Restart the mock server and you should be able to use the mock endpoint.