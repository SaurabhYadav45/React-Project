import React from "react";
import  {useState} from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import  {Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const LoginForm = (props) =>{

    const navigate = useNavigate();
    const setIsLoggedIn = props.setIsLoggedIn;
    const[showPassword,setShowPassword] = useState(false);

    const[formData, setFormData] = useState({
        email : "",
        password : "",
    });

    function changeHandler(event){
         const {name, type, value, } = event.target;
         setFormData((prev) => {return {...prev, [name]:value } });
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login Success");
        navigate("/dashboard");
    }

    return(
        <div>
            <form onSubmit={submitHandler}> 
                <label htmlFor="email">
                    <p>Email Address</p>
                    <sup>*</sup>
                </label>
                <input
                 type="email"
                 name="email"
                 required 
                 value={formData.email}
                 placeholder="Enter email address" 
                 onChange={changeHandler}
                    />

                <label htmlFor="password">
                    <p>Password</p>
                    <sup>*</sup>
                </label>
                <input
                 type= {showPassword ? "text" : "password"}
                 name="password"
                 required 
                 value={formData.password}
                 placeholder="Enter Passord" 
                 onChange={changeHandler}
                />

                <span onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                    }
                </span>

                <Link to ="#">
                    <p>Forget Password</p>
                </Link>

                <button>Sign in</button>
            </form>
        </div>
    );
}

export default LoginForm;