import Image from "next/image";
import Link from "next/link";

type Item = {
  name: string;
  subtitle?: string;
  price: string;
  size?: string;
  unit?: string;
  imageSrc: string;
  imageAlt: string;
};

const items: Item[] = [
  {
    name: "Dangote Cement",
    price: "N 5,500",
    size: "50kg",
    imageSrc: "/logo.png", // placeholder; swap with real product image
    imageAlt: "Cement product image",
  },
  {
    name: "Roofing Sheet",
    subtitle: "Zinc",
    price: "N 3,000/sqm",
    imageSrc: "/window.svg", // placeholder
    imageAlt: "Roofing sheet colors",
  },
  {
    name: "Building Blocks",
    price: "N 500 per block",
    size: "6 Inch, 9 Inch",
    imageSrc: "/file.svg", // placeholder
    imageAlt: "Concrete building blocks",
  },
  {
    name: "Steel Rods",
    price: "N 9,800 per bundle",
    size: "12mm, 16mm",
    imageSrc: "/vercel.svg", // placeholder
    imageAlt: "Steel rods / rebar",
  },
];

export default function BuyMaterialsPage() {
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
            <Link href="/buy-materials" className="font-semibold">Buy Materials</Link>
            <Link href="/dashboard#natural-resources" className="hover:text-white/90">Natural Resources</Link>
            <Link href="/press-release" className="hover:text-white/90">Press Release</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="max-w-[1400px] mx-auto px-6 py-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Buy Materials</h1>
      </header>

      {/* Cards */}
      <main className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
        {items.map((item) => (
          <div key={item.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-44 h-28 relative rounded-xl overflow-hidden bg-gray-50 border border-gray-200">
                <Image src={item.imageSrc} alt={item.imageAlt} fill className="object-contain p-2" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold">{item.name}</h3>
                {item.subtitle && <p className="text-gray-600 text-sm">{item.subtitle}</p>}
                <p className="text-gray-600 text-sm mt-2">Available</p>
                <p className="text-[#2e7d32] font-bold">{item.price}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-4">
              {item.size && (
                <p className="text-2xl font-bold text-gray-800 text-right whitespace-pre-line">{item.size}</p>
              )}
              <button className="bg-[#4CAF50] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#45a049] transition-all">Add to Cart</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
