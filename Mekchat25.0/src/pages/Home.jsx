import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaTimes } from "react-icons/fa";
import EventSection from "../components/EventSection";
import mech from "../assets/mekchat-logo.png"

const Home = () => {
  const [number, setNumber] = useState(20);
  const [showNotification, setShowNotification] = useState(false);
  const [userName, setUserName] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(true);

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    // Fetch user data to check payment status
    const fetchUserData = async () => {
      try {
        const header = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await axios.post(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user/profile`,
          {},
          header
        );
        const { name, paymentStatus } = res.data.data;
        setUserName(name);
        setPaymentStatus(paymentStatus);
        if (!paymentStatus) {
          setShowNotification(true); // Show notification if payment is incomplete
        }
      } catch (error) {
        console.log("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, [token]);

  useEffect(() => {
    let currentNumber = 1;
    const intervalId = setInterval(() => {
      // Update the number from 20 to 25
      if (currentNumber < 25) {
        currentNumber++;
      } else {
        currentNumber = 25; // Fix it at 25 once the loop completes
        clearInterval(intervalId); // Stop the interval once it hits 25
      }
      setNumber(currentNumber);
    }, 100); // Fast transition

    return () => clearInterval(intervalId); // Clean up the interval when component unmounts
  }, []);

  // Function to close the notification
  const handleCloseNotification = () => {
    setShowNotification(false);
  };




  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date('2025-03-02T23:59:59'); // March 2, 11:59 PM

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft("Registration Closed");
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="home-bg">
        <Header />
        
        <div className="home-container">
        <div className="home-content1">
              <img src={mech} alt="logo" />
              <p>
              A national level technical symposium will be conducted by
              Department of Mechanical Engineering, Government College
              of Engineering, Salem.
            </p>
            <div className="home-date-container">
              <h3 className="home-date s-home-date">Slated to happen on</h3>
              <h3 className="home-date">March-03&04 2025</h3>
            </div>

            <div className="home-btn">
      <div className="timer">{timeLeft}</div>
      {timeLeft !== "Registration Closed" ? (
        <Link to="/mechregister" id="neon-btn">
          <button className="register-btn">REGISTER</button>
        </Link>
      ) : (
        <button className="register-btn" disabled>
          Registration Closed
        </button>
      )}
    </div>
          </div>
        {/* <div className="home-content2">
          </div> */}
        </div>
      </div>

      {/* Conditionally render the notification message */}
      {showNotification && (
        <div className="notification-container">
          <div className="notification">
            <button
              className="notification-close-btn"
              onClick={handleCloseNotification}
            >
              <FaTimes />
            </button>
            <p>
              Hello {userName}, your payment is drifting in space. Complete it
              in your profile.
            </p>
            <Link to="/profile" className="profile-link">
              Go to Profile
            </Link>
          </div>
        </div>
      )}
      <EventSection/>
      <Footer />
    </>
  );
};

export default Home;
