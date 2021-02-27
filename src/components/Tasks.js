import React from 'react';
import Task from './Task';



const Tasks = (props) => {

    

    return (
        <>
        {
            props.tasks.map((task)=>{
                return <Task key={task.id} task1={task} deleteTask1={props.onDelete} reminder={props.onToggle}/>
            })
        }
            
        </>
    );
};

export default Tasks;