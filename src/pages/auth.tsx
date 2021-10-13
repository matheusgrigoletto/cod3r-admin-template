import React from "react";
import type { NextPage } from "next";

import AuthInput from "~components/Auth/AuthInput/AuthInput";
import { GoogleIcon, WarningIcon } from "~components/icons/icons";

type AuthMode = "signin" | "signup";

const AuthPage: NextPage = () => {
  const [mode, setMode] = React.useState<AuthMode>("signin");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string>("");

  const showError = (message: string, timeInSeconds = 5) => {
    setError(message);
    setTimeout(() => setError(""), timeInSeconds * 1000);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    showError("Ops!");
  };

  // const imgUrl = 'https://source.unsplash.com/random';
  const imgUrl =
    "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80";

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="h-full hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src={imgUrl}
          alt="background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-xl font-bold mb-5">
          {mode === "signin"
            ? "Login with your account"
            : "Sign up on the platform"}
        </h1>

        {error && (
          <div className="bg-red-400 text-white py-3 px-5 my-2 rounded-lg flex items-center">
            {WarningIcon()}
            <span className="ml-3 text-sm">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <AuthInput
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={setEmail}
            required={true}
          />
          <AuthInput
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <button
            type="submit"
            className={`
            w-full bg-indigo-500 hover:bg-indigo-400
            text-white rounded-lg px-4 py-3 mt-6
            transition-colors
          `}
          >
            {mode === "signin" ? "Sign in" : "Sign up"}
          </button>
        </form>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          type="button"
          className={`
            w-full bg-white hover:bg-red-700
            text-red-600 hover:text-white
            rounded-lg px-4 py-3 mt-0
            flex items-center justify-center
            border border-red-500 hover:border-red-700 transition-colors
          `}
        >
          {GoogleIcon}
          <span className="ml-2 inline-block">Login with Google</span>
        </button>
        <p className="mt-8">
          {mode === "signin" ? (
            <button
              type="button"
              onClick={() => setMode("signup")}
              className={`
                text-blue-500 hover:text-blue-700 font-semibold
              `}
            >
              Create an account
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setMode("signin")}
              className={`
                text-blue-500 hover:text-blue-700 font-semibold
              `}
            >
              Enter your credentials
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
