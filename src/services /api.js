import axios from 'axios';

const BASE_URL = 'http://localhost:8083'; 

// Function to retrieve all tasks
export const getAllTasks = () => {
  return axios.get(`${BASE_URL}/tasks/get-all`);
};
export const getTaskByID = (id) => {
    return axios.get(BASE_URL);
  };
// Function to create a new task

export const addTask = (taskData) => {
    return axios.post('http://localhost:8083/tasks/save-task', taskData)
      .then(response => {
        // Handle successful response
        alert("Task Created Successfully")
        console.log('Task added successfully:', response.data);
        return response.data;
      })
      .catch(error => {
        // Handle error
        console.error('Error adding task:', error);
        throw error;
      });
  };
// Function to update a task
export const updateTask = (taskId, updatedTask) => {
  return axios.put(`${BASE_URL}/tasks/update-task/${taskId}`, updatedTask);
};

// Function to delete a task
export const deleteTask = (taskId) => {
  alert("Are you sure you want to delete this task")
  return axios.delete(`${BASE_URL}/tasks/delete/${taskId}`);
};
// Function to get a task
export const getTask = (id) => {
  
  return axios.get(`${BASE_URL}/tasks/get-task-by-id/${id}`);
};

