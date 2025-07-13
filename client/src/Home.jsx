import React from "react";
import { useState } from "react";
import plusIcon from "./assets/plu.png";
import joinIcon from "./assets/join.png";
import Navbar from "./components/Navbar";
import JoinRoom from "./components/JoinRoom";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleNewMeeting = async () => {
    try {
      const response = await fetch("http://localhost:3000/home"); // replace with your server URL if deployed
      const data = await response.json();
      const roomUrl = data.roomUrl;

      // Open in new tab
      window.open(`http://localhost:3000${roomUrl}`, "_blank");

      // OR navigate inside React if you've built room route in React itself:
      // navigate(roomUrl);
    } catch (error) {
      console.error("Failed to create a new meeting:", error);
    }
  };
    function handlejoin(){
         navigate("/join");
    }
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex gap-12 p-10 justify-center my-30 text-white">
        <div onClick={handleNewMeeting} className="p-3 bg-blue-950 w-80 rounded-3xl flex flex-col justify-around h-60  hover:bg-blue-800">
          <button  className="cursor-pointer bg-red-200 bg-transparent">
            <span className="bg-white">
              <img src={plusIcon} width={40} className="invert" />
            </span>
          </button>
          <div>
            <h1 className="font-bold text-3xl">New Meeting</h1>
            <h2>Start an instant meeting</h2>
          </div>
        </div>
        <div onClick={handlejoin} className="p-1 bg-blue-950 w-80 rounded-3xl flex flex-col justify-around hover:bg-blue-800 p-3">
          <button  className="cursor-pointer">
            <img src={joinIcon} width={40} className="invert" />
          </button>
          <div>
            <h1 className="font-bold text-3xl">Join Meeting</h1>
            <h2>via invitation link</h2>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Home;
