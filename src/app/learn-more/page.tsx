import Image from "next/image";
import Link from "next/link";

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Top Bar */}
      <nav className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] shadow-lg">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex justify-between items-center h-[70px]">
            <div className="flex items-center">
              <Image src="/logo.png" alt="GO Pick up" width={130} height={56} className="object-contain" />
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/dashboard" className="text-white font-medium hover:text-white/90">Home</Link>
              <Link href="/buy-materials" className="text-white font-medium hover:text-white/90">Buy Materials</Link>
              <a href="#natural-resources" className="text-white font-medium hover:text-white/90">Natural Resources</a>
              <Link href="/press-release" className="text-white font-medium hover:text-white/90">Press Release</Link>
            </div>
            <div>
              <Link href="mailto:gopickup@gmail.com" className="bg-white/10 text-white border border-white/30 hover:bg-white/20 px-4 py-2 rounded-full font-semibold transition-all">Contact us</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 py-10">
        {/* Help Center Card */}
        <section className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 mb-10 flex items-center gap-6">
          <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
            <Image src="/globe.svg" alt="Help Center" width={24} height={24} />
          </div>
          <div className="flex-1">
            <h2 className="text-gray-900 font-bold text-lg">Customer Service</h2>
            <p className="text-gray-600 text-sm">Help Center</p>
          </div>
          <Link href="mailto:gopickup@gmail.com" className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white px-5 py-2 rounded-full font-bold hover:shadow-md transition-all">
            Contact us
          </Link>
        </section>

        {/* Three-column overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Shippers */}
          <div id="shippers">
            <h3 className="text-gray-900 font-bold text-xl mb-4">Shippers</h3>
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
              <div className="h-40 relative">
                <Image src="/Truck GoPick 1.png" alt="Shipping operations" fill className="object-cover" />
              </div>
              <div className="p-5 text-sm text-gray-700 leading-relaxed">
                <p className="mb-3 font-medium">Simplify your deliveries. Trust Go Pickup.</p>
                <p className="mb-4">Connect with vetted carriers, track in real-time, and manage transparent pricing and invoicing from one dashboard.</p>
                <p className="font-semibold mb-2">Benefits for our shippers:</p>
                <ul className="space-y-1 list-disc pl-5">
                  <li>Schedule pickups in minutes</li>
                  <li>Track deliveries in real time</li>
                  <li>Transparent pricing & invoicing</li>
                  <li>Dedicated support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Brokers */}
          <div id="brokers">
            <h3 className="text-gray-900 font-bold text-xl mb-4">Brokers</h3>
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
              <div className="h-40 relative">
                <Image src="/Group 4.png" alt="Broker network management" fill className="object-cover" />
              </div>
              <div className="p-5 text-sm text-gray-700 leading-relaxed">
                <p className="mb-3 font-medium">Your logistics network. Supercharged.</p>
                <p className="mb-4">Coordinate fleets, optimize delivery chains, and manage multiple shipments from one scalable platform.</p>
                <p className="font-semibold mb-2">Why carriers love Go Pickup:</p>
                <ul className="space-y-1 list-disc pl-5">
                  <li>Multi-order management</li>
                  <li>Carrier coordination tools</li>
                  <li>Real-time performance tracking</li>
                  <li>Analytics for smarter decisions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Suppliers */}
          <div id="suppliers">
            <h3 className="text-gray-900 font-bold text-xl mb-4">Suppliers</h3>
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
              <div className="h-40 relative">
                <Image src="/Go PickUp Truck.png" alt="Supplier warehouse operations" fill className="object-contain bg-gray-50" />
              </div>
              <div className="p-5 text-sm text-gray-700 leading-relaxed">
                <p className="mb-3 font-medium">Supply chain efficiency starts here.</p>
                <p className="mb-4">Deliver raw materials or finished products reliably—our platform ensures every link moves smoothly.</p>
                <p className="font-semibold mb-2">Go Pickup helps suppliers:</p>
                <ul className="space-y-1 list-disc pl-5">
                  <li>Deliver materials reliably</li>
                  <li>Maintain delivery schedules</li>
                  <li>Streamline dispatch logistics</li>
                  <li>Strengthen customer relationships</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Carriers */}
        <section id="carriers" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-gray-900 font-bold text-xl mb-4">Carriers</h3>
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
              <div className="h-44 relative">
                <Image src="/truck.jpg" alt="Carrier fleet yard" fill className="object-cover" />
              </div>
              <div className="p-5 text-sm text-gray-700 leading-relaxed">
                <p className="mb-3 font-medium">Drive more. Earn more. On your terms.</p>
                <p className="mb-4">Access a steady stream of requests, optimize routes, and get matched to jobs near you.</p>
                <p className="font-semibold mb-2">Why carriers love Go Pickup:</p>
                <ul className="space-y-1 list-disc pl-5">
                  <li>Get jobs matched to your location</li>
                  <li>Route optimization for efficiency</li>
                  <li>Instant earnings dashboard</li>
                  <li>24/7 driver support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex md:justify-end">
            <Link href="#download" className="w-full md:w-auto border-2 border-[#4CAF50] text-[#4CAF50] hover:bg-gradient-to-r hover:from-[#4CAF50] hover:to-[#45a049] hover:text-white px-12 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl text-center">
              Download App
            </Link>
          </div>
        </section>

        <section id="download" className="sr-only" aria-hidden>
          {/* Placeholder anchor target for CTA */}
        </section>
      </main>
    </div>
  );
}
