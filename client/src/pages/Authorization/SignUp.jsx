import React, { useState } from "react";
import { Link } from "react-router-dom";

import signUpFormImage from "../../assets/images/sign-up.jpg";

const SignUp = () => {
    const [errorText, setErrorText] = useState("This is Error text....");

    return <>
        <div className="sign-up-form-container flex">
            <div className="sign-up-form-image-container">
                <img src={signUpFormImage} alt="image" className="h-screen hidden md:block" />
            </div>


            <div className="sign-up-form-container flex flex-col gap-y-4 p-4 justify-center items-center">
                <p className="text-nowrap self-end">Already a member ? <Link to={"/login"} className="text-blue-900">Sign in</Link></p>

                <form className="sign-up-form flex flex-col gap-y-4 w-1/2">
                    <div className="sign-up-form-heading-error-text-container flex flex-col gap-y-4">
                        <h1 className="text-3xl font-bold">Sign up to Dribbble</h1>

                        <div className={`error-text-container flex items-center gap-x-2`}>
                            <div className="border-2 rounded-full border-red-400"></div>
                            <p className="error-text text-red-400 font-semibold">
                                {`${errorText}`}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between">
                        <div className="input-field flex flex-col md:w-[48%] w-[100%]">
                            <label htmlFor="name" className="flex font-bold">
                                <svg
                                    className={``}
                                    width={24}
                                    version={1.0}
                                    id="katman_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 841.89 595.28"
                                    style={{ enableBackground: "new 0 0 841.89 595.28" }}
                                    xmlSpace="preserve"
                                >
                                    <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{ __html: "\n\t.st0{fill:#FF5B19;}\n" }}
                                    />
                                    <path
                                        className="st0"
                                        d="M688.83,499.36c-1.82,10.15-7.09,19.35-14.92,26.05c-7.94,7.1-18.26,10.93-28.91,10.74h-447.5
	c-10.65,0.2-20.98-3.63-28.91-10.74c-7.83-6.7-13.1-15.91-14.92-26.05c-1.86-10.33-0.22-20.99,4.64-30.3L382.08,81.23
	c5.1-9.43,13.61-16.55,23.8-19.89c9.98-3.38,20.79-3.38,30.76,0c10.16,3.36,18.65,10.48,23.73,19.89l223.75,387.83
	C689.01,478.36,690.67,489.02,688.83,499.36z M390.96,401.44c-16.66,16.74-16.6,43.81,0.14,60.47c16.74,16.66,43.81,16.6,60.47-0.14
	c16.66-16.74,16.6-43.81-0.14-60.47c-8.02-7.98-18.87-12.46-30.18-12.45C409.86,388.67,398.89,393.23,390.96,401.44z M387.65,361.66
	c0.1,2.7,1.3,5.24,3.31,7.03c2.05,2.15,4.92,3.33,7.89,3.25h44.75c2.99,0.06,5.87-1.11,7.96-3.25c2.01-1.79,3.18-4.34,3.25-7.03
	l7.43-126.76c0.2-3.3-0.98-6.54-3.25-8.95c-2.06-2.13-4.92-3.31-7.89-3.25h-59.67c-2.99-0.06-5.87,1.11-7.96,3.25
	c-2.25,2.39-3.43,5.6-3.25,8.88L387.65,361.66z"
                                    />
                                </svg>
                                Name
                            </label>
                            <input type="text" name="name" id="name" className={`outline-none border bg-gray-100 rounded-lg py-2 px-4`} />
                        </div>
                        <div className="input-field flex flex-col md:w-[48%] w-[100%]">
                            <label htmlFor="username" className="flex font-bold"> <svg
                                className={``}
                                width={24}
                                version={1.0}
                                id="katman_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 841.89 595.28"
                                style={{ enableBackground: "new 0 0 841.89 595.28" }}
                                xmlSpace="preserve"
                            >
                                <style
                                    type="text/css"
                                    dangerouslySetInnerHTML={{ __html: "\n\t.st0{fill:#FF5B19;}\n" }}
                                />
                                <path
                                    className="st0"
                                    d="M688.83,499.36c-1.82,10.15-7.09,19.35-14.92,26.05c-7.94,7.1-18.26,10.93-28.91,10.74h-447.5
	c-10.65,0.2-20.98-3.63-28.91-10.74c-7.83-6.7-13.1-15.91-14.92-26.05c-1.86-10.33-0.22-20.99,4.64-30.3L382.08,81.23
	c5.1-9.43,13.61-16.55,23.8-19.89c9.98-3.38,20.79-3.38,30.76,0c10.16,3.36,18.65,10.48,23.73,19.89l223.75,387.83
	C689.01,478.36,690.67,489.02,688.83,499.36z M390.96,401.44c-16.66,16.74-16.6,43.81,0.14,60.47c16.74,16.66,43.81,16.6,60.47-0.14
	c16.66-16.74,16.6-43.81-0.14-60.47c-8.02-7.98-18.87-12.46-30.18-12.45C409.86,388.67,398.89,393.23,390.96,401.44z M387.65,361.66
	c0.1,2.7,1.3,5.24,3.31,7.03c2.05,2.15,4.92,3.33,7.89,3.25h44.75c2.99,0.06,5.87-1.11,7.96-3.25c2.01-1.79,3.18-4.34,3.25-7.03
	l7.43-126.76c0.2-3.3-0.98-6.54-3.25-8.95c-2.06-2.13-4.92-3.31-7.89-3.25h-59.67c-2.99-0.06-5.87,1.11-7.96,3.25
	c-2.25,2.39-3.43,5.6-3.25,8.88L387.65,361.66z"
                                />
                            </svg>Username</label>
                            <input type="text" name="username" id="username" className={`outline-none border bg-gray-100 rounded-lg py-2 px-4`} />
                        </div>
                    </div>

                    <div className="input-field flex flex-col">
                        <label htmlFor="email" className="flex font-bold"> <svg
                            className={``}
                            width={24}
                            version={1.0}
                            id="katman_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 841.89 595.28"
                            style={{ enableBackground: "new 0 0 841.89 595.28" }}
                            xmlSpace="preserve"
                        >
                            <style
                                type="text/css"
                                dangerouslySetInnerHTML={{ __html: "\n\t.st0{fill:#FF5B19;}\n" }}
                            />
                            <path
                                className="st0"
                                d="M688.83,499.36c-1.82,10.15-7.09,19.35-14.92,26.05c-7.94,7.1-18.26,10.93-28.91,10.74h-447.5
	c-10.65,0.2-20.98-3.63-28.91-10.74c-7.83-6.7-13.1-15.91-14.92-26.05c-1.86-10.33-0.22-20.99,4.64-30.3L382.08,81.23
	c5.1-9.43,13.61-16.55,23.8-19.89c9.98-3.38,20.79-3.38,30.76,0c10.16,3.36,18.65,10.48,23.73,19.89l223.75,387.83
	C689.01,478.36,690.67,489.02,688.83,499.36z M390.96,401.44c-16.66,16.74-16.6,43.81,0.14,60.47c16.74,16.66,43.81,16.6,60.47-0.14
	c16.66-16.74,16.6-43.81-0.14-60.47c-8.02-7.98-18.87-12.46-30.18-12.45C409.86,388.67,398.89,393.23,390.96,401.44z M387.65,361.66
	c0.1,2.7,1.3,5.24,3.31,7.03c2.05,2.15,4.92,3.33,7.89,3.25h44.75c2.99,0.06,5.87-1.11,7.96-3.25c2.01-1.79,3.18-4.34,3.25-7.03
	l7.43-126.76c0.2-3.3-0.98-6.54-3.25-8.95c-2.06-2.13-4.92-3.31-7.89-3.25h-59.67c-2.99-0.06-5.87,1.11-7.96,3.25
	c-2.25,2.39-3.43,5.6-3.25,8.88L387.65,361.66z"
                            />
                        </svg>Email</label>
                        <input type="email" name="email" id="email" className={`outline-none border bg-gray-100 rounded-lg py-2 px-4`} />
                    </div>
                    <div className="input-field flex flex-col">
                        <label htmlFor="password" className="flex font-bold"> <svg
                            className={``}
                            width={24}
                            version={1.0}
                            id="katman_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 841.89 595.28"
                            style={{ enableBackground: "new 0 0 841.89 595.28" }}
                            xmlSpace="preserve"
                        >
                            <style
                                type="text/css"
                                dangerouslySetInnerHTML={{ __html: "\n\t.st0{fill:#FF5B19;}\n" }}
                            />
                            <path
                                className="st0"
                                d="M688.83,499.36c-1.82,10.15-7.09,19.35-14.92,26.05c-7.94,7.1-18.26,10.93-28.91,10.74h-447.5
	c-10.65,0.2-20.98-3.63-28.91-10.74c-7.83-6.7-13.1-15.91-14.92-26.05c-1.86-10.33-0.22-20.99,4.64-30.3L382.08,81.23
	c5.1-9.43,13.61-16.55,23.8-19.89c9.98-3.38,20.79-3.38,30.76,0c10.16,3.36,18.65,10.48,23.73,19.89l223.75,387.83
	C689.01,478.36,690.67,489.02,688.83,499.36z M390.96,401.44c-16.66,16.74-16.6,43.81,0.14,60.47c16.74,16.66,43.81,16.6,60.47-0.14
	c16.66-16.74,16.6-43.81-0.14-60.47c-8.02-7.98-18.87-12.46-30.18-12.45C409.86,388.67,398.89,393.23,390.96,401.44z M387.65,361.66
	c0.1,2.7,1.3,5.24,3.31,7.03c2.05,2.15,4.92,3.33,7.89,3.25h44.75c2.99,0.06,5.87-1.11,7.96-3.25c2.01-1.79,3.18-4.34,3.25-7.03
	l7.43-126.76c0.2-3.3-0.98-6.54-3.25-8.95c-2.06-2.13-4.92-3.31-7.89-3.25h-59.67c-2.99-0.06-5.87,1.11-7.96,3.25
	c-2.25,2.39-3.43,5.6-3.25,8.88L387.65,361.66z"
                            />
                        </svg>Password</label>
                        <input type="password" name="password" id="password" className={`outline-none border bg-gray-100 rounded-lg py-2 px-4`} />
                    </div>

                    <div className="checkbox-input-field flex gap-x-2">
                        <input type="checkbox" name="policy" id="policy" className="h-8 w-10" />
                        <p className="font-semibold text-gray-500">Creating an account means you're okay with our <Link className="text-blue-900" to={"/terms-of-service"}>Terms of Service </Link>, <Link className="text-blue-900" to={"/privacy-policy"}>Privacy Policy </Link>, and our default <Link className="text-blue-900" to={"/notification-settings"}>Notification Settings </Link>.</p>
                    </div>

                    <button className="w-56 px-4 py-2 rounded-md bg-pink-500 text-white font-bold">
                        Create Account
                    </button>
                </form>


            </div>


        </div>
    </>;
};

export default SignUp;