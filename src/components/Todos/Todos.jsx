import React, { useContext } from "react";
import "./todos.css";

import { TodoContext } from "../../App";
import Task from "../Task/Task";

const Todos = ({ deleteTask, onChecked }) => {
    const todos = useContext(TodoContext);

    return (
        <div className="todos__tasks ">
            {todos.length !== 0
                ? todos.map((todo, inx) => (
                      <Task
                          key={inx}
                          inx={inx}
                          task={todo}
                          deleteTask={deleteTask}
                          onChecked={onChecked}
                      />
                  ))
                : "Задачи пока нету"}
        </div>
    );
};

export default Todos;
