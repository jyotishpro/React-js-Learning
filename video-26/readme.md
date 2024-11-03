# shouldComponentUpdate life cycle method
when shouldCompoenenUpdate called and use.
it can stope rendering 
use with state and props.
interview question.

# shoulComponentUpdate
      ::kya mujhe componenet ko update karna hai ki nahi karna hai.
      condition lga skte hai. ki jab update karen to rendering calll no ho.
      jab component ko update karbana ho ya nahi ho 
      use: jab state ki updar validation hai ku jab state ki value five ho to render na ho. like this condition.


      in app.js:

         class App extenda=s React.Component{
           constructor() {
            super();
            this.state = {
                count: 0
            }

           }
            
            shouldComponentUpdate()
            {
                console.warn("shouldcompoenentupdate",this.state.count)
                if(this.state.count>5 && this.state.count<10){
    
                return true;//bydefault false hota hai.
                }
            }

            render(){

                return(
               <div>
                 <h1>should componnet update {this.state.count}</h1>
                 <button onClick = [()=>{this.setState({count:this.state.count+1})}]>update counter</button>
               </div>

                )
            }
         }

         kya ham componentdidupdate ke andar api ko call kar skte hai. to ans hai ji ha kar skte hai conditional call karbani ho to . lakein aise componentdidmount ke andar karenge.

         q. kya componentshouldupdate phle call hota hai ya phir componentdidupdate

# componentWillUnmont life cycle
 when component will unmount called;
 example of component will unmount.
 use of component will unmont.
 interview question.

 # componentWillUnmount

        call kab hota hai. jab bhi hamara component dom se remove hoga to call hota hai like hide.

        in app.js:
        import student from './student'
        class App extends React.Component{
           constructor() {
            super();
            this.state= {
                show: true;
            }

           }

            render(){

                return(
               <div>
               {
                this.state.show ? <student  /> :<h1>child component removed </h1>

               }
               <button onclick={()=>this.setstate({show:!this.state.show})}>Toggle child component</button>
               </div>

                )
            }
         }

          in student.jsx: 
                         
         class student extends React.Component{
           constructor() {
            super();
            

           }
          componentWillUnmount(){
            console.warn("this is componentwillunmount")
            alert("componentWillUnmont")
          }
            render(){

                return(
               <div>
               <h1>component will unmount</h1>
               </div>

                )
            }
         }
         export default student


          shouldcomponentupdate phle call hot hai componentdidupdate se. 
          q. jaise hi component remove hoga just phle waise hi componentwillunmount chlga ya just vad chlga

          q. jha componenetwillunmount hai woha ye call hoga.