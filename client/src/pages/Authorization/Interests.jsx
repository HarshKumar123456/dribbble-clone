import React, { useState } from "react";

const Interests = () => {
    const [isInterestFilled,setIsInterestFilled] = useState(false);

    return <>
        <div className="create-profile-container flex flex-col">
            <div className="create-profile-nav-container flex items-center gap-x-4 p-10">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width={92} height={24} viewBox="0 0 356.000000 98.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <metadata>
                        Created by potrace 1.16, written by Peter Selinger 2001-2019
                    </metadata>
                    <g transform="translate(0.000000,98.000000) scale(0.100000,-0.100000)"
                        fill="#ec4899" stroke="none">
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

                <button className="bg-gray-200 rounded-lg px-4 py-2 text-xl font-bold">&lt;</button>
            </div>

            <div className="interests-container flex flex-col items-center px-10 gap-y-10">
                <div className="heading-container flex flex-col items-center gap-y-4">
                    <h2 className="text-3xl font-bold">What brings you to dribbble?</h2>
                    <p className="text-gray-500 font-semibold">Select the options that best describes you. Don't worry, you can explore other options later.</p>
                </div>

                <form className="flex">
                    <div className="interest-container flex">
                        <img src="https://picsum.photos/200" alt="interest-image" />
                    </div>
                    <div className="interest-container flex">
                        <img src="https://picsum.photos/200" alt="interest-image" />
                    </div>
                    <div className="interest-container flex">
                        <img src="https://picsum.photos/200" alt="interest-image" />
                    </div>
                </form>

                <button className={`w-56 mt-10 px-4 py-2 rounded-md ${!isInterestFilled ? "bg-pink-200" : "bg-pink-500"} text-white font-bold`}>
                        Finish
                    </button>
            </div>
        </div>
    </>;
};

export default Interests;