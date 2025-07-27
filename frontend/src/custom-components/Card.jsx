import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ imgSrc, title, startingBid, startTime, endTime, id }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const startDiff = new Date(startTime) - now;
    const endDiff = new Date(endTime) - now;

    let timeLeft = {};

    if (startDiff > 0) {
      timeLeft = {
        type: "Starts In:",
        days: Math.floor(startDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((startDiff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((startDiff / 1000 / 60) % 60),
        seconds: Math.floor((startDiff / 1000) % 60),
      };
    } else if (endDiff > 0) {
      timeLeft = {
        type: "Ends In:",
        days: Math.floor(endDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((endDiff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((endDiff / 1000 / 60) % 60),
        seconds: Math.floor((endDiff / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTimeLeft = ({ days, hours, minutes, seconds }) => {
    const pad = (num) => String(num).padStart(2, "0");
    return `(${days}d) ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <Link to={`/auction/item/${id}`} className="block w-full group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col min-h-[350px]">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-40 object-cover"
        />
        <div className="px-4 pt-3 pb-4 flex-1 flex flex-col justify-between">
          <h5 className="font-semibold text-[18px] group-hover:text-[#d6482b] mb-2 break-words">
            {title}
          </h5>
          {startingBid && (
            <p className="text-stone-600 font-bold mb-1">
              Starting Bid:
              <span className="text-black font-bold ml-1">
                {startingBid}
              </span>
            </p>
          )}
          <p className="text-stone-600 font-light">
            {timeLeft.type}
            {Object.keys(timeLeft).length > 1 ? (
              <span className="text-black font-bold ml-1">
                {formatTimeLeft(timeLeft)}
              </span>
            ) : (
              <span className="text-black font-bold ml-1">Time's up!</span>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
