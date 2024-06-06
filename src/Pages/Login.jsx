import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen pt-12" style={{ backgroundImage: `url(https://i.ibb.co/BB6BQ7f/authentication.png)` }}>
                <div className="flex w-[80%] m-auto items-center justify-center shadow-2xl shadow-gray-500 py-8 px-24 gap-20">
                    <div className="w-[50%] flex justify-center items-center">
                        <img src="https://i.ibb.co/ww94K10/authentication1-1.png" alt="" />
                    </div>
                    <div className="w-[50%]">
                        <p className="text-2xl font-bold text-center">Login</p>

                        <form>

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
                            {/* <div className="w-full mb-4">
                                <label >
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} required type="text" placeholder="Type here" className="p-3 w-full rounded-lg mt-2" />

                            </div> */}
                            <button type="submit" className=" w-full h-12 rounded-lg text-white bg-[#d1a054]">Sign In</button>

                            <p className="font-medium mt-5 text-[#d1a054] text-center mb-3">New here? <Link to='/signUp'>Create a New Account</Link></p>
                            <p className="font-medium  text-center mb-3">Or sign in with</p>
                            <div className="flex justify-evenly">

                                <FaGoogle />

                            </div>


                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;