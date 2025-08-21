import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContex } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import SocialLogin from "../../Components/Social/SocialLogin";


const SignUp = () => {
    const axiosPublic = UseAxiosPublic()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContex);
    const navigate = useNavigate();
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const logUser = result.user;
                console.log(logUser)
                updateUserProfile(data.name, data.photourl)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: data.photourl
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('usr info add to data base')
                                    reset()
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Create user Success",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate("/")
                                }
                            })

                    })
            })

    }
    return (
        <> <Helmet>
            <title>Bistro Boss | signUp</title>
        </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp Now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" {...register("name", { required: true })} className="input" placeholder="Name" />
                                <label className="label">Photo url</label>
                                <input type="text" {...register("photourl", { required: true })} className="input" placeholder="Photo Url" />
                                {errors.photourl && <span className="text-red-600">Photo Url is required</span>}
                                <label className="label">Email</label>
                                <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                                <label className="label">Password</label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/
                                })} className="input" placeholder="Password" />
                                {errors.password?.type == 'required' && <span className="text-red-600">password is required</span>}
                                {errors.password?.type == 'minLength' && <span className="text-red-600">password should be 6 Charecter</span>}
                                {errors.password?.type == 'maxLength' && <span className="text-red-600">password should be less than 20 Charecter</span>}
                                {errors.password?.type == 'pattern' && <span className="text-red-600">password should be one uppercase,one lowercase and one number</span>}
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <input type="submit" value="Sign Up" className="btn btn-neutral mt-4" />
                            </div>
                        </form>
                        <p className="p-4"><small>Already have account?<Link to="/login">SignIn</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;