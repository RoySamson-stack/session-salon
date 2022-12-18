import axios from "axios";
import { useState } from "react";
import "./signup.css"

function Register()
{
   const [id, setId] = useState("");
   const [firstname, setFname] = useState("");
   const [lastname, setLname] = useState("");
   const [password, setPassword] = useState("")

   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8013/save", 
        {
        id: id,
        fname: firstname,
        lname : lastname,
        password : password,
        
        });
          alert("User Registation Successfully");
          setId("");
          setFname("");
          setLname("");
          setPassword("")
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
        <div className="register-container">
     
            <form className="register-form" onSubmit={handleSubmit}> 
            <br></br>      
            <h1>Signup</h1>

            <input type="text" 
             name="id"
             placeholder="id"
            className="input_fields"
             onChange={(event) =>
              {
                  setId(event.target.value);       
              }}
            />

            <input type="text" 
            name="firstname" 
            placeholder="Firstname"
            className="input_fields" 
            onChange={(event) =>
                {
                    setFname(event.target.value);       
                }}
            />

            <input type="text" 
            name="lastname"
            placeholder="lastname"
            className="input_fields"
            onChange={(event) =>
                {
                    setLname(event.target.value);       
                }}           
            />

             
            <input type="password" 
            name="password" 
            placeholder="password"
            className="input_fields"

            onChange={(event) =>
                {
                    setPassword(event.target.value);       
                }}           
            />
          <button type="submit">Signup</button>

    
            </form>     

     
        </div>
    )
}

export default Register;