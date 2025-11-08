// import React from 'react'
import './App.css'
import Navbar from '@/components/navbar'
import Landing from '@/pages/landing'
import Pricing from "@/pages/pricing"; 
import Features from "@/pages/features";
import { Routes, Route } from "react-router-dom";
import Footer from './components/footer';
import Demo from '@/pages/demo';
import { Terms } from '@/pages/terms';
import { Blog } from '@/pages/blog';
import { Blogs } from '@/pages/blogs';
import  Contact  from '@/pages/contact';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="*" element={<div className="p-8 text-white">Not found</div>} />
      </Routes>
      <Footer />
      
      
    </>
  )
}

export default App
