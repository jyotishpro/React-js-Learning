# call get method api
what is api
call api
get api data in state
make list form api

 # call get method api:
        
        api: application programming interface.
              directly database se connect ho nahi skti hai. to iske liye use karte hai server side programming language jaise nodejs , php , python etc.ye database se data nikal ke de dete hai. jise ham frontend ke andar use kar lete hai.

              . data get karna hota hai to get method
              . data store karna hota hai to post method
              . data update krna hota hai to put method
              . data delete krna hota hai to delete method

              in app.js;
              import React , {useEffect, useState } from 'react'
              
              const [ item, setitem]= useState([]);
              useEffect(()=>{

              fetch("http://localhost:5000/item").then((result)=>{
               result.json().then((resp)=>{
                console.warn(resp)
                setitem(resp)
               })
              })

              },[])

              return(

                <div>

                  <table>
                  <tr>
                  <td>Id<td>
                  <td>Name<td>
                  <td>Email<td>
                  <td>Mobile<td>
                  </tr>
                  item.map((data)=>
                  <tr>
                  <td>{data.id}</td>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>{data.mobile}</td>
                  </tr>
                  )
                  </table>
                <div>
              )

         // dynamic routing aap yahan kis tarike se kar paoge

# postman
what is postman
how to install it 
how to use it
test api
interview qs.

# postman
               api's ko test karne ke liye

               .. postman chrome extension. install karo.
                body se data bhej skte hai  

                q. what is differece btween put and putch mehtod

 # post method with api
   why we use the post method
   make a form
   submit data to api 
    test resut
