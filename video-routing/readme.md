# React router
install React router version 6
setup wrapper for react router 
make some component
open ocmponent as pae 
# React router
    
         go in chrome search react router.
         for installation... 
          in terminal:
                       :>npm install react-router-dom
                       
            in app.js:
             
             set wrapper : ek box banana hota hai usi ke andar react router kam karega;

             import {,Routes} from 'react-router-dom'
             import Home form 'home'
             import about form 'about'

             return(

             <BrowserRouter>
             <Routes>

             <Route path="/" element={<Home />} />
             <Route path="/about" element={<about />} />

             </Routes>
             </BrowserRouter>

             )


            make component home.js:
                in home.js: 
                        
                         function Home(){

                            return(

                                <h1>Home page<h1>
                            )
                         }
                         
                         export default Home;

           make about.js:
                         
                         function About(){

                            return(

                                <h1>About page<h1>
                            )
                         }
                         
                         export default About;

# Home to make simple link for router
make common component for links 
why we use not an achor tag for links

# make simple link:
               import navbar 
          in app.js:

          import link:

          return(
             <div>
             <BrowserRouter>
             <!-- <Link to="/about"> about </Link>
             <Link to="/"> Home </Link> -->
             <navbar/>
              
             <Routes>
               
               <Routes path="/about" element = {< about />}>

             </Routes>
             </BrowserRouter>
             <div>

          )

          make navbar.js

                     import link
                   function navbar(){
                     
                    return(
                        <div>
                        <ul>
                        <li> <Link to="/about"> about </Link><li>
                       <li> <Link to="/"> Home </Link> <li>

                       <li><a href='/'>go home page <a> // isse page reload hota hai.
                        <ul>
                        <div>
                    )
                   }

                   go in home page:
                    
                        <p> this is a home page of our awesome app <p>
                        <p> and here we are learning about router <p>
                        <link to= "/about">go to about page <link>

                   go in about us page:

                         
                        <p> this is a about page of our awesome app <p>
                        <p> and here we are learning about router <p>
                        <link to= "/">go to home page <link>

# 404 page and redirect

        make component : page 404.js:

        function page404(){
             
             return(
             
             <div>
             <h1> page 404 <h1>
             <p>This url is not present<p>
             <link to= '/'> go to home page <link>
             <div>

             )


        }                        
       export default page 404;

       in app.js:

       import 404 page;
       import navigate

       return(
        
        <browserRouter>
        <Routes>
        <Routes path="/*" element={< page404 />}>
        <Routes path="/*" element={< Navigate to="/" />}>
        <Routes>
        <browserRouter>

       )

# Params
 why do we need params with router
 make components for paramsmake route and linkget params and learn in details

 # params 

       make component user.js:
       import usepatam
       function user()
       
       {
        const params = useParams();
        const {name} = params;
        console.warn("name")

         return(

            <div>
            <h1> this is {name} page page<h1>
            <div>
         )

       }       
       export default user;



       in app.js:

       import user form 'user'
       <browserRouter>
       <Routes>
       <Routes path= "/user/:name" element = {<user />}>
       <Routes>
       <browserRouter>

       in navbar:
       <Link to= "/user/anil"> anil </Link>
       <Link to= "/user/peter"> anil </Link>

       in about page:
       <Link to= "/user/anil"> anil </Link>
       <Link to= "/user/peter"> anil </Link>

 # style with react router

         link ko classname nah dete hai to link ke jagah navlink use karenge
         ab isme classname add karenge
 # active link in navbar

               
