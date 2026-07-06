import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      <div className="w-1/2 bg-blue-600 flex flex-col justify-center items-center text-white p-12">        {/*left section */}
        <h1 className="text-5xl font-bold mb-4">BankEase</h1>
        <p className="text-xl text-blue-100 text-center max-w-md">
          Secure, Simple and Smart Banking for Everyone.
        </p>
      </div>

      <div className="w-1/2 bg-white flex justify-center items-center"> {/*right section */}
          <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-slate-800">
                Welcome Back
              </h2>
              <p className="text-slate-500 mt-2 mb-8">
                 Login to access your banking dashboard.
              </p>

              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input type="email" id="email" placeholder="Enter your Email" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Login;
