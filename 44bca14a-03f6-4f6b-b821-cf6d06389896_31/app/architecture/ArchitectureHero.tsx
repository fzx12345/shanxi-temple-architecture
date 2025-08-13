'use client';

export default function ArchitectureHero() {
  return (
    <section 
      className="relative h-96 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://readdy.ai/api/search-image?query=Magnificent%20Chinese%20temple%20architecture%20in%20Shanxi%20province%2C%20detailed%20wooden%20structure%20with%20intricate%20bracket%20system%2C%20traditional%20Chinese%20architectural%20engineering%2C%20golden%20hour%20lighting%20on%20ancient%20temple%20buildings%2C%20ornate%20roof%20construction%2C%20masterpiece%20of%20Chinese%20craftsmanship&width=1920&height=600&seq=archhero1&orientation=landscape')`
      }}
    >
      <div className="text-center text-white z-10 max-w-4xl px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Pacifico'] text-amber-100">
          建筑特色
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed">
          深度探索山西寺庙建筑的精妙结构与卓越工艺
        </p>
      </div>
    </section>
  );
}