import { AuthContext } from "@/Firebase/FirebaseProvider";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useUserRole from "@/hooks/useUserRole";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {


    const { signIn, googleLogin } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const [, refetch]= useUserRole();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {

                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photo: result.user?.photoURL,
                     role: 'regularUser'
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Successfully login",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(location?.state ? location.state : '/')

                    })
            })
            .catch(error => {
                toast.error('Something wrong')
            })

            refetch();
    }




    const handleLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;


        signIn(email, password)
            .then(result => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Login",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Password or email don't match!",

                });
            })


            refetch();

    }



    return (
        <div>
            <Helmet>
                <title>
                    ParcelPioneer || Login
                </title>
            </Helmet>
            <div className="hero min-h-screen pt-12" style={{ backgroundImage: `url(https://i.ibb.co/BB6BQ7f/authentication.png)` }}>
                <div className="lg:flex w-[80%] m-auto items-center justify-center shadow-2xl shadow-gray-500 py-8 px-4 lg:px-24 gap-20">
                    <div className="lg:w-[50%] flex justify-center items-center">
                        <img src="https://i.ibb.co/ww94K10/authentication1-1.png" alt="" />
                    </div>
                    <div className="lg:w-[50%]">
                        <p className="text-2xl font-bold text-center my-8">Login</p>

                        <form onSubmit={handleLogIn}>

                            <div className="w-full mb-4">
                                <label >
                                    <p className="text-[#444444] font-semibold mb-2">Email</p>
                                    <input type="email" name="email" required placeholder="Type here" className="p-3 w-full rounded-lg" />
                                </label>
                            </div>
                            <div className="w-full mb-4">
                                <label >
                                    <p className="text-[#444444] font-semibold mb-2">Password</p>
                                    <input type="text" name="password" required placeholder="Enter your password" className="p-3 w-full rounded-lg" />
                                </label>
                            </div>

                            <button type="submit" className=" w-full h-12 rounded-lg text-white bg-[#d1a054]">Sign In</button>




                        </form>
                        <p className="font-medium mt-5 text-[#d1a054] text-center mb-3">New here? <Link to='/signUp'>Create a New Account</Link></p>
                        <p className="font-medium  text-center mb-3">Or sign in with</p>
                        <div className="flex justify-evenly">

                            <button><FaGoogle onClick={handleGoogleLogin} className="text-2xl" /></button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;