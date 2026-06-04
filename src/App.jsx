import { useState } from "react";
import churchImg from "./assets/church.jpg";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sermons from "./components/Sermons";
import Ministries from "./components/Ministries";
import Staff from "./components/Staff";
import Footer from "./components/Footer";
import ServiceTimes from "./components/ServiceTimes";
import Visit from "./components/Visit";

function App() {

  const sermons = [
    {
      title: "Faith in Uncertain Seasons",
      date: "Last Sunday",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    {
      title: "The Power of Prayer",
      date: "Two Weeks Ago",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Walking in Grace",
      date: "Three Weeks Ago",
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const ministries = [
    {
      title: "Children's Ministry",
      desc: "Safe, engaging environments where children learn about Jesus in an age-appropriate way.",
    },
    {
      title: "Youth Ministry",
      desc: "Helping students grow in faith, friendships, and biblical understanding.",
    },
    {
      title: "Worship Ministry",
      desc: "Leading the church in Christ-centered worship through music and service.",
    },
  ];

  const staff = [
    {
      name: "Pastor John Smith",
      role: "Lead Pastor",
      bio: "Serving in ministry for over 15 years with a passion for biblical teaching and discipleship.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Sarah Johnson",
      role: "Children's Director",
      bio: "Dedicated to helping children know Christ and grow in their faith.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const events = [
    { title: "Sunday Worship Service", time: "Sundays at 11:00 AM" },
    { title: "Midweek Bible Study", time: "Wednesdays at 7:00 PM" },
    { title: "Community Prayer Night", time: "Thursdays at 6:30 PM" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <Navbar />
      <Hero churchImg={churchImg} />
      <Sermons sermons={sermons} />
      <Ministries ministries={ministries} />
      <Staff staff={staff} />
      <ServiceTimes events={events} />
      <Visit />
      <Footer />
    </div>
  );
}

export default App;
