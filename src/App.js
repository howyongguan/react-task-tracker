import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import React, {Component} from 'react';
import Button from "@material-ui/core/Button"
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';

export default class App extends Component{
 state={
  tasks : [
    {
      id: 1,
      text: "Doctor Appointment",
      day: "Feb 5th at 2.30pm",
      reminder: true,
    },
  
    {
      id: 2,
      text: "Meeting at 7pm",
      day: "Feb 6th at 1.30pm",
      reminder: true,
    },
  
    {
      id: 3,
      text: "Food Shopping ",
      day: "Feb 5th at 11.30pm",
      reminder: true,
    }, ],
  };

 handlePushNewTasks = () =>{
     const newStuff={
     id: 4,
    text: "New Car wash ",
    day: "Feb 3th at 1.30pm",
    reminder: true,
   }
   const newTaskList = this.state.tasks;
   newTaskList.push(newStuff);

   this.setState({
    tasks:newTaskList
   })

  
 };

 //Add Task
  AddTask =(task) =>{
  console.log (task)}
 

//delete task

  deleteTask= (id)=>{
  console.log ('delete',id)
}



  render(){
    return(
      <Card className="container">
      { <Header handlePushNewTasks={this.handlePushNewTasks}/>}
      <AddTask onAdd={this.state.addTask}/>
      <Tasks tasks={this.state.tasks} onDelete={this.state.deleteTask} />

       {/* <Tasks tasks={this.state.tasks} /> */}
      </Card> 
      
     );
    }
  }
