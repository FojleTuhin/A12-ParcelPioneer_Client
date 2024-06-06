import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(https://i.ibb.co/BB6BQ7f/authentication.png)` }}>
                <div className="lg:flex lg:flex-row-reverse w-[80%] m-auto shadow-2xl shadow-gray-500 py-8 px-4 lg:px-24 gap-20">
                    <div className="lg:w-[50%] flex justify-center items-center">
                       <img src="https://i.ibb.co/ww94K10/authentication1-1.png" alt="" />
                    </div>
                    <div className="lg:w-[50%]">
                        <p className="text-2xl font-bold text-center mt-8 mb-8">Sign Up</p>

                        <form>
                            <div className="w-full mb-4">
                                <label >
                                    <p className="text-[#444444] font-semibold mb-2">Name</p>
                                    <input type="text" name="name" placeholder="Type here" className="p-3 w-full rounded-lg" />
                                </label>
                            </div>

                            <div className="w-full mb-4">
                                <label >
                                    <p className="text-[#444444] font-semibold mb-2">Email</p>
                                    <input type="email" name="email" placeholder="Type here" className="p-3 w-full rounded-lg" />
                                </label>
                            </div>
                            <div className="w-full mb-4">
                                <label >
                                    <p className="text-[#444444] font-semibold mb-2">Photo</p>
                                    <input type="text" name="photo" placeholder="Photo URL" className="p-3 w-full rounded-lg" />
                                </label>
                            </div>
                            <div className="w-full mb-4">
                                <label >
                                    <p className="text-[#444444] font-semibold mb-2">Password</p>
                                    <input type="text" name="password" placeholder="Enter your password" className="p-3 w-full rounded-lg" />
                                </label>
                            </div>

                            <button type="submit" className=" w-full h-12 rounded-lg text-white bg-[#d1a054]">Sign Up</button>

                            <p className="font-medium mt-5 text-[#d1a054] text-center mb-3">Already registered? <Link to='/login'>Go to log in</Link></p>
                            <p className="font-medium  text-center mb-3">Or sign up with</p>
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

export default Signup;