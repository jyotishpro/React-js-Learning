# event
           in app.js:
                        
                function App() {
                    let data = "jyotish kumar"

                  function apple() 
                  {
                    data = "peter"
                    alert('function call {data}')
                  }
                
                  return (
                    <>
                     <div className="App">
                      <h1>{data}</h1>
                      <button onClick={apple}>Click me</button>
                      <button onClick={()=>{alert("hello")}}>Click me</button>
                     </div>
                    </>
                  )
                }
 # state in functional componenet
  what is state 
  user of state
   define state 
   update state with a button click 
   how state work 
    inerview question 
# state in functional     
          ??state ek object hota hai uske andar data ko store kar skte hai.
          :: variable use karne se component update nahi hota hai
          :: state me data update hota hai
          :: state react me hota hai lakein variable js ka hai

          in app.js:   
                     fuction App() {
                          let data = "jyotish"
                        function updatedata() {
                            data = "sidhu"
                            alert(data)
                        }

                        return {
                            <div> 
                            <h1> state in react {data} </h1>
                            <button onclick={updatedata}> update date </button>

                            </div>
                        }
                     } 

                     state define karne ke liye :


                         import {useState} from 'react'      

                         function App() {
                            const [data,setData]=useState(0)
                         } 

                         function updatedata() {
                            setData("jkyadv")
                            setData(data+1)
                         }

                         return (
                          <div>
                          <h1> {data} </h1>
                        <button onclick={updatedata}>
                        click me
                        </button>
                          
                          </div>
                         )
               kya mai componenet ke state ko bahar use kar skta hun.
               public hai ya private hai ye state.

 # state in class component:
 make class componenet
 what is state
define state
update dstate with a button click 
interview question:
# state in class component:
       in app.jsx:
       state ek container hai. jab state ko update karenge to wo dubara rerender hoga
                      impoet React,{component} from 'react'

                      class App extends Component {
                        constructor()
                        {
                            super(); 
                            this.state={
                                data:"jyotish"
                            }
                        }

                        apple(){
                            this.setState({data:"jkyadav"})
                            alert("hello")
                        }

                        reder{
                            return{
                                <div>
                                
                                <h1>Hello world{this.state.data}</h1>
                                <button onClick={()=>{this.apple()}}> </button>

                                </div>
                            }
                        }
                      }


                      last bala ans: hm componenet ko state ke bahar nahi use kar skte hai
                      state public hota hai.
                      q. kya ham react ke class componenet ke andar useState kar skte hai. ha to kaise nahi to kun nhi kar skte 

