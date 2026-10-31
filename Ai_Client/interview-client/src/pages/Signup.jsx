
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaCalendarAlt,
  FaEye,
  FaEyeSlash,
  FaUserPlus,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [hidepassword, setHidepassword] = useState(false);
  const navigate=useNavigate()

  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  function updateFormData(e) {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d{0,10}$/.test(value)) {
      return;
    }

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSignup(e) {
    e.preventDefault();

    if (formValues.password !== formValues.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (formValues.phone.length !== 10) {
      toast.error("Enter a valid 10-digit phone number");
      return;
    }

    try {
      const { confirmPassword, ...signupData } = formValues;
      const body={
            name:formValues.name,
            email:formValues.email,
            password:formValues.password,
            age:formValues.values,
            phone:formValues.phone
      }

      const response = await axios.post(
        "http://localhost:4000/auth/signup",
        body
      );

      console.log(response.data, "signup response");
      toast.success("Account created successfully!");
       navigate("/login")
        
      setFormValues({
        name: "",
        age: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      });
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    }
  }

  const inputStyle =
    "w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none transition-all duration-300 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 placeholder:text-slate-400";

  const fields = [
    {
      label: "Full Name",
      name: "name",
      type: "text",
      placeholder: "Enter your full name",
      icon: <FaUser />,
    },
    {
      label: "Age",
      name: "age",
      type: "number",
      placeholder: "Enter your age",
      icon: <FaCalendarAlt />,
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      icon: <FaEnvelope />,
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "text",
      placeholder: "10-digit phone number",
      icon: <FaPhone />,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4 py-10">
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden animate-[fadeIn_0.7s_ease-out]">

        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center items-center text-white p-12 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
          <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-20 -left-20 animate-pulse" />
          <div className="absolute w-60 h-60 bg-white/10 rounded-full -bottom-20 -right-10 animate-pulse" />

          <div className="relative z-10 text-center">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-white/20 flex items-center justify-center text-5xl mb-8 shadow-lg animate-bounce">
              <FaUserPlus />
            </div>

            <h1 className="text-4xl font-bold mb-5">
              Let's Signup!!
            </h1>

            <p className="text-indigo-100 text-lg leading-relaxed">
              Create your account and start your journey with us.
              Your next opportunity begins here.
            </p>

            <div className="mt-10 flex justify-center gap-2">
              <span className="w-10 h-1.5 rounded-full bg-white" />
              <span className="w-3 h-1.5 rounded-full bg-white/40" />
              <span className="w-3 h-1.5 rounded-full bg-white/40" />
            </div>
          </div>
        </div>

        {/* Signup Form */}
        <div className="p-7 sm:p-10 md:p-12">
          <div className="mb-8">
            <div className="md:hidden w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl mb-5">
              <FaUserPlus />
            </div>

            <h2 className="text-3xl font-bold text-slate-800">
              Create Account
            </h2>

            <p className="text-slate-500 mt-2">
              Please fill in your details to register.
            </p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">

            {/* Basic Fields */}
            {fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {field.label}
                </label>

                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors duration-300">
                    {field.icon}
                  </span>

                  <input
                    required
                    className={inputStyle}
                    type={field.type}
                    name={field.name}
                    value={formValues[field.name]}
                    placeholder={field.placeholder}
                    onChange={updateFormData}
                    min={field.name === "age" ? 1 : undefined}
                    max={field.name === "age" ? 120 : undefined}
                  />
                </div>
              </div>
            ))}

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>

              <div className="relative group">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors duration-300" />

                <input
                  required
                  className={inputStyle}
                  type={hidepassword ? "text" : "password"}
                  name="password"
                  value={formValues.password}
                  placeholder="Create a password"
                  onChange={updateFormData}
                  minLength={6}
                />

                <button
                  type="button"
                  onClick={() => setHidepassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                  aria-label={hidepassword ? "Hide password" : "Show password"}
                >
                  {hidepassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Confirm Password
              </label>

              <div className="relative group">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors duration-300" />

                <input
                  required
                  className={inputStyle}
                  type={hidepassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formValues.confirmPassword}
                  placeholder="Confirm your password"
                  onChange={updateFormData}
                  minLength={6}
                />

                <button
                  type="button"
                  onClick={() => setHidepassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                  aria-label={hidepassword ? "Hide password" : "Show password"}
                >
                  {hidepassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-5 py-3.5 rounded-xl text-white font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex justify-center items-center gap-3"
            >
              <FaUserPlus />
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-7">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-indigo-600 hover:text-purple-600 transition-colors"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Signup;
