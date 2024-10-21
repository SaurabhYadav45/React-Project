import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/Logo.svg';
import {Link} from "react-router-dom";



const Navbar = (props) =>{

    const isLoggedIn = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;

    return(
        <div className='flex justify-evenly'>
            <Link to="/">
               <img src={logo} />
            </Link>

            <nav >
                <ul className='flex gap-x-4'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/">About</Link>
                    </li>

                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='ml-5 mr-3 gap-x-4'>
                {!isLoggedIn && (
                    <Link to="/login" className='mx-4'>
                       <button >Login</button>
                    </Link>
                )}

                {!isLoggedIn && (
                    <Link to="/signup">
                       <button >Sign Up</button>
                    </Link>
                )}

                {isLoggedIn &&
                    <Link to="/login">
                       <button  
                       onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logout Sucessfully");
                      }}
                       >Log Out</button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="/dashboard">
                       <button >Dashboard</button>
                    </Link>
                }
            </div>

        </div>
    );
}


export default Navbar;