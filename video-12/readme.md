 # props with functional component:
 what are props: jaise hm fucntion bnte hai aur uske andar kuchh parameters lekar usme kuchh data pass karte hai
                 usi tarike se hm component bnyga aur uske andar kuchh data pass karna chahe to wo props ke help se kar skte hai
                 .. props ko parameter bhi bol skte hai.
 # props:
      in file bnye student.jsx:
                                 function Student(props)
                                 {
                                    console.warn(props.name)
                                    return (
                                        <div>
                                        <h1> student componenet hello {props.name} </h1>
                                        button click ke upar update karen//

                                        <h2>email: {props.email} </h2>
                                        <h4>Address: {props.other.address} </h4>
                                         </div>
                                    )
                                 }
                                 export default student

              in app.js:
                        import student from './student'
                        import React,{useState} from 'react'

                        function App() {
                            Const [name, setName]= userState("jkyadav")

                            return (

                                <student name=("jyotish") email="kumarjyoitsh763030gmail.com" />  isko access karne ke liye 
                                <student name=("rjsh" email="jfjjfjjfj@gmail.com") other={{address="jdjdjdddd" , mobile="hdhhdd" }} />  
                                <student name=("bbn" email="jdjdj@gmail.com") />  
                                <button onClick={()=>{setName("jkyadavbro")}}>
                            )
                        }                   

                       last bala ans: class bala ke andar usestate use nahi kar skte.
                     ????  kya property ke jaisa fuction pass kar skte hai.           
# props with class component
what are  props 
use of props 
example woth class componnet 
 update props on button click
 interview question          
 # props 
        make component student.js:
                     import React from 'react'
                     export defaut class Student extends React.Component {
                        render()
                        {
                            return (
                                <div style={{backgroundColor="red"}}>student {this.props.name}
                                {this.props.email}
                                </div>
                            )
                        }
                     }
                     in app.js:

                     import student from './student'
                     impoet React from 'react'
                     class App extends React.component {
                        connstructor() {
                            super();
                            tis.state= {
                                name="jk"
                            }
                        }
                        render() {
                        return (
                            <div> 
                            
                            <h1> props</h1>
                            <student name={this.state.name} email="kumarjyotish67303@gmail.com"></student>
                            <student name="anil" email="anil@gmail.com"></student>
                            <button onclick=()=>this.setState({name:"sidhu"})> update name
                            </button>
                            </div>
                        )
                        }
                     }

                     kya props ko jisme receive kar rhe hai kya usme change kar skte hai. to ans ahi nahi
                     only parent se hi kar skte hai

           kya ham fuction as a prop send kar skte hai to ans hai ha kar skte hai.
           kya ham html bhi pass kar skte hai prop se yadi ha to get kaise karenge.


                            