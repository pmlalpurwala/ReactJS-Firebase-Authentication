import React , {useState} from 'react';
import DatePicker from 'react-date-picker';

const Firstlogin = (props) =>{

    const {signupFunction, logoutFunction , firstLogin , setFirstLogin,birthplace,setBirthPlace,phonenumber,setPhoneNumber,dob,setDob} = props

    const logoutandend = () =>{
       // inputData();
       
       signupFunction();
        logoutFunction();
        setFirstLogin(false);
    }
    const [value, onChange] = useState(new Date());

    return(
        <section className="login">
      
            <div className="loginContainer">


            <label>Enter your birthplace </label>
               <input 
                 type="text"
                 autoFocus
                 required
                 value={birthplace}
                 onChange={(e)=>setBirthPlace(e.target.value)}
                 />
                 
         
                 
            <label>Enter your Phone</label>
               <input 
                 type="text"
                 autoFocus
                 required
                 value={phonenumber}
                 onChange={(e)=>setPhoneNumber(e.target.value)}
             />


            <label>Enter your Date of birth</label>
            <input 
             type="date"
             autoFocus
             required
             value={dob}
                 onChange={(e)=>setDob(e.target.value)}
                 />

            <div className="btnContainer">
             <button onClick={logoutandend}>Submit and Logout </button>
            </div>
            <label>Login again to view details</label>
         </div>

            {/* <div className="btnContainer">
                <button onClick={logoutandend}>Logout</button>
            </div> */}
        </section>
    )


}

export default Firstlogin;
