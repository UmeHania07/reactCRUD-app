import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Read() {
  const [apiData, setAPIData] = useState([]);

  function getData() {
    axios.get('https://6575b120b2fbb8f6509d6284.mockapi.io/crud')
      .then((response) => {
        //API ka sara data is response k ander store hoga
        // console.log(response.data)
        setAPIData(response.data);
      })
  }

  function handleDelete(id) {
    // ye API hum Backticks mai rakhy gy important h
    axios.delete(`https://6575b120b2fbb8f6509d6284.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      })
  }
  const setDataToStorage = (id, name, age, email) => {
    //setItem mai jo b data store hota h wo key ki form mai hota h
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('email', email);
    // mai localstorage mai apne users ki keys jo maine de hn or value jo user deta h sab store krskhti hu or wahi se Get kro gi

  }
  //DATA Get krty waqt side effect ko perform krty h is liye useeffect use krty hn Get mai
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          <div className='mb-2 mt-2'>
            <Link to='/create'>
              <button className='btn btn-primary'>Create New Data</button>
            </Link>
          </div>
          <table className='table table-bordered table-striped table-dark table-hover ' >
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {
                apiData.map((item ) => {
                  return (
                    <>
                      <tr >
                        <td >{item.id}</td>
                        <td>{item.e_name}</td>
                        <td>{item.e_age}</td>
                        <td>{item.e_email}</td>
                        <td>
                          <Link to='/edit'><button className='btn btn-primary' onClick={() => setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)}>Edit</button></Link>
                        </td>
                        <td ><button className='btn btn-danger' onClick={() => {
                          if (window.confirm("Are You Sure To Delete Data!")) { handleDelete(item.id) }
                        }}>Delete</button></td>
                      </tr>
                    </>
                  )
                })
              }



            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default Read
