'use client';

export default function HistoryHero() {
  return (
    <section 
      className="relative h-96 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://readdy.ai/api/search-image?query=Ancient%20Chinese%20scroll%20painting%20showing%20the%20evolution%20of%20Buddhist%20temple%20decorative%20patterns%20through%20different%20dynasties%2C%20traditional%20Chinese%20ink%20painting%20style%20depicting%20historical%20temple%20art%20development%2C%20cultural%20heritage%20artwork%20with%20timeline%20elements%2C%20ancient%20Chinese%20cultural%20scrolls%20with%20Buddhist%20motifs&width=1920&height=600&seq=historyhero1&orientation=landscape')`
      }}
    >
      <div className="text-center text-white z-10 max-w-4xl px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Pacifico'] text-amber-100">
          纹样历史
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed">
          千年传承的文化底蕴与历史故事
        </p>
      </div>
    </section>
  );
}