import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase/firebase.init';
import MyItems from '../MyItems/MyItems';


const Additem = () => {
    const [user, loading, error] = useAuthState(auth);


    const handleAddItems = async e => {
        e.preventDefault();
        const items = {
            name: e.target.name.value,
            email: e.target.email.value,
            description: e.target.description.value,
        }
        axios.post("https://radiant-river-94662.herokuapp.com/add", items)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast.success('New Items added successfully!!!', { id: 'success' });
                    e.target.reset();
                }
            })
    }

    return (
        <div className='container-fluid mx-auto  bg-dark'>
            <h1 className=' text-center text-light pt-4'>Add To <span style={{ color: '#64B9B4' }}> Task Item</span></h1>
            <div className="container text-center ">
                <form onSubmit={handleAddItems} className='w-100 pb-3'>
                    <div className="mb-4">
                        <input type="text" name='email' value={user?.email} readOnly disabled id="text" className="w-50 py-2 text-center cards3" required />
                    </div>
                    <div className="mb-4">
                        <input type="text" name='name' id="text" className="w-50  py-2 text-center cards3" placeholder='Products Name' required />
                    </div>


                    <div className="mb-4">
                        <textarea id="message" name='description' rows="4" className="w-50 py-2 text-center cards3" placeholder="Add Items Description..."></textarea>
                    </div>

                    <button type="submit" className="cta cta8">
                        <span>
                            Add Your Task

                        </span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </form>
            </div>

            <MyItems></MyItems>
        </div>
    );
};

export default Additem;