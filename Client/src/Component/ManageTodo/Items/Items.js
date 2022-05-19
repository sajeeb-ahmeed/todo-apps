import React from 'react';


const Items = ({ item, handleDeleteBtn }) => {
    const { _id, name, description } = item;
    // const handleDeleteBtn = props.handleDeleteBtn;
    return (
        <div className='container my-5 '>
            <div className="p-3 border g-2">

                <div className="text-center">

                    <p>  <span className='text-info fw-bold'>{_id}</span></p>
                </div>
                <div className="text-center">
                    <p className=' py-3 fw-bold cards4 px-lg-3 mb-2 '> Task Name: {name}</p> <br />
                    <code className='text-center border-bottom ' > Task Description</code>  <br /> <br />
                    <small className=' p-1'>  {description?.slice(0, 70) + '..'}</small> <br /> <br />
                    <button className="cta cta8 my-2 " onClick={() => handleDeleteBtn(_id)}>
                        <span className='text-danger fw-bold'>Delete</span>
                    </button>
                </div>


            </div>

        </div>
    );
};

export default Items;