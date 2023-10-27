import { useDispatch } from 'react-redux'
import { add } from '../reducers/slice';
import { useRef } from "react";

function Input()
{
    const taskName = useRef()
    const dispatch = useDispatch();
    const addTask = () =>{
        dispatch(add(taskName.current.value));
    }
    return(
        <>
        <div className='form-add-task'>
            <lable>Task Name</lable>
            <input type="text" placeholder='input name'  ref={taskName}/>
            <button onClick={addTask}>Add</button>
        </div>
        </>
    );
}
export default Input;