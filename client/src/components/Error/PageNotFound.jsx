import React from "react";
import Layout from "../Layout/Layout";

import "../../assets/styles/PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {

    return <>
        <Layout>
            <section className="page_404">

                <div className="text-center">
                    <div className="four_zero_four_bg">
                        <h1 className="text-center">404</h1>
                    </div>
                    <div className="contant_box_404">
                        <h3 className="text-2xl">Looks like you're lost</h3>
                        <p className="text-gray-500">The page you are looking for not available...</p>
                        <Link to={"/"} className="link_404 rounded-full">
                            Go to Home
                        </Link>
                    </div>
                </div>

            </section>
        </Layout>
    </>;
};

export default PageNotFound;