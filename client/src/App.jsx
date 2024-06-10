import React from "react";
import Layout from "./components/Layout/Layout";

import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <Layout>
        <div className="h-60 flex flex-col items-center gap-y-4 my-24">
          <h1 className="text-4xl">Let's experience the Magic....</h1>
          <Link to={"/sign-up"} className="px-10 py-2 rounded-md bg-pink-500 text-white font-bold text-2xl">
            Sign Up or Login
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default App;