# post method with api
                need to install : npm i cors, app.use(cors())
             ;;;post method data ko store karne ke  liye .

             in app.js;

             const [ name , setname ] = useState("")
             const [ emai , setemail ] = useState("")
             const [ mobile , setmobile ] = useState("")

             function saveuser(){
                console.warn({name,emai, mobie})
                let data = {name, email, mobile}
                fetch("http://localhost:3000",()=>{
                    method:"POST",
                    headers:{
                        "Accept":"application/json",
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(data)
                    
                }).then((result)=>{
                  <!-- console.want(resullt) -->
                  result.json().then((resp)=>{
                    console.warn(resp)
                    })
                })
             }

             return(
                   
                   <input type = "text" value = {name} onChange={(e)=>{setname(e.target.value)}} name="name" />
                   <input type = "text" value = {email} onChange={(e)=>{setemail(e.target.value)}} name="email" />
                   <input type = "text" value = {mobile} onChange={(e)=>{setmobile(e.target.value)}} name="mobile" />
                   <button type="button" onclick={saveuser}> save new user <button />   

             )                   

             kya ham body ko get method ke andar bhej skte hai.

# delete method with api
why we use the delete method
add delete button in list 
make function and call delete api
interview question.

# delete method with api

        :::: 

        in app.js:
         const [ data, setdata ] = useState([])

         useEffect(()=>{

         getlist()

         },[])

        functino getlist(){
            fetch("http://localhost:3000/todo").then((result)=>{
         result.json().then((resp)=>{
         setdata(resp);
         })
         })
        }

         function deleteuser(id){
            fetch(`http://localhost:3000${id}`,{
                method:"DElETE"
            }).then((result)=>{
                result.json().then((resp)=>{
                    conole.warn(resp)
                    getlist()
                })
            })

         }

        return(

          <div>
            
            <table>
            <tr>
            <td>id</td>
            <td>Name</td>
            <td>email</td>
            <td>contact</td>
            <td>operation</td>
            </tr>
            data.map((item)=>
            <tr>
              <td> {item.id} </td>
              <td> {item.name} </td>
              <td> {item.email} </td>
              <td> {item.contact} </td>
              <td> <button onclick={()=>deleteuser(item.id)}>delete<button></td>
            </tr>
            )
            </table>
           
          </div>

        )


# pre-filled form
make a simple form
add update button in list
set values in list
populate values in form

# pre- filled form
                  
                  in app.js:

                 const [data, setdata] = useState([])
                 const [ name, setname ] = useState("")
                 const [ email, setemail ] = useState("")
                 const [ contact, setcontact ] = useState("")

                 useEffect(()=>{
                   getlist()
                 },[])
                 

                 function getlist(){
                  fetch("http://localhost:3000").then((result)=>{
                    result.json().then((resp)=>{
                     setdata(resp)
                     setname(resp[0].name)
                     setemail(resp[0].email)
                     setcontact(resp[0].contact)
                    })
                 })
                 }

                  function deleteuser(id){
                    fetch("http://localhost:3000",{
                        method:"DElETE"
                    }).then((result)=>{
                        result.json().then((resp)=>{
                            console.warn(resp)
                            getlist()
                        })
                    })
                  }

                  function selectUser(id){
                    console.warn(data[id-1])
                    setname(data[id-1].name)
                    setemail(data[id-1].email)
                    setcontact(data[id-1].setcontact)
                  }

                  return(
                  
                  <div>
                  <table>
                  <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Mobile</td>
                  <td>op1 </td>
                  </tr>
                  data.map((item)=>
                  <tr>
                  <td>{item.ID}</td>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>{item.Mobile}</td>
                  <td><button onclick={()=>deleteuser(item.id)}>Delete<button></td>
                  <td><button onClick = {()=>selectuser(item.id)}>Update<button></td>
                  </tr>
                  )
                  </table>

                  <div>
                  <input type="text" name="name" value={name}>
                  <input type="text" name="email" value={email}>
                  <input type="text" name="contact" value={contact}>
                  <button >update user<button>
                  <div>
                  <div>

                        

                  )
 # PUT method 


           in app.js:
           
           
       in app.js:

                 const [data, setdata] = useState([])
                 const [ name, setname ] = useState("")
                 const [ email, setemail ] = useState("")
                 const [ contact, setcontact ] = useState("")
                 const [userid , setuserid] = useState(null);

                 useEffect(()=>{
                   getlist()
                 },[])
                 

                 function getlist(){
                  fetch("http://localhost:3000").then((result)=>{
                    result.json().then((resp)=>{
                     setdata(resp)
                     setname(resp[0].name)
                     setemail(resp[0].email)
                     setcontact(resp[0].contact)
                     setuserid(resp[0].id)
                    })
                 })
                 }

                  function deleteuser(id){
                    fetch("http://localhost:3000",{
                        method:"DElETE"
                    }).then((result)=>{
                        result.json().then((resp)=>{
                            console.warn(resp)
                            getlist()
                        })
                    })
                  }

                  function selectUser(id){
                    console.warn(data[id-1])
                    setname(data[id-1].name)
                    setemail(data[id-1].email)
                    setcontact(data[id-1].setcontact)
                    setuserid(data.id)
                  }

                  function updateuser(){
                    let data ={name,email,contact,userrid};
                    fetch(`http://localhost:3000${userid}`,{
                        method:"PUT",
                        headers:{
                          "Accept":"application/josn"
                          "content-type":"application/josn"
                        },
                        body:JSON.stringify(data)

                    }).then((result)=>{
                        result.json().then((resp)=>{
                            console.warn(resp)
                            getlist()
                        })
                    })
                  }

                  return(
                  
                  <div>
                  <table>
                  <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Mobile</td>
                  <td>op1 </td>
                  </tr>
                  data.map((item)=>
                  <tr>
                  <td>{item.ID}</td>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>{item.Mobile}</td>
                  <td><button onclick={()=>deleteuser(item.id)}>Delete<button></td>
                  <td><button onClick = {()=>selectuser(item.id)}>Update<button></td>
                  </tr>
                  )
                  </table>

                  <div>
                  <input type="text" name="name" value={name} onchange = ((e)=>{setname(e.target.value)})>
                  <input type="text" name="email" value={email} onchage = ((e)=>{seteami(e.target.value)})>
                  <input type="text" name="contact" value={contact} onchange = ((e)=>{setcontact(e.target.value)})>
                  <button onclick={updateuser}>update user<button>
                  <div>
           