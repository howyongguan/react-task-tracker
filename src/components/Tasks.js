import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Task from './Task'
import Card from '@material-ui/core/Card';

export default class Tasks extends Component{
render(){
  return(
    <>
    {this.props.tasks.map((task) => (
     //   <Typography variant="body2" key={task.id}>{task.text}
     //   </Typography>
        <Task  
        
        key={task.id} task={task}/>

      //<task key={task.id} task={task}/>
    ))}
  </>
  )
}
}

