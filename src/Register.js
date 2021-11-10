import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import style from './Front.module.css';
import registration from './registration';

function Register(){
    return(
        <div className={style.content}>
         <p className={style.firstline}>When something is delicious, it's zero calories</p>
        <p className={style.name}>Name:</p>
        <input type="text" style={{
        width:"270px",
        height:"20px",
        borderRadius:"20px",
        marginRight: "1000px"

    }}></input>
        <p className={style.usname}>Username:</p>
        <input type="text" style={{
        width:"270px",
        height:"20px",
        borderRadius:"20px",
        marginRight: "1000px"

    }}></input>
        <p className={style.email}>Email:</p>
        <input type="text" style={{
        width:"270px",
        height:"20px",
        borderRadius:"20px",
        marginRight: "1000px"

    }}></input>
        <p className={style.pswd}>Password:</p>
        <input type="password" style={{
        width:"270px",
        height:"20px",
        borderRadius:"20px",
        marginRight: "1000px"

    }}></input>
        <p className={style.cpwd}>Confirm Password:</p>
        <input type="password" style={{
        width:"270px",
        height:"20px",
        borderRadius:"20px",
        marginRight: "1000px"

    }}></input>
        <br/><br/>
        <Link to = "/" style={{ 
    fontFamily:"cursive",
    color:"yellow",
    cursor:"pointer",
     fontWeight:"bolder",
     fontSize:"20px",
     marginTop:"0px",
     padding:"20px",
     marginRight: "1050px"}} onClick={registration}>Register</Link>

        </div>
    );
}
export default Register;