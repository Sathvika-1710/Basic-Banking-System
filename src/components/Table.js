import React,{ useState } from 'react'
import axios from 'axios'
import './table.css'
import { useNavigate,useParams } from 'react-router'

export const Table = () => {
  const navigate=useNavigate();
  const [customers,set_customers]=useState([]);
  const [var1,set_var1]=useState(true)
  if(var1 === true){

axios.post('http://localhost:7000/table').then (res=>{
  set_customers(res.data.users)
  
  


})

set_var1(false)
  }

const transfer=(e,sname,sacc)=>{
  e.preventDefault()
  const path="/transfe" +{sname} +"/" +{sacc}
 
  navigate(path)
  

 }
  return (
    <div className='body'>
      <h1 className='heading'>users information</h1>
      <table className='table'>
        <thead>
          <th>Username</th>
          <th>Phone number</th>
          <th>Account Number</th>
          <th>Balance</th>
          
        </thead>
     {customers.map((data) => {
                        return (
                            <>
                            <tr>
                              <td>{data.username}</td>
                              <td>{data.phone_number}</td>
                              <td>{data.acc_num}</td>
                              <td>{data.balance}</td>
                           

                            </tr>
                                
                                

                            </>
                        )
                        

                    })
                }
    </table>
    </div>
  )
}
