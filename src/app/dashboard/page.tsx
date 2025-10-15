"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const servicesSections = [
    { id: 'shippers', title: 'Shippers', icon: '🚚' },
    { id: 'carriers', title: 'Carriers', icon: '🛻' },
    { id: 'brokers', title: 'Brokers', icon: '🤝' },
    { id: 'suppliers', title: 'Suppliers', icon: '📦' }
  ];

  const deliveryModes = [
    { name: 'Van', description: 'For light commercial and goods', image: '🚐' },
    { name: 'Flatbed', description: 'For heavy and oversized cargo', image: '🚛' },
    { name: 'Truck', description: 'For long distance and bulk cargo', image: '🚚' },
    { name: 'Tipper', description: 'For bulk delivery and construction', image: '🚜' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-green-600 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white hover:bg-green-700 p-2 rounded-md">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Logo image only (no wrapper) */}
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="GO"
                width={90}
                height={90}
                className="object-contain drop-shadow-sm"
              />
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex space-x-8">
              <Link href="/home" className="text-white hover:text-green-100 px-3 py-2 font-medium border-b-2 border-green-400">
                Home
              </Link>
              <Link href="/buy-materials" className="text-white/80 hover:text-white px-3 py-2 font-medium transition-colors">
                Buy Materials
              </Link>
              <Link href="/natural-resources" className="text-white/80 hover:text-white px-3 py-2 font-medium transition-colors">
                Natural Resources
              </Link>
              <Link href="/press-release" className="text-white/80 hover:text-white px-3 py-2 font-medium transition-colors">
                Press Release
              </Link>
            </div>

            {/* Search and Profile */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-full px-4 py-2 pl-10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all w-64"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <span className="text-white text-sm hidden md:block">Welcome</span>
                <span className="text-white font-medium hidden md:block">Arih Monica</span>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dashboard Stats Section */}
        <div className={`stats-grid grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">247</div>
            <div className="text-gray-600">Total Deliveries</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-gray-600">Active Orders</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">On-Time Rate</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">₦2.5M</div>
            <div className="text-gray-600">Monthly Revenue</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3 space-y-10">
            
            {/* Hero Section */}
            <div className={`bg-white rounded-2xl shadow-lg p-10 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="hero-title text-5xl font-bold text-gray-800 mb-6 leading-tight animate-fade-in">
                Timely deliveries, every time.{" "}
                <span className="text-green-600 bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">Your materials, our priority</span>
              </h1>
              
              {/* Coal Section */}
              <div className="mt-10 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-between hover:shadow-md transition-shadow">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">Coal</h3>
                  <p className="text-gray-600 text-base mb-4">Available</p>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-base">
                    Buy
                  </button>
                </div>
                <div className="text-8xl animate-pulse">⚫</div>
              </div>

              {/* Download App Section */}
              <div className="mt-10 bg-gradient-to-br from-green-50 via-green-100 to-emerald-50 rounded-xl p-8 relative overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">GO</span>
                      </div>
                      <span className="text-green-800 font-bold text-2xl">Pick up</span>
                    </div>
                    <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-lg shadow-md">
                      Download App
                    </button>
                  </div>
                  <div className="text-9xl opacity-20 animate-bounce">🚚</div>
                </div>
              </div>

              {/* Time is Money Section */}
              <div className="mt-10 bg-gradient-to-r from-gray-800 via-gray-700 to-slate-800 rounded-xl p-8 text-white relative overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Time is money</h3>
                  <p className="text-gray-300 text-base mb-6 leading-relaxed">
                    We understand that time is money. 
                    As a broker, the time spent 
                    trying to link up 
                    with right haulage...
                  </p>
                </div>
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-8xl opacity-30 animate-pulse">⏰</div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Learn More Cards */}
            <div className="space-y-6">
              <div className="bg-green-600 text-white rounded-xl p-8 relative overflow-hidden">
                <h3 className="font-bold text-xl mb-4">Quality at your door step</h3>
                <button className="text-green-100 hover:text-white text-base font-medium flex items-center space-x-2">
                  <span>Learn more</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="absolute right-6 top-6 text-4xl opacity-30">✨</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-blue-400 to-green-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-5xl">
                    🏢
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">Deliver More Than Materials- We Deliver Trust.</h4>
                </div>
              </div>
            </div>

            {/* Services Sections */}
            <div className="space-y-3">
              {servicesSections.map((section) => (
                <div key={section.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{section.icon}</span>
                      <span className="font-semibold text-gray-800 text-lg">{section.title}</span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-green-600 transform transition-transform duration-300 ${
                        expandedSection === section.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedSection === section.id && (
                    <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 animate-fade-in">
                      <p className="mt-4">
                        Connect with reliable {section.title.toLowerCase()} in your network for seamless logistics operations.
                      </p>
                      <Link href={`/${section.id}`} className="inline-block mt-3 text-green-600 hover:text-green-700 font-medium transition-colors">
                        View {section.title} →
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Download App Button */}
            <button className="w-full bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 py-4 rounded-full font-semibold transition-colors text-lg">
              Download App
            </button>
          </div>
        </div>

        {/* Preferred Mode of Delivery */}
        <section className="mt-16">
          <div className="bg-green-600 text-white text-center py-8 rounded-t-2xl">
            <h2 className="text-3xl font-bold">Preferred Mode of Delivery</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {deliveryModes.map((mode) => (
              <div key={mode.name} className="bg-white border border-gray-200 p-10 text-center hover:bg-gray-50 transition-colors group">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{mode.image}</div>
                <h3 className="font-bold text-gray-800 text-xl mb-3">{mode.name}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{mode.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activities/Testimonials Section */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recent Activities & Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">John Doe</h4>
                  <p className="text-gray-600 text-sm">2 hours ago</p>
                </div>
              </div>
              <p className="text-gray-700">Successfully delivered 50 tons of coal to Lagos. Great service!</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sarah Miller</h4>
                  <p className="text-gray-600 text-sm">1 day ago</p>
                </div>
              </div>
              <p className="text-gray-700">Found reliable carriers quickly. On-time delivery every time.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">RK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Robert Kim</h4>
                  <p className="text-gray-600 text-sm">3 days ago</p>
                </div>
              </div>
              <p className="text-gray-700">GO Pickup made logistics effortless. Highly recommend!</p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="mt-20 bg-white rounded-2xl shadow-lg p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* About Us */}
            <div>
              <h3 className="font-bold text-gray-800 text-xl mb-6">About us:</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Go Pickup is an innovative logistics and haulage Company based in Nigeria, committed to transforming how businesses move goods. Our mission is to bridge the supply chain gap between manufacturers, distributors, and retailers haulage service tailored to your unique logistics needs. Through our digital platform, we match businesses with verified fleet operators, enabling rapid and seamless goods movement across cities and regions.
              </p>
            </div>

            {/* Vision Statement */}
            <div>
              <h3 className="font-bold text-gray-800 text-xl mb-6">Vision Statement:</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                To become Nigeria most trusted and innovative logistics connector, empowering businesses and individuals by facilitating seamless trade and commerce.
              </p>
            </div>

            {/* Our Goal */}
            <div>
              <h3 className="font-bold text-gray-800 text-xl mb-6">Our Goal</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                A logistics platform that empowers efficiency, trust, and growth in the supply chain.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-base">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">🌐</span>
                  <span className="text-gray-600">gopick.ng</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">📧</span>
                  <span className="text-gray-600">info@gopick.ng</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">📱</span>
                  <span className="text-gray-600">contact@gopick.ng</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}