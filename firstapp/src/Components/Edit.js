import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Edit() {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        //GetItem se mai jo apna localhost se Data Get krahi hu osi ko mai
        // setState se apne browser mai display krahi hu
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));

    }, [])


    const handleUpdate = (e) => {
        //hum ID k through he update krty hn or delete krty hn
        e.preventDefault();
        axios.put(`https://6575b120b2fbb8f6509d6284.mockapi.io/crud/${id}`, {
            e_name: name,
            e_age: age,
            e_email: email
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='mb-2 mt-2'>
                        <Link to='/'>
                            <button className='btn btn-primary'>Read Data</button>
                        </Link>
                    </div>
                    <div className='bg-primary p-4 text-center'>
                        <h1>Update Data</h1>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className='form-group'>
                            <label>Enter Name:</label>
                            <input type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} className='form-control' />
                        </div>

                        <div className='form-group'>
                            <label>Enter Age:</label>
                            <input type='number' placeholder='Age' className='form-control' value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label>Enter Email:</label>
                            <input type='email' placeholder='Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='Update' className='btn btn-primary' />
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}

export default Edit
