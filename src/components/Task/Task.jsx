import React from "react";
import "./task.css";

const Task = ({ inx, task, deleteTask, onChecked }) => {
    return (
        <div className={task.checked ? "task checked" : "task"}>
            <div className="task__body">
                <input type="checkbox" onChange={() => onChecked(inx)} checked={task.checked} />
                <div>
                    <h4 className="task__title">{task.title}</h4>
                    <p className="task__desc">{task.desc}</p>
                </div>
            </div>
            <button className="task__delete" onClick={() => deleteTask(inx)}>
                Удалить
            </button>
        </div>
    );
};

export default Task;
