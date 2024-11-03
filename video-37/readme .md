# what is react fragment:
what is React freagment?
how ro use it?
use it with child component
interview question:

# React Fragment;
          
          multiple elements ya multiple component ko handle karne ke liye. as an rapper use kiya jata hai.
          tin tarike hai use karne ka : 1. React.Fragment
                                         2. import kro Fragment ko
                                         3. empty tag use karo (<></>)
          in app.ja:
               import cols from 'cols'
          return (
            <div>
              <h1> react component<h1>

                <table>
                        <tbody>
                        <tr>
                        <cols />
                        </tr>
                        </tbody>
                        </table>
            <div>


          )

          make child component: cols.js:
          table ke andar div nahi lga skte to use hta skte hai
                
                function cols(){
                    return(

                        <>
                        <td>jyotish</td>
                        <td>kumar</td>
                        </>
                    
                    )
                }

                export default cols

                jab component ko use karte hai to update karane ke liye to function child component me banana chahiye to ans hai nahi banana chahiye. app.js ke andar funtion banana chahiye.

                kya fragment ke sath me class use kar skta hun
                jab child ke andar fragment use kar li to child ke andar kar skta hun ya nahi.

# send data child to parent component( lifting state up)
make a child component
how pass props parent to a child component
send data child to parent
interview question

# send data child to parent component:
 
           make child component user.js:
                      function user(props){
                         const item = {name:"jkyadav",cont:445,emai:"jk@gamil.co"}
                        return(

                            <div>
                            <h2>user name: {props.name}<h2>
                            <button onclick={()=>props.alert(item)}> click me <button>
                            </div>
                        )
                      }

                      export default user;


                      in app.js:
                         
                      import user from 'user'
                      
                      function parentalert(item){
                        console.log(item);
                        alert("hello",item.name)
                      }

                      let data = "jyotish kumar"
                      return(

                      <div>
                      <user name = {data} alert = {parentalert} />
                      <div>
                      )

                      parent ke andar freagment  user karta hun to child ke anda r kar skta hun to and hai ha kar skte hai.
                      kya nested object call ho skta hi.

# pure component:
what is pure component
how to use the pure component
pure componennt examplse with state
pure compoenent example with props

# pure component:
        
        ye ek feature hota hai jo direct use kar skte hai.
        componenet ko rerendring hone se rokta hai.

        in app.js;
             import React , {pureComponent} from 'react'
           class App extends pureComponent{
            constructor(){
                super();
                this.state={
                    count = 1;
                }
            }

            render()
            {
                console.warn("check rerendring")
                return(
                  <div>
                    
                     <user name={this.state.name="jkyadav"} />
                  <h1>pure react component {this.state.count}<h1>
                  <button onclick={()=>this.setstate({count:this.state.count})}> update me </button> // render funciton bar bar call hoga isko resolve karne ke liye hmre pass pure component hai.
                  <div>
                )
            }
           }
           make user.js component

            import React , {pureComponent} from 'react'
           class user extends pureComponent{
            constructor(){
                super();
                this.state={
                    name = "jk";
                }
            }

            render()
            {
                console.warn("check rerendring")
                return(
                  <div>
                  <h1>user react component {this.props.name} <h1>
                  
                  <button onclick={()=>this.setstate({count:this.state.name="jkyadav"})}> update me </button> // render funciton bar bar call hoga isko resolve karne ke liye hmre pass pure component hai.
                  <div>
                )
            }
           }

           export default user

           hmlog super child componenet ke andar function pass kar skte hai. to ji ha kar skte hai. 
           kya hme functional component ke andar pure component use karna chahiye

           