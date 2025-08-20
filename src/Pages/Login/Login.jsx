import React, { useContext, useEffect, useState } from 'react';
import { Link, replace, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { AuthContex } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
   
    const [disabled, setDisable] = useState(true);
    const { signInUser } = useContext(AuthContex);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || "/";
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign In Success",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from,{replace:true})
            })
    }
    const handleValidateCaptcha = (e) => {
        const userCaptchaValue = e.target.value;
        if (validateCaptcha(userCaptchaValue)) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
                    <form onSubmit={handleLoginSubmit} className="card-body">
                        <div className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div>
                                <label className="label"> <LoadCanvasTemplate /></label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" className="input" placeholder="type the captcha" />
                            </div>
                            <input disabled={disabled} type="submit" className='btn btn-neutral mt-4' value="Login" name="" id="" />
                        </div>
                    </form>
                    <p><small>New Here? <Link to='/signup'>Create an account</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;