# useMemo Hook in React js
why use useMemo Hook?
understand problem
apply use memo
interview question.

# useMemo Hook 

          why we use memo hook:  
                            state ya props ke sath me kam kar rhe hote hai to hamra component khud update hote rhta hai
                            unwanted calls ko save kar skte hai.

             in app.js:
             import usestate
             import usememo
               
               const [ count , setcount]= useState(0)
               const [ item , setitem]= useState(10)
               const Multicountmemo= useMemo(              
                 function multicount(){
                console.warn("multicount")
                return count*5;
               },[count])


             return(
                <div>
                <h2>count {count}<h2>
                <h3>{multicountmemo}<h3>
                <button onclick = {()=>setcount(count+1)}>update count<button>

                <button onclick = {()=>setitem(item*10)}>update item<button>
                <div>

             )               

             use memo use kar skte ahi

             kya usememo ko class ke andar use kar skte hai.

# Ref in Reactjs
why use ref 
make class component
ref use with example
interview qs.

 # Ref
  
          ye dom ko manipulate kar skta hai.
          emergency me use karte hai
          jabardasti krta hai.

          form me use kar skte hai.

          in app.js:
                
                import ref
            
          class App extends React.component{
            constructor(){
                super();
                this.inputRef= createRef();
            }
            componentDidMount(){
                console.warn(this.inputRef.current.value="100")
            }
            getval()
            {
               console.warn(ths.inputRef.current.value)
               this.inputRef.current.style.color="red"
               this.inputRef.current.style.backgrounColor="black"
            }

            render()
            {
                return(
                    <div>
                    <h1> Ref in react <h1>
                    <input type = "text" ref={this.inputRef}>
                    <button onclick={()=>this.getval()}>check ref <button>
                    <div>

                )
            }
          }

          kya ek component ke andar ek se jyda ref use kar skta hun
          kya ek element ke upar ek se jyda ref use kar skta hun
          kya hmlog functional component ke andar ref use kar skte hai.

# useRef in React js
why use useref
ref use with example
focus, color , value etc handle with useref
interview question.

# useRef 
           
            jab dom manipulation karna hota hai to use karte hai.
             useRef in functional component
             agar kisi ke starting ke andar hook lga ho to wo ek hook hai.

             in app.js;
                       
                       import useref
                       let inputRef= useRef(null)
                        
                        function handleinput(){
                            console.warn("fnction test)
                            inputRef.current.value="10010"
                            inputRef.current.focus();
                            inputRef.current.style.color="red";
                            inputRef.current.style.display=null;
                        }

                       return (
                        <h1> useRef in react<h1>
                        <input type="text" ref = {inputRef} />
                        <button onclick={handleinput}>handle input<button>
                       )

                       hamlog ko useref karna chahiye kii usestate use karna chahiye.

# forwardRef in Reactjs
why use forwardRef
make child component
pass ref with props and use it

# forwardRef 
          
            apke pass ek child component hai uske andar ek input box hai uska dom manipulate karna hai to kya karenge
            ref ko forward kar skte hai

            in app.js:
                      import user, useRef
                        
                         let inputRef= useRef(null)
                         function updateinput(){
                            inputRef.current.value = "1000"
                            inputRef.current.style.color = "red"
                            inputRef.current.focus();
                         }
                     return(
                    <h1> forwardRef in React </h1>
                    <user ref = {inputRef} />
                    <button onclick={updateinput}> update inputbox <button>
                     )

              make user.js
              :
                 import react form 'react'
                 import forwardRef

                 function user(props,ref){

                    return (

                        <div>
                        <input type="text" ref = {ref}>
                        <div>
                    )
                 }       

                 export default forwardRef(user);

                 ref ko kam se kam use karna chahiye 
                 ye karne se performance slow ho jta hai.

# Controlled Component 
what is controoled compoenent
make componeent
example of controlled component
# Controlled component

        React ke andar jab ham input filed ko state ke through control karte hai to ye controlled component hota hai.
        js bala uncontrol hota hai like : dom

        in app.js:

         const [val , setval ] = useState("")
         const [item , setitem ] = useState("00000")
        return(

            <div>

                 <input type="text" defaultvalue="0000" onchange={(e)=>setvla(e.target.value)}/>
                 <input type="text" item = {item} onchange={(e)=>setitem(e.target.value)}/>

                 <h3> value = {val} <h3>

            <div>
        )                 

        react.forwardRef(class component ) kar do ho jyga

        kya controlled component ko class ke andar use kar skte hai.

# uncontrolled component;
what
make
example
interview

# uncontrolled component :
     
          uncontrolled component: ke andar input filed honi chahiye
          wo component hote hai jo 
          wo input field react ke state ke through contorl nhi honi chaiye
          wo ref se honi chiye ya js se honi chahiye

          in app.js:
                 useref import

                 let inputRef = useRef(null)
                 let inputRef2 = useRef(null)
                 let input3 = document.getElementById("input3").value;

              function submitform(e){
               e.preventDefault();
               console.warn("inputfield one vlaue", inputRef.current.value)
               console.warn("inputfield teo vlaue", inputRef2.current.value)
               console.warn("inputfield three vlaue", input3)
              }
          return(

            <div>
            <form onsubmit={submitform}>
            <input ref={inputRef} type="text"> <br>
            <input ref = {inputRef2} type="text"> <br>
            <input id="input3" type="text"> <br>
            <button> submit <button>
            <form>
            <div>
          )

# Hoc 
what high order component?
make 
example

# HOC high order component
         
         : ek copoent jo disre component ko as an props leta hai aur compoenet hi as an output dega;

         in app.js:

                     return(
                        <div>
                        <hocred cmp={counter} />
                        <hocgreen cmp={counter} />
                      
                        <div>

                     )

                     functin hocred(props){

                        return <h2> style={{backgroundColor="red",width="100px"}} red<props.cmp /> <h2>
                     }
                     functin hocgreen(props){

                        return <h2> style={{backgroundColor="green",width="100px"}} green<props.cmp /> <h2>
                     }
                     functin hocblue(props){

                        return <h2> style={{backgroundColor="blue",width="100px"}} blue<props.cmp /> <h2>
                     }

                     function Counter()
                     {
                        const [ count , setcount ] = usestate(0)
                        return <div>
                        <h3> {count} <h3>
                        <button onclick = {()=>setcount(cont+1)}> update <button>
                        <div>
                     }
          
          