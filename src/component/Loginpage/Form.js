import React, { useState } from "react";



function SampleLog({ Login, error }) {
    const [details, setDetails] = useState({ email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div >

            <input type="email" name="email" id="name" placeholder="Enter Username"
             onChange={e => setDetails({...details, email: e.target.value })}
             value={details.email}
            ></input>
            <input type="password" name="password" id="password" placeholder="password"
             onChange={e => setDetails({...details, password: e.target.value })}
             value={details.password}
            ></input>

             <input type="submit" value="Sign in"></input>

            </div>



        </form>
    )





}
export default SampleLog;