# Full stack: Web Projects tracker with Express and React
This is an example of a full stack web application that uses Express and React to allow a user to track their web projects.

The application is built using an Express API to send data to a React front-end, which displays a list of web projects and allows users to add new projects, modify project details, and delete projects from the list.
# Getting started
This app will require you to use two terminal instances. One will be used to run the Express API, and the other will be used to run the React front-end. You will also need to have Node.js installed on your machine.

1. Clone the repository to your local machine.
`   git clone https://github.com/<username>/full-stack-web-project-tracker.git
`
2. Install the dependencies for the Express API by navigating to the express-api directory and running the following command:
`   npm install
`
3. Start the Express API server by running the following command:
`   node app.js
`
   You should see the following message in your terminal:
`   Server is running on port 8080
`
4. Open a new terminal instance and navigate to the react-front-end directory.
5. Install the dependencies for the front-end by navigating to the react-front-end directory and running the following command:
`   npm install
`
6. Start the React app by running the following command:
`   npm start
`
7. Open your browser and navigate to http://localhost:3000 to view the app.
# Using the app
Once the application is running, you will see a list of existing web projects on the home page. 

You can add a new project by filling in the required details and clicking the "Add Project" button. To modify the details of an existing project, click the "Edit" button next to the project and make the desired changes in the form. To delete a project, click the "Delete" button next to the project.

# Built with
* [React](https://reactjs.org/)
* [Express](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)

# References
* [React documentation](https://reactjs.org/docs/getting-started.html)
* [Express documentation](https://expressjs.com/en/starter/installing.html)
* WD T53 and T54 course materials
* Please see the full code in app.js (express api) and App.js (react app) for references used for specific elements of the app.

