"use client"

import { useState } from "react"
import { Eye, EyeOff, Heart } from "lucide-react"
import { Link } from "react-router-dom"
 
export default function LoginPage() {
  const [formData, setFormData] = useState({
    emailOrMobile: "",
    password: "",
    rememberMe: false,
  })

  const [errors, setErrors] = useState({
    emailOrMobile: "",
    password: "",
    general: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = { ...errors }

    if (!formData.emailOrMobile.trim()) {
      newErrors.emailOrMobile = "Mobile or Email is required"
      isValid = false
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
      isValid = false
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setErrors({ ...errors, general: "" })

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const success = Math.random() > 0.5

      if (!success) {
        throw new Error("Invalid credentials. Please try again.")
      }

      console.log("Login successful", formData)
    } catch (error) {
      setErrors({
        ...errors,
        general: error.message || "An unexpected error occurred",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200 p-4">
    <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
      
      {/* Left Side Text Section */}
      <div className="hidden md:flex w-1/2 bg-purple-600 text-white p-10 flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">Welcome Back!</h1>
        <p className="text-lg mb-4">
          Login to find your perfect match and connect with amazing people from all over Bangladesh.
        </p>
        <p className="text-lg">
          Join our growing community and start your journey towards a meaningful relationship.
        </p>
      </div>
  
      {/* Right Side Login Form */}
      <div className="w-full lg:w-1/2 p-8">
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16">
            <Heart className="w-16 h-16 text-red-500 fill-red-500" />
          </div>
        </div>
  
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Member Login</h2>
  
        {errors.general && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md">
            {errors.general}
          </div>
        )}
  
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="emailOrMobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Or Email
            </label>
            <input
              type="text"
              id="emailOrMobile"
              name="emailOrMobile"
              value={formData.emailOrMobile}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.emailOrMobile ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500`}
              placeholder="Enter Mobile Or Email"
            />
            {errors.emailOrMobile && <p className="mt-1 text-xs text-red-500">{errors.emailOrMobile}</p>}
          </div>
  
          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500`}
                placeholder="Enter Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
          </div>
  
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-rose-500 border-gray-300 rounded focus:ring-rose-500"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-blue-500 hover:text-blue-600">
              Forgot password?
            </Link>
          </div>
  
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 bg-purple-600 text-white font-medium rounded-md transition duration-200 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "LOGGING IN..." : "LOGIN"}
          </button>
        </form>
  
        <div className="py-4 text-center border-t mt-6">
          <p className="text-sm text-gray-600">
            New to dating?{" "}
            <Link to={"/register"} className="text-blue-500 font-medium hover:text-blue-600">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  
  )
}
