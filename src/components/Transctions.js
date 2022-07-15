import React, { useState } from 'react'
import axios from 'axios'
import './table.css'

export const Transctions = () => {
    const [var1,set_var1]=useState(true)
    const [trans,set_trans]=useState([])
  if(var1 === true){

axios.post('http://localhost:7000/transctions').then (res=>{
    set_trans(res.data.trans)
  
  


})

set_var1(false)
  }
  return (
    <div>
        <h1 className='heading'>TRANSCTIONS</h1>
      <table className='table'>
        <thead>
          <th>Sender Name</th>
          <th>Sender Account Number</th>
          <th>Receiver Name</th>
          <th>Receiver Account Number</th>
          <th>Money Transferred</th>
          
        </thead>
     {trans.map((data) => {
                        return (
                            <>
                            <tr>
                              <td>{data.sender_name}</td>
                              <td>{data.sender_accno}</td>
                              <td>{data.receiver_name}</td>
                              <td>{data.receiver_accno}</td>
                              <td>{data.money}</td>
                           

                            </tr>
                                
                                

                            </>
                        )
                        

                    })
                }
    </table>
    </div>
    
  )
}
