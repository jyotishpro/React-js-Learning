
# passs function as props

      make file for componeent name user.js:
                  
                  import React from 'react'
                  function User(props) {

                    return (

                        <div>
                        <H1>user component<h1>
                        <button onClick={()=>porps.data()}> all data function</button>
                        </div>
                    )
                  }
                  export default User;

                  make another component neme member.js:
                          
                  import React from 'react'
                  function Member(props) {

                    return (

                        <div>
                        <H1>user component<h1>
                        <button onClick={()=>porps.data()}> all member function</button>
                        </div>
                    )
                  }
                  export default Member;
                                         

                  in app.js:
                             import User from './User'
                             import Member from './Member'

                             function App(){
                                function getData() {
                                    alert("hello from app")
                                }


                                return (
                                <div>
                                <User data = {getData} />
                                <Member data = {getdata} />
                                </div>

                                )
                             }
 # Life cycle methods:
      
      ....just like human life cycle method
      tin phase hota hai. mounting means : birth hona
                          updating
                          unmounting means: expire hona

    ex:
    product:  
             load product
             update product
             remove product
    jiase page load karta hia to popup dikh jata hai.
    ek buttons ke upar kar skte hai.
    remove bhi karna hota hai.

              use kha hota hai>>> componenet ke andar use hota hi
              ya kab kab chlta hai. :
                                        when component is loaded
                                        when component is updated with state and porps 
                                        when component is removed
     kya hmlog props ke sath me function pass kar skte hai. to ans ahi ha. function kahi bhi pass ho skta hi.

     jaise hi component ko remove karke dubara upload karung ato kya ye chlta rhga ya  r

# Constructor life cycle method
what is constructor>
why this is important?
what we can do in this life cycle method>

# constructor life cycle:
         
        jaise hi class bnta hai ye apne ap call ho jta hai.
        in app.js:
               
                 import React from 'react'

                 class App extends React.Component{
                    constructor() {
                        super();
                        this.state = {
                            data:"Jyotish"
                        }
                 }
                    render()
                    {
                        console.warn("render)


                        return(
                         <h1>hello world{this.state.data}</h1>

                        )
                    }
                 }
                        kya hamlog constructor ke andar props le skte hai.
                        nya life phir se start hota hai refresh karne ke bad;;;;

# render, life cycle method
use of render method 
make class component.
use state and props with render.
interview question.

# render life cycle:
     render mtlb:  execute karke present karna 
                   jab bhi kuchh change hota hai isme to ye phir se cal ho jta hai. apne ap
                   jb apka component bnga tb render call hota hai
                   state update 
                   props update hone pe ye call hota hai


        make component user.js;

                                import React from 'react'

                                class User extends React.Component{
                                    constructor()
                                    {
                                        super();
                                        this.state={
                                            email:"jk@gmail.com"
                                        }
                                    }
                                    render()
                                    {
                                        console.warn("render method",this.state.email)
                                        return(

                                            <div>
                                            <h1>user<h1>
                                            <button onClick = {()=>this.setState({email:"skks@gmail.com"})}>
                                            <div>
                                        )
                                    }
                                }           

                                export default User;

      in app.js:
          
          import User from './User'

            const [name, setname] = react.useState("jyoits")      
            return(

          <User name = {name} />
          <button onClick = {()=>setNmae("laxaman")}> update name</button>
            )


            kya ek function ke andar ek se jyda render method ho skta hai.
            ye bar bar kyun update hota hai.

# componentDidMount, life cycle mehtod
use of compoenentDidMount mehtod
make calss component.
no effect of state and props 
interview question

# componentDidMount
      
      jab api call karna hot hai tb ye use hota hai.
      jo html ke upar depend ho tb karbyenge
      jo event kisi ke upar depend ho tab karbayenge

      in app.js:
             import React form 'react'
                class App extends React.Component {
                    constructor() {
                        super();
                        this.state={
                            name:"jyotish"
                        }
                        console.warn("constructor")
                    }
                     componentDidMount() {
                        console.warn("componentdidmount")
                     }
                    render() {
                        console.warn("render")
                        return (
                            <div>
                            <h1> Component Did Mount {this.state.name} </h1>  
                            <button onLCick = {()=>this.setState({name:"sks"})}>
                            </div>  

                        )
                    }
                }
                
                kya hamlogo ko render ke andar state ko update karbana chahiye 
                kya component ke andar state update karba skte hai.

# componentDidUPdate, life cycle mehtod:
use of componenetDidUPdae Method
make class component
use with state and props
previous props and state.
interview question.

# componentDidUpdate :
      
      in app.js: 
                 import React from 'react'
                 calss App extends React.Component {
                    constructor() {
                        super();
                        this.state={
                            name:"jyoiths"
                            count:0
                        }
                        cosole.warn("constructor")

                    }
                    componenetDidUpdate(prepProps, preState,snapshot){

                        console.warn("componentdidupdate", preState.count,this.state.count,sanpshot)
                        if(preState.count===this.state.count) {
                            console.warn("data is already same")
                        }

                        if(this.state.count<10){

                        this.setState({count:this.state.count+1})
                        }

                    }
                    render(){
                        console.warn("render")
                        return(

                            <div>
                               <h1> component did update {this.state.name} {this.state.count}</h1>
                               <button onClick={()=>this.setState({name:"jjsk"})}> update name </button>
                               <button onClick={()=>this.setState({count:1})}> update name </button>
                            </div>
                        )
                    }
                 }

                 render ke andar kabhi bhi state update nahi karbani hai
                 kya hmlog mountDidUpdate ko rok skte hai to ans hi ji ha rok skte hai.
                 kya hmlog ko mountDidUpdate ke andar api call karni chahiye?