import { register } from "@/store/slices/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [bankAccountHolderName, setBankAccountHolderName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [upiId, setUpiId] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileImagePreview, setProfileImagePreview] = useState("");

  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("role", role);
    formData.append("profileImage", profileImage);
    role === "Auctioneer" &&
      (formData.append("bankAccountName", bankAccountHolderName),
      formData.append("bankAccountNumber", bankAccountNumber),
      formData.append("bankName", bankName),
      formData.append("ifscCode", ifscCode),
      formData.append("upiId", upiId),
      formData.append("paypalEmail", paypalEmail));
    dispatch(register(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, loading, isAuthenticated]);

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfileImagePreview(reader.result);
      setProfileImage(file);
    };
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fff3fd] via-[#fde4cf] to-[#f8fafc] py-10 px-2">
      <div className="w-full max-w-2xl bg-white/90 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 animate-fade-in">
        <h1 className="text-[#d6482b] text-4xl md:text-5xl font-extrabold text-center mb-2 tracking-tight drop-shadow-lg">Create Your Account</h1>
        <form className="flex flex-col gap-6" onSubmit={handleRegister}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col relative group">
              <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required className="peer bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-[#d6482b] focus:ring-2 focus:ring-[#d6482b]/20 focus:shadow-lg text-lg transition-all duration-300 hover:border-gray-300 hover:shadow-md" />
              <label className="absolute left-4 top-3 text-gray-500 text-md transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[#d6482b] peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-valid:-top-2 peer-valid:left-3 peer-valid:text-[#d6482b] peer-valid:text-sm peer-valid:bg-white peer-valid:px-2">Full Name</label>
            </div>
            <div className="flex flex-col relative group">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="peer bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-[#d6482b] focus:ring-2 focus:ring-[#d6482b]/20 focus:shadow-lg text-lg transition-all duration-300 hover:border-gray-300 hover:shadow-md" />
              <label className="absolute left-4 top-3 text-gray-500 text-md transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[#d6482b] peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-valid:-top-2 peer-valid:left-3 peer-valid:text-[#d6482b] peer-valid:text-sm peer-valid:bg-white peer-valid:px-2">Email</label>
            </div>
            <div className="flex flex-col relative group">
              <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} required className="peer bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-[#d6482b] focus:ring-2 focus:ring-[#d6482b]/20 focus:shadow-lg text-lg transition-all duration-300 hover:border-gray-300 hover:shadow-md" />
              <label className="absolute left-4 top-3 text-gray-500 text-md transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[#d6482b] peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-valid:-top-2 peer-valid:left-3 peer-valid:text-[#d6482b] peer-valid:text-sm peer-valid:bg-white peer-valid:px-2">Phone</label>
            </div>
            <div className="flex flex-col relative group">
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required className="peer bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-[#d6482b] focus:ring-2 focus:ring-[#d6482b]/20 focus:shadow-lg text-lg transition-all duration-300 hover:border-gray-300 hover:shadow-md" />
              <label className="absolute left-4 top-3 text-gray-500 text-md transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[#d6482b] peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-valid:-top-2 peer-valid:left-3 peer-valid:text-[#d6482b] peer-valid:text-sm peer-valid:bg-white peer-valid:px-2">Address</label>
            </div>
            <div className="flex flex-col relative group">
              <select value={role} onChange={(e) => setRole(e.target.value)} required className="peer bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-[#d6482b] focus:ring-2 focus:ring-[#d6482b]/20 focus:shadow-lg text-lg transition-all duration-300 hover:border-gray-300 hover:shadow-md">
                <option value="">Select Role</option>
                <option value="Auctioneer">Auctioneer</option>
                <option value="Bidder">Bidder</option>
              </select>
              <label className="absolute left-4 top-3 text-gray-500 text-md transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[#d6482b] peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-valid:-top-2 peer-valid:left-3 peer-valid:text-[#d6482b] peer-valid:text-sm peer-valid:bg-white peer-valid:px-2">Role</label>
            </div>
            <div className="flex flex-col relative group">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="peer bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-[#d6482b] focus:ring-2 focus:ring-[#d6482b]/20 focus:shadow-lg text-lg transition-all duration-300 hover:border-gray-300 hover:shadow-md" />
              <label className="absolute left-4 top-3 text-gray-500 text-md transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[#d6482b] peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-valid:-top-2 peer-valid:left-3 peer-valid:text-[#d6482b] peer-valid:text-sm peer-valid:bg-white peer-valid:px-2">Password</label>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 mt-2">
            <label className="text-md font-semibold text-[#d6482b]">Profile Image</label>
            <div className="flex items-center gap-4">
              <img src={profileImagePreview ? profileImagePreview : "/imageHolder.jpg"} alt="profileImagePreview" className="w-16 h-16 rounded-full border-2 border-[#d6482b] shadow" />
              <input type="file" onChange={imageHandler} className="file:rounded-full file:bg-[#d6482b] file:text-white file:px-4 file:py-2 file:border-none file:shadow file:cursor-pointer" />
            </div>
          </div>
          <div className="border-t border-[#fde4cf] pt-4">
            <label className="font-semibold text-lg text-[#d6482b] flex flex-col mb-2">
              Payment Method Details
              <span className="text-xs text-stone-500 font-normal">Fill Payment Details Only If you are registering as an Auctioneer</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col relative group">
                <input type="text" value={bankAccountHolderName} onChange={(e) => setBankAccountHolderName(e.target.value)} className="peer bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-[#d6482b] focus:ring-2 focus:ring-[#d6482b]/20 focus:shadow-lg text-lg transition-all duration-300 hover:border-gray-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed" disabled={role === "Bidder"} />
                <label className="absolute left-4 top-3 text-gray-500 text-md transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[#d6482b] peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-valid:-top-2 peer-valid:left-3 peer-valid:text-[#d6482b] peer-valid:text-sm peer-valid:bg-white peer-valid:px-2">Account Holder Name</label>
              </div>
              <div className="flex flex-col relative group">
                <input type="text" value={bankName} onChange={(e) => setBankName(e.target.value)} className="peer bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-[#d6482b] focus:ring-2 focus:ring-[#d6482b]/20 focus:shadow-lg text-lg transition-all duration-300 hover:border-gray-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed" disabled={role === "Bidder"} />
                <label className="absolute left-4 top-3 text-gray-500 text-md transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[#d6482b] peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-valid:-top-2 peer-valid:left-3 peer-valid:text-[#d6482b] peer-valid:text-sm peer-valid:bg-white peer-valid:px-2">Bank Name</label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col relative group">
                <input type="text" value={ifscCode} onChange={(e) => setIfscCode(e.target.value)} className="peer bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-[#d6482b] focus:ring-2 focus:ring-[#d6482b]/20 focus:shadow-lg text-lg transition-all duration-300 hover:border-gray-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed" disabled={role === "Bidder"} />
                <label className="absolute left-4 top-3 text-gray-500 text-md transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[#d6482b] peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-valid:-top-2 peer-valid:left-3 peer-valid:text-[#d6482b] peer-valid:text-sm peer-valid:bg-white peer-valid:px-2">IFSC Code</label>
              </div>
              <div className="flex flex-col relative group">
                <input type="text" value={bankAccountNumber} onChange={(e) => setBankAccountNumber(e.target.value)} className="peer bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-[#d6482b] focus:ring-2 focus:ring-[#d6482b]/20 focus:shadow-lg text-lg transition-all duration-300 hover:border-gray-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed" disabled={role === "Bidder"} />
                <label className="absolute left-4 top-3 text-gray-500 text-md transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[#d6482b] peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-valid:-top-2 peer-valid:left-3 peer-valid:text-[#d6482b] peer-valid:text-sm peer-valid:bg-white peer-valid:px-2">Account Number</label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col relative group">
                <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} className="peer bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-[#d6482b] focus:ring-2 focus:ring-[#d6482b]/20 focus:shadow-lg text-lg transition-all duration-300 hover:border-gray-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed" disabled={role === "Bidder"} />
                <label className="absolute left-4 top-3 text-gray-500 text-md transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[#d6482b] peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-valid:-top-2 peer-valid:left-3 peer-valid:text-[#d6482b] peer-valid:text-sm peer-valid:bg-white peer-valid:px-2">UPI ID</label>
              </div>
              <div className="flex flex-col relative group">
                <input type="email" value={paypalEmail} onChange={(e) => setPaypalEmail(e.target.value)} className="peer bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-[#d6482b] focus:ring-2 focus:ring-[#d6482b]/20 focus:shadow-lg text-lg transition-all duration-300 hover:border-gray-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed" disabled={role === "Bidder"} />
                <label className="absolute left-4 top-3 text-gray-500 text-md transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[#d6482b] peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-valid:-top-2 peer-valid:left-3 peer-valid:text-[#d6482b] peer-valid:text-sm peer-valid:bg-white peer-valid:px-2">PayPal Email</label>
              </div>
            </div>

          </div>
          <button type="submit" className="mt-6 bg-[#d6482b] hover:bg-[#b8381e] text-white font-bold py-3 rounded-xl shadow-lg text-xl transition-all duration-300 tracking-wide">
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
