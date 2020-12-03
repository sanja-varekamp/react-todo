import React from 'react';

function taskList({tasks, taskCompleted}) {
    const tasksList = tasks.length ? (
        tasks.map(task => {
            return (
                <div className="task-container" key={task.id}>
                    <span className="task" >{task.content}</span>
                    <button className="btn-completed"  onClick={() => {taskCompleted(task.id)} }>&#10004;</button>
                </div>
            )
        })
    ) : (
        <div>
        <p className="no-tasks-text"  >YOU ROCK! </p>
        </div>
    )   
    return(
       <div>
           {tasksList}
       </div>
    )
}




export default taskList