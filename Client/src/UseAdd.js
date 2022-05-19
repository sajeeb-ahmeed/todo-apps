import { useEffect, useState } from "react"

const UseAdd = () => {
    const [task, setTask] = useState([]);

    useEffect(() => {
        fetch('https://radiant-river-94662.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setTask(data))
    }, []);



    return { services: task, setServices: setTask }
};
export default UseAdd;