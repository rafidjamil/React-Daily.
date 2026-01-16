import { useState } from 'react'
import './todo.css'
import { FaTrash } from "react-icons/fa";

function Todo() {   

    const [task, settask] = useState("")
    const [tasklist, settasklist] = useState([])
    const [completed, setCompleted] = useState(false)


    const addTodo = () => {
        settasklist(prev => [...prev, { id: Date.now(), task, completed }]);
        settask("")


    };

    console.log("tasklist", tasklist);
    const handleCheckboxChange = (e, index) => {
        const isChecked = e.target.checked;
        //  passpara = isChecked 
        setCompleted(isChecked)
        // console.log(`Item Index ${index}:`, isChecked);
        // console.log(props.passpara);

    }



    return <>
        <div class="todo-wrapper">
            <div class="todo-card">

                <h2 class="todo-title">Todo List</h2>

                <Printtask tasklist={tasklist} settasklist={settasklist} />

                <div class="todo-footer">
                    <input class="todo-input" value={task} onChange={(w) => settask(w.target.value)} placeholder="Type your task here..." />
                    {/* <input type="checkbox" checked={completed}
                        onChange={(e) => handleCheckboxChange(e)}
                    /> */}
                    <button class="todo-btn" onClick={() => addTodo()}>Add</button>
                </div>

            </div>
        </div>

    </>
}

function Printtask(props) {
    const handleCheckboxChange = (e, index) => {

        const isChecked = e.target.checked;
        props.settasklist(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, completed: isChecked } : item)

        )
    }
    function deleteValue(index) {
        props.settasklist(prev =>
            prev.filter((v,i)=>i !== index)
        )

       
    }
    return <>
        <div className="todo-list">
            {props.tasklist.map((t, i) => (
                <div className="todo-item" key={t.id}>

                    <label className="todo-item1">
                        <input
                            type="checkbox"
                            checked={t.completed}
                            onChange={(e) => handleCheckboxChange(e, i)}
                        />
                        <span>{t.task}</span>
                    </label>

                    <div className="trash" onClick={() => deleteValue(i)}>
                        <FaTrash />
                    </div>

                </div>
            ))}
        </div>

    </>
}




export default Todo