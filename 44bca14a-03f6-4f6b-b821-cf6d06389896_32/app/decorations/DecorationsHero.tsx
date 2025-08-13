'use client';

export default function DecorationsHero() {
  return (
    <section 
      className="relative h-96 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://readdy.ai/api/search-image?query=Intricate%20Buddhist%20temple%20decorative%20patterns%20and%20ornamental%20carvings%2C%20golden%20lotus%20flowers%20and%20cloud%20motifs%2C%20traditional%20Chinese%20religious%20decorative%20art%2C%20ornate%20temple%20wall%20decorations%2C%20detailed%20Buddhist%20ornamental%20designs&width=1920&height=600&seq=decohero1&orientation=landscape')`
      }}
    >
      <div className="text-center text-white z-10 max-w-4xl px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Pacifico'] text-amber-100">
          纹饰艺术
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed">
          探索山西寺庙佛像纹饰的精美工艺与深刻寓意
        </p>
      </div>
    </section>
  );
}