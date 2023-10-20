import React, { useRef } from "react";
import "./form.css";

const Form = ({ addTask }) => {
    const titleRef = useRef();
    const descRef = useRef();

    return (
        <>
            <form
                className="form"
                onSubmit={(e) => {
                    e.preventDefault();

                    if (titleRef.current.value.length == 0 || descRef.current.value.length == 0) {
                        alert("Ты куда малыш?");
                        return;
                    }

                    const task = {
                        checked: false,
                        title: titleRef.current.value,
                        desc: descRef.current.value,
                        date: new Date(),
                    };

                    addTask(task);

                    titleRef.current.value = "";
                    descRef.current.value = "";
                }}
            >
                <h2 className="form__title">Добавьте свою задачу в список</h2>
                <input
                    ref={titleRef}
                    className="form__input"
                    type="text"
                    placeholder="Название"
                    onChange={(e) => (titleRef.current.value = e.target.value)}
                />
                <textarea
                    ref={descRef}
                    className="form__textarea"
                    placeholder="Описание"
                    onChange={(e) => (descRef.current.value = e.target.value)}
                ></textarea>
                <button className="form__send-btn">Добавить</button>
            </form>
        </>
    );
};

export default Form;
