import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase/firebase.init';
import UseAdd from '../../../UseAdd';
import Items from '../Items/Items';


const MyItems = () => {
    const [user] = useAuthState(auth);
    const [ownItems, setOwnItems] = useState([]);
    const { task, setTask } = UseAdd();
    console.log(ownItems);

    useEffect(() => {
        fetch('https://radiant-river-94662.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setOwnItems(data))

    }, [ownItems]);

    const handleUserDelate = id => {
        console.log('object', id);
        const proceed = window.confirm("Are You Sure Want To Delate!!")
        if (proceed) {

            const url = `https://radiant-river-94662.herokuapp.com/delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('hello', data))
            const updateTask = task.filter(tasks => tasks._id !== id);
            setTask(updateTask);
            toast.success('Items Delated Successful', { id: 'success' })

        }

    }
    const email = user.email;
    const rest = ownItems.filter(ownItem => ownItem.email === email);


    return (
        <div className='inventory-container2 bg-light text-dark mx-auto'>
            {
                rest.map(item => <Items
                    key={item._id}
                    item={item}
                    handleDeleteBtn={handleUserDelate}>

                </Items>

                )
            }
        </div>
    );
};

export default MyItems;