import axios from 'axios'
import React,{useState} from 'react'
import './transfer.css'
import { useNavigate,useParams } from 'react-router'


export const Transfer = () => {
  const navigate=useNavigate();
  const [sender_name,set_sender_name]=useState("")
  const [sender_accno,set_sender_accno]=useState("")
  const [receiver_name,set_receiver_name]=useState("")
  const [receiver_accno,set_receiver_accno]=useState("")
  const [amount,set_amount]=useState(0)

  const viewall=(e)=>{
    e.preventDefault()
    navigate('/customers')

  }
  const trans=(e)=>{
    e.preventDefault()
    navigate('/transctions')

  }

  const transfer=(e)=>{
    e.preventDefault()
   if(sender_accno ==="" || sender_accno==="" || receiver_name === "" || receiver_accno === "" ){
    alert("please enter the details completely")
   }
   else{
    if(amount === 0){
      alert("Please enter a amount greater than 0")
    }
    else{
      axios.post('http://localhost:7000/transfer',{sname:sender_name,sacc_no:sender_accno,rname:receiver_name,racc_no:receiver_accno,money:amount}).then(res=>{
        alert(res.data.message)
        if(res.data.message === "TRANSCTION SUCCESSFUL"){
          navigate('/customers')

        }
        else{
          navigate('/transfer')
        }
        

      })
    }
   }
  }

  return (
    <div>
      <h1 className='heading'>MONEY TRANSCTION</h1>
      <br/>
   
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <div className='container'>
      
    <form >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Sender Name</label>
    <input type="text" class="form-control " id="sender_name" value={sender_name} onChange={(e)=>{set_sender_name(e.target.value)}} aria-describedby="emailHelp" placeholder='Please enter the sender name'/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Sender's Account Number</label>
    <input type="text" class="form-control "  id="sender_accno" value={sender_accno} onChange={(e)=>{set_sender_accno(e.target.value)}} aria-describedby="emailHelp" placeholder='Please enter the senders account number'/>
    
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Receiver name</label>
    <input type="text" class="form-control " id="receiver_name" value={receiver_name} onChange={(e)=>{set_receiver_name(e.target.value)}} aria-describedby="emailHelp" placeholder='Please enter the Receiver name'/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Receiver's Account Number</label>
    <input type="text" class="form-control " id="receiver_accno" value={receiver_accno} onChange={(e)=>{set_receiver_accno(e.target.value)}} aria-describedby="emailHelp" placeholder='Please enter the receivers account number'/>
    
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Amount to be transfered in Rupees</label>
    <input type="Number" class="form-control " id="balance" value={amount} onChange={(e)=>{set_amount(e.target.value)}} aria-describedby="emailHelp" placeholder='Please enter the transfer amount'/>
    
  </div>
  <button type="submit" class="btn btn-primary" onClick={transfer}>Transfer</button>
  
  <button type="submit" className="btn btn-primary" id='button' onClick={viewall}>View All Customers</button>
  <button type="submit" className="btn btn-primary" id='button' onClick={trans}>Transction History</button>
</form>
</div>
    </div>
  )
}
