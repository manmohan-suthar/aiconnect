import React from "react";

const AuthCard = ({ onGoogleLogin, onLogin ,onShowForgot}) => {
  return (
    <div className="col-span-1">
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white 
      to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-black text-slate-800 dark:text-slate-100">
        {/* Top logo */}
        <header className="w-full px-3 py-2 text-center">
          <img className="h-16 mx-auto" src="https://aiconnect.cc/assets/images/web/stemrobo_logo.png" alt="" />
        </header>

        {/* Login Card */}
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-sm bg-white/80 dark:bg-slate-900/70 backdrop-blur border-slate-200/70 dark:border-slate-800 rounded-2xl p-3">
            {/* Heading */}
            <h1 className="text-2xl font-semibold text-center mb-2">
              Login to Continue
            </h1>
            <p className="text-center text-slate-500 dark:text-slate-400 text-sm mb-6">
              Access your account securely
            </p>

            {/* Email field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password field */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {/* Forgot password link */}
            <div className=" text-left ">
              <button
                onClick={onShowForgot}
                className="text-sm text-indigo-600  hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login button */}
            <button
              onClick={onLogin}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-6 transition-all"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></span>
              <span className="px-3 text-xs uppercase text-slate-400">or</span>
              <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></span>
            </div>

            {/* Google Login Button */}
            <button
              onClick={onGoogleLogin}
              className="w-full flex items-center justify-center gap-3 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-sm font-medium shadow-sm transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-5 w-5"
              >
                <path
                  fill="#FFC107"
                  d="M43.6 20.5H42V20H24v8h11.3C34 31.7 29.5 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.7 2.9l5.7-5.7C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.6 20-21 0-1.3-.1-2.5-.4-3.5z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3 0 5.7 1.1 7.7 2.9l5.7-5.7C34.6 5.1 29.6 3 24 3 16 3 9 7.6 6.3 14.7z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 45c5.4 0 10.3-1.8 14.1-4.9l-6.5-5.3C29.7 36.4 27 37 24 37c-5.4 0-9.9-3.3-11.6-8l-6.6 5.1C9 40.4 15.9 45 24 45z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20.5H42V20H24v8h11.3c-1 2.9-3 5.1-5.7 6.8l.1.1 6.5 5.3c-.5.3 8.8-5.4 8.8-20.2 0-1.3-.1-2.5-.4-3.5z"
                />
              </svg>
              Login with Google
            </button>
          </div>
        </main>

        {/* Footer */}
        {/* <footer className="text-center py-2 text-xs text-slate-500 dark:text-slate-400">
          v.1.0.0
        </footer> */}
      </div>
    </div>
  );
};

export default AuthCard;
