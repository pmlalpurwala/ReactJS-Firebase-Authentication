import React from 'react';

const Userin = ( props) =>{
    const {email,password,birthplace,phonenumber,dob,logoutFunction} = props;
    return(
        <section className="hero">
            <nav>
                <h2>Welcome ,  {email} !</h2>
                <button onClick={logoutFunction}>Logout</button>
            </nav>
            <h1>User information</h1>
            <div className="logindiv">
            
            {/* <p>Email : {email}</p> */}
            <p>Password : {password}</p>
            <p>Birthplace : {birthplace}</p>
            <p>Phone-number : {phonenumber}</p>
            <p>Date of birth : {dob}</p>
            </div>
        </section>
    )


}

export default Userin;
