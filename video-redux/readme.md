# Redux
what is redux?
Why we need it?
Understand it with diagram.
how it works.
The topic of the series.

# Redux
      
      A container where you can store your whole application data.
      so we call it to state management
      it doesn't belong to the component state.

      daa ko locally ko krakha jata hai. 
      redux se do componennt ko easily connect kar skte hai.

      topic:
                  introduction.
                  redux architecture.
                  porps in redux.
                  install redux with react
                  make necessary files  and wrapper.
                  action.
                  reducer.
                   roo=t reducrer.
                   container
                   midddleware.
                   selector.
                   a project with redux.
                   interview question on redux.

# Redux Architecture
          four main piller: view,, action reducer, store;

          view:  jo hame dikhta hi wo view hota hai.
                  is view ke event ke upar action call hota hai.
                  action ka kam hota hai data collect karna. 
                  data api se bji aa skta hai aur view se bhi aa skta hia

                  iska basic kam hota hahi data collection 

                  phir ye data send karta krta hia.  reducer ke pass

                  reducer data filter bhi karta hai. and store ke pass send karta hai. 

                  store contain karta hia state of complete application.
                  ek application ke andar ek hi store hota hai.

                  daata hamesha ek hi direction me hota hai.

 # Redux with react installation
 check npm and node
 install reactjs
 install redux
 install react-redux
 # installation 
               in terminal:
                         npm -v
                         node -v

                         npx create-react-app redux-tut
                         npm start 

                         npm install redux
                         npm install react-redux

                         open package.json: here you can see
                         git init
                         git add . commit -m 
                         git branch -m master
# why we need it:
     props: 

           ek component se dusre component ko connect karne ke liye;

           react thumb rule : jab do component ke bich communication karate hai to props use karte hai. 

           in app.js:
           import user from './user'

                return(

                    <div>
                    <h1> app component 
                    <h1>
                    <user  name = {{name:"jyotish",age:26}}/>
                    <div>
                )                                          
               
               make component: 
                 name: user.js:
                    
                              import react from 'react'

                              const user =(props)=>{
                                 console.warn(props.data.name)
                                 const {data} = props
                                return(
                                    <div>
                                    user component
                                    <h4> {data.name}
                                    <h4> {data.age}
                                      
                                    <div>
                                )
                              }

                              export default user;


# file or folder structure 
       componets folder:
       containers folder
       service:
             actions
             reducers
             constants: kon sa data kaha data kha pe match hoga

             make folder component:
                            in component: home.js
             make folder containers:
                            in containers: homecontainer.js
             make folder services:
                            in services: make folder action : in action: action.js
                                          make folder reducer: in reducer: reducer.js, index.js
                                          make file constant.js


# design make
 
            in app.js:
            inport home from './home'
            import homecontianer from './container/homecontainer'

            return(
             
             <homecontainer />

            )



          in home.js:
                
                 import react form 'react'

                 function home(){

                    return(
                        <div >
                        <div className="">
                         <img src="cart-icon-image" /> 
                         <div>
                        <h1> home component
                        <div classNmar = "cart-wrapper">
                        
                        <div className = "img imgwrapper item >
                        <img src =" imagelink" />
                        <div>
                        <div className = "img imgwrapper item >
                        <span> iphone <span>
                        <span> price: $10000;
                        <div> 
                        
                        <div className = "img imgwrapper item >
                        <button> add to cart </button>
                        <div> ///isko style karna hai.
                        <div>
                        <div >
                    )
                 }

        in homecontainer.js:
               
               import home form '../component/home'
               
               function homecontainer(){

               }

               import default home;

# action


       what is actoin 
       make function in action file 
       return data and type
        add constant and constant in action

        action: basiclaly action hmare react se data store karta hai. jha jarurat hota hai woha nikal leta hia 
            react ke component se data send karta hai redux ke store ke andar.


            in action.js:

             import {ADD_TO_CART} from '../constatn.js'

           export const addtocart=(data)=>{

                return(
                    type:ADD_TO_CART,
                  data:data

                )
            }               
           export const removetocart=(data)=>{

                return(
                    type:"REMOVE_TO_CART",
                  data:data

                )
            }               


            in constant.js:
                  
                  export const ADD_TO_CART= "ADD_TO_CART"

# reducer and route reducer;

      jo action se hame data milta hai use store ke andar send karta hai. 

      in reducer: reducer.js:
                             iimport (ADD_TO_CART)
                             const initialState = {
                                cartdata:[]
                             }

                           export default function carditem(state=initialState, action){
                             
                             switch(action.type){
                                case ADD_TO_CART:
                                return(
                                    ...state,
                                    cartdata:action.data
                                )
                                break;
                                default:
                                return state
                             }



                            }                  

          in reducre: in index.js:
                     import {combinedReducers} from 'redux'
                     import carditem from './reducer'      

                     export default combneReducers({
                        carditems.
                     })           

# container 
connect redux eith react
import react-redux .action and component
use mapstatetoProps
# container

              in homecontainer.js:
               import connect from 'react-redux'
               import {AddToCart}  from '../servece/action/actions              

               cosnt mapstatetoprops=dispatch=>({
                addToCarHandler;data=> dispatch(addToCart(data))
               })
















               