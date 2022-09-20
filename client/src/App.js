import React, {useEffect, useState} from 'react';
import './App.css';
import GreetCard from './components/GreetCard';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import ActionCard from './components/ActionCard';
import TaskCanvas from './components/Tasks/TaskCanvas'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Roadmap from './components/Roadmap/ComingSoon'
import {useDispatch} from 'react-redux'
import {getTasks} from './actions/tasks'
import { getConnections } from './actions/connections';
import { getCourses } from './actions/courses';
import CourseCanvas from './components/Courses/CourseCanvas';
import Landing from './components/Connections/ConnectionCanvas';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import StatCard from './components/StatCard'


function App() {

  //currentId is used to handle task edits
  const [currentId, setCurrentId] = useState(null);

  //currentId2 is used to handle course edits
  const [currentId2,setCurrentId2] = useState(null);


  const dispatch = useDispatch();

  //Tracks changes in currentId,allTasks
  useEffect(()=>{
    dispatch(getTasks());
  },[currentId,dispatch]);

  //Tracks changes in currentId2,allCourses
  useEffect(()=>{
    dispatch(getCourses());
  },[currentId2,dispatch])

  //Tracks changes in allConnections
  useEffect(()=>{
    dispatch(getConnections());
  },[dispatch])



  return (
    <Router>
      <div className="parent"> 
      <div className="div1"><PrimarySearchAppBar/></div>
      <div className="div2">
        <Routes>
          <Route path="/tasks" element={<TaskCanvas currentId={currentId} setCurrentId={setCurrentId}/>} />
          <Route path="/courses" element={<CourseCanvas currentId={currentId2} setCurrentId={setCurrentId2}/>}/>
          <Route path="/roadmap" element={<Roadmap/>} />
          <Route path="/connections" element={<Landing/>} />
          <Route path="/" element={<HomePage/>}/>
          <Route path="*"  element={<ErrorPage/>}/>
        </Routes>
      </div>
      <div className="div3"><GreetCard/></div> 
      <div className="div4"><ActionCard/></div> 
      <div className="div5"><StatCard/></div> 
      </div>
    </Router>
  );
}

export default App;
