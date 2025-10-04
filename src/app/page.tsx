import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-green-550 to-green-600 animate-gradient flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 sm:w-80 sm:h-80 bg-white/20 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 sm:w-[28rem] sm:h-[28rem] bg-white/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-white/8 rounded-full blur-2xl animate-pulse-subtle" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Main Content Container */}
      <div className="flex-1 flex flex-col justify-center items-center z-10 px-6 py-8">
        
        {/* Logo Section */}
        <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="GO Pick up Logo"
              width={280}
              height={94}
              priority
              className="object-contain hover:scale-105 transition-all duration-300 animate-float drop-shadow-lg"
            />
          </div>
        </div>

        {/* Center Content - Action Buttons */}
        <div className="flex flex-col items-center w-full max-w-sm">
          {/* Login Button */}
          <div className="w-full mb-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <Link href="/login">
              <button className="w-full bg-green-700/80 hover:bg-green-700/90 active:bg-green-800 text-white font-semibold py-5 px-8 rounded-3xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] backdrop-blur-sm border border-green-600/50 hover:border-green-500/60 focus:outline-none focus:ring-4 focus:ring-green-300/30 text-lg">
                Login
              </button>
            </Link>
          </div>
          
          {/* Sign Up Button */}
          <div className="w-full mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link href="/signup">
              <button className="w-full bg-white/90 hover:bg-white active:bg-white/95 text-gray-800 font-semibold py-5 px-8 rounded-3xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-white/30 text-lg">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Google Sign In */}
          <div className="w-full animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <button className="flex items-center justify-center gap-3 w-full bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 transform hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-white/20">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <span className="text-base font-medium">Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <footer className="pb-12 text-center animate-fade-in-up z-10" style={{animationDelay: '0.6s'}}>
        <div className="text-white/90 font-semibold text-xl sm:text-2xl drop-shadow-lg">
          Keep Moving
        </div>
      </footer>
    </div>
  );
}
