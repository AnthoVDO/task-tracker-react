import React from 'react';
import { FaTimes} from 'react-icons/fa'

const Task = (props) => {
    return (
        <div 
        className={`task ${props.task1.reminder? 'reminder' : ''}`}
        onDoubleClick={()=>{props.reminder(props.task1.id)}}
        >
            <h3>
            {props.task1.text} 
            <FaTimes style={{color:"red"} } onClick={() => props.deleteTask1(props.task1.id)} /></h3>
            <p>{props.task1.day}</p>
            
        </div>
    );
};

export default Task;