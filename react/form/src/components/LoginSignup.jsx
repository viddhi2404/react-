
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import '../App.css'


function LoginSignup() {
   const [showLogin, setShowLogin] = useState(true)
   const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [users, setUsers] = useState([]);
    const [isValid, setIsValid] = useState({
        username: true,
        email: true,
        password: true
    });

    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let isFormInvalid =  Object.values(isValid).some(value => value == false);
        if(isFormInvalid) {
            return;
        }

        setUsers([...users, formData])
        setFormData({
            username: "",
            email: "",
            password: ""
        })
    }

    console.log(users);
    
    const handleBlur = (e) => {
       let username = /^[0-9A-Za-z]{6,16}$/;
       let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

       
       console.log(username.test(formData.username));
       console.log(emailRegex.test(formData.email));
       console.log(passwordRegex.test(formData.password));
       
    
        const regexMap = {
            username: /^[0-9A-Za-z]{6,16}$/,
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/
        };
    
        const fieldName = e.target.name;
        const fieldValue = formData[fieldName];
    
        console.log(fieldName);
        if (!regexMap[fieldName]?.test(fieldValue)) {
            
            setIsValid({...isValid, [fieldName]: false})
        }

        
    }
    
    console.log(isValid);
    const handleFocus = (e) => {
        setIsValid({...isValid, [e.target.name]: true})
    }
  

    

    return (
    <>
        <header>
            <button onClick={() => setShowLogin(false)} className="v1">Login</button>
            <button onClick={() => setShowLogin(true)} className="v1">Signup</button>
        </header>
        {
            showLogin ? <Signup formData={formData} handleOnChange={handleOnChange} handleSubmit={handleSubmit} handleBlur={handleBlur} handleFocus={handleFocus} isValid={isValid}/> : <Login users={users}/> 
        }
    </>
   )
}

export default LoginSignup;
