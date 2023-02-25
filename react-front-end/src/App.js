import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [webProjects, setWebProjects] = useState([]);
  const [newProject, setNewProject] = useState({title: '', description: '', URL: ''});
  const [projectToUpdate, setProjectToUpdate] = useState({id: '', title: '', description: ''});

  useEffect(() => {
    fetch('http://localhost:8080/api')
        .then(response => response.json())
        .then(data => setWebProjects(data));
  }, []);

  const handleNewProjectSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/api', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newProject)
    })
        .then(response => response.json())
        .then(data => setWebProjects([...webProjects, data]))
        .catch(error => console.error('Error adding new project:', error));
  };

  const handleDeleteProject = (id) => {
    fetch(`http://localhost:8080/api/${id}`, {
      method: 'DELETE'
    })
        .then(() => setWebProjects(webProjects.filter(project => project.id !== id)))
        .catch(error => console.error('Error deleting project:', error));
  };

  const handleUpdateProjectSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/api/${projectToUpdate.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title: projectToUpdate.title, description: projectToUpdate.description})
    })
        .then(response => response.json())
        .then(data => setWebProjects(webProjects.map(project => project.id === data.id ? data : project)))
        .catch(error => console.error('Error updating project:', error));
  };

  return (
      <div>
        <h1>Web Projects</h1>
        <h2>Add a New Project</h2>
        <form onSubmit={handleNewProjectSubmit}>
          <label>
            Title:
            <input type="text" value={newProject.title} onChange={(event) => setNewProject({...newProject, title: event.target.value})} />
          </label>
          <br />
          <label>
            Description:
            <input type="text" value={newProject.description} onChange={(event) => setNewProject({...newProject, description: event.target.value})} />
          </label>
          <br />
          <label>
            URL:
            <input type="text" value={newProject.URL} onChange={(event) => setNewProject({...newProject, URL: event.target.value})} />
          </label>
          <br />
          <button type="submit">Add Project</button>
        </form>
        <h2>List of Projects</h2>
        <ul>
          {webProjects.map(project => (
              <li key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>{project.URL}</p>
                <button onClick={() => handleDeleteProject(project.id)}>Delete Project</button>
                <br />
                <button onClick={() => setProjectToUpdate({id: project.id, title: project.title, description: project.description})}>Update Project</button>
              </li>
          ))}
        </ul>

        {projectToUpdate.id && (
            <div>
              <h2>Update Project</h2>
              <form onSubmit={handleUpdateProjectSubmit}>
                <input type="hidden" value={projectToUpdate.id} />
                <label>
                  Title:
                  <input type="text" value={projectToUpdate.title} onChange={(event) => setProjectToUpdate({...projectToUpdate, title: event.target.value})} />
                </label>
                <br />
                <label>
                  Description:
                  <input type="text" value={projectToUpdate.description} onChange={(event) => setProjectToUpdate({...projectToUpdate, description: event.target.value})} />
                </label>
                <br />
                <button type="submit">Update Project</button>
              </form>
            </div>
        )}
      </div>
    );
}

export default App;