import React,{useState} from "react";
import style from './Front.module.css';
import {BrowserRouter as Router, Link} from "react-router-dom";
import login from  "./login";
import { validEmail, validPassword } from './regex';


function Home (){
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailErr, setEmailErr] = useState(false);
   const [pwdError, setPwdError] = useState(false);
  const Validate= ()  => {
      if (!validEmail.test(email)) {
         setEmailErr(true);
      }
      if (!validPassword.test(password)) {
         setPwdError(true);
      }
   };
   
    return (
        <div className={style.content}>
         
         <h1 className={style.title}>JUST COOK</h1>
         <p className={style.firstline}>A Recipe is a story,that ends with a good meal</p>
         <p className={style.username}>Username:</p>
          <input
            type="text"
            placeholder="Username"
            style={{ 
                width:"270px",
                height:"20px",
                borderRadius:"20px",
                marginRight: "1000px" 
    
          }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <p  className={style.password}>Password:</p>
         <input
            type="password"
            placeholder="Password"
            style={{ 
                width:"270px",
                height:"20px",
                borderRadius:"20px",
                marginRight: "1000px" 
       
             }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         <div>
         <Link to = "/search"  
                style={{ 
                fontFamily:"cursive",
                color:"yellow",
                textDecoration:"none",
                cursor:"pointer",
                fontWeight:"bolder",
                fontSize:"20px",
                marginTop:"-10px",
                padding:"20px",
                marginRight: "1050px"}} onClick={login}>Login</Link>
                <p className={style.thirdline}>Login to know the Calories and Ingredients</p>
                <p className={style.secondline}>"Eat Better,Not Less"</p>
                
         </div>
         
         {emailErr && <p>Your email is invalid</p>}
         {pwdError && <p>Your password is invalid</p>}
        
      </div>
   );
};
export default Home;


{/* 
    //     <div className={style.content}>
    // <h1 className={style.title}>JUST COOK</h1>
    // <p className={style.firstline}>A Recipe is a story,that ends with a good meal</p>
  
    // <p className={style.username}>User Name:</p>
    // <input  type="text" style={{ */}
    {/* //     width:"270px",
    //     height:"20px",
    //     borderRadius:"20px",
    //     marginRight: "1000px" */}

     {/* }}></input> */}
    {/* // <p  className={style.password}>Password:</p>
    // <input  type="password" style={{ */}
    {/* //     width:"270px",
    //     height:"20px",
    //     borderRadius:"20px",
    //     marginRight: "1000px"

    }}></input> */}
    {/* <br/> 
    <Link to = "/search"  }
    // style={{ 
    // fontFamily:"cursive",
    // color:"yellow",
    // textDecoration:"none",
    // cursor:"pointer",
    //  fontWeight:"bolder",
    //  fontSize:"20px",
    //  marginTop:"-10px",
    //  padding:"20px",
    //  marginRight: "1050px"}} onClick={login} >Login for the recipes</Link>
    

     {/* <Link to= "/register" style={{ 
    fontFamily:"cursive",
    textDecoration:"none",
    color:"yellow",
    cursor:"pointer",
     fontWeight:"bolder",
     fontSize:"20px",
     marginTop:"-30px",
     padding:"20px",
     marginRight: "1050px"}}>New User Register here</Link> */}
{/* //        <p className={style.secondline}>"Eat Better,Not Less"</p>
//     </div> */}
{/* //     );

    
   
// }

// export default Home; */}