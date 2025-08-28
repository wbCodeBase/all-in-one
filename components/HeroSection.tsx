"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';
import IntegrationIcons from "./IntegrationIcons";

import Link from "next/link";

export default function HeroSection() {
  // const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', countryCode: '' });
  const navigate = useRouter();


  const [businessType, setBusinessType] = useState("");
  const [goal, setGoal] = useState("");



  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullPhone = `${formData.countryCode}${formData.phone}`;

    console.log("Full phone:", fullPhone);

    // Store user data
    localStorage.setItem('userName', formData.name);
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userCompany', formData.company);

    setShowPopup(false);
    setFormData({ name: '', email: '', company: '', phone: '', countryCode: '' });

    if (businessType == "Other" && goal) {
      navigate.push("/waiting-list")
      return
    }

    // Navigate to results page
    navigate.push(`/results?business=${encodeURIComponent(businessType)}&goal=${encodeURIComponent(goal)}`);

  };


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };



  // Handle onboarding save
  const handleContinue = () => {

    setShowPopup(true);


  };





  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center" data-testid="hero-section">



      {/* Main Headline with Dynamic Text */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        data-testid="main-headline"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          All-in-one AI <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            With Human Touch
          </span>

          {/* <motion.span
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
            key={currentWordIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-testid="dynamic-word"
          > */}
          {/* {dynamicWords[currentWordIndex]} */}
          {/* </motion.span> */}
        </h1>
      </motion.div>

      {/* Subheadline */}
      <motion.div
        className="mb-6 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        data-testid="subheadline"
      >
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Give us a simple prompt and instantly see your <span className="text-white font-medium"> AI-powered video and website prototype crafted fast by AI,</span> perfected with a human touch.

        </p>
      </motion.div>


      {/* Open Source Badge */}

      <div className="flex gap-4 mb-10 justify-center items-center flex-wrap">
        <motion.div

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="badge-opensource"
        >
          <span className="inline-flex items-center px-4 py-2 bg-accent-green/10 text-amber-500 rounded-full text-sm border border-accent-green/20">
            Sales
          </span>
        </motion.div>
        <motion.div

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="badge-opensource"
        >
          <span className="inline-flex items-center px-4 py-2 bg-accent-green/10 text-accent-green rounded-full text-sm border border-accent-green/20">
            Marketing
          </span>
        </motion.div>
        <motion.div

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="badge-opensource"
        >
          <span className="inline-flex items-center px-4 py-2 bg-accent-green/10 text-yellow-500 rounded-full text-sm border border-accent-green/20">
            Nurture
          </span>
        </motion.div>
        <motion.div

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="badge-opensource"
        >
          <span className="inline-flex items-center px-4 py-2 bg-accent-green/10 text-pink-500 rounded-full text-sm border border-accent-green/20">
            Closing
          </span>
        </motion.div>
      </div>


      {/* AI Prompt Input Box */}
      {/* <motion.div
        className="w-full max-w-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <PromptInputBox onPromptChange={setCurrentPrompt} />
      </motion.div> */}





      <div className="bg-dark-primary flex items-center justify-center p-6 mb-10 w-full">
        <div className="bg-gray-900/80 border border-gray-700 rounded-2xl p-8 max-w-3xl w-full">

          <h2 className="text-2xl font-bold text-white mb-6 text-center">Tell us about your business</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Business Type */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">What is your business?</label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full rounded-2xl p-3 bg-gray-800 text-white border border-gray-600 focus:border-green-500 focus:ring-green-500"
              >
                <option value="">Select...</option>
                <option value="IT">IT</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Goal */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">What is your goal?</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full rounded-2xl p-3 bg-gray-800 text-white border border-gray-600 focus:border-green-500 focus:ring-green-500"
              >
                <option value="">Select...</option>
                <option value="Lead Generation">Lead Generation</option>
                <option value="Sales Growth">Sales Growth</option>
                <option value="Business Automation">Business Automation</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleContinue}
            disabled={!businessType || !goal}
            className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed text-white py-3 rounded-xl font-medium transition"
          >
            Continue
          </button>
        </div>
      </div>








      {/* Generate Now Button */}
      {/* <motion.div
        className="mb-12 flex gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        data-testid="generate-button-section"
      >

        <button
          onClick={handleGenerateClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-12 py-4 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:shadow-glow transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
          data-testid="button-generate-now"
        >
          Generate Now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </button>

      </motion.div> */}

      {/* Integration Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <IntegrationIcons />
      </motion.div>

      {/* Popup Form */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-testid="popup-overlay"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={handleClosePopup}
            />

            {/* Form */}
            <motion.div
              className="relative bg-gray-900 border border-gray-700 rounded-3xl p-8 w-full max-w-md shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              data-testid="popup-form"
            >
              {/* Close Button */}
              <button
                onClick={handleClosePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                data-testid="button-close-popup"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              </button>

              {/* Form Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Get Started with WeoneAI</h3>
                <p className="text-gray-400">Enter your details to begin generating amazing applications</p>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 text-left">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    data-testid="input-name"
                  />
                </div>




                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 text-left">
                    Phone
                  </label>
                  <div className="flex gap-2">
                    {/* Country Code Select */}
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Code</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+971">🇦🇪 +971</option>
                    </select>

                    {/* Phone Input */}
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        // const val = e.target.value.replace(/\D/g, "").slice(0, 15);
                        handleInputChange
                      }}
                      maxLength={15}
                      pattern="[0-9]{7,15}" // validation: 7–15 digits
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone"
                      data-testid="input-phone"
                    />
                  </div>
                  {/* <p className="text-xs text-gray-400 mt-1">
                    Phone number must be 7–15 digits
                  </p> */}
                </div>




                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 text-left">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your Company"
                    data-testid="input-company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 text-left">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                    data-testid="input-email"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02] active:scale-[0.98] mt-6"
                  data-testid="button-submit-form"
                >
                  Start Generating
                </button>
                {/* </form> */}

                <div className="flex flex-col items-center mt-4">
                  <label className="flex items-center text-xs text-gray-500">
                    <input
                      type="checkbox"
                      defaultChecked
                      required
                      className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    I agree to the <Link href="/" className="underline mx-1"> terms of service </Link> and <Link href="/" className="underline mx-1"> privacy policy </Link>.
                  </label>
                </div>

              </form>


            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
