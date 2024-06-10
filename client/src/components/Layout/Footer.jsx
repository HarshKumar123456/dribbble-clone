import React from "react";

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-container bg-gray-100 flex flex-wrap md:flex-nowrap gap-6 p-10 md:gap-8">
                    {/* Logo, Address, Social Media Links container Starts here */}
                    <div className="logo-address-social-media-links-container flex flex-col gap-y-2 w-80">
                        <div className="footer-logo">
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
                        </div>

                        <div className="footer-tagline font-semibold text-gray-600">
                            Dribble is the world's leading
                            community for creatives to share, grow,
                            and get hired.
                        </div>

                        <div className="footer-social-media-icons-container mt-4 flex gap-x-5">
                            <a href="http://github.com/harshkumar123456" className="footer-social-media-icon dribbble">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4"
                                    viewBox="0 0 1000 1000"
                                >
                                    <path d="M0 500c0-90.667 22.334-174.333 67-251 44.667-76.667 105.334-137.333 182-182C325.667 22.333 409.334 0 500 0c90.667 0 174.334 22.333 251 67 76.667 44.667 137.334 105.333 182 182 44.667 76.667 67 160.333 67 251s-22.333 174.333-67 251c-44.666 76.667-105.333 137.333-182 182-76.666 44.667-160.333 67-251 67-90.666 0-174.333-22.333-251-67-76.666-44.667-137.333-105.333-182-182C22.334 674.333 0 590.667 0 500zm83 0c0 104 35 195.667 105 275 32-62.667 82.667-122.333 152-179 69.334-56.667 137-92.333 203-107-10-23.333-19.666-44.333-29-63-114.666 36.667-238.666 55-372 55-26 0-45.333-.333-58-1 0 2.667-.166 6-.5 10-.333 4-.5 7.333-.5 10zm13-103c14.667 1.333 36.334 2 65 2 111.334 0 217-15 317-45-50.666-90-106.333-165-167-225-52.666 26.667-97.833 63.667-135.5 111-37.666 47.333-64.166 99.667-79.5 157zm149 432c75.334 58.667 160.334 88 255 88 49.334 0 98.334-9.333 147-28-13.333-114-39.333-224.333-78-331-61.333 13.333-123.166 47-185.5 101C321.167 713 275 769.667 245 829zM398 97c58.667 60.667 113 136.333 163 227 90.667-38 159-86.333 205-145-77.333-64-166-96-266-96-34 0-68 4.667-102 14zm199 298c10 21.333 21.334 48.333 34 81 49.334-4.667 103-7 161-7 41.334 0 82.334 1 123 3-5.333-90.667-38-171.333-98-242-43.333 64.667-116.666 119.667-220 165zm59 151c34 98.667 57 200 69 304 52.667-34 95.667-77.667 129-131 33.334-53.333 53.334-111 60-173-48.666-3.333-93-5-133-5-36.666 0-78.333 1.667-125 5z" />
                                </svg>

                            </a>

                            <a href="http://github.com/harshkumar123456" className="footer-social-media-icon twitter">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-labelledby="axbhkkp5s9pq0iv83kzy4iwgnktaex5"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    className="w-4"
                                >
                                    <title id="axbhkkp5s9pq0iv83kzy4iwgnktaex5">Twitter icon</title>
                                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                                </svg>
                            </a>

                            <a href="http://github.com/harshkumar123456" className="footer-social-media-icon facebook">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-labelledby="an9clv6tp53x3tpzhm0aca1dowc035a0"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    className="w-4"
                                >
                                    <title id="an9clv6tp53x3tpzhm0aca1dowc035a0">Facebook icon</title>
                                    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                                </svg>

                            </a>

                            <a href="http://github.com/harshkumar123456" className="footer-social-media-icon instagram">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="1.414"
                                    role="img"
                                    className="w-4"
                                >
                                    <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z" />
                                </svg>
                            </a>

                            <a href="http://github.com/harshkumar123456" className="footer-social-media-icon pinterest">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-labelledby="afzbub7iuokx3pjn4fy6vfbl0bamhd5p"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    className="w-4"
                                >
                                    <title id="afzbub7iuokx3pjn4fy6vfbl0bamhd5p">Pinterest icon</title>
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                                </svg>

                            </a>


                        </div>
                    </div>
                    {/* Logo, Address, Social Media Links container Ends here */}


                    {/* For Designers Links container Starts here */}
                    <div className="footer-links-container flex flex-col gap-y-2">
                        <div className="footer-link font-bold">For Designers</div>
                        <div className="footer-link font-medium text-gray-600">Go Pro! </div>
                        <div className="footer-link font-medium text-gray-600">Explore design work </div>
                        <div className="footer-link font-medium text-gray-600">Design blog </div>
                        <div className="footer-link font-medium text-gray-600">Overtime podcast </div>
                        <div className="footer-link font-medium text-gray-600">Playoffs </div>
                        <div className="footer-link font-medium text-gray-600">Weekly Warm-up </div>
                        <div className="footer-link font-medium text-gray-600">Refer a Friend </div>
                        <div className="footer-link font-medium text-gray-600">Code of conduct</div>
                    </div>
                    {/* For Designers Links container Ends here */}


                    {/* Hire Designers Links container Starts here */}
                    <div className="footer-links-container flex flex-col gap-y-2">
                        <div className="footer-link font-bold">Hire Designers</div>
                        <div className="footer-link font-medium text-gray-600">Post a job opening </div>
                        <div className="footer-link font-medium text-gray-600">Post a freelance project </div>
                        <div className="footer-link font-medium text-gray-600">Search for designers</div>

                        <div className="footer-link font-bold mt-2">Brands</div>
                        <div className="footer-link font-medium text-gray-600">Advertise with us</div>
                    </div>
                    {/* Hire Designers Links container Ends here */}

                    {/* Company Links container Starts here */}
                    <div className="footer-links-container flex flex-col gap-y-2">
                        <div className="footer-link font-bold">Company</div>
                        <div className="footer-link font-medium text-gray-600">About </div>
                        <div className="footer-link font-medium text-gray-600">Careers </div>
                        <div className="footer-link font-medium text-gray-600">Support </div>
                        <div className="footer-link font-medium text-gray-600">Media kit </div>
                        <div className="footer-link font-medium text-gray-600">Testimonials </div>
                        <div className="footer-link font-medium text-gray-600">API </div>
                        <div className="footer-link font-medium text-gray-600">Terms of service </div>
                        <div className="footer-link font-medium text-gray-600">Privacy policy </div>
                        <div className="footer-link font-medium text-gray-600">Cookie policy</div>
                    </div>
                    {/* Company Links container Ends here */}


                    {/* Directories Links container Starts here */}
                    <div className="footer-links-container flex flex-col gap-y-2">
                        <div className="footer-link font-bold">Directories</div>
                        <div className="footer-link font-medium text-gray-600">Design jons </div>
                        <div className="footer-link font-medium text-gray-600">Designers for hire </div>
                        <div className="footer-link font-medium text-gray-600">Freelance designers for hire </div>
                        <div className="footer-link font-medium text-gray-600">Tags </div>
                        <div className="footer-link font-medium text-gray-600">Places </div>

                        <div className="footer-link font-bold mt-2">Design assets</div>
                        <div className="footer-link font-medium text-gray-600">Dribbble Marketplace </div>
                        <div className="footer-link font-medium text-gray-600">Creative Market </div>
                        <div className="footer-link font-medium text-gray-600">Fontspring </div>
                        <div className="footer-link font-medium text-gray-600">Font Squirrel</div>
                    </div>
                    {/* Directories Links container Ends here */}


                    {/* Directories Links container Starts here */}
                    <div className="footer-links-container flex flex-col gap-y-2">
                        <div className="footer-link font-bold">Design Resources</div>
                        <div className="footer-link font-medium text-gray-600">Freelancing </div>
                        <div className="footer-link font-medium text-gray-600">Design Hiring </div>
                        <div className="footer-link font-medium text-gray-600">Desing Portfolio </div>
                        <div className="footer-link font-medium text-gray-600">Design Education</div>
                        <div className="footer-link font-medium text-gray-600">Creative Process </div>
                        <div className="footer-link font-medium text-gray-600">Design Industry Trends </div>
                    </div>
                </div>
                <div className="bg-gray-100 px-10">
                    <div className="footer-copyright-info-container border-t-2 border-gray-400 p-4 flex flex-col md:flex-row justify-between items-center text-gray-600" >
                        <p>
                            &copy; {new Date().getFullYear()} Dribbble. All rights reserved
                        </p>
                        <div className="total-shots-count-container flex gap-x-2">
                            <span className="font-bold text-black-500">20,501,853</span> shots dribbbled
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 bg-pink-500 rounded-full"
                                viewBox="0 0 1000 1000"
                                fill="#b8065e"
                            >
                                <path d="M0 500c0-90.667 22.334-174.333 67-251 44.667-76.667 105.334-137.333 182-182C325.667 22.333 409.334 0 500 0c90.667 0 174.334 22.333 251 67 76.667 44.667 137.334 105.333 182 182 44.667 76.667 67 160.333 67 251s-22.333 174.333-67 251c-44.666 76.667-105.333 137.333-182 182-76.666 44.667-160.333 67-251 67-90.666 0-174.333-22.333-251-67-76.666-44.667-137.333-105.333-182-182C22.334 674.333 0 590.667 0 500zm83 0c0 104 35 195.667 105 275 32-62.667 82.667-122.333 152-179 69.334-56.667 137-92.333 203-107-10-23.333-19.666-44.333-29-63-114.666 36.667-238.666 55-372 55-26 0-45.333-.333-58-1 0 2.667-.166 6-.5 10-.333 4-.5 7.333-.5 10zm13-103c14.667 1.333 36.334 2 65 2 111.334 0 217-15 317-45-50.666-90-106.333-165-167-225-52.666 26.667-97.833 63.667-135.5 111-37.666 47.333-64.166 99.667-79.5 157zm149 432c75.334 58.667 160.334 88 255 88 49.334 0 98.334-9.333 147-28-13.333-114-39.333-224.333-78-331-61.333 13.333-123.166 47-185.5 101C321.167 713 275 769.667 245 829zM398 97c58.667 60.667 113 136.333 163 227 90.667-38 159-86.333 205-145-77.333-64-166-96-266-96-34 0-68 4.667-102 14zm199 298c10 21.333 21.334 48.333 34 81 49.334-4.667 103-7 161-7 41.334 0 82.334 1 123 3-5.333-90.667-38-171.333-98-242-43.333 64.667-116.666 119.667-220 165zm59 151c34 98.667 57 200 69 304 52.667-34 95.667-77.667 129-131 33.334-53.333 53.334-111 60-173-48.666-3.333-93-5-133-5-36.666 0-78.333 1.667-125 5z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
