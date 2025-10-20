"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const servicesSections = [
    { id: 'shippers', title: 'Shippers' },
    { id: 'carriers', title: 'Carriers' },
    { id: 'brokers', title: 'Brokers' },
    { id: 'suppliers', title: 'Suppliers' }
  ];

  const deliveryModes = [
    { name: 'Van', description: 'For light commercial and goods' },
    { name: 'Flatbed', description: 'For heavy commercial and goods' },
    { name: 'Truck', description: 'For heavy commercial and goods' },
    { name: 'Tipper', description: 'For heavy commercial and goods' }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Navigation Header */}
      <nav className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] shadow-lg backdrop-blur-sm bg-opacity-95">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex justify-between items-center h-[70px]">
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="GO Pick up"
                width={140}
                height={60}
                className="object-contain drop-shadow-sm"
                priority
              />
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex space-x-8">
              <Link href="/home" className="text-white hover:text-white/90 font-medium transition-all duration-200 hover:scale-105 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="/buy-materials" className="text-white hover:text-white/90 font-medium transition-all duration-200 hover:scale-105 relative group">
                Buy Materials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="/natural-resources" className="text-white hover:text-white/90 font-medium transition-all duration-200 hover:scale-105 relative group">
                Natural Resources
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="/press-release" className="text-white hover:text-white/90 font-medium transition-all duration-200 hover:scale-105 relative group">
                Press Release
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3">
              <span className="text-white text-sm hidden md:block font-light">Welcome</span>
              <span className="text-white font-semibold hidden md:block">Azih Monica</span>
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-lg ring-2 ring-white/30 hover:ring-white/50 transition-all duration-200 hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                  alt="User profile picture of Azih Monica"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 py-10">
        {/* Search Icon */}
        <div className="mb-8">
          <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column - Main Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">

            {/* Hero Section */}
            <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Timely deliveries,<br />
                every time. <span className="text-[#4CAF50] bg-gradient-to-r from-[#4CAF50] to-[#45a049] bg-clip-text text-transparent">Your<br />
                materials, our<br />
                priority</span>
              </h1>

              <button className="bg-gradient-to-r from-[#8FD19E] to-[#7BC68D] hover:from-[#7BC68D] hover:to-[#6ABF7D] text-gray-800 px-10 py-3.5 rounded-full font-bold mb-10 flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Learn more
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Coal Section */}
              <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 rounded-2xl p-10 flex items-center justify-between mb-8 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Coal</h3>
                  <p className="text-gray-600 text-base mb-6 font-medium">Premium quality coal available for industrial and commercial use</p>
                  <button className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] hover:from-[#45a049] hover:to-[#3d8b40] text-white px-12 py-3.5 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Buy Now
                  </button>
                </div>
                <div className="w-40 h-40 flex items-center justify-center ml-8">
                  <Image
                    src="/coal.png"
                    alt="High quality coal for industrial use"
                    width={160}
                    height={160}
                    className="w-full h-full object-contain drop-shadow-2xl rounded-lg"
                  />
                </div>
              </div>

              {/* Truck Section */}
              <div className="bg-gradient-to-br from-green-50 via-green-100 to-emerald-50 rounded-2xl p-10 mb-8 border border-green-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#45a049] rounded-full flex items-center justify-center shadow-xl ring-4 ring-white/50">
                      <span className="text-white font-bold text-xl">GO</span>
                    </div>
                    <div>
                      <span className="text-gray-800 font-bold text-2xl block">Pick up</span>
                      <span className="text-gray-600 text-sm font-medium">Reliable logistics solutions</span>
                    </div>
                  </div>
                  <div className="w-64">
                    <Image
                      src="/truck.jpg"
                      alt="Modern delivery truck for logistics and transportation"
                      width={256}
                      height={192}
                      className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Download App Button */}
              <button className="w-full md:w-auto border-2 border-[#4CAF50] text-[#4CAF50] hover:bg-gradient-to-r hover:from-[#4CAF50] hover:to-[#45a049] hover:text-white px-16 py-4 rounded-full font-bold mb-10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Download App
              </button>

              {/* Time is Money Section */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <div className="relative w-full h-80">
                  <Image
                    src="/Group 4.png"
                    alt="Professional logistics manager overseeing operations"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar (1/3 width) */}
          <div className="space-y-5">

            {/* Quality Card */}
            <div className="bg-gradient-to-br from-[#4CAF50] to-[#45a049] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <h3 className="font-bold text-2xl mb-6 leading-tight bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">Quality at your<br />door step</h3>
              <button className="text-white hover:text-white/90 text-base font-bold flex items-center gap-3 transition-all duration-300 hover:scale-105 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full">
                Learn more
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <button className="w-full bg-gradient-to-r from-[#8FD19E] to-[#7BC68D] hover:from-[#7BC68D] hover:to-[#6ABF7D] text-gray-800 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Learn more
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Delivery Trust Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-gray-100">
              <div className="h-56 relative bg-gradient-to-br from-cyan-50 via-teal-50 to-green-50 flex items-center justify-center p-4">
                <Image
                  src="/Go PickUp Truck.png"
                  alt="GO Pick up delivery truck with packages and cargo"
                  width={400}
                  height={224}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              <div className="p-6 bg-white">
                <h4 className="font-bold text-gray-900 text-base leading-relaxed">
                  Deliver More<br />
                  Than Materials-<br />
                  We Deliver <span className="text-[#4CAF50] font-bold">Trust.</span>
                </h4>
              </div>
            </div>

            {/* Services Sections */}
            <div className="space-y-3">
              {servicesSections.map((section) => (
                <div key={section.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors rounded-xl"
                  >
                    <span className="font-bold text-[#4CAF50] text-base">{section.title}</span>
                    <div className="w-7 h-7 rounded-full bg-[#4CAF50] flex items-center justify-center shadow-sm">
                      <svg
                        className={`w-4 h-4 text-white transform transition-transform ${
                          expandedSection === section.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {expandedSection === section.id && (
                    <div className="px-5 pb-5 text-sm text-gray-600 animate-fadeIn">
                      <p className="border-t border-gray-100 pt-4">
                        Connect with reliable {section.title.toLowerCase()} for seamless logistics operations and efficient supply chain management.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Download App Button */}
            <button className="w-full border-2 border-[#4CAF50] text-[#4CAF50] hover:bg-[#f1f8f4] py-3.5 rounded-full font-bold transition-all shadow-sm hover:shadow-md">
              Download App
            </button>
          </div>
        </div>

        {/* Preferred Mode of Delivery */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white text-center py-12 rounded-t-2xl shadow-xl">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">Preferred Mode of Delivery</h2>
            <p className="text-white/90 text-lg mt-2 font-medium">Choose the perfect vehicle for your cargo needs</p>
          </div>

          <div className="bg-white rounded-b-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-4 gap-0">
              <div className="relative h-80 flex items-center justify-center">
                <Image
                  src="/Van.png"
                  alt="Van for light commercial and goods delivery"
                  width={200}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div className="relative h-80 flex items-center justify-center">
                <Image
                  src="/Lorry.png"
                  alt="Lorry for heavy commercial and goods delivery"
                  width={200}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div className="relative h-80 flex items-center justify-center">
                <Image
                  src="/Trailer.png"
                  alt="Trailer for heavy commercial and goods delivery"
                  width={200}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div className="relative h-80 flex items-center justify-center">
                <Image
                  src="/Truck.png"
                  alt="Truck for heavy commercial and goods delivery"
                  width={200}
                  height={160}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="mt-16 bg-white rounded-xl shadow-md p-10 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

            {/* About Us */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-[#4CAF50] text-base">About us:</h3>
              <p className="text-gray-600 leading-relaxed">
                Go Pickup is an innovative logistics and haulage company based in Nigeria, committed to transforming how businesses move goods. Our mission is to bridge the supply chain gap between manufacturers, distributors, and retailers haulage service tailored to your unique logistics needs. Through our digital platform, we match businesses with verified fleet operators, enabling rapid and seamless goods movement across cities and regions.
              </p>
            </div>

            {/* Vision Statement */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-[#4CAF50] text-base">Vision Statement:</h3>
              <p className="text-gray-600 leading-relaxed">
                To become Nigeria&apos;s most trusted and innovative logistics connector, empowering businesses and individuals by facilitating seamless trade and commerce.
              </p>
            </div>

            {/* Our Goal */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-[#4CAF50] text-base">Our Goal</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A logistics platform that empowers efficiency, trust, and growth in the supply chain.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">go pick up</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.747-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">officialgopickup</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">gopickup@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
