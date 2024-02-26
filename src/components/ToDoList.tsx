import React, { useState } from 'react';
import { Button, Paper, TextField, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './ToDoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Sample Task', description: 'Description for the first task' },
  ]);
  const [newTask, setNewTask] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, description: newTaskDescription }]);
      setNewTask('');
      setNewTaskDescription('');
    }
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list-container">
      <div className='todo-list-box-border-wrap'>
        <div className="todo-list-box">
          <Paper elevation={3} style={{ padding: '20px', boxSizing: 'border-box', backgroundColor: 'rgba(255, 255, 255, 0.0)' }}>
            <Typography variant="h3" component="div" align="center">
              Todo List
            </Typography>
            <div className="todo-list">
              <List style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
                {tasks.map((task) => (
                  <ListItem key={task.id} style={{ border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px', backgroundColor: '#ccc'}}>
                    <ListItemText
                      primary={task.text}
                      secondary={task.description}
                      style={{ color: 'black' }}
                    />
                    <IconButton onClick={() => handleDeleteTask(task.id)} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </div>
            <div className="todo-list-add">
              <form>
                <TextField
                  id="newTask"
                  label="New Task"
                  variant="filled"
                  fullWidth
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  style={{ marginBottom: '10px', backgroundColor: '#ccc' }}
                  InputLabelProps={{ style: { color: 'black' } }}
                  InputProps={{ style: { color: 'black', backgroundColor: '#ccc' } }}
                />
                <TextField
                  id="newTaskDescription"
                  label="Task Description"
                  variant="filled"
                  multiline
                  rows={5}
                  fullWidth
                  value={newTaskDescription}
                  onChange={(e) => setNewTaskDescription(e.target.value)}
                  style={{ marginBottom: '10px', backgroundColor: '#ccc' }}
                  InputLabelProps={{ style: { color: 'black' } }}
                  InputProps={{ style: { color: 'black', backgroundColor: '#ccc' } }}
                />
                <Button className="glow-on-hover" variant="contained" color="primary" onClick={handleAddTask}>
                  Add Task
                </Button>
              </form>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
