# search params hook

    make file filter.js:
                   
                   import {searchparamhook} from 'react-router-dom'
        
                   function Filter() {
                    const [searchparams , setsearchparams]= useSearchParams();
                    console.warn(searchparam.get('age'))
                    console.warn(searchparam.get('city'))

                    const age = searchparam.get('age')
                    const city = searchparam.get('city')
                    return(
                    <h1> Filter page </h1>
                    <h3>age is: {age}</h3>
                    <h3>city is: {city}</h3>
                    <input type = "text" onchange = {(e)=>setparams({text:e.target.vlaue, age:10})} placeholder="set text in query params" />
                    <button onClick={()=>setparams({age:40})}> set age in query params </button>
                    )
                   }
                   export default Filter;

                   q.search params ka use kya hai aur aap search param ko set kaise karte ho.

# Navigate programmatically
make 2 buttons
Navigations on click 
navigarion on function calling
interview question
# navigate programmmatically:

            make home page
            import usenavigate from react router 


            const navigate = useNavigate();
            const navtopage=(url)=>{
                let x = true;
                if(x){

                navigate('/about')
                } else{
                    navigate(url)
                }

            }
            return(

                <div>
                <button onclick={()=>navtopage()}> go to about page </ button>
                <button onclick={()=>navigat('/filter')}> go to filter page page </ button>
                <div>
            )

            conditional routing ?
            button ke upar navigate karbana hoga to aaplog kaun sa hook use karoge

Nested Routing
what is nested routing?
make pages for nested routing 
define routes for nested routing
interview question

# Nested Routing
      route ke andar route rhna . contact/channel 
       make four page : contact us>
                        
                        return(

                            <h1> this is contact page <h1>
                            <h2> here we have some other bussiness <h2>
                           <link to="company">company<link>
                           <link to="channel">other<link>
                           <link to="other">olhter<link>
                           <Outlet /> // for nested routing
                        )

                    2, channel.js:

                       return(
                       
                       <h1> this is channe page <h1>

                       )    
                    3. company page:

                    return(
                        <h1>this is comp page<h1>
                    )   

                    4. other page
                    return(

                    )

                    in app.js:

                       <Route path = "/contact/" element="{<contact />}> 
                       <route path="company" element="{<company/>}/>
                       
                        <Route/>

# Uselocation
          how to uselocation
          check location olbjest
          check params state, hash , search rtc.

          use location se data get ker skte hai ki route se kya kya pass hua hai.

          go in home.jss: 

              import Uselocation
              
              const location = uselocation(); // yahan l capital hoga
              console.log(location)
              key: jab bhi koi route ke upar jate hai to ek unique key generate hoti hai us route ki.

              return(

              <link to = "" state = {{name:"jyotish"}}>  //matlab jab route se data send karna hota hai to ye use kar skte hai.

              )
 # protected route
              make login page
              make protected route
              use protected route 
              use local storage 

              make component login.js:
                         
                        const login=()=>{
                            localstorage.setitem('login',true);
                        }
                        useeffect(()=>{
                            let login = localstorage.getitem('login')
                            if(login){
                                navigate('/')
                            }
                        })
                        return(

                            <div>
                            <input type= "text" >
                            <input type= "text" >
                            <button onclick={login}>login<button>
                            <div>
                        )                               


                in app.js:
                import protected
                 <Route path="/loign" element="<login/>">
                 <Route path="/" element="<protected compoenet={home}/>">
                 <Route path="/about" element="<protected compoenet={about}/>">
                 <Route path="/filter" element="<protected compoenet={filter}/>">


                make new component protected.js:

                    const {compoenent} = props
                    const navigate = usenavigate()
                    useeffect(()=>{
                        let login = localstorage.getitem("login");
                        if(!login){
                            navigate("/login")
                        }
                    })
                  return(
                    <div>
                    <component />
                    <div>
                  )  

 # dynamic routing

         in app.js:
          import {browseRouter as Router,link,Route} from 'react-router-dom'
          import User form'./user';

          const list = {
            {id:1, name:"jyotish", email: "jk@gmail.com"},
            {id:2, name:"rahul", email: "rahul@gmail.com"},
            {id:3, name:"akash", email: "aksh@gmail.com"},
            {id:4, name:"ragahav", email: "raghav@gmail.com"},
            {id:5, name:"bipin", email: "bipin@gmail.com"},
          }

         return(
           <Router>

           {
            list.map((data)=>{
           <link to={"/user"+data.id+itam.name}>  <h2>{data.name}<h2> </link>
            })
           }
           <Route path = "/user/:id/:name"> <user/> </Route>
           </Router>

         )   

         user.js:
          import {withRouter} from
         console.warn(props.match.params.id)
          return(
            <div>
            <h1> user component <h1>
            <h1>hi this is uer no : {props.match.params.id} <h1>
            <h1>hi this is  : {props.match.params.name <h1>
            <div>
          )   

          export defaut withRouter(user)           