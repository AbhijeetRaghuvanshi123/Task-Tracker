import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';



const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'An error occurred';
    console.error('API Error:', message);
    throw new Error(message);
  }
);


export const fetchTasks = async () => {
  try {
    const response = await api.get('/api/tasks');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};


export const createTask = async (taskData) => {
  try {
    const response = await api.post('/api/tasks', taskData);
    return response.data.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};


export const updateTask = async (id, taskData) => {
  try {
    const response = await api.put(`/api/tasks/${id}`, taskData);
    return response.data.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};


export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`/api/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};

