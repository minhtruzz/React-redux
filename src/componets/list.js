import { del } from '../reducers/slice';
import { useDispatch, useSelector } from 'react-redux';
//const { useDispatch, useSelector } = require("react-redux");


function List()
{
    const dispatch = useDispatch();
    const tasks = useSelector( (state)=> state.task.list);
    const delTask = (name)=>{
        dispatch(del(name));
    }
    return(
        <>
        <div>
            <h3>List of Task</h3>
            {
                tasks.map(function(task){
                    return(
                        <div className='task' >
                            <p>{task}</p>
                            <button onClick={()=> delTask(task)}>X</button>
                        </div>
                    );
                })
            }
           
        </div>
        </>
    );
}
export default List;