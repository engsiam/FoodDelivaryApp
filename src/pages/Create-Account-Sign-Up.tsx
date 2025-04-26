import React, { useState } from "react";

const SignUp: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSignUp = () => {
    let isValid = true;

    // Validate name
    if (!name.trim()) {
      setNameError("Full name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    // Validate email/phone
    if (!email) {
      setEmailError("Email or phone number is required");
      isValid = false;
    } else if (!validateEmail(email) && !/^\d{10,}$/.test(email)) {
      setEmailError("Please enter a valid email or phone number");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    // Validate confirm password
    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    // Validate terms acceptance
    if (!termsAccepted) {
      setTermsError("You must accept the Terms and Conditions");
      isValid = false;
    } else {
      setTermsError("");
    }

    if (isValid) {
      // Sign up logic would go here
      console.log("Sign up successful");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="relative h-screen w-full max-w-[375px] mx-auto bg-white overflow-hidden">
      {/* Status Bar */}
      <div className="fixed top-0 w-full z-50 bg-black text-white px-4 py-2 flex justify-between items-center max-w-[375px]">
        <span className="text-sm font-medium">9:41</span>
        <div className="flex items-center space-x-2">
          <i className="fas fa-signal"></i>
          <i className="fas fa-wifi"></i>
          <i className="fas fa-battery-full"></i>
        </div>
      </div>

      {/* Header */}
      <div className="fixed top-8 left-0 right-0 z-40 bg-white py-3 px-4 flex items-center max-w-[375px] mx-auto">
        <a
          href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/37c89ac9-1308-460c-b0fd-a3678e70adfd"
          data-readdy="true"
          className="text-gray-800 cursor-pointer"
        >
          <i className="fas fa-arrow-left text-lg"></i>
        </a>
        <h1 className="text-lg font-semibold text-gray-800 mx-auto">Sign Up</h1>
        <div className="w-6"></div> {/* Empty div for balance */}
      </div>

      {/* Main Content */}
      <div className="pt-24 px-6 pb-8 h-full flex flex-col overflow-y-auto">
        {/* Welcome Text */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Create Account
          </h2>
          <p className="text-gray-600">
            Please fill in the details to get started
          </p>
        </div>

        {/* Sign Up Form */}
        <div className="space-y-4 mb-6">
          {/* Full Name Input */}
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div
              className={`relative rounded-xl overflow-hidden ${
                nameError ? "ring-2 ring-red-500" : ""
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="fas fa-user text-gray-400"></i>
              </div>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError) setNameError("");
                }}
                className="block w-full py-3 pl-10 pr-3 bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 border-none text-sm"
                placeholder="Enter your full name"
              />
            </div>
            {nameError && (
              <p className="text-red-500 text-xs mt-1">{nameError}</p>
            )}
          </div>

          {/* Email/Phone Input */}
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email or phone number
            </label>
            <div
              className={`relative rounded-xl overflow-hidden ${
                emailError ? "ring-2 ring-red-500" : ""
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="fas fa-envelope text-gray-400"></i>
              </div>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                className="block w-full py-3 pl-10 pr-3 bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 border-none text-sm"
                placeholder="Enter your email or phone number"
              />
            </div>
            {emailError && (
              <p className="text-red-500 text-xs mt-1">{emailError}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div
              className={`relative rounded-xl overflow-hidden ${
                passwordError ? "ring-2 ring-red-500" : ""
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-400"></i>
              </div>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError("");
                }}
                className="block w-full py-3 pl-10 pr-10 bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 border-none text-sm"
                placeholder="Create a password"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-gray-400 hover:text-gray-500 cursor-pointer focus:outline-none"
                >
                  <i
                    className={`fas ${
                      passwordVisible ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
              </div>
            </div>
            {passwordError && (
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-1">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div
              className={`relative rounded-xl overflow-hidden ${
                confirmPasswordError ? "ring-2 ring-red-500" : ""
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-400"></i>
              </div>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (confirmPasswordError) setConfirmPasswordError("");
                }}
                className="block w-full py-3 pl-10 pr-10 bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 border-none text-sm"
                placeholder="Confirm your password"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="text-gray-400 hover:text-gray-500 cursor-pointer focus:outline-none"
                >
                  <i
                    className={`fas ${
                      confirmPasswordVisible ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
              </div>
            </div>
            {confirmPasswordError && (
              <p className="text-red-500 text-xs mt-1">
                {confirmPasswordError}
              </p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="mt-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={() => {
                    setTermsAccepted(!termsAccepted);
                    if (termsError) setTermsError("");
                  }}
                  className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-green-500 font-medium">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-green-500 font-medium">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>
            {termsError && (
              <p className="text-red-500 text-xs mt-1">{termsError}</p>
            )}
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSignUp}
          className="w-full py-3.5 bg-green-500 text-white font-medium rounded-xl !rounded-button cursor-pointer flex items-center justify-center shadow-sm hover:bg-green-600 transition-colors"
        >
          Create Account
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="px-4 text-sm text-gray-500">Or continue with</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>

        {/* Social Sign Up */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <button className="flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-xl !rounded-button bg-white hover:bg-gray-50 cursor-pointer transition-colors">
            <i className="fab fa-google text-lg"></i>
          </button>
          <button className="flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-xl !rounded-button bg-white hover:bg-gray-50 cursor-pointer transition-colors">
            <i className="fab fa-apple text-lg"></i>
          </button>
          <button className="flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-xl !rounded-button bg-white hover:bg-gray-50 cursor-pointer transition-colors">
            <i className="fab fa-facebook text-lg"></i>
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center mt-auto">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <a
              href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/37c89ac9-1308-460c-b0fd-a3678e70adfd"
              data-readdy="true"
              className="text-green-500 font-medium cursor-pointer"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
