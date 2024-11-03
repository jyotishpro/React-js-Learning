# hooks in react js
 what are hooks in reactjs
 how to use them
 example of react hooks with usestate
 interview question
 # Hooks in reactjs
      
      what:
          with hook we can class component features in fuctional ocmponent such as state , life  cycle, pure component etc.

          in app.js:
                
                import React,{useState,use} from 'react'

                function App() {
                    const [data, setdata] = useState("jyoitsh") //destructuirng karna khte hai.
                    return (

                        <div>
                         <h1>{data}</h1>
                         <button onclick={()=>setdata("jkyadav")}> update data</button>
                        </div>
                    )
                }

                q. kya mai hooks ko class component ke andar use kar skte hai.

# useEffect Hooks in react js
what is useEffect
how to use useEffect
example useEffect
useEffect with State and props
interview question
 # useEffect
    
          functional component ke andar useEffect hota hai lifecycle method ke jaisa.
          jab bhi hamara component bnga tab ye call hoga ya props me bhi call hoga
          condition bhi lga skte hai. ki kab call ho.
          all in one package of lifecycle method.

          bina kisi conidtion ke kaise use karen
          in app.js:
                  
                  import React,{useState},{useEffect} from 'react'

                function App() {
                     const [ count , setcount ] = useState(0)
                    useEffect(()=>{
                        console.warn("useEffect") //componentdidmount ke jaisa // useeffect one se jyda use kar skte ahi
                     alert("useEffect")
                    })
                    return (

                        <div>
                         <h1>useeffect in react {count}</h1>
                         <button onclick={()=>setcont(count+1)}>update counter<button>
                        </div>
                    )
                } 
                 
                 hm hooks ko class component ke andar nahi use kar skte ahi
                 kya ham function ke andar useeffect use kar skta hun.
# useEffect with specific state and  props
what is useEffect
useEffct with specific\
 stateuseEffect with specific props
interview qs.

# useEffec with specic state and props
       
              import React,{useState},{useEffect} from 'react'
              import user form './user'

                function App() {
                     const [ count , setcount ] = usestate(100)
                     const [ data , setdata ]= usestate(10)
                     useEffect(()=>{
                        console.warn("useeffect warn called with data state" );
                     },[data]) // ye condition ke jaisa kam karta hai ye sirf data ke upar chlga. // yaha jo parameter pass krte hai usi ke upar chlta hai.

                     //specific state ke upar call kar skte hia

                     useEffect(()=>{
                     console.warn("this is count",count)
                     },[count])
                    return (

                        <div>
                        <user count = {count } data = {data} />
                         <h1>useeffect in react {count} </h1>
                         <h1>data:  {data} </h1>
                         <button onclick= {()=>setcount(count+1)}> update conter <button>
                         <button onclick= {()=>setdata(data+1)}> update conter <button>
                        </div>
                    )
                } 
                 
                  make user.js:

                  
              import React,{useState},{useEffect} from 'react'

                function App(props) {

                     useEffect(()=>{
                      alert("count is:"+props.count)
                     },[props.count, props.data])//dono ke upar chlga
                    return (

                        <div>
                         <h1>useeffect in react cont props {props.count} </h1>
                         <h1>data props:   {props.data} </h1>
                         
                        </div>
                    )
                } 

                ham useEffect ke andar usestate use kar skte but conditionaly karna hai. 
                kya redux se props bhejunga to useEffect waise hi chlga ya nhi.
                
                     
