import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = () => {

    const [taskName, setTaskName] = useState("");
    const [values, setValues] = useState("");
    const [items, setItems] = useState([]);
    const [toggleBtn, setToggleBtn] = useState(false);
    const [editItems, setEditItems] = useState(null)

    const inputValue = (e) => {
        setTaskName(e.target.value);
    };
    const GetValue = () => {
        //opstional work 
        if (taskName === "") {
            alert('Please Enter Before Adding...')
        } else if (taskName !== '' && toggleBtn !== false) {
            setItems(
                items.map((elem) => {
                    if (elem.id === editItems) {
                        return { ...elem, name: taskName }
                    }
                    return elem
                })
            )
            setToggleBtn(false)
            setTaskName('')
            setEditItems(null)
        } else {
            const UpdateAllItems = { id: new Date().getTime().toString(), name: taskName }
            setItems([...items, UpdateAllItems]);
            setTaskName("");
        }
    };

    const DeletedItems = (index) => {
        const updateditems = items.filter((Element) => {
            return (
                Element.id !== index
            )
        })
        setItems(updateditems)
        setTaskName('')
        setToggleBtn(false)
    }

    const RemoveAll = () => {
        setItems([])
        setTaskName('')
        setToggleBtn(false)
    }

    const EditItems = (id) => {
        // Getting id
        const GetId = items.find((elem) => {
            return (
                elem.id === id
            )
        })
        setToggleBtn(true)
        setTaskName(GetId.name)
        setEditItems(id)

        console.log(GetId)
    }

    return (
        <>
            <div className="main-div ">
                <div className="child-div">

                    <h1>Add Your List Here ✌ </h1>

                    <div className="input d-flex mt-3">
                        <input
                            type="text"
                            placeholder=" Task Name..."
                            value={taskName}
                            onChange={inputValue}
                        />
                        <input
                            type="text"
                            placeholder="✍ Task Descripction..."
                            value={values}
                            onChange={inputValue}
                        />
                        {
                            toggleBtn ? (
                                <>
                                    <button className="btn btn-primary mt-3" onClick={GetValue}>
                                        edit
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className="btn btn-primary mt-3" onClick={GetValue}>
                                        add
                                    </button>
                                </>
                            )
                        }
                    </div>
                    {
                        items.map((Element) =>
                            <div className="showitems d-flex justify-content-between mt-5" key={Element.id}>
                                <h3 className="mt-2">{Element.name}</h3>
                                <button className="btn edit" onClick={() => EditItems(Element.id)}>
                                    edit
                                </button>
                                <button className="btn delete" onClick={() => DeletedItems(Element.id)}>
                                    delete
                                </button>
                            </div>
                        )
                    }

                    <div className="button mt-5">
                        <button className="btn btn-secondary" onClick={RemoveAll}>Clear List</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;
