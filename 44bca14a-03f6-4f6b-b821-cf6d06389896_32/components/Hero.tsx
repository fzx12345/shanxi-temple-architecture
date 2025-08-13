'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://readdy.ai/api/search-image?query=Ancient%20Chinese%20temple%20in%20Shanxi%20province%20with%20traditional%20wooden%20architecture%2C%20golden%20sunset%20lighting%2C%20pagoda%20towers%2C%20curved%20roofs%20with%20upturned%20eaves%2C%20traditional%20Chinese%20architectural%20details%2C%20serene%20mountain%20background%2C%20warm%20golden%20tones%2C%20ancient%20Buddhist%20temple%20complex%2C%20detailed%20wooden%20brackets%20and%20pillars%2C%20traditional%20Chinese%20design%20elements&width=1920&height=1080&seq=hero1&orientation=landscape')`
      }}
    >
      <div className="text-center text-white z-10 max-w-4xl px-8">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 font-['Pacifico'] text-amber-100">
          山西寺庙建筑
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          探索千年古刹的建筑智慧与佛像纹饰的艺术瑰宝
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/architecture">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer">
              <i className="ri-building-2-line mr-2"></i>
              建筑特色
            </button>
          </Link>
          <Link href="/decorations">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer">
              <i className="ri-palette-line mr-2"></i>
              纹饰艺术
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}