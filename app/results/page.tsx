// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"

// export default function Results() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       {/* Header Section */}
//       <header className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/80" />
//         <div className="relative container mx-auto px-4 py-16 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             Transform Your Digital Experience
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
//             Discover powerful setups for your favorite apps with our comprehensive installation guides and video
//             tutorials.
//           </p>
//         </div>
//       </header>

//       {/* Section 1: Mobile Phone Mockups with Videos */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance text-white">
//             Mobile App Setups
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {/* WhatsApp Setup */}
//             <div className="flex flex-col items-center group">
//               <Card className="relative p-6 bg-gradient-to-b from-slate-800 to-slate-900 border-gray-700 shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 group-hover:scale-105">
//                 <div className="relative w-48 h-96 mx-auto bg-gradient-to-b from-gray-700 to-slate-800 rounded-3xl border-4 border-gray-600 overflow-hidden shadow-inner">
//                   {/* Phone Screen with Video */}
//                   <div className="absolute inset-2 bg-black rounded-2xl overflow-hidden">
//                     <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
//                       <source
//                         src="https://www.shutterstock.com/shutterstock/videos/3841958145/preview/stock-footage--k-portrait-looping-pink-padel-racket-d-rotating-with-black-background-phone-size.webm"
//                         type="video/webm"
//                       />
//                     </video>
//                     {/* Video overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
//                       <p className="text-sm text-white font-medium">WhatsApp Setup</p>
//                     </div>
//                   </div>
//                   {/* Phone Notch */}
//                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-slate-800 rounded-b-xl" />
//                 </div>
//               </Card>

//               <Button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
//                 Install this WhatsApp setup
//               </Button>
//             </div>

//             {/* Facebook Setup */}
//             <div className="flex flex-col items-center group">
//               <Card className="relative p-6 bg-gradient-to-b from-slate-800 to-slate-900 border-gray-700 shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 group-hover:scale-105">
//                 <div className="relative w-48 h-96 mx-auto bg-gradient-to-b from-gray-700 to-slate-800 rounded-3xl border-4 border-gray-600 overflow-hidden shadow-inner">
//                   {/* Phone Screen with Video */}
//                   <div className="absolute inset-2 bg-black rounded-2xl overflow-hidden">
//                     <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
//                       <source
//                         src="https://www.shutterstock.com/shutterstock/videos/3841958145/preview/stock-footage--k-portrait-looping-pink-padel-racket-d-rotating-with-black-background-phone-size.webm"
//                         type="video/webm"
//                       />
//                     </video>
//                     {/* Video overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
//                       <p className="text-sm text-white font-medium">Facebook Setup</p>
//                     </div>
//                   </div>
//                   {/* Phone Notch */}
//                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-slate-800 rounded-b-xl" />
//                 </div>
//               </Card>

//               <Button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
//                 Install this Facebook setup
//               </Button>
//             </div>

//             {/* Instagram Setup */}
//             <div className="flex flex-col items-center group">
//               <Card className="relative p-6 bg-gradient-to-b from-slate-800 to-slate-900 border-gray-700 shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 group-hover:scale-105">
//                 <div className="relative w-48 h-96 mx-auto bg-gradient-to-b from-gray-700 to-slate-800 rounded-3xl border-4 border-gray-600 overflow-hidden shadow-inner">
//                   {/* Phone Screen with Video */}
//                   <div className="absolute inset-2 bg-black rounded-2xl overflow-hidden">
//                     <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
//                       <source
//                         src="https://www.shutterstock.com/shutterstock/videos/3841958145/preview/stock-footage--k-portrait-looping-pink-padel-racket-d-rotating-with-black-background-phone-size.webm"
//                         type="video/webm"
//                       />
//                     </video>
//                     {/* Video overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
//                       <p className="text-sm text-white font-medium">Instagram Setup</p>
//                     </div>
//                   </div>
//                   {/* Phone Notch */}
//                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-slate-800 rounded-b-xl" />
//                 </div>
//               </Card>

//               <Button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
//                 Install this Instagram setup
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section 2: Desktop with YouTube Video */}
//       <section className="py-16 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance text-white">Desktop Experience</h2>

//           <div className="max-w-4xl mx-auto">
//             <Card className="relative p-8 bg-gradient-to-b from-slate-800 to-slate-900 border-gray-700 shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 group">
//               {/* Laptop Mockup */}
//               <div className="relative mx-auto max-w-3xl">
//                 {/* Laptop Screen */}
//                 <div className="relative bg-gradient-to-b from-gray-700 to-slate-800 rounded-t-2xl border-4 border-gray-600 p-4 shadow-inner">
//                   <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
//                     <iframe
//                       className="w-full h-full"
//                       src="https://www.youtube.com/embed/RlPNh_PBZb4?autoplay=1&mute=1&loop=1&playlist=RlPNh_PBZb4&controls=0&showinfo=0&rel=0&modestbranding=1"
//                       title="Desktop Setup Tutorial"
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                     />
//                     {/* Video overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none flex items-end justify-center pb-4">
//                       <h3 className="text-lg font-semibold text-white">Desktop Setup Tutorial</h3>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Laptop Base */}
//                 <div className="relative h-8 bg-gradient-to-b from-gray-700 to-slate-800 rounded-b-2xl border-4 border-t-0 border-gray-600">
//                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-slate-800 rounded-t-lg" />
//                 </div>
//               </div>
//             </Card>

//             <div className="mt-12 space-y-6">
//               <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
//                 Get the complete desktop experience with our comprehensive setup guide. Perfect for power users who want
//                 to maximize their productivity.
//               </p>

//               <Button
//                 size="lg"
//                 className="bg-pink-500 hover:bg-pink-600 text-white px-12 py-4 rounded-full shadow-lg hover:shadow-pink-500/25 transition-all duration-300 text-lg"
//               >
//                 Get Started
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 px-4 bg-gradient-to-t from-slate-900 to-slate-800 border-t border-gray-700">
//         <div className="container mx-auto text-center">
//           <p className="text-gray-400">© 2024 App Setup Guide. Transform your digital experience today.</p>
//         </div>
//       </footer>
//     </div>
//   )
// }



"use client"
import { useSearchParams } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import Navigation from "@/components/Navigation";
import Link from "next/link";
import { Suspense } from "react";


// import itinsta from "@/public/instaIt.mp4"




function EkFunction() {

  const searchParams = useSearchParams();
  const business = searchParams.get("business");
  // const goal = searchParams.get("goal");

  return (

    <>

      <Suspense
        fallback={<div className="flex items-center justify-center min-h-screen bg-[#F9F9F7]">Loading plan...</div>}
      >
        <div className="min-h-screen bg-black">

          <nav className="z-20 flex justify-between items-center p-6 lg:px-12" data-testid="navigation">
            <div className="flex items-center space-x-2" data-testid="brand-logo">
              <span className="text-3xl font-semibold text-white">Weone<span className="text-green-500">AI</span></span>
            </div>

            <div className="flex items-center space-x-4" data-testid="auth-buttons">
              {/* <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors" data-testid="button-login">Log in</button> */}
              <Link href="https://calendly.com/weoneai-info/linkedin" className="px-4 py-2 bg-white text-dark-primary rounded-full cursor-pointer hover:bg-gray-100 transition-colors font-medium" data-testid="button-signup">Book Demo</Link>
            </div>
          </nav>

          {/* Header Section */}
          <header className="relative overflow-hidden py-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/30 to-blue-900/20" />
            <div className="relative container mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-balance py-6 mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Transform Your Digital Experience
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto text-pretty leading-relaxed">
                Discover powerful setups for your favorite apps with our comprehensive installation guides and video
                tutorials.
              </p>
            </div>
          </header>

          {/* Section 1: Mobile Phone Mockups with Videos */}
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Our Diverse Chatbots
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {/* First Mobile Setup */}
                <div className="flex flex-col items-center group">
                  <div className="relative w-80 h-[650px] mx-auto bg-gradient-to-b from-gray-700 to-gray-900 rounded-[3.5rem] p-3 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-105 border-2 border-gray-800">
                    {/* iPhone Outer Frame */}
                    <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[3rem] relative overflow-hidden border border-gray-700">
                      {/* Dynamic Island */}
                      {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-36 h-9 bg-black rounded-full z-10 border border-gray-600" /> */}

                      {/* Screen Content */}
                      <div className="absolute inset-0 rounded-[3rem] overflow-hidden mt-1">
                        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                          <source
                            src="fbRealEstate.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>

                      {/* Home Indicator */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-36 h-1.5 bg-white/40 rounded-full" />
                    </div>
                  </div>

                  <Link href="https://calendly.com/weoneai-info/linkedin" className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-xl transition-all duration-300 text-lg font-semibold cursor-pointer transform hover:scale-105">
                    Install Facebook Setup
                  </Link>
                </div>

                {/* Second Mobile Setup */}
                <div className="flex flex-col items-center group">
                  <div className="relative w-80 h-[650px] mx-auto bg-gradient-to-b from-gray-700 to-gray-900 rounded-[3.5rem] p-3 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-105 border-2 border-gray-800">
                    <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[3rem] relative overflow-hidden border border-gray-700">
                      {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-36 h-9 bg-black rounded-full z-10 border border-gray-600" /> */}

                      <div className="absolute inset-0 rounded-[3rem] overflow-hidden mt-1">
                        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                          {business === "IT" ?
                            <source
                              src="ItWhatsApp.mp4"
                              type="video/mp4"
                            /> : business === "Real Estate" ? <source
                              src="ItWhatsApp.mp4"
                              type="video/mp4"
                            // src="https://www.shutterstock.com/shutterstock/videos/3841958145/preview/stock-footage--k-portrait-looping-pink-padel-racket-d-rotating-with-black-background-phone-size.webm"
                            // type="video/webm"
                            /> : null}

                        </video>
                      </div>

                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-36 h-1.5 bg-white/40 rounded-full" />
                    </div>
                  </div>

                  <Link href="https://calendly.com/weoneai-info/linkedin" className="mt-8 mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition-all duration-300 text-lg font-semibold cursor-pointer transform hover:scale-105">
                    Install WhatsApp Setup
                  </Link>
                </div>

                {/* Third Mobile Setup */}
                <div className="flex flex-col items-center group">
                  <div className="relative w-80 h-[650px] mx-auto bg-gradient-to-b from-gray-700 to-gray-900 rounded-[3.5rem] p-3 shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 group-hover:scale-105 border-2 border-gray-800">
                    <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[3rem] relative overflow-hidden border border-gray-700">
                      {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-36 h-9 bg-black rounded-full z-10 border border-gray-600" /> */}

                      <div className="absolute inset-0 rounded-[3rem] overflow-hidden mt-1">
                        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                          <source
                            src="instaIt.mp4"
                            type="video/mp4"
                          />
                          {/* <source
                              src="https://www.shutterstock.com/shutterstock/videos/3841958145/preview/stock-footage--k-portrait-looping-pink-padel-racket-d-rotating-with-black-background-phone-size.webm"
                              type="video/webm"
                            /> */}
                        </video>
                      </div>

                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-36 h-1.5 bg-white/40 rounded-full" />
                    </div>
                  </div>

                  <Link href="https://calendly.com/weoneai-info/linkedin" className="mt-8 mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 text-lg font-semibold cursor-pointer transform hover:scale-105">
                    Install Insta Setup
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Desktop with YouTube Video */}
          <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/30 to-black">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white bg-clip-text text-transparent">
                Our CRM Go Through
              </h2>

              <div className="w-full max-w-5xl mx-auto">
                <div className="relative mx-auto bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-3xl p-6 shadow-2xl hover:shadow-purple-500/40 transition-all duration-500">
                  {/* Laptop Screen */}
                  <div className="relative bg-black rounded-2xl overflow-hidden shadow-inner border border-gray-600">
                    <div className="aspect-video">
                      {/* <iframe
                        className="w-full h-full rounded-2xl"
                        src="https://www.youtube.com/embed/PxPllMUyJTY?si=rhg6ogS6uDQrPXAo"
                        title="Desktop Setup Tutorial"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      /> */}


                      <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                        <source
                          src="crmDesktop.mp4"
                          type="video/mp4"
                        />
                      </video>


                    </div>

                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-purple-500/10 pointer-events-none rounded-2xl" />
                  </div>

                  {/* Laptop Camera */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rounded-full border border-gray-500" />
                </div>

                {/* Laptop Base */}
                <div className="relative h-16 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-3xl shadow-2xl mx-auto max-w-7xl border-x border-b border-gray-600">
                  {/* Trackpad */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-gray-600 rounded-xl border border-gray-500" />
                </div>

                {/* Laptop Stand Shadow */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-96 h-6 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent rounded-full blur-sm" />
              </div>

              <div className="mt-16 space-y-8">
                <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto text-pretty leading-relaxed">
                  Get the complete desktop experience with our comprehensive setup guide. Perfect for power users who want
                  to maximize their productivity and unlock advanced features.
                </p>

                <Link href="https://calendly.com/weoneai-info/linkedin" className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 text-xl font-semibold cursor-pointer transform hover:scale-105">
                  Get Started Now
                </Link>
              </div>
            </div>
          </section>

          {/* Footer */}
          {/* <footer className="py-16 px-4 bg-gradient-to-t from-black via-gray-900/30 to-black border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-white text-lg bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
            © 2024 App Setup Guide. Transform your digital experience today.
          </p>
        </div>
      </footer> */}
        </div>
      </Suspense>

    </>

  )
}




export default function Results() {
  return (
    <Suspense fallback={<div>Loading results...</div>}>
      <EkFunction />
    </Suspense>
  )
}





// "use client"

// import { useState, useEffect, Suspense } from 'react';
// import { motion } from 'framer-motion';
// import { useRouter } from 'next/navigation';

// import { useSearchParams } from 'next/navigation';
// import Link from 'next/link';




// function ResultsContent() {
//   const searchParams = useSearchParams();
//   const navigate = useRouter();
//   const [isGeneratingVideo, setIsGeneratingVideo] = useState(true);
//   const [isGeneratingLanding, setIsGeneratingLanding] = useState(true);
//   // const [videoContent, setVideoContent] = useState('');
//   // const [landingPageContent, setLandingPageContent] = useState('');
//   // const [error, setError] = useState('');

//   // Onboarding states
//   const [businessType, setBusinessType] = useState("");
//   const [goal, setGoal] = useState("");
//   // const [showOnboarding, setShowOnboarding] = useState(true);


//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const stored = localStorage.getItem("businessType") || "";
//       const goalSto = localStorage.getItem("goal") || "";
//       setBusinessType(stored);
//       setGoal(goalSto);
//     }
//   }, []);


//   // useEffect(() => {
//   //     if(businessType==="Other" && goal){
//   //       navigate.push("/waiting-list")
//   //     }
//   // }, [businessType]);


//   const [userPrompt, setUserPrompt] = useState('');
//   const [userName, setUserName] = useState('');
//   // const [userEmail, setUserEmail] = useState('');
//   const [userCompany, setUserCompany] = useState('');


//   useEffect(() => {
//     // Try to get from URL first, else fallback to localStorage
//     const prompt = searchParams.get('prompt') || localStorage.getItem('userPrompt') || '';
//     const name = searchParams.get('name') || localStorage.getItem('userName') || '';
//     const company = searchParams.get('company') || localStorage.getItem('userCompany') || '';
//     // const email = searchParams.get('email') || localStorage.getItem('userEmail') || '';
//     setUserPrompt(prompt);
//     setUserName(name);
//     setUserCompany(company);
//     // setUserEmail(email);
//   }, [searchParams]);


//   useEffect(() => {
//     console.log("userCompany", userCompany);
//   }, [userCompany])

//   // const urlParams = new URLSearchParams(window.location.search);
//   // const userPrompt = urlParams.get('prompt') || localStorage.getItem('userPrompt') || '';
//   // const userName = urlParams.get('name') || localStorage.getItem('userName') || '';
//   // const userEmail = urlParams.get('email') || localStorage.getItem('userEmail') || '';

//   // useEffect(() => {
//   //   if (!userPrompt) {
//   //     navigate.push('/');
//   //     return;
//   //   }
//   // }, [userPrompt, navigate, showOnboarding]);

//   setTimeout(() => {
//     setIsGeneratingVideo(false);
//     setIsGeneratingLanding(false);
//   }, 2000);

//   // const generateContent = async () => {
//   //   try {
//   //     await generateLandingPage();
//   //   } catch (err) {
//   //     setError('Failed to generate content. Please try again.');
//   //     console.error('Generation error:', err);
//   //   }
//   // };

//   // const generateLandingPage = async () => {
//   //   try {
//   //     const response = await fetch('/api/generate-landing', {
//   //       method: 'POST',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify({ prompt: userPrompt, userName, userEmail }),
//   //     });

//   //     if (!response.ok) throw new Error('Failed to generate landing page');

//   //     const data = await response.json();
//   //     setLandingPageContent(data.landingContent);
//   //     setIsGeneratingLanding(false);
//   //   } catch (err) {
//   //     console.error('Landing page generation error:', err);
//   //     setLandingPageContent('Landing page generation failed. Please try again.');
//   //     setIsGeneratingLanding(false);
//   //   }
//   // };

//   // Handle onboarding save
//   // const handleContinue = () => {
//     // localStorage.setItem("businessType", "");
//     // localStorage.setItem("goal", "");

//     // if (businessType === "Other" && goal) {
//     //   navigate.push("/waiting-list")
//     // }

//     // setShowOnboarding(false);
//     // generateContent();
//   // };

//   // 🔹 Onboarding UI
//   // if (showOnboarding) {
//   //   return (

//   //     <div className="min-h-screen bg-dark-primary flex items-center justify-center p-6">
//   //       <div className="bg-gray-900/80 border border-gray-700 rounded-2xl p-8 max-w-xl w-full">
//   //         <h2 className="text-2xl font-bold text-white mb-6 text-center">Tell us about your business</h2>

//   //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//   //           {/* Business Type */}
//   //           <div>
//   //             <label className="block text-sm text-gray-300 mb-2">What is your business?</label>
//   //             <select
//   //               value={businessType}
//   //               onChange={(e) => setBusinessType(e.target.value)}
//   //               className="w-full rounded-xl p-3 bg-gray-800 text-white border border-gray-600 focus:border-green-500 focus:ring-green-500"
//   //             >
//   //               <option value="">Select...</option>
//   //               <option value="IT">IT</option>
//   //               <option value="Real Estate">Real Estate</option>
//   //               <option value="Other">Other</option>
//   //             </select>
//   //           </div>

//   //           {/* Goal */}
//   //           <div>
//   //             <label className="block text-sm text-gray-300 mb-2">What is your goal?</label>
//   //             <select
//   //               value={goal}
//   //               onChange={(e) => setGoal(e.target.value)}
//   //               className="w-full rounded-xl p-3 bg-gray-800 text-white border border-gray-600 focus:border-green-500 focus:ring-green-500"
//   //             >
//   //               <option value="">Select...</option>
//   //               <option value="Lead Generation">Lead Generation</option>
//   //               <option value="Sales Growth">Sales Growth</option>
//   //               <option value="Business Automation">Business Automation</option>
//   //             </select>
//   //           </div>
//   //         </div>

//   //         <button
//   //           onClick={handleContinue}
//   //           disabled={!businessType || !goal}
//   //           className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed text-white py-3 rounded-xl font-medium transition"
//   //         >
//   //           Continue
//   //         </button>
//   //       </div>
//   //     </div>

//   //   );
//   // }






//   return (


//     <div className="min-h-screen bg-dark-primary text-white">
//       {/* Header */}
//       <header className="border-b border-gray-800 p-6">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <span className="text-3xl font-semibold">Weone<span className='text-green-500'>AI</span></span>
//           </div>
//           <div className="text-gray-400">
//             Welcome, {userName}
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto p-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8"
//         >
//           <h1 className="text-3xl font-bold mb-2">Your AI-Generated Content</h1>
//           <p className="text-gray-400">Based on your request: &apos;{userPrompt}&apos;</p>
//         </motion.div>

//         {/* Two Column Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-250px)]"> */}

//           {/* Left Section - Video */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700"
//           >
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-xl font-semibold">Your Sample Art Video</h2>
//               {isGeneratingVideo && (
//                 <div className="flex items-center space-x-2 text-blue-400">
//                   <div className="animate-spin w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full"></div>
//                   <span className="text-sm">Generating...</span>
//                 </div>
//               )}
//             </div>

//             <div className="min-h-96 bg-gray-800/50 rounded-xl flex items-center justify-center">
//               {isGeneratingVideo ? (
//                 <div className="text-center">
//                   <div className="animate-pulse">
//                     <div className="w-32 h-32 bg-gray-700 rounded-lg mx-auto mb-4"></div>
//                     <p className="text-gray-400">Creating your video content...</p>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="w-full h-full p-4">
//                   <div className="bg-black relative rounded-lg aspect-video flex items-center justify-center mb-4">

//                     <video width="640" height="360" controls>
//                       <source src="/videotemplate.mp4" type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>



//                     <div className="absolute top-4 left-12 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-md">
//                       {userCompany}
//                     </div>

//                   </div>


//                 </div>
//               )}
//             </div>
//           </motion.div>

//           {/* Right Section - Landing Page */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//             className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700"
//           >
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-xl font-semibold">Your Sample Landing Page</h2>
//               {isGeneratingLanding && (
//                 <div className="flex items-center space-x-2 text-green-400">
//                   <div className="animate-spin w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full"></div>
//                   <span className="text-sm">Generating...</span>
//                 </div>
//               )}
//             </div>

//             <div className="bg-gray-800/50 rounded-xl overflow-hidden">
//               {isGeneratingLanding ? (
//                 <div className="flex min-h-96 items-center justify-center">
//                   <div className="text-center">
//                     <div className="animate-pulse">
//                       <div className="w-32 h-40 bg-gray-700 rounded-lg mx-auto mb-4"></div>
//                       <p className="text-gray-400">Designing your landing page...</p>
//                     </div>
//                   </div>
//                 </div>
//               ) : (


//                 // <div className="w-full min-h-96 p-4">
//                 //   <div className="bg-white rounded-lg h-full overflow-auto">
//                 //     <div className="p-4 text-black text-sm">
//                 //       <div className="bg-gray-100 p-4 rounded mb-4">
//                 //         <h3 className="font-bold text-lg mb-2">Landing Page Preview</h3>
//                 //         <div className="bg-blue-500 text-white p-2 rounded text-center mb-4">
//                 //           Sample Header
//                 //         </div>
//                 //         <div className="space-y-2 text-gray-600">
//                 //           {landingPageContent.split('\n').slice(0, 10).map((line, index) => (
//                 //             <p key={index} className="text-xs">{line}</p>
//                 //           ))}
//                 //         </div>
//                 //       </div>
//                 //     </div>
//                 //   </div>
//                 // </div>

//                 <div className="w-full min-h-96 md:p-4">
//                   <div className="bg-white rounded-lg h-full overflow-auto">
//                     <div className="p-4 text-black text-sm">
//                       <div className="bg-gray-100 p-4 rounded mb-4">
//                         {/* <h3 className="font-bold text-lg mb-2">Landing Page Preview</h3> */}

//                         {/* Iframe Preview Box */}
//                         <div className="rounded relative overflow-hidden border border-gray-300 h-[450px]">
//                           <iframe
//                             src="https://landing-page-all.replit.app/"   // 👈 replace with your landing page route or full URL
//                             // src="https://www.weoneai.com/"   // 👈 replace with your landing page route or full URL
//                             title="Landing Page Preview"
//                             className="w-full h-full"
//                             frameBorder="0"
//                           ></iframe>


//                           <div className="absolute top-3 left-12 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-md">
//                             {userCompany}
//                           </div>

//                         </div>

//                       </div>
//                     </div>
//                   </div>
//                 </div>




//               )}
//             </div>
//           </motion.div>
//         </div>


//         <section className="relative text-center py-12 px-6 md:px-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 rounded-3xl shadow-lg mt-6 md:m-20">
//           {/* Headline */}
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-2xl md:text-4xl font-bold leading-snug text-gray-800">
//               This is not perfect yet.
//               <br />
//               We’ll make it perfect with our{" "}
//               <span className="text-blue-500">Human Touch</span> and{" "}
//               <span className="text-blue-500">Creativity</span>.
//             </h2>

//             <p className="mt-6 text-lg md:text-xl text-gray-600">
//               To see the final version, book a call with us and experience the difference.
//             </p>
//           </div>

//           {/* Action Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="flex justify-center mt-10"
//           >
//             <Link href="https://calendly.com/weoneai-info/linkedin" className="bg-gradient-to-r cursor-pointer from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
//               Book a Strategy Call
//             </Link>
//           </motion.div>

//           {/* Decorative subtle background effect */}
//           <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent)]"></div>
//         </section>



//         {/* <section className='text-center m-20'>
//           <div className='text-2xl font-semibold'>This is not perfect yet. We’ll make it perfect with our <span className='text-blue-400'>HUMAN TOUCH</span> and <span className='text-blue-400'>CREATIVITY</span>. To see the final version, book a call with us.</div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="flex justify-center space-x-4 mt-8"
//           >


//             <button
//               className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
//             >
//               Book a Strategy Call
//             </button>
//           </motion.div>
//         </section> */}


//       </div>
//     </div>

//   );






// }



// export default function Results() {
//   return (
//     <Suspense fallback={<div>Loading results...</div>}>
//       <ResultsContent />
//     </Suspense>
//   )
// }

