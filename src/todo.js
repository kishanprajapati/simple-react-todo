import React, { useState } from 'react';

function Todo() {
    const [myTask, setActivity] = useState("");
    const [taskList, setTask] = useState([]);

    function addTask(){
        if(myTask !== '' && !taskList.includes(myTask.toLowerCase())){
            setTask([...taskList,myTask])
            setActivity('');
        }
    }

    function removeTask(index){
        const taskListTemp = taskList.filter((x, i) =>{
            return index !== i;
        });
        setTask(taskListTemp);
    }

    function removeAll(){
        setTask([]);
    }

    return (
        <> 
        <div className='container mt-md-4'>
            <div className='row'>
                <div className='col-md-4 mx-auto'>
                    <h3 className='text-center'>Simple To-Do</h3>
                    <div className='input-group'>
                        <input type='text' 
                            className='form-control' 
                            placeholder='Your task' 
                            value={myTask} 
                            onChange={(e)=>setActivity(e.target.value)} />
                        <button type='submit' 
                            className='btn btn-primary'
                            onClick={addTask}>+</button>
                    </div>
                </div>
            </div>
        </div>
        {taskList.length >= 1 && 
        <div className='container mt-md-4'>
            <div className='row'>
                <div className='col-sm-4 mx-auto'>
                    <div className='card'>
                        <div className='card-header text-center'>
                            My Tasks
                        </div>
                        {taskList !== [] && taskList.map((task, index) => {
                            return(
                                <>
                                 <ul className='list-group list-group-flush' key={index}>
                                    <li className='list-group-item'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-sm-10'>
                                                    {task}
                                                </div>
                                                <div className='col-sm-2'>
                                                    <button type='button' 
                                                        class="btn btn-primary btn-sm"
                                                        onClick={()=>removeTask(index)}>x</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                 </ul>
                                </>
                            );
                        })}
                        <>
                            <div className='card-footer text-center'>
                                <button 
                                    className='btn btn-danger btn-sm'
                                    onClick={removeAll}>Clear</button>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>}
        </>
     );
}

export default Todo;