"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, redirect to dashboard on any login attempt
    // In a real app, you would validate credentials here
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-green-550 to-green-600 animate-gradient flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 sm:w-80 sm:h-80 bg-white/20 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 sm:w-[28rem] sm:h-[28rem] bg-white/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-white/8 rounded-full blur-2xl animate-pulse-subtle" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Back Button */}
      <div className="absolute top-8 left-8 z-20 animate-fade-in-up">
        <Link href="/">
          <button className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </Link>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col justify-center items-center z-10 px-6 py-12">
        
        {/* Logo Section */}
        <div className="mb-10 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="GO Pick up Logo"
              width={220}
              height={73}
              priority
              className="object-contain hover:scale-105 transition-all duration-300 animate-float drop-shadow-lg"
            />
          </div>
        </div>

        {/* Login Form Container */}
        <div className="w-full max-w-sm">
          {/* Login Title */}
          <div className="text-center mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl font-bold text-white drop-shadow-lg">Login</h2>
          </div>
          
          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {/* Email Field */}
            <div className="relative group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-5 bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-3xl text-white placeholder-transparent transition-all duration-300 focus:outline-none focus:border-white/70 focus:bg-white/25 focus:ring-4 focus:ring-white/15 text-base peer shadow-lg group-hover:border-white/50 hover:shadow-xl"
                placeholder="Enter your email"
                required
              />
              <label 
                htmlFor="email" 
                className="absolute left-6 top-5 text-white/80 text-base transition-all duration-300 pointer-events-none peer-focus:-translate-y-12 peer-focus:translate-x-1 peer-focus:scale-75 peer-focus:text-white peer-focus:font-medium peer-focus:bg-green-600 peer-focus:px-2 peer-focus:py-1 peer-focus:rounded-full peer-[:not(:placeholder-shown)]:-translate-y-12 peer-[:not(:placeholder-shown)]:translate-x-1 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-white peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:bg-green-600 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:py-1 peer-[:not(:placeholder-shown)]:rounded-full"
              >
                Email Address
              </label>
              <div className="absolute right-6 top-5 opacity-0 peer-valid:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Password Field */}
            <div className="relative group">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-5 pr-16 bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-3xl text-white placeholder-transparent transition-all duration-300 focus:outline-none focus:border-white/70 focus:bg-white/25 focus:ring-4 focus:ring-white/15 text-base peer shadow-lg group-hover:border-white/50 hover:shadow-xl"
                placeholder="Enter your password"
                required
                minLength={6}
              />
              <label 
                htmlFor="password" 
                className="absolute left-6 top-5 text-white/80 text-base transition-all duration-300 pointer-events-none peer-focus:-translate-y-12 peer-focus:translate-x-1 peer-focus:scale-75 peer-focus:text-white peer-focus:font-medium peer-focus:bg-green-600 peer-focus:px-2 peer-focus:py-1 peer-focus:rounded-full peer-[:not(:placeholder-shown)]:-translate-y-12 peer-[:not(:placeholder-shown)]:translate-x-1 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-white peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:bg-green-600 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:py-1 peer-[:not(:placeholder-shown)]:rounded-full"
              >
                Password
              </label>
              <div className="absolute right-6 top-5 opacity-0 peer-valid:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Forgot Password & Google Sign In Container */}
            <div className="space-y-8 pt-2">
              {/* Forgot Password */}
              <div className="text-right">
                <button
                  type="button"
                  className="text-white/80 hover:text-white text-sm font-medium transition-all duration-200 hover:underline underline-offset-4"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/30"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-6 bg-green-600 text-white/90 font-medium rounded-full py-1">or</span>
                </div>
              </div>

              {/* Google Sign In */}
              <div>
                <button
                  type="button"
                  onClick={() => router.push('/dashboard')}
                  className="w-full flex items-center justify-center gap-4 bg-white/15 hover:bg-white/25 backdrop-blur-md border-2 border-white/30 hover:border-white/50 rounded-3xl py-5 px-6 text-white font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/15 group shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <span className="text-base font-semibold">Continue with Google</span>
                </button>
              </div>
            </div>
          </form>

          {/* Login Button */}
          <div className="mt-10 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-800 font-bold py-6 px-8 rounded-3xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-white/40 text-lg shadow-xl"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}