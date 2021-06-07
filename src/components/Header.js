import PropTypes from 'prop-types'
// import Button from './Button'
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography';
import React, {Component} from 'react';


export default class Header extends Component{
    render(){
        return(
        <header className='header'>
        <Typography variant="h4" gutterBottom>
        {this.props.title}
        </Typography>
       <Button variant="contained" color="secondary" 
       onClick={this.props.handlePushNewTasks}
       >
           Add
       </Button>
    </header>

        )

    }
}


 Header.defaultProps ={
     title: 'Task Tracker',

 }

 Header.propTypes={
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle={
//     color: 'red',
//     backgroundColor:'black'}


