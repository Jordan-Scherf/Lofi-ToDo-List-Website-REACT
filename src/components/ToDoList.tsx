import React, { useState } from 'react';
import { ListGroup, Button, Card, Form } from 'react-bootstrap';
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
          <Card>
            <Card.Body>
              <Card.Title><h1>Todo List</h1></Card.Title>
              <ListGroup variant="flush">
                {tasks.map((task) => (
                  <div className="task-item" key={task.id}>
                    <h2 className="task-text">{task.text}</h2>
                    <p className="task-description">{task.description}</p>
                    <i
                      className="bi bi-x-circle-fill delete-icon"
                      onClick={() => handleDeleteTask(task.id)}
                    ></i>
                  </div>
                ))}
              </ListGroup>
              <div className="todo-list-add">
                <Form>
                  <Form.Group controlId="newTask">
                    <Form.Control
                      type="text"
                      placeholder="New Task"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="newTaskDescription">
                    <Form.Control rows={5}
                      as="textarea"
                      placeholder="Task Description"
                      value={newTaskDescription}
                      onChange={(e) => setNewTaskDescription(e.target.value)}
                    />
                  </Form.Group>
                  <Button className="glow-on-hover" variant="primary" onClick={handleAddTask}>
                    Add Task
                  </Button>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TodoList;



