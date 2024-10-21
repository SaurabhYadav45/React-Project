import {useState} from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import React from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from "react-router-dom";


const SignUpForm = (props) =>{

    const navigate = useNavigate();
    const setIsLoggedIn = props.setIsLoggedIn;

    const[showCreatePassword, setShowCreatePassword] = useState(false);
    const[showConfirmPassword, setShowConfirmPassword] = useState(false);
    const[formData, setFormData] = useState({
       firstName : "",
       lastName :"",
       email: "",
       createPassword : "",
       confirmPassword : "",
    });

    function changeHandler(event){
          const {name, type, value} = event.target;
          setFormData((prev) => {return {...prev, [name] : value }});
    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.createPassword != formData.confirmPassword){
        toast.error("Password do not match");
        return;
        }
        setIsLoggedIn(true);
        toast.success("Account create");

        navigate("/dashboard");
    }

    return(
        <div>

            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="firstName">
                            <p>First Name</p>
                            <sup>*</sup>
                        </label>
                        <input 
                        type="text"
                        required 
                        placeholder='Enter first name'
                        name='firstName' 
                        value={formData.firstName} 
                        onChange={changeHandler}/>

                        <label htmlFor="lastName">
                            <p>Last Name</p>
                            <sup>*</sup>
                        </label>
                        <input 
                        type="text"
                        required 
                        placeholder='Enter last name'
                        name='lastName' 
                        value={formData.lastName} 
                        onChange={changeHandler}/>
                    </div>
                    
                    <label htmlFor="email">
                        <p>Email Address</p>
                        <sup>*</sup>
                    </label>
                    <input 
                    type="email" 
                    name='email' 
                    required
                    placeholder='Enter email address'
                    value={formData.email} 
                    onChange={changeHandler} />

                    <div>
                        <label htmlFor="createPassword">
                            <p>Create Password <sup>*</sup></p>
                        </label>
                        <input 
                        type= {showCreatePassword ? "text" : "password"}
                        required
                        name='createPassword'
                        placeholder='Enter Password'
                        value={formData.createPassword}
                        onChange={changeHandler}
                        />
                        <span onClick={() =>setShowCreatePassword(!showCreatePassword)}>
                            {
                                showCreatePassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye />)
                            }
                        </span>

                        <label htmlFor="confirmPassword">
                            <p>Confirm Password <sup>*</sup></p>
                            
                        </label>
                        <input 
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        />
                        <span onClick={() =>setShowConfirmPassword(!showConfirmPassword)}>
                            {
                                showConfirmPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye />)
                            }
                        </span>

                    </div>
                    <button>Create Password</button>
                </form>

                

        </div>
    );
}


export default SignUpForm;