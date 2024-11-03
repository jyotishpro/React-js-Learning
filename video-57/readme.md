# previous state in funciotnal component
what is previous state
why we need it 
hot to get it and use it 
another importanat and tricky example 
interview question
# previous state in functional component:
        
        previous state ka matblab hai jo hamari abhi state hai uske phle bala state;

        condition base chije banana last bala chij ke upar .

        in app.js;

          const [count, setcount ] = useState(1);
        function updatecounter(){

            setcount((prev)=>{
                return random;
                if(prev<5){
                    return "low vale"
                }
                if(prep-random<5>){
                    alert("helllo")
                }
                console.warn(prev)
            })
        }
        return(
            <h1>c{count} <h1>
            <h1>{Math.floor(Math.random()*10})
        <button onclick {updatecunter}> click me to update counter
        <button>

        )

# previous props with hoooks
what ias previous props
why we need it
hot wo get it and use it
 we willl use useref hooks for it 
 # previous props with hooks


            make firle usert.js:

                                   import react form react
                                  const lastVal = use 
                                  ref();
                                  useEffect (()=>{
                                    lastVal.current=props.count
                                  })
                                  const previopsProps = lastVal.current
                                function user(props)
                                 return(

                                    <div>
                                    <h1> user component {props.count}
                                    <h1>
                                    <h2>{previospsprops}
                                    <div>
                                 )        

                                 import user from user:
                                 in app.js;

                                     const [counyt ,setcount] = iseState(09)
                                     
                                     return(
                                        <user count = {count}/>
                                        <button  onclick = {()=>{setcount(Math.floor(Math.random()*10))}}> update counter
                                        <button>
                                     )

 # State with object
  make a state with object
   try to update and understantd the problem
   rssolved it in 2 ways

   # state with object
        

        cosnt [ data , setdata ] = useState 9{name:"jyotihs" , age:27}
      return(

          <div>

          <h1>{data.name}
          <h1>{data.age}
           <input type = " text" placeholder = "enter name" value = {data.name} 
           onchange = {(e)=>{setdata)age:data.age,name:e.target.value}}>

           <input type = " text" placeholder = "enter age" value = {data.age}
            onchange = {(e)=>{setdata)...data,name:e.target.value}}>
          <div>

      )                                    

      ager mere pass ek array hot to use kis parkar handkle karte>

















      import { useEffect, useState } from 'react'
import { Component } from 'react'
import User from './component/User'
import React from 'react';
import {BrowserRouter ,Route,Router,Routes} from 'react-router-dom'

function App() {
  const [name, setname] = useState('')
  const [clas, setclas] = useState('')
  const [roll, setroll] = useState('')

  const [data, setdata] = useState([]);

  
  
  function getlist() {
    
    fetch("http://localhost:3000/").then((result)=>{
      result.json().then((resp)=>{
        console.log(resp)
       setdata(resp)
      })
    })
    
  }
  
useEffect(()=>{
  getlist();
  
},[])

  function saveUser() {
  
    let data = {name, clas, roll}
  
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    
    }).then((result)=>{
     return result.json()
    }).then((resp)=>{
      getlist(); 
      setname('');
      setclas('');
      setroll('');
  
    })

              }
            
            function deleteUser(id) {
              fetch(`http://localhost:3000/${id}`,{
                method:"DELETE"
              }).then((result)=>{
                result.json().then((resp)=>{
                  getlist() 
                })
              })
              
            }
            
            
              return (
                
                <div className="App ">
                
            <h1>hello</h1>
            <input className='border border-gray-600 m-2' type="text" placeholder='enter your name' onChange={(e)=>{setname(e.target.value)}} name='name' value={name} />
            <input className='border border-gray-600 m-2' type="text" placeholder='enter your class' onChange={(e)=>{setclas(e.target.value)}} name='class' value={clas}/>
            <input className='border border-gray-600 m-2' type="number" placeholder='enter your roll' onChange={(e)=>{setroll(e.target.value)}} name='roll' value={roll} />
            <button type='submit' onClick={saveUser}>submit</button>
            
            <table className='border border-black'>
              <thead>
              <tr className='border border-black'>
                <td className='p-3 border border-gray-900'>Name</td>
                <td className='p-3 border border-gray-900'>Class</td>
                <td className='p-3 border border-gray-900'>Roll</td>
              </tr>
                </thead>
                <tbody>
              {
                data.map((item,index)=>
                <tr key={index}>
                  <td className='border border-gray-950 p-3'>{item.name}</td>
                  <td className='border border-gray-950 p-3'>{item.clas}</td>
                  <td className='border border-gray-950 p-3'>{item.roll}</td>
                  <td className='border border-gray-950 p-3' ><button onClick={()=>deleteUser(item._id)}>delete</button></td>
                </tr>
                )
              }
              </tbody>
            </table>
                </div>
              )
            }
            
            export default App
