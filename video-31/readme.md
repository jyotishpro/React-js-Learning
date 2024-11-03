# style type in react js
how many waya we have for style i nreact js
 use the normal stylesheet
  style eith the cariable or inline style
  css with module.

  # style type in react js
            in app.js:
             
                     import '/App.css';
                    mport React from 'react'
                    function App() {
                        return(
                            <div>
                            <h1> style in react js </h1>
                            <h1 style={{color:"red",backgroundColor:"black"}}> style type2 in react js </h1>
                            </div>
                        )
                    }

                    export default app;


                    make file:  style.css
                    in style.css:
                           // style ka code likhen
                    in app.js:
                    import './syle.css


                    make new file::
                                     custom.module.css:
                                     //style ka code:

                     in app.js:
                                   import style form './custom.module.css'

                                   for use .style.classname

        q. kya modular css aur regular css ko ek sath use kar skte hai ya nahi 

# install bootstrap

react bootstrap website dekhen.


# Handle Array with list

make an array
why use map  function , not for loop.
make list with an array.
make list with an array of objects.

# handle array with list:
  
              in app.js:
                     

                     const students = ["jk","di","rj","ak"];
                     cosnt student = [
                        {name:"jyoitsh",emaiL:"jk@gamil.ocm",contact:7777},
                        {name:"jk",emaiL:"jk@gamil.ocm",contact:999999},
                        {name:"lk",emaiL:"lk@gamil.ocm",contact:888888}
                        {name:"rk",emaiL:"rk@gamil.ocm",contact:77777}
                     ]
                     //map looping;
                     students.map((item)=>{
                        console.warn("my name is: " item)
                     })
                     for(let i=0;i<students.length;i++){
                        console.warn("in for loop my name is: ",students[i]);   // jab return statement likhte hai to for loop support nahi karta hai. map support karta ai
                     }
                     return (
                    
                    <div>
                    <h1>handle data<h1>
                    <table border="1">
                    <tr>
                            <td>name </td>
                            <td>email</td>
                            <td>contact</td>
                            <tr>
                    {
                        student.map((data)=>{
                            <tr>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.contact}</td>
                            <tr>
                        })
                    }
                   </table>


                    {
                        for(let i =0;i<student.length;i++){
                            <h1>{student[i]}</h1>   // ye support nahi karega map support karega
                        }
                    }
                    <div>

                     )
               q. each list in a alist should unique key prop: kya error hai. 


# list with bootstrap and unique key
make a list from array
what is unique key loop?
install bootstrap
use bootstrap table with loop.
interview question
# list with bootstrap
      in app.js: 
      import {Table} from 'react-bootstrap'
      const users=[
        {name:"jk",email:"jk@gamil.com",cont:9999},
        {name:"jk",email:"jk@gamil.com",cont:9999},
        {name:"jk",email:"jk@gamil.com",cont:111},
        {name:"jk",email:"jk@gamil.com",cont:9999},
        {name:"jk",email:"jk@gamil.com",cont:111}
      ]
       return(
        <div>
        <h1>list with bootstrap</h1>
        <Table striped variant="dark">
        <tbody>
        <tr>
               <td> name <td>
               <td> email<td>
               <td> contact<td>
               <tr>
        {
            users.map((data,i)=>{
                data.contact === '111'?
               <tr key={i}>
               <td> {data.name}<td>
               <td> {data.email}<td>
               <td> {data.cont}<td>
               <tr>:null
            })
        }
        </tbody>
        </Table>
        <div>

       )

       table use karne ke liye component me jao

       unique key matlb: ye jo child hai iske sath ek key honi chahiye har jo unique honi chahiye. usko handle karne ke liye ek key dete hai.

# Nested list with nested array:
 make nested array
 understand nested array use the map fuction
 use nested map function.
 interview question.

 # Nested list:

      in app.js:
      const users = [
        {name:"jk",email:"jk@gmail.com",add:[
            {hn:"10",city:"bihar",country:"india"},
            {hn:"34",city:"delhi",country:"india"},
            {hn:"43",city:"patna",country:"india"},
            {hn:"12",city:"nalanda",country:"india"},
        ]
        },
        {name:"jk",email:"jk@gmail.com",add:[
            {hn:"10",city:"bihar",country:"india"},
            {hn:"34",city:"delhi",country:"india"},
            {hn:"43",city:"patna",country:"india"},
            {hn:"12",city:"nalanda",country:"india"},
        ]
        },
        {name:"jk",email:"jk@gmail.com",add:[
            {hn:"10",city:"bihar",country:"india"},
            {hn:"34",city:"delhi",country:"india"},
            {hn:"43",city:"patna",country:"india"},
            {hn:"12",city:"nalanda",country:"india"},
        ]
        }
      ]
      
      return(
         <div>
         <Table variant="dark">
         <tr>
         <td>sn<td>
         <td>name<td>
         <td>email<td>
         <td>add<td>
         <tr>
         {users.map((item,i)=>
         
         <tr key = {i}>
         <td>{i}<td>
         <td>{item.name}<td>
         <td>{item.email}<td>
         <td>
         <Table>
         {
            item.add.map((data)=>
            <tr>
            <td>{data.hn}<td>
            <td>{data.city}<td>
            <td>{data.country}<td>
            <tr>
            )
         }
         </table>
         <td>
         <tr>

         )}
         <tbody>
         <Table>
         <div>

      )   

      table ke andar component kaise use kar skte hai.
# Reuse component
make a component
make a list from the array
use component inside may function
interview question.

# reuse component:
      
      in app.js:
      import user from './user'

         const users = [
            {
                name:"jyotish",email:"jk@gmail.com",contact:"333"
            },
            {
                name:"lak",email:"ka@gmail.com",contact:"333"
            },
            {
                name:"shak",email:"ak@gmail.com",contact:"333"
            },
            {
                name:"shuk",email:"kdf@gmail.com",contact:"333"
            }
         ]
       
          return(
            <div>
            <h1>Reuse component with list </h1>

            {
                users.map((item ,i)=>
                
                <user data = {item} />
                )
            }

            <div>
          )

          make componnetn user.js:
                   
                    function user(props){
                        return(
                            <div>
                            <span>{porps.data.name}<span>
                            <span>{porps.data.email}<span>
                            <span>{porps.data.contact}<span>
                            <button>hello {props.data.address}<button>
                            <div>
                        )
                    }

                    export default user