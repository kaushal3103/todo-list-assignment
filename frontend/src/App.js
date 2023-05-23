
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = ()=>{
  const [list,setList] = useState([]);
  const [note,setNote] = useState({});
  const [toedit,setToedit] = useState(false);
 const [editdata,setEditdata] = useState("");
  useEffect(()=>{
    const fetchdata = async()=>{
    try{
    const res = await axios.get('https://todo-api-0bmx.onrender.com/api/v1/getall');
    setList(res.data);
    
    }
    catch(error){
      console.log(error);
    }
    
  }
  fetchdata();
  },[]);

  const createnote = async(e)=>{
    try{
     
      Object.keys(note).length !== 0 && await axios.post('https://todo-api-0bmx.onrender.com/api/v1/create-list',{textarea:note});
      Object.keys(note).length !== 0 && window.location.reload();
    }catch(error){
     console.log(error);
    }
  }

  const deletenote = async(id)=>{
    try{
      
     const res = await axios.delete(`https://todo-api-0bmx.onrender.com/api/v1/delete-list/${id}`)
     window.location.reload();
    }
    catch(error){
      console.log(error);
    }
  }

  const updatenote = async(id)=>{
    try{
     
      
      editdata && await axios.patch(`https://todo-api-0bmx.onrender.com/api/v1/update-list/${id}`,{textarea:editdata})
       
      
     setToedit(false);
     window.location.reload();
    }
    catch(error){
      console.log(error);
    }
  }


  const changeedit = ()=>{  
    setToedit(true);
  }
  
  return (
    <div className = "container">
      
      <div>
        <h1 style={{fontSize:'50px',marginBottom:'50px'}}>TODO List</h1>
     {
      list.map((data)=>(
        <div className='listcontainer' key = {data._id}>

 

       {!toedit ? 
       
       (
       <div className='innertext-1'>
          <p className='textdata'>{data.textarea}</p>
           <button onClick={changeedit} className='btn' style={{color:'blue'}} >edit</button>
           <button onClick={()=>deletenote(data._id)} className='btn' style={{color:'red'}} >delete</button>
        </div>
      )
       
       
       : (
        <div className='innertext-2'>
       <input defaultValue={data.textarea} onChange={(e)=>setEditdata(e.target.value)} className='input1' style={{marginRight:'10px'}}></input>
       <button onClick={()=>updatenote(data._id)} className='btn' style={{color:'purple'}}>OK</button>
     
       </div>
       )
       }
        
       
        </div>
      ))
     }
     <input type="text" placeholder='add a note' onChange={(e)=>setNote(e.target.value)} className='input'></input>
     <button onClick={createnote} className='btn' style={{color:'green'}}>Add</button>
     </div>

    </div>
  )
}


export default App;
