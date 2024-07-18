import TextPasswordInput from "../components/input/TextPasswordInput";

export default function Login() {
    return (
        <div className="h-screen w-screen ">
            <div className="bg-[url(./src/assets/react4.jpg)] bg-cover bg-center  bg-no-repeat h-screen">
                <div className="mx-6 grid h-full">
                    <div className="backdrop-blur-3xl text-black rounded-3xl border-black border-2 p-8 mx-auto mt-48  h-fit">
                        <h1 className="text-center text-6xl font-bold text-black">
                            Login
                        <div className="mt-1 text-sm text-gray-500">
                            login to access your account
                        </div>
                        </h1>
                        <TextPasswordInput label="Email" hinttext="eg. abcd@gmail.com" type="text"></TextPasswordInput>
                        <TextPasswordInput label="Password" hinttext="Password" type="password"></TextPasswordInput>

                        <div className="remeber-me mt-2">
                            <label htmlFor="remberMe" className="font-normal">
                            <input type="checkbox" />
                                Remember me
                            </label>
                            <a className="ml-24  border-gray-600 hover:border-b-2" href="#">
                                Forgot password?
                            </a>
                        </div>

                        <div className="bg-[#AC0101]  hover:cursor-pointer font-medium w-full mt-5 pl-36 py-1 rounded-2xl">
                            <button>Login</button>
                        </div>

                        <div className="ml-16 mt-1">
                            <p>Don't have account?{" "}<a className="font-medium" href="#">Register</a></p>
                        </div>

                        {/* <div className='h-fit grid grid-flow-row mt-3'>
                                <label className=' font-semibold'>Email / Username:</label>
                                <input type="text" placeholder='Username' className='border-2 rounded-md px-2 outline-none' />
                            </div> */}
                        {/* <div className='h-fit grid grid-flow-row mt-3'>
                                <label className=' font-semibold'>Password:</label>
                                <input type="password" placeholder='Password' className='border-2 rounded-md px-2 outline-none' />
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
