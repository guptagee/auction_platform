import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import { RiAuctionFill } from "react-icons/ri";
import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { IoIosCreate } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaFileInvoiceDollar, FaEye } from "react-icons/fa6";

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur-md shadow-lg border-b border-[#d6482b] rounded-b-2xl transition-all duration-300">
      <div className="flex items-center gap-8">
        <Link to="/" className="transition-transform duration-300 hover:scale-105">
          <span className="text-3xl font-extrabold tracking-tight text-[#d6482b] drop-shadow-lg">
            Bid<span className="text-[#111]">Wise</span>
          </span>
        </Link>
        <nav>
          <ul className="flex gap-6 items-center">
            <li>
              <Link to="/auctions" className="flex gap-1 items-center font-semibold hover:text-[#d6482b] transition-colors duration-200">
                <RiAuctionFill /> Auctions
              </Link>
            </li>
            <li>
              <Link to="/leaderboard" className="flex gap-1 items-center font-semibold hover:text-[#d6482b] transition-colors duration-200">
                <MdLeaderboard /> Leaderboard
              </Link>
            </li>
            {isAuthenticated && user && user.role === "Auctioneer" && (
              <>
                <li>
                  <Link to="/submit-commission" className="flex gap-1 items-center font-semibold hover:text-[#d6482b] transition-colors duration-200">
                    <FaFileInvoiceDollar /> Submit Commission
                  </Link>
                </li>
                <li>
                  <Link to="/create-auction" className="flex gap-1 items-center font-semibold hover:text-[#d6482b] transition-colors duration-200">
                    <IoIosCreate /> Create Auction
                  </Link>
                </li>
                <li>
                  <Link to="/view-my-auctions" className="flex gap-1 items-center font-semibold hover:text-[#d6482b] transition-colors duration-200">
                    <FaEye /> View My Auctions
                  </Link>
                </li>
              </>
            )}
            {isAuthenticated && user && user.role === "Super Admin" && (
              <li>
                <Link to="/dashboard" className="flex gap-1 items-center font-semibold hover:text-[#d6482b] transition-colors duration-200">
                  <MdDashboard /> Dashboard
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <Link to="/me" className="flex gap-1 items-center font-semibold hover:text-[#d6482b] transition-colors duration-200">
                  <FaUserCircle /> Profile
                </Link>
              </li>
            )}
            <li>
              <Link to="/how-it-works-info" className="flex gap-1 items-center font-semibold hover:text-[#d6482b] transition-colors duration-200">
                <SiGooglesearchconsole /> How it works
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex gap-1 items-center font-semibold hover:text-[#d6482b] transition-colors duration-200">
                <BsFillInfoSquareFill /> About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        {!isAuthenticated ? (
          <>
            <Link to="/sign-up" className="bg-[#d6482b] font-semibold hover:bg-[#b8381e] text-md py-1 px-4 rounded-md text-white shadow-md transition-all duration-200">
              Sign Up
            </Link>
            <Link to="/login" className="bg-[#d6482b] font-semibold hover:bg-[#b8381e] text-md py-1 px-4 rounded-md text-white shadow-md transition-all duration-200">
              Login
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} className="bg-[#d6482b] font-semibold hover:bg-[#b8381e] text-md py-1 px-4 rounded-md text-white shadow-md transition-all duration-200">
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header; 