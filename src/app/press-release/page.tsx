import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  { name: "Junior Feliz Castillo", role: "Co‑Founder & President", image: "/team/junior-feliz-castillo.jpg" },
  { name: "Oti Lawrence Ebuka", role: "Co‑Founder & CEO", image: "/team/oti-lawrence-ebuka.jpg" },
  { name: "Okpe Isaac Focuz", role: "Chief Technology Officer/CTO", image: "/team/okpe-isaac-focuz.jpg" },
  { name: "Oti Melody", role: "Head of Human Resources", image: "/team/oti-melody.jpg" },
];

export default function PressReleasePage() {

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Top Bar */}
      <nav className="bg-[#4CAF50] text-white shadow-lg">
        <div className="max-w-[1400px] mx-auto px-6 h-[70px] flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image src="/logo.png" alt="GO Pick up" width={120} height={48} />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/dashboard" className="hover:text-white/90">Home</Link>
            <Link href="/buy-materials" className="hover:text-white/90">Buy Materials</Link>
            <Link href="/dashboard#natural-resources" className="hover:text-white/90">Natural Resources</Link>
            <Link href="/press-release" className="font-semibold">Press Release</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-[1400px] mx-auto px-6 py-10">
        <p className="text-gray-600 font-semibold mb-2">Press Release</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Meet our team members.</h1>
      </header>

      {/* Team grid (matches screenshot vibe) */}
      <section id="team" className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-white rounded-2xl p-6 flex items-center gap-6 border border-gray-100 shadow-sm">
            <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
              <Image src={member.image || "/truck.jpg"} alt="Team member portrait" width={112} height={112} className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#2e7d32] font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </section>

      {/* End of content */}
    </div>
  );
}
