import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FeaturedAuctions from "./home-sub-components/FeaturedAuctions";
import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
import Leaderboard from "./home-sub-components/Leaderboard";
import Spinner from "@/custom-components/Spinner";

const Home = () => {
  const howItWorks = [
    { title: "Post Items", description: "Auctioneer posts items for bidding." },
    { title: "Place Bids", description: "Bidders place bids on listed items." },
    {
      title: "Win Notification",
      description: "Highest bidder receives a winning email.",
    },
    {
      title: "Payment & Fees",
      description: "Bidder pays; auctioneer pays 5% fee.",
    },
  ];

  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-5 pt-28 pb-10 bg-gradient-to-br from-[#fff3fd] via-[#fde4cf] to-[#f8fafc]">
        {/* Intro Card (no background) */}
        <div className="w-full max-w-3xl rounded-3xl shadow-2xl p-10 flex flex-col items-center mb-12 animate-fade-in border border-[#fde4cf]">
          <p className="text-[#DECCBE] font-bold text-xl md:text-2xl xl:text-3xl mb-6 md:mb-8 tracking-wide">Transparency Leads to Your Victory </p>
          <h1 className="text-[#111] text-4xl md:text-6xl xl:text-7xl font-extrabold mb-2 md:mb-4 transition-all duration-700 animate-fade-in text-center drop-shadow-lg">
            Bid Smart. Win Big.
          </h1>
          <h2 className="text-[#d6482b] text-3xl md:text-5xl xl:text-6xl font-extrabold mb-8 md:mb-10 animate-fade-in text-center drop-shadow-lg">
            Be The Winner
          </h2>
          <div className="flex my-4">
            {!isAuthenticated && (
              <>
                <Link
                  to="/sign-up"
                  className="bg-[#d6482b] font-bold text-xl md:text-2xl px-10 py-3 rounded-xl shadow-lg hover:bg-[#b8381e] transition-all duration-300 text-white focus:ring-2 focus:ring-[#d6482b] focus:outline-none"
                >
                  Get Started For Free
                </Link>
              </>
            )}
          </div>
        </div>
        {/* How it works Section */}
        <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto mb-12">
          <h3 className="text-[#d6482b] text-2xl md:text-3xl font-bold mb-2 text-center tracking-tight">How it works</h3>
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap w-full items-center justify-center">
            {howItWorks.map((element, idx) => {
              const icons = ["📦", "💸", "🏆", "💳"];
              return (
                <div
                  key={element.title}
                  className="flex flex-col gap-2 p-6 rounded-2xl h-[140px] justify-center md:w-[48%] lg:w-[47%] 2xl:w-[24%] hover:shadow-xl transition-all duration-300 items-center text-center border border-[#fde4cf]"
                >
                  <span className="text-4xl mb-1 animate-bounce-slow">{icons[idx]}</span>
                  <h5 className="font-bold text-lg">{element.title}</h5>
                  <p className="text-sm text-gray-600">{element.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Features Section */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
          <div className="rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-[#fde4cf]">
            <span className="text-5xl mb-2">🔒</span>
            <h4 className="font-bold text-lg mb-1">Secure Payments</h4>
            <p className="text-gray-600 text-sm">All transactions are protected with industry-leading security for peace of mind.</p>
          </div>
          <div className="rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-[#fde4cf]">
            <span className="text-5xl mb-2">⚡</span>
            <h4 className="font-bold text-lg mb-1">Fast Bidding</h4>
            <p className="text-gray-600 text-sm">Place bids in real-time and never miss out on your favorite items.</p>
          </div>
          <div className="rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-[#fde4cf]">
            <span className="text-5xl mb-2">🤝</span>
            <h4 className="font-bold text-lg mb-1">Trusted Community</h4>
            <p className="text-gray-600 text-sm">Join a growing network of verified buyers and sellers for a safe experience.</p>
          </div>
        </div>
        {/* Testimonial Section */}
        <div className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg p-8 my-10 flex flex-col items-center border border-[#fde4cf]">
          <span className="text-4xl mb-2">⭐️⭐️⭐️⭐️⭐️</span>
          <p className="text-gray-700 text-lg italic mb-2 text-center">"Auction Platform made selling my collectibles so easy and fun! The process was smooth and I got great value for my items."</p>
          <span className="text-[#d6482b] font-bold">— Happy Seller</span>
        </div>
        {/* Auction Sections */}
        <FeaturedAuctions />
        <UpcomingAuctions />
        <Leaderboard />
      </section>
      {/* Footer: Only show if not authenticated */}
      {!isAuthenticated && (
        <footer className="w-full flex flex-col items-center justify-center py-6 mt-8 bg-white/70 backdrop-blur-md rounded-t-2xl shadow-inner border-t border-[#fde4cf] bg-gradient-to-br from-[#fff3fd] via-[#fde4cf] to-[#f8fafc]">
          <div className="flex items-center gap-4 mb-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#4267B2] text-2xl hover:scale-110 transition-transform"><i className="fab fa-facebook"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] text-2xl hover:scale-110 transition-transform"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="text-gray-700 text-md mb-1">&copy; {new Date().getFullYear()} BidWise. All rights reserved.</div>
          <div className="text-[#d6482b] font-semibold text-sm">
            <p className="text-gray-700 text-md mb-1">
              Made with <span className="text-red-500">❤️</span> in India
          </p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Home;
