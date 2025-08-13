'use client';

export default function CraftingProcess() {
  const craftingSteps = [
    {
      step: 1,
      title: "Design Planning",
      description: "Master craftsmen carefully study traditional patterns and create detailed sketches based on Buddhist scriptures and architectural requirements.",
      techniques: ["Pattern research", "Sketch drawing", "Scale planning", "Material selection"],
      image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20craftsman%20designing%20Buddhist%20temple%20decorative%20patterns%2C%20ancient%20master%20artist%20drawing%20ornate%20religious%20motifs%2C%20detailed%20pattern%20sketching%20process%2C%20traditional%20Chinese%20decorative%20art%20planning&width=400&height=300&seq=craft1&orientation=landscape"
    },
    {
      step: 2,
      title: "Material Preparation",
      description: "Select high-quality materials such as wood, stone, and metal, then prepare them through proper treatment and seasoning processes.",
      techniques: ["Wood seasoning", "Stone selection", "Metal forging", "Surface preparation"],
      image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20temple%20decoration%20materials%20preparation%2C%20wooden%20blocks%20stone%20slabs%20metal%20sheets%2C%20craftsman%20preparing%20materials%20for%20Buddhist%20temple%20ornaments%2C%20ancient%20building%20materials%20workshop&width=400&height=300&seq=craft2&orientation=landscape"
    },
    {
      step: 3,
      title: "Pattern Transfer",
      description: "Transfer the designed patterns onto the prepared materials using traditional techniques such as carbon paper or stenciling.",
      techniques: ["Pattern tracing", "Stencil application", "Grid method", "Proportional scaling"],
      image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20craftsman%20transferring%20decorative%20patterns%20onto%20temple%20materials%2C%20pattern%20tracing%20process%2C%20ancient%20technique%20of%20design%20transfer%2C%20Buddhist%20temple%20ornament%20creation&width=400&height=300&seq=craft3&orientation=landscape"
    },
    {
      step: 4,
      title: "Carving and Shaping",
      description: "Skilled artisans carefully carve the patterns using traditional tools, creating intricate three-dimensional decorative elements.",
      techniques: ["Hand carving", "Relief sculpting", "Detail refinement", "Texture creation"],
      image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20craftsman%20carving%20intricate%20Buddhist%20temple%20decorations%2C%20master%20artisan%20sculpting%20ornate%20religious%20patterns%2C%20detailed%20wood%20carving%20process%2C%20ancient%20temple%20decoration%20craftsmanship&width=400&height=300&seq=craft4&orientation=landscape"
    },
    {
      step: 5,
      title: "Finishing and Gilding",
      description: "Apply traditional finishing techniques including gilding, painting, and lacquering to enhance the beauty and durability of the decorations.",
      techniques: ["Gold leaf application", "Traditional painting", "Lacquer coating", "Color enhancement"],
      image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20temple%20decoration%20finishing%20process%2C%20gold%20leaf%20application%20on%20Buddhist%20ornaments%2C%20artisan%20applying%20golden%20finish%20to%20temple%20decorations%2C%20ancient%20gilding%20techniques&width=400&height=300&seq=craft5&orientation=landscape"
    },
    {
      step: 6,
      title: "Installation and Assembly",
      description: "Carefully install the completed decorative elements in their designated positions, ensuring perfect alignment and structural integrity.",
      techniques: ["Precise positioning", "Structural mounting", "Alignment adjustment", "Final inspection"],
      image: "https://readdy.ai/api/search-image?query=Installation%20of%20traditional%20Chinese%20Buddhist%20temple%20decorations%2C%20craftsmen%20mounting%20ornate%20religious%20ornaments%2C%20temple%20decoration%20assembly%20process%2C%20ancient%20building%20ornamentation%20installation&width=400&height=300&seq=craft6&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Traditional Crafting Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The creation of temple decorations follows time-honored techniques passed down through generations of master craftsmen
          </p>
        </div>

        <div className="space-y-12">
          {craftingSteps.map((step, index) => (
            <div key={index} className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Key Techniques</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.techniques.map((technique, idx) => (
                        <span key={idx} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                          {technique}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}