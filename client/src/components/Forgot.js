import React from 'react'
import { Link } from 'react-router-dom'
function Forgot() {
  return (
    <div className='App'>


        <div>
         <img src='./images/brn.png'></img>
        </div> 
      <form className='Form1'>
      <p id='password'>Forgot Password?</p>


      <p>Enter your registered e-mail address below to get your password to e-mail.</p>
        
        

       <div >
        <input type='text' placeholder='Email'  id='main' className='name'  ></input>
       
        </div>

        <div className='submit'>
        <button style={{height:'40px',backgroundColor:'gray',color:'white'}}>SUBMIT</button>
        </div>
         
        <div id='back'>
        <button style={{height:'40px',backgroundColor:'grey',color:'white'}}><Link  to="/">Back</Link></button>
        
         </div>


        <div className='brn1'>
            <a href='http://www.brninfotech.com/'>2023 © BRN Infotech Pvt. Ltd.</a>
        </div>

        

        </form>
    </div>
  )
}

export default Forgot