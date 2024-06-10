import React, { useState } from "react";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";

import briefcaseIcon from "../../assets/images/briefcase-icon.jpg";
import profileImage from "../../assets/images/profile-image.jpg";

function Header() {
    const [count, setCount] = useState(1);
    const [sideBarVisible, setSideBarVisible] = useState(false);

    const toastAaJao = () => {
        setCount((prev) => {
            return ++prev;
        })
        toast.success(`Here is your toast no. :  ${count}`);
    };

    const handleHamburgerClick = () => {
        setSideBarVisible(true);
    }

    const handleCrossClick = () => {
        setSideBarVisible(false);
    }

    return (
        <>
            <header>

                {sideBarVisible ?
                    <>
                        {/* SideBar Starts here */}
                        <nav className="h-fit bg-white flex flex-col p-4 pb-64 border border-e-2">
                            {/* Logo and Links container Starts here  */}
                            <div className="logo-links-container p-4 flex flex-col gap-x-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-4xl text-gray-400 tracking-tighter italic">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                            width={92} height={24} viewBox="0 0 356.000000 98.000000"
                                            preserveAspectRatio="xMidYMid meet">
                                            <metadata>
                                                Created by potrace 1.16, written by Peter Selinger 2001-2019
                                            </metadata>
                                            <g transform="translate(0.000000,98.000000) scale(0.100000,-0.100000)"
                                                fill="#000000" stroke="none">
                                                <path d="M358 925 c-14 -8 -37 -36 -49 -62 -21 -42 -24 -64 -26 -188 -2 -77
-3 -142 -3 -145 0 -3 -22 -5 -48 -6 -56 -1 -120 -32 -149 -73 -27 -37 -53
-106 -53 -141 0 -39 27 -117 53 -151 28 -38 97 -69 154 -69 50 0 131 33 140
56 7 20 13 18 58 -21 44 -39 78 -44 124 -20 61 31 118 128 146 249 21 90 24
96 50 96 43 0 52 -21 58 -138 3 -60 12 -125 20 -144 19 -45 62 -78 102 -78 30
0 106 41 113 61 8 19 40 7 72 -26 66 -68 159 -35 220 78 17 32 33 36 39 10 6
-32 62 -93 98 -108 79 -33 165 -4 213 71 16 26 32 62 36 79 3 20 16 38 34 48
40 24 57 21 65 -10 20 -79 75 -162 126 -188 85 -44 210 22 240 127 11 41 17
49 53 72 33 21 38 17 60 -51 21 -64 66 -127 105 -148 94 -48 219 12 251 120
18 62 25 70 58 73 28 3 32 -1 57 -55 64 -142 161 -185 280 -127 49 24 56 26
77 12 68 -43 190 -48 264 -10 42 21 129 105 150 143 6 13 9 30 6 38 -7 21 -33
51 -43 51 -4 0 -24 -25 -45 -55 -20 -31 -56 -69 -80 -85 -36 -26 -52 -30 -108
-30 -37 0 -68 5 -72 11 -4 6 8 25 27 43 19 17 48 48 64 70 26 34 29 46 30 113
0 72 -1 76 -33 104 -27 24 -41 29 -84 29 -111 0 -188 -88 -188 -216 0 -35 5
-75 11 -91 9 -24 7 -30 -11 -45 -36 -29 -87 -23 -122 14 -31 33 -58 88 -58
119 0 10 19 49 43 86 53 83 87 189 94 293 8 109 -2 163 -37 200 -24 26 -35 30
-77 30 -44 0 -54 -4 -80 -33 -58 -64 -95 -251 -74 -376 6 -39 11 -86 11 -105
0 -33 -3 -36 -28 -36 -21 0 -32 7 -40 25 -13 27 -87 85 -110 85 -21 0 -41 -30
-42 -64 0 -35 45 -116 65 -116 35 0 24 -73 -17 -117 -33 -35 -100 -32 -126 5
-50 71 -53 167 -9 262 49 106 77 222 80 328 2 83 2 84 -31 113 -44 40 -82 38
-124 -4 -32 -32 -38 -49 -67 -170 -6 -26 -11 -107 -11 -181 0 -116 -2 -135
-18 -149 -26 -24 -39 -21 -57 13 -17 32 -83 80 -111 80 -20 0 -43 -28 -44 -53
0 -27 36 -93 65 -115 38 -30 31 -75 -18 -130 -28 -30 -86 -30 -114 1 -33 36
-43 63 -50 130 -5 56 -2 69 26 127 70 144 110 365 77 428 -20 38 -43 52 -89
52 -84 0 -127 -116 -132 -357 -2 -83 -6 -157 -10 -162 -3 -6 -15 -15 -25 -21
-16 -8 -22 -4 -42 31 -50 89 -148 93 -148 7 0 -20 33 -80 74 -134 13 -16 -20
-90 -48 -110 -35 -24 -81 -18 -110 16 -56 67 -60 159 -13 268 83 189 108 357
64 423 -20 29 -29 34 -69 37 -43 3 -49 0 -74 -32 -48 -60 -63 -139 -64 -328 0
-149 -3 -174 -24 -237 -32 -94 -69 -143 -104 -139 -34 4 -39 27 -41 170 -1
124 -11 158 -43 158 -13 0 -29 -4 -36 -8 -19 -13 -32 -70 -32 -145 0 -93 -45
-177 -95 -177 -40 0 -45 17 -45 156 0 131 0 132 -26 149 -15 9 -45 20 -68 22
-25 3 -56 17 -79 35 -41 32 -84 39 -98 17 -5 -8 -9 -38 -9 -68 0 -60 -18 -181
-30 -196 -4 -5 -10 -22 -13 -36 -10 -40 -45 -79 -72 -79 -39 0 -82 87 -57 116
9 9 50 144 71 227 15 65 14 243 -3 291 -21 62 -67 106 -107 106 -19 -1 -46 -7
-61 -15z m2538 -111 c4 -20 4 -67 0 -105 -9 -103 -71 -259 -96 -244 -6 4 -10
65 -10 139 0 173 23 246 76 246 19 0 24 -7 30 -36z m-2456 11 c16 -19 16 -284
1 -312 -5 -10 -12 -31 -16 -46 -4 -19 -11 -27 -22 -25 -22 4 -42 99 -42 207
-1 144 36 227 79 176z m2788 -367 c16 -16 15 -63 -2 -97 -15 -29 -80 -91 -95
-91 -25 0 -28 96 -5 145 22 47 76 69 102 43z m-2941 -35 c11 -10 31 -50 44
-90 21 -65 22 -74 9 -99 -20 -37 -67 -64 -113 -64 -105 0 -151 167 -67 243 36
32 97 37 127 10z"/>
                                                <path d="M1060 720 c-31 -31 -30 -63 3 -97 29 -32 70 -30 97 4 25 32 21 79 -7
101 -25 18 -70 15 -93 -8z"/>
                                            </g>
                                        </svg>
                                    </h2>
                                    <h2 className="text-2xl" onClick={handleCrossClick}>
                                        X
                                    </h2>
                                </div>

                                {/* Button container for Mobile (Small screen size devices) Starts here  */}
                                <div className="button-container  flex mt-4 pt-4 gap-x-4 justify-end">
                                    <form className="flex items-center bg-slate-100 p-2 rounded-lg text-slate-400 w-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={17}
                                            height={17}
                                            viewBox="0 0 17 17"
                                            fill="none"
                                            role="img"
                                        >
                                            <path
                                                d="M1.5 7.75C1.5 9.4076 2.15848 10.9973 3.33058 12.1694C4.50269 13.3415 6.0924 14 7.75 14C9.4076 14 10.9973 13.3415 12.1694 12.1694C13.3415 10.9973 14 9.4076 14 7.75C14 6.0924 13.3415 4.50269 12.1694 3.33058C10.9973 2.15848 9.4076 1.5 7.75 1.5C6.0924 1.5 4.50269 2.15848 3.33058 3.33058C2.15848 4.50269 1.5 6.0924 1.5 7.75V7.75Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.814 12.8132L15.5 15.4999"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <input
                                            className="bg-slate-100 w-20 outline-none mx-2"
                                            type="text"
                                            name="searchInput"
                                            placeholder="Search"
                                        />
                                    </form>
                                    <button onClick={toastAaJao} className="px-4 py-2 rounded-md bg-pink-500 text-white font-bold">
                                        Upload
                                    </button>
                                    <button onClick={toastAaJao} className="w-16 flex items-center">
                                        <img src={briefcaseIcon} alt="briefcase-image" />
                                    </button>
                                    <button onClick={toastAaJao} className="w-16 flex items-center">
                                        <img src={profileImage} alt="profile-image" />
                                    </button>
                                </div>
                                {/* Button container for Mobile (Small screen size devices) Ends here  */}

                                <div className="link-container mt-4 pt-4 flex flex-col gap-y-4">
                                    <div className="nav-link text-gray-500 font-bold">
                                        <Link to={"/inspiration"} >
                                            Inspiration
                                        </Link>
                                    </div>
                                    <div className="nav-link text-gray-500 font-bold">
                                        <Link to={"/find-work"} >
                                            Find Work
                                        </Link>
                                    </div>
                                    <div className="nav-link text-gray-500 font-bold">
                                        <Link to={"/learn-design"} >
                                            Learn Design
                                        </Link>
                                    </div>
                                    <div className="nav-link text-gray-500 font-bold">
                                        <Link to={"/go-pro"} >
                                            Go Pro
                                        </Link>
                                    </div>
                                    <div className="nav-link text-gray-500 font-bold">
                                        <Link to={"/hire-designers"} >
                                            Hire Designers
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Logo and Links container Ends here  */}


                        </nav>
                        {/* SideBar Ends here */}
                    </>

                    :
                    <>
                        <nav className="flex justify-between items-center p-4 border-b-2">
                            {/* Logo and Links container Starts here  */}
                            <div className="logo-links-container flex items-center gap-x-4">
                                <h2 className="text-4xl text-gray-400 tracking-tighter italic">
                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                        width={92} height={24} viewBox="0 0 356.000000 98.000000"
                                        preserveAspectRatio="xMidYMid meet">
                                        <metadata>
                                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                                        </metadata>
                                        <g transform="translate(0.000000,98.000000) scale(0.100000,-0.100000)"
                                            fill="#000000" stroke="none">
                                            <path d="M358 925 c-14 -8 -37 -36 -49 -62 -21 -42 -24 -64 -26 -188 -2 -77
-3 -142 -3 -145 0 -3 -22 -5 -48 -6 -56 -1 -120 -32 -149 -73 -27 -37 -53
-106 -53 -141 0 -39 27 -117 53 -151 28 -38 97 -69 154 -69 50 0 131 33 140
56 7 20 13 18 58 -21 44 -39 78 -44 124 -20 61 31 118 128 146 249 21 90 24
96 50 96 43 0 52 -21 58 -138 3 -60 12 -125 20 -144 19 -45 62 -78 102 -78 30
0 106 41 113 61 8 19 40 7 72 -26 66 -68 159 -35 220 78 17 32 33 36 39 10 6
-32 62 -93 98 -108 79 -33 165 -4 213 71 16 26 32 62 36 79 3 20 16 38 34 48
40 24 57 21 65 -10 20 -79 75 -162 126 -188 85 -44 210 22 240 127 11 41 17
49 53 72 33 21 38 17 60 -51 21 -64 66 -127 105 -148 94 -48 219 12 251 120
18 62 25 70 58 73 28 3 32 -1 57 -55 64 -142 161 -185 280 -127 49 24 56 26
77 12 68 -43 190 -48 264 -10 42 21 129 105 150 143 6 13 9 30 6 38 -7 21 -33
51 -43 51 -4 0 -24 -25 -45 -55 -20 -31 -56 -69 -80 -85 -36 -26 -52 -30 -108
-30 -37 0 -68 5 -72 11 -4 6 8 25 27 43 19 17 48 48 64 70 26 34 29 46 30 113
0 72 -1 76 -33 104 -27 24 -41 29 -84 29 -111 0 -188 -88 -188 -216 0 -35 5
-75 11 -91 9 -24 7 -30 -11 -45 -36 -29 -87 -23 -122 14 -31 33 -58 88 -58
119 0 10 19 49 43 86 53 83 87 189 94 293 8 109 -2 163 -37 200 -24 26 -35 30
-77 30 -44 0 -54 -4 -80 -33 -58 -64 -95 -251 -74 -376 6 -39 11 -86 11 -105
0 -33 -3 -36 -28 -36 -21 0 -32 7 -40 25 -13 27 -87 85 -110 85 -21 0 -41 -30
-42 -64 0 -35 45 -116 65 -116 35 0 24 -73 -17 -117 -33 -35 -100 -32 -126 5
-50 71 -53 167 -9 262 49 106 77 222 80 328 2 83 2 84 -31 113 -44 40 -82 38
-124 -4 -32 -32 -38 -49 -67 -170 -6 -26 -11 -107 -11 -181 0 -116 -2 -135
-18 -149 -26 -24 -39 -21 -57 13 -17 32 -83 80 -111 80 -20 0 -43 -28 -44 -53
0 -27 36 -93 65 -115 38 -30 31 -75 -18 -130 -28 -30 -86 -30 -114 1 -33 36
-43 63 -50 130 -5 56 -2 69 26 127 70 144 110 365 77 428 -20 38 -43 52 -89
52 -84 0 -127 -116 -132 -357 -2 -83 -6 -157 -10 -162 -3 -6 -15 -15 -25 -21
-16 -8 -22 -4 -42 31 -50 89 -148 93 -148 7 0 -20 33 -80 74 -134 13 -16 -20
-90 -48 -110 -35 -24 -81 -18 -110 16 -56 67 -60 159 -13 268 83 189 108 357
64 423 -20 29 -29 34 -69 37 -43 3 -49 0 -74 -32 -48 -60 -63 -139 -64 -328 0
-149 -3 -174 -24 -237 -32 -94 -69 -143 -104 -139 -34 4 -39 27 -41 170 -1
124 -11 158 -43 158 -13 0 -29 -4 -36 -8 -19 -13 -32 -70 -32 -145 0 -93 -45
-177 -95 -177 -40 0 -45 17 -45 156 0 131 0 132 -26 149 -15 9 -45 20 -68 22
-25 3 -56 17 -79 35 -41 32 -84 39 -98 17 -5 -8 -9 -38 -9 -68 0 -60 -18 -181
-30 -196 -4 -5 -10 -22 -13 -36 -10 -40 -45 -79 -72 -79 -39 0 -82 87 -57 116
9 9 50 144 71 227 15 65 14 243 -3 291 -21 62 -67 106 -107 106 -19 -1 -46 -7
-61 -15z m2538 -111 c4 -20 4 -67 0 -105 -9 -103 -71 -259 -96 -244 -6 4 -10
65 -10 139 0 173 23 246 76 246 19 0 24 -7 30 -36z m-2456 11 c16 -19 16 -284
1 -312 -5 -10 -12 -31 -16 -46 -4 -19 -11 -27 -22 -25 -22 4 -42 99 -42 207
-1 144 36 227 79 176z m2788 -367 c16 -16 15 -63 -2 -97 -15 -29 -80 -91 -95
-91 -25 0 -28 96 -5 145 22 47 76 69 102 43z m-2941 -35 c11 -10 31 -50 44
-90 21 -65 22 -74 9 -99 -20 -37 -67 -64 -113 -64 -105 0 -151 167 -67 243 36
32 97 37 127 10z"/>
                                            <path d="M1060 720 c-31 -31 -30 -63 3 -97 29 -32 70 -30 97 4 25 32 21 79 -7
101 -25 18 -70 15 -93 -8z"/>
                                        </g>
                                    </svg>
                                </h2>
                                <div className="link-container hidden md:flex items-center gap-x-4">
                                    <div className="nav-link text-gray-500 font-bold">
                                        <Link to={"/inspiration"} >
                                            Inspiration
                                        </Link>
                                    </div>
                                    <div className="nav-link text-gray-500 font-bold">
                                        <Link to={"/find-work"} >
                                            Find Work
                                        </Link>
                                    </div>
                                    <div className="nav-link text-gray-500 font-bold">
                                        <Link to={"/learn-design"} >
                                            Learn Design
                                        </Link>
                                    </div>
                                    <div className="nav-link text-gray-500 font-bold">
                                        <Link to={"/go-pro"} >
                                            Go Pro
                                        </Link>
                                    </div>
                                    <div className="nav-link text-gray-500 font-bold">
                                        <Link to={"/hire-designers"} >
                                            Hire Designers
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Logo and Links container Ends here  */}

                            {/* Button container for Tablet (Middle screen size devices) Starts here  */}
                            <div className="button-container hidden md:flex gap-x-5">
                                <form className="flex items-center bg-slate-100 p-2 rounded-lg text-slate-400 w-fit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={17}
                                        height={17}
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        role="img"
                                    >
                                        <path
                                            d="M1.5 7.75C1.5 9.4076 2.15848 10.9973 3.33058 12.1694C4.50269 13.3415 6.0924 14 7.75 14C9.4076 14 10.9973 13.3415 12.1694 12.1694C13.3415 10.9973 14 9.4076 14 7.75C14 6.0924 13.3415 4.50269 12.1694 3.33058C10.9973 2.15848 9.4076 1.5 7.75 1.5C6.0924 1.5 4.50269 2.15848 3.33058 3.33058C2.15848 4.50269 1.5 6.0924 1.5 7.75V7.75Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12.814 12.8132L15.5 15.4999"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <input
                                        className="bg-slate-100 w-20 outline-none mx-2"
                                        type="text"
                                        name="searchInput"
                                        placeholder="Search"
                                    />
                                </form>

                                <button onClick={toastAaJao} className="w-8 flex items-center">
                                    <img src={briefcaseIcon} alt="briefcase-image" />
                                </button>
                                <button onClick={toastAaJao} className="w-9 flex items-center">
                                    <img src={profileImage} alt="profile-image" />
                                </button>
                                <button onClick={toastAaJao} className="px-4 py-2 rounded-md bg-pink-500 text-white font-bold">
                                    Upload
                                </button>
                            </div>
                            {/* Button container for Tablet (Middle screen size devices) Ends here  */}

                            {/* Hamburger Menu for Mobiles (Smaller screen size devices) Starts here */}
                            <div className="hamburger-container md:hidden" onClick={handleHamburgerClick}>
                                <svg
                                    className="block h-4 w-4 fill-current"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </div>
                            {/* Hamburger Menu for Mobiles (Smaller screen size devices) Ends here */}
                        </nav>
                    </>}



            </header>
        </>
    );
};

export default Header;
