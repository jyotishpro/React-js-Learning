# Get input box value
make input field 
make function and get value 
make button and state 
get value on Button click
 interview qs.

  # Get input box value 
           in app.js
           :
                    import React , {usestate} from 'react'


                    const [data, setdata] = useState(null) 
                    const [print, setprint]= useState(false)
                    function getdata(val){
                        console.log(val.target.value)
                        setdata(val.target.value)
                    }  
                    return(
                        <h1>{data}</h1>
                        {
                            print?
                            <h1>{data}</h1>
                            :null
                        }
                    <input type="text" onChange={getdata()} />
                    <button onclick=()=>{setprint(true)}> print data
                    </button>

                    )

                    >>>>>porps ke andar html ko bhi send kar skte hai. this.props.children
                    kya ham check box value get kar skte hai ya nahi

# hide and show element
make a div or any other element
make state hor hiding and show element 
make button
update state on button click 
interview qs.
# hide and show element
        
        in app.js: 
                     function app() {
                        return (
                            const [status, setstatus] = useState(true)
                            <div ClassName="App" >
                             
                             {
                                status? <h1> hello world  </h1> :null

                             }

                            <button onclick={()=>setstaus(false)}> hide </button>
                            <button onclick = {()=>setstatus(true)}> show </button>
                            <button onclick = {()=>setstatus(!status)}>toggle </button>
                             </div>
                        )
                     }

                     export default App;

                     qs. kya hm react aur jquery ke andar same method use karte h hide show karne ke liye

# basic form
make html form 
add some field use state for field data 
submit and control form
interview qs.

   # basic form

    in app.js:

                const [name , setname] = useState("")
                const [enc, setenc]= useStte(false)
                cnst [intrest, setintrest] = useState("")

                function getformdData(e,name,tnc,intrest) {

                    console.warn(name,tnc,intrest)
                    e.preventDefault()
                }

                <form onsubmit={getfromData}>
                 <input typw = "text" placeholder= "enter name" onchange={(e)=>setName(e.target.value)}/>
                 <select onchange = {(e)=>setintrest(e.target.value)}>
                 <option> select option </option>
                 <option> ddc </option>
                 <option> dv </option>
                 <option> kddk </option>
                 </select>
                 <input type="checkbox" onchange= {(e)=>settnc(e.targe.checked)}/> <span>acccept terma and condition</span>
                 <button type="sumbit">submit</button>
                </form>

                qs. mai agar kisi field ko disable karna chahu to kaise kar skte hai.

 # conditional rendring:
 make componenet 
 use state
 not recommended way for condiiton
 correct way condition

 # condition rendering:

            make file profile.js:
                             import React from "reac"
                             function profile() {
                                const [loggedin, setloggedin]= useState(false)
                                const [loggedin, setloggedin]= useState(1) ///for else if
<!-- 
                                if(loggedin)
                                {
                                    return(
                                        <div>
                                        <h1> welcome jyoiths</h1>
                                        <div>
                                    )
                                } -->



                                return (

                                    <div>
                                    {loggedin?<h1>welcome anil</h1>
                                    :<h1>welcome guest</h1>}
                                    {loggedin==1?<h1>welcome anil</h1>
                                    :loggedin==2?<h1>welcome user2</h1>:<h1>welcome guest</h1>} //else if
                                    <h1> jyoiths</h1>
                                    </div>
                                )
                             }   
                             export default profile;

                             in app.js:

                                   import Profile from './profile'

                                   return (
                                   
                                   <profile />

                                   )

            q. kya state ki jagah pe normal variable lata to chlta ya nhi chlta
# basic form validation
make component
make html form
define states 
apply validation
interview question

# basic form validation
     make file login.js:
                    
                    import React, {useState} from 'react'

                    function login() {
                        const [user, setuser] = useState("")
                        const [pass, setpass] = useState("")
                        cosnt [userarr, setuserarr]=useState{false}
                        cosnt [passarr, setpassarr]=useState{false}

                       function loginhandle(e) 
                        {
                            if(user.length<3 || pass.length<3) {
                                alert("type correc val")
                            }
                            else {
                                alert("all good")
                            }
                            e.preventdefault
                        }

                        function usehandler(e) 
                        {
                        let item = e.target.value;
                    
                            if(item.length<3) {
                                setpassarr{true}
                                console.warn("invlid")
                            } else {
                                setpassarr{false}
                            }
                            setuser(item)
                            
                           console.log(e.target.value.length)
                        }
                        function passhandler(e) 
                        {
                        let item = e.target.value;
                    
                            if(item.length<3) {
                                setuserarr{true}
                                console.warn("invlid")
                            } else {
                                setuserarr{false}
                            }
                            setpass(item)
                            
                           console.log(e.target.value.length)
                        }
                        return (

                            <div>
                            <h1>login</h1>
                            <form onsubmit={loginhandle}>
                            <input type="text" placeholder="enter you id" onchange={userhandler}> <br> {userarr>?<span>user not valid</span>:""}
                            <input type="password" placeholder="enter you password" onchange={passhandler}>  {userarr>?<span>user not valid</span>:""}
                            <button type="submit"> login </button>
                            </form>
                            </div>
                        )
                    }

                    export default login;


                    in app.js:
                       
                            import login from './login'
       q.
                                    
