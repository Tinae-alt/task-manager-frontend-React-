import React,{ Component } from 'react';
import './App.css';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import TaskForm from './components/TaskForm';

import TaskList from './components/TaskList';
import TaskEditor from './components/TaskEditor';
import TaskViewer from './components/TaskViewer';
function App() {
 
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<TaskList/>}></Route>
            <Route path='/create' element={<TaskForm/>}></Route>
            <Route path='/update/:id' element={<TaskEditor/>}></Route>
            <Route path='/view/:id' element={<TaskViewer/>}></Route>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App;
