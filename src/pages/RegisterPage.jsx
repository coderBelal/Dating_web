import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    emailOrMobile: "",
    password: "",
    confirmPassword: "",
    profileCreatedBy: "",
  });

  const [isRegistering, setIsRegistering] = useState(false);
  const [errors, setErrors] = useState({});

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });

    // Clear error as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!registerData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!registerData.emailOrMobile.trim()) {
      newErrors.emailOrMobile = "Mobile or Email is required";
    }

    if (!registerData.password) {
      newErrors.password = "Password is required";
    } else if (registerData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!registerData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!registerData.profileCreatedBy) {
      newErrors.profileCreatedBy = "Please select an option";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsRegistering(true);

    // Simulate registration
    setTimeout(() => {
      console.log("User registered:", registerData);
      setIsRegistering(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200 p-4">
      <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side Text Section */}
        <div className="hidden md:flex w-1/2 bg-purple-600 text-white p-10 flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6">Create Your Account</h1>
          <p className="text-lg mb-4">
            Register now to connect with thousands of genuine members across Bangladesh.
          </p>
          <p className="text-lg">
            bdmarriage is trusted by people looking for meaningful connections. Let’s help you find your perfect match!
          </p>
        </div>

        {/* Right Side Register Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Member Registration</h2>

          <form onSubmit={handleRegisterSubmit}>
            {/* Full Name */}
            <div className="mb-5">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={registerData.fullName}
                onChange={handleRegisterChange}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 ${
                  errors.fullName ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-rose-500"
                }`}
              />
              {errors.fullName && <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            {/* Email or Mobile */}
            <div className="mb-5">
              <label htmlFor="emailOrMobile" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile or Email
              </label>
              <input
                type="text"
                id="emailOrMobile"
                name="emailOrMobile"
                value={registerData.emailOrMobile}
                onChange={handleRegisterChange}
                placeholder="Enter Mobile or Email"
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 ${
                  errors.emailOrMobile ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-rose-500"
                }`}
              />
              {errors.emailOrMobile && <p className="text-sm text-red-500 mt-1">{errors.emailOrMobile}</p>}
            </div>

            {/* Password */}
            <div className="mb-5">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Create Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                placeholder="Create a password"
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 ${
                  errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-rose-500"
                }`}
              />
              {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="mb-5">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                placeholder="Confirm your password"
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 ${
                  errors.confirmPassword ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-rose-500"
                }`}
              />
              {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Profile Created By */}
            <div className="mb-6">
              <label htmlFor="profileCreatedBy" className="block text-sm font-medium text-gray-700 mb-1">
                Profile Created By
              </label>
              <select
                id="profileCreatedBy"
                name="profileCreatedBy"
                value={registerData.profileCreatedBy}
                onChange={handleRegisterChange}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 ${
                  errors.profileCreatedBy ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-rose-500"
                }`}
              >
                <option value="">Select</option>
                <option value="Self">Self</option>
                <option value="Parent">Parent</option>
                <option value="Sibling">Sibling</option>
                <option value="Other">Other</option>
              </select>
              {errors.profileCreatedBy && <p className="text-sm text-red-500 mt-1">{errors.profileCreatedBy}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isRegistering}
              className={`w-full py-3 px-4 bg-purple-600 text-white font-medium rounded-md transition duration-200 ${
                isRegistering ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isRegistering ? "REGISTERING..." : "REGISTER"}
            </button>
          </form>

          <div className="py-4 text-center border-t mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to={"/login"} className="text-blue-500 font-medium hover:text-blue-600">
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
