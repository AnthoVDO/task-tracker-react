import {React , useState} from 'react';

const AddTask = (props) => {

    const[text, setText] = useState('');
    const[day, setDay] = useState('');
    const[reminder, setReminder] = useState(false);

    const onSubmitTask = (e)=>{
        e.preventDefault();
        if(!text){
            alert('Please add task')
            return
        }

        props.onAdd({ text, day, reminder })

            setText('')
            setDay('')
            setReminder(false)
    
    }

    return (
        <form className='add-form' onSubmit={onSubmitTask}>
            <div className="form-control">
            <label >Task</label>
            <input type="text" placeholder="add task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
            <label >Day & time</label>
            <input type="text" placeholder="add Date" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
            <label >set reminder</label>
            <input  type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.target.checked)} />
            </div>

            <input type="submit" value="Save task" className="btn btn-block" />
        </form>
    );
};

export default AddTask;