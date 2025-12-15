// ForgotPasswordCard.jsx
import React from "react";

const ForgotPasswordCard = ({ onReset, onBack }) => {
  return (
    <div className="col-span-1">
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-black text-slate-800 dark:text-slate-100">
        {/* Top logo */}
        <header className="w-full px-3 py-2 text-center">
          <img className="h-16 mx-auto" src="https://aiconnect.cc/assets/images/web/stemrobo_logo.png" alt="" />
        </header>

        {/* Card */}
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-sm bg-white/80 dark:bg-slate-900/70 backdrop-blur  border-slate-200/70 dark:border-slate-800 rounded-2xl">
            <h1 className="text-2xl font-semibold text-center mb-2">
              Forgot Password
            </h1>
            <p className="text-center text-slate-500 dark:text-slate-400 text-sm mb-6">
              Enter your email and we'll send reset instructions.
            </p>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Reset button */}
            <button
              onClick={onReset}
              className="w-full  py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-all"
            >
            <p className="cursor-pointer">  Reset Password</p>
            </button>

            {/* Back to login */}
            <div className="mt-4 text-center">
              <button
                onClick={onBack}
                className="text-sm text-indigo-600 hover:underline"
              >
                Back to Login
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        {/* <footer className="text-center py-6 text-xs text-slate-500 dark:text-slate-400">
          v.1.0.0
        </footer> */}
      </div>
    </div>
  );
};

export default ForgotPasswordCard;
