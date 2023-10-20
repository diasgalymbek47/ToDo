import React, { createContext, useEffect, useState } from "react";

import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";

export const TodoContext = createContext();

function App() {
    const [todos, setTodos] = useState([]);

    function addTask(task) {
        setTodos([...todos, task]);
    }

    function deleteTask(index) {
        setTodos(todos.filter((_, inx) => inx !== index));
    }

    function onChecked(inx) {
        setTodos(
            todos.map((todo, i) => {
                if (i === inx) {
                    return {
                        ...todo,
                        checked: !todo.checked,
                    };
                }

                return todo;
            })
        );
    }

    useEffect(() => {
        const localTodos = localStorage.getItem("todos") || [];

        setTodos(JSON.parse(localTodos));
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider value={todos}>
            <div className="todos container">
                <Form addTask={addTask} />
                <Todos deleteTask={deleteTask} onChecked={onChecked} />
            </div>
        </TodoContext.Provider>
    );
}

export default App;
