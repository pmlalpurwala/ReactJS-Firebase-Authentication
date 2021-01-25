import React, {useState,useEffect} from 'react'
import './App.css';
import fire from './fire'
import Login from './login'
import Userin from './userIn'
import FirstLogin from './firstlogin'
const App = () =>{

//states
const[user,setUser]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[emailError,setEmailError]=useState('');
const[passwordError,setPassowrdError]=useState('');
const[hasAccount,setHasAccount]=useState('false');
const[firstLogin,setFirstLogin]=useState(false);
const[phonenumber,setPhoneNumber]=useState('');
const[birthplace,setBirthPlace]=useState('');
const[dob,setDob]=useState('');
const[flag,setFlag]=useState(false);

const clearInputs = () =>{
  setEmail('');
  setPassword('');
}

const clearError = () =>{
  setEmailError('');
  setPassowrdError('');

}
const loginFunction = () =>{
  clearError();
  fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err)=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPassowrdError(err.message);
          break;
      }
    });

    const userref = fire.database().ref("usernode");
    userref.on("value",(data)=>{
          let datainfo = data.val();
          // console.log(email)
          // console.log(password);
          for(let i in datainfo)
          {
            if(datainfo[i].email == email && datainfo[i].password == password)
            {
          //     console.log(email)
          // console.log(password);
                   setEmail(datainfo[i].email);
                   setPassword(datainfo[i].password);
                   setBirthPlace(datainfo[i].birthplace);
                   setPhoneNumber(datainfo[i].phonenumber);
                   setDob(datainfo[i].dob); 
            }
          }
    })

    setFlag(true);
};

const signupFunction=()=>{
  clearError();
  fire
   .auth()
   .createUserWithEmailAndPassword(email,password)
   .catch((err)=>{
    switch(err.code){
      case "auth/email-already-in-use":
      case "auth/invalid-email":
        setEmailError(err.message);
        break;
      case "auth/weak-password":
        setPassowrdError(err.message);
        break;
    }
   });

   const userref = fire.database().ref("usernode");
  console.log(email)
  console.log(password);
   let obj = {email,password,phonenumber,birthplace,dob};
  userref.push(obj);
  setFlag(true);
};

// const inputData = () =>{
//   const userref = fire.database().ref("usernode");
//   console.log(email)
//   console.log(password);
//    let obj = {email,password,phonenumber,birthplace,dob};
//   userref.push(obj);
// }

const logoutFunction = () =>{
  fire.auth().signOut();
  setFlag(false);
  clearInputs();
};

const authListener = () =>{
  fire.auth().onAuthStateChanged((user)=>{
    if(user){
      //clearInputs(); 
      setUser(user);
    }
    else{
      setUser("");
    }
  });
}
 useEffect(()=>{
   authListener();
 },[]);

 if(firstLogin === true)
 {
   return(
     <div className="App">
          <FirstLogin  signupFunction={signupFunction}  birthplace={birthplace} setBirthPlace={setBirthPlace} phonenumber={phonenumber} setPhoneNumber={setPhoneNumber} dob={dob} setDob={setDob} logoutFunction={logoutFunction} firstLogin={firstLogin} setFirstLogin={setFirstLogin}  ></FirstLogin>
     </div>
   )
 }
 else{
      return(  
          <div className="App">
           
            {(user && flag )? (
                <Userin email={email}  password={password} birthplace={birthplace} phonenumber={phonenumber} dob={dob}  logoutFunction={logoutFunction}></Userin>
            ):(
              <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} loginFunction={loginFunction} signupFunction = {signupFunction} hasAccount = {hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} firstLogin={firstLogin} setFirstLogin={setFirstLogin}></Login>
            )}
          
          </div>

            );  
    }
};

export default App;