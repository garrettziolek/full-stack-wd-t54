const express = require('express');
const cors = require('cors'); // Middleware to enable CORS as I got errors in console when trying to access the API from the React app without it (https://www.npmjs.com/package/cors)
const bodyParser = require('body-parser'); // Middleware to parse JSON request bodies (https://www.npmjs.com/package/body-parser)
const app = express(); // Create an Express application

app.use(cors()); // Enable CORS (https://www.npmjs.com/package/cors

// This array will hold our list of web project items
let webProjects = [
    {id: 1, title: "React Game!", description: "Tic tac toe game created using Create React app.", URL: "http://heroku/myapp/game/"},
    {id: 2, title: "Online store", description: "Online store created with HTML, CSS and JavaScript.", URL: "https://git.com/myrepos/shop/index"}
];

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Route to get the list of web projects
app.get('/api', (req, res) => {
    res.json(webProjects);
});

// Route to add a new web project
app.post('/api', (req, res) => {
    const newProject = req.body;
    newProject.id = webProjects.length + 1;
    webProjects.push(newProject);
    res.json(newProject);
});

// Route to delete a web project with a specific id
app.delete('/api/:id', (req, res) => {
    const id = parseInt(req.params.id);
    webProjects = webProjects.filter(project => project.id !== id);
    res.json({message: `Web project with id ${id} deleted`});
});

// Route to update the title or description of a web project with a specific id
app.put('/api/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const projectToUpdate = webProjects.find(project => project.id === id);
    if (!projectToUpdate) {
        res.status(404).json({error: `Web project with id ${id} not found`});
    } else {
        if (req.body.title) {
            projectToUpdate.title = req.body.title;
        }
        if (req.body.description) {
            projectToUpdate.description = req.body.description;
        }
        res.json(projectToUpdate);
    }
});

// Start the server
app.listen(8080, () => {
    console.log('Server started on port 8080');
});

// References:
// WDT53 PDF and lecture
// https://www.npmjs.com/package/body-parser
// https://expressjs.com/en/starter/basic-routing.html
// https://expressjs.com/en/starter/static-files.html
