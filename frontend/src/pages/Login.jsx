import { login } from "@/store/slices/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, isAuthenticated } = useSelector((state) => state.user);

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, isAuthenticated, loading]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fff3fd] via-[#fde4cf] to-[#f8fafc] py-10 px-2">
      <div className="w-full max-w-md bg-white/90 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 animate-fade-in">
        <h1 className="text-[#d6482b] text-4xl md:text-5xl font-extrabold text-center mb-2 tracking-tight drop-shadow-lg">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col relative">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="peer bg-transparent border-b-2 border-[#d6482b] py-2 px-1 focus:outline-none focus:border-[#b8381e] text-lg" />
            <label className="absolute left-1 top-2 text-gray-500 text-md transition-all duration-200 peer-focus:-top-5 peer-focus:text-[#d6482b] peer-focus:text-sm peer-valid:-top-5 peer-valid:text-[#d6482b] peer-valid:text-sm">Email</label>
          </div>
          <div className="flex flex-col relative">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="peer bg-transparent border-b-2 border-[#d6482b] py-2 px-1 focus:outline-none focus:border-[#b8381e] text-lg" />
            <label className="absolute left-1 top-2 text-gray-500 text-md transition-all duration-200 peer-focus:-top-5 peer-focus:text-[#d6482b] peer-focus:text-sm peer-valid:-top-5 peer-valid:text-[#d6482b] peer-valid:text-sm">Password</label>
          </div>
          <button className="mt-6 bg-[#d6482b] hover:bg-[#b8381e] text-white font-bold py-3 rounded-xl shadow-lg text-xl transition-all duration-300 tracking-wide" type="submit">
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
