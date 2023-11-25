import React, { useRef } from 'react';
import { Link } from 'react-router-dom';




function Login() {

  let emailInputRef=useRef();
  let emailSpanRef=useRef();

  let passwordInputRef = useRef();
  let passwordSpanRef = useRef();

    let validateEmail = (inputRef,spanRef)=>{
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let result = emailRegex.test(inputRef.current.value);
      if(result==true){
        spanRef.current.innerHTML ="✅";
      }else{
       
        spanRef.current.innerHTML ="❌";

      }

    }

    let validatePassword = (inputRef,spanRef)=>{
      const password = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      let result = password.test(inputRef.current.value);
      if( result == true){
       spanRef.current.innerHTML ="✅"
      }else{
        spanRef.current.innerHTML ="❌";
      }
    }

  return (
    <div className='App'>

        <div>
         <img src='./images/brn.png'></img>
        </div> 

       
    <form >
     
        <p className='sign'>Sign In</p>

       <div >
        <input ref={emailInputRef} type='text' placeholder='Email'  id='main' className='name' required 
        onChange={()=>{
          validateEmail(emailInputRef,emailSpanRef);
        }}></input>
       <span ref={emailSpanRef}></span>
        </div>
       
        
        <div >
        <input ref={passwordInputRef} id='main' type='password' placeholder='Password'  className='name' required  onChange={()=>{
          validatePassword(passwordInputRef,passwordSpanRef);
        }}></input>
        <span ref={passwordSpanRef}></span>
        </div>
        
         <div className='login'>
        <button style={{height:'40px',backgroundColor:'darkcyan',color:'whitesmoke'}}>LOGIN</button>
        </div>

       

        <div  className='check'>
         <input type='checkbox' ></input>
          <label >Remember</label>
         </div>

         
         <div className='link'>

         <Link to="/Forgot">Forgot Password?</Link>
             
          </div>

         <div className='account'>
          <p>
          <a href='#' className='Sign'>CREATE AN ACCOUNT</a>
          </p>
          </div>

       

          <div className='brn'>
            <a href='http://www.brninfotech.com/'>2023 © BRN Infotech Pvt. Ltd.</a>
        </div>

        

      </form>
      </div>
    
  )
}

export default Login