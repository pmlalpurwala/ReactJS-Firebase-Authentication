import React from 'react';
import Firstlogin from './firstlogin';

const Login = (props) =>{

   const { email, setEmail, password, setPassword ,loginFunction, signupFunction,  hasAccount , setHasAccount ,emailError, passwordError,firstLogin,setFirstLogin} = props;
    const firstLoginAndSignUp = () =>{
        //signupFunction();
        setFirstLogin(true);
    }
    return(
        <section className="login">
           <div className="loginContainer">
               <label>Username</label>
               <input 
                 type="text"
                 autoFocus
                 required
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 />
                 <p className="errorMsg">{emailError}</p>
                 <label>Password</label>
                 <input
                 type="password"
                 required
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 />
                 <p className="errorMsg">{passwordError}</p>
                 <div className="btnContainer">
                     {hasAccount ?(
                         <>
                         <button onClick={loginFunction}>Sign in</button>
                         <p>Don't have an account ?<span onClick={()=> setHasAccount(!hasAccount)}>Sign up</span> </p>
                         </>
                     ):(
                        <>
                        <button onClick={firstLoginAndSignUp}>Sign up</button>
                        <p>Have an account ?<span onClick={()=> setHasAccount(!hasAccount)}>Sign in</span> </p>
                        </>
                     )}
                 </div>
           </div>
        </section>
    )
}

export default Login;