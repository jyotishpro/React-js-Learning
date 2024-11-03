# what is react
     react is javascriopt library
     the main focus is building ui as fast as possible.
     so this is used to sigle page application
     means complete website in single page

     why react is fast
                      react use virtual dom
                        update only 
                        required list
     why learn react

                    maintained by facebook so it will long term player in the markett
                    highest demand due to fast speed.
                    large comunity for your support.
                    mobile app development with react native

     History version

                   maintainer by facebook
                   first realease on 2013
                   the current versin
                   apps with react is:
                          netflix
                          whatspp web 
                          instagram
                          airbnb etc.

    react prerequisites

                       html css javascript.
                       es6 u

# React js without installation 
react is geneerally used with npm
but we can also use cdn
make example with react cdn
interview qurestion
# react js installation
          make file index.html:
                                <html>
                                <head>
                                <body>
                                <div id="mydiv"> 
                                hello react
                                </div>
                                <script type="text/babel">

                                function Test() 
                                {
                                  const bal= ()=>alert("test")
                                  return <button onClick={bla}>Click me</button>
                                }
                                class Hello extends React.Component{
                                  render() 
                                  {
                                    return <div> hello React with code</div>
                                  }
                                }
                                ReactDOM.render(<hello />.document.getElementById('mydiv'))
                                </script>
                                </body>
                                </head>
                                </html>

                                npm kyun use karte hai react ke sath
# enviornment setup for react js with windows:

                               make a folder
                             in terminal:   npx create-react-app blog 
                                           cd blog      
                                           npm start 
                              npm:
                                   node package manager 
                                   ye sab kuch handle karta hai.
                                   thoda security deta hai
 # React js write first code
                         in terminL : npm start
                         do file important hota hai.
                         1. index.js
                         2. app.js

                         in app.js: 
                                    isme apko change karna hai

                                    import logo from "./logo.svg":
                                    import "./App.css":
                                    function App() 
                                    return {
                                      <div className = 'App'>
                                      <h1> hello world</h1>
                    
                                    }      

                                    export default App;    

                                    src ke folder andar new bna skte ahi: isme first letter capital rakhna hai.
                                    users.js : 
                                            function Users() 
                                    return {
                                      <div className = 'App'>
                                      <h1> hello world</h1>
                                      </div>

                                    }      

                                    export default Users;  


                                    then index.js ke andar jakar :
                                              import Users from "./Users";
                                              App ke jagah users karna.

npm ka alternative kya hai: 
npm ka alternative ahi Yarn : jo facebook ke khud ka hai.
q. react ka current version kya hai

# React js App structure
  understand fule user and structure 
  understand  folder user sand structure 
# file structure
              package.json: 
                            important file hota hai
                            is file ke andar file ka nam , version, aur package ke bare me jankari milta hai.
              package-lock.json:
                                 ye package.json ka history rkahta hai usko control karta hai.
                                 har ek package ki kitni depedencies hai ye bhi rkhta hai.
              .gitignore: 
                          file ya folder ko ignore karne ke liye
              src folder:
                          jitna bhi kam karta hai sab isi me rhta hai.
                      app.js:
                              yahan se hm code likhna suru karte hai. 
                              index.js: ye apki react ki entry point hoti hai.

                  report: ye performance ki report batata hai.
               setupTest.js: isme sabki test cases likhi jati hai 
                 Public folder: 
                                 ye html se ralated detail rakhta hai. 
                   manifest.js: ye icon bagera rakhta hai 
                   tobots.txt : iska use 
                   nodemodule: isme sara pacakage hota hia.
# package.json file: 
                    what is this.
                    how to add enw npm pacage 
                     remove npm package 
                     custom commands

                     package.json apke details ka sara detail rakhta hai. 
                     nodemodule kafi heavvy rkhte hai. 
                     npm install karke sabhi package install kar skte hai.
                     library installl karenge:

                     remove karne krne ke liye: npm uninstall name

                     in scripts: me aap custom command dal skte hai.
                             npm run change name:

        q. kitne types ke componenet hote hai.
# component in react js
what is component 
type of compenent
examples of component
 # component
          apart of element of a larger whole expecially a part of a machine or car.

          :::::: 
                   A piece of code that can reuse 
                   such as function
                   but more powerful than function 
                   header, footer is best example. 

                   component type: 
                     functional component 
                     class component 
                     high coreder component 
                     pure component 
                     controo=lled component 
                     uncontrolled componenet

                     same file ke andar component bna skte hai. 
                     make a file> user.js:
                            in User.js: 
                                         function User() {
                                          return {
                                            <div>
                                            <h1>
                                            User component
                                            </h1>
                                            <h1>
                                            hi i am jyoitsh
                                            </h1>
                                            </div>

                                          }
                                         }                

                                         export default User ;

                       ab app.js me:
                                    import User form './User'

                                    phir use karen is parkar: 
                                                                 <User />            
                        isko same file mein bhi bna skte hai.


# class component:
                   make new file> User.js
                    in User.js:
                              import React,{Component} from 'react'
                              export default class User extends Component 
                               {

                                render()
                                {
                                  return (
                                    <h1> hello from user</h1>
                                  )
                                }
                               }     

                   in app.js:
                              import User from './User'
      kya component ke andar component bna skte hai.
    usko usi ke andar use kar skte ahi.                           
    kya react aur angular ko dono ek project me use kar skte hai.

  # jsx with react
        javscript xml (jsx)
        write html and javascriopt toether
         use like g=tml or xmltags
          react witout jsx

          jsx:
          make file User.js:
                        import React from 'react'
                         function User() {
                            return React.createElement('h1',null,"hello  user" ) //  without using jsx;
                          return {
                            <div>hello</div>
                          }
                         }  
                         export default User;
        kya mai jsx ko bina react ke use kar skte ahi                 

                         

                          

