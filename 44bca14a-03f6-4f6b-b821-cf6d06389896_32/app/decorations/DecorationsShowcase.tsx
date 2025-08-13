'use client';

import { useState } from 'react';

export default function DecorationsShowcase() {
  const [activeCategory, setActiveCategory] = useState('carved');

  const showcaseCategories = [
    {
      id: 'carved',
      name: 'Carved Decorations',
      description: 'Intricate stone and wood carvings',
      items: [
        {
          title: 'Dragon Column Capital',
          temple: 'Foguang Temple',
          period: 'Tang Dynasty',
          material: 'Stone',
          description: 'Exquisitely carved dragon motif adorning a temple column capital, showcasing the masterful stone carving techniques of the Tang period.',
          image: 'https://readdy.ai/api/search-image?query=Ancient%20Chinese%20Buddhist%20temple%20dragon%20carved%20stone%20column%20capital%2C%20intricate%20dragon%20motif%20sculpture%2C%20Tang%20dynasty%20stone%20carving%2C%20ornate%20temple%20pillar%20decoration%2C%20detailed%20dragon%20relief%20carving&width=400&height=500&seq=carved1&orientation=portrait'
        },
        {
          title: 'Lotus Petal Base',
          temple: 'Jinci Temple',
          period: 'Song Dynasty',
          material: 'Stone',
          description: 'A beautifully carved lotus petal base supporting a Buddhist statue, representing purity and spiritual awakening.',
          image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20Buddhist%20temple%20lotus%20petal%20stone%20base%20carving%2C%20intricate%20lotus%20flower%20sculpture%2C%20Song%20dynasty%20stone%20craftsmanship%2C%20sacred%20lotus%20motif%20temple%20decoration&width=400&height=500&seq=carved2&orientation=portrait'
        },
        {
          title: 'Cloud Pattern Bracket',
          temple: 'Xuankong Temple',
          period: 'Northern Wei',
          material: 'Wood',
          description: 'Wooden bracket featuring flowing cloud patterns, demonstrating the sophisticated woodworking skills of ancient craftsmen.',
          image: 'https://readdy.ai/api/search-image?query=Ancient%20Chinese%20temple%20wooden%20bracket%20with%20cloud%20pattern%20carving%2C%20traditional%20architectural%20woodwork%2C%20Northern%20Wei%20dynasty%20craftsmanship%2C%20ornate%20wooden%20temple%20support%20structure&width=400&height=500&seq=carved3&orientation=portrait'
        }
      ]
    },
    {
      id: 'painted',
      name: 'Painted Decorations',
      description: 'Colorful paintings and murals',
      items: [
        {
          title: 'Flying Apsaras Mural',
          temple: 'Shanhua Temple',
          period: 'Liao Dynasty',
          material: 'Mineral Pigments',
          description: 'Ethereal flying apsaras painted on temple walls, showcasing the divine realm through vibrant colors and graceful forms.',
          image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20Buddhist%20temple%20flying%20apsaras%20mural%20painting%2C%20colorful%20celestial%20beings%20wall%20art%2C%20Liao%20dynasty%20temple%20fresco%2C%20divine%20dancers%20painted%20decoration&width=400&height=500&seq=painted1&orientation=portrait'
        },
        {
          title: 'Mandala Ceiling',
          temple: 'Great Buddha Hall',
          period: 'Yuan Dynasty',
          material: 'Natural Pigments',
          description: 'Intricate mandala painted on the temple ceiling, representing the cosmic order and Buddhist cosmology.',
          image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20Buddhist%20temple%20ceiling%20mandala%20painting%2C%20intricate%20cosmic%20pattern%20artwork%2C%20Yuan%20dynasty%20temple%20ceiling%20decoration%2C%20colorful%20religious%20geometric%20art&width=400&height=500&seq=painted2&orientation=portrait'
        },
        {
          title: 'Guardian Deity Portrait',
          temple: 'Twin Pagoda Temple',
          period: 'Ming Dynasty',
          material: 'Gold Leaf Paint',
          description: 'Powerful guardian deity painted with gold leaf accents, protecting the sacred space with fierce compassion.',
          image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20Buddhist%20temple%20guardian%20deity%20painting%2C%20fierce%20protective%20god%20portrait%2C%20Ming%20dynasty%20religious%20art%2C%20golden%20temple%20wall%20painting&width=400&height=500&seq=painted3&orientation=portrait'
        }
      ]
    },
    {
      id: 'metalwork',
      name: 'Metal Decorations',
      description: 'Bronze and iron ornamental work',
      items: [
        {
          title: 'Bronze Incense Burner',
          temple: 'Dayun Temple',
          period: 'Tang Dynasty',
          material: 'Bronze',
          description: 'Ornate bronze incense burner with intricate relief patterns, used in Buddhist ceremonial practices.',
          image: 'https://readdy.ai/api/search-image?query=Ancient%20Chinese%20Buddhist%20temple%20bronze%20incense%20burner%2C%20ornate%20ceremonial%20vessel%2C%20Tang%20dynasty%20metalwork%2C%20intricate%20bronze%20relief%20patterns%2C%20traditional%20temple%20ritual%20objects&width=400&height=500&seq=metal1&orientation=portrait'
        },
        {
          title: 'Iron Temple Door',
          temple: 'Iron Pagoda Temple',
          period: 'Song Dynasty',
          material: 'Cast Iron',
          description: 'Masterfully cast iron temple door featuring Buddhist symbols and protective motifs in raised relief.',
          image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20Buddhist%20temple%20cast%20iron%20door%20decoration%2C%20ornate%20metal%20temple%20entrance%2C%20Song%20dynasty%20ironwork%2C%20Buddhist%20symbols%20metal%20relief&width=400&height=500&seq=metal2&orientation=portrait'
        },
        {
          title: 'Gilt Bronze Finial',
          temple: 'White Horse Temple',
          period: 'Northern Wei',
          material: 'Gilt Bronze',
          description: 'Elaborate gilt bronze finial crowning a temple roof, symbolizing the connection between earth and heaven.',
          image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20Buddhist%20temple%20gilt%20bronze%20roof%20finial%2C%20golden%20temple%20spire%20decoration%2C%20Northern%20Wei%20dynasty%20metalwork%2C%20ornate%20temple%20roof%20ornament&width=400&height=500&seq=metal3&orientation=portrait'
        }
      ]
    },
    {
      id: 'ceramic',
      name: 'Ceramic Decorations',
      description: 'Glazed tiles and ceramic ornaments',
      items: [
        {
          title: 'Glazed Roof Tiles',
          temple: 'Huayan Temple',
          period: 'Ming Dynasty',
          material: 'Glazed Ceramic',
          description: 'Brilliant glazed roof tiles in imperial yellow and green, creating a stunning visual display on the temple roof.',
          image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20Buddhist%20temple%20glazed%20ceramic%20roof%20tiles%2C%20colorful%20temple%20roofing%2C%20Ming%20dynasty%20architectural%20ceramics%2C%20imperial%20yellow%20and%20green%20glazed%20tiles&width=400&height=500&seq=ceramic1&orientation=portrait'
        },
        {
          title: 'Ceramic Guardian Lion',
          temple: 'Guangsheng Temple',
          period: 'Yuan Dynasty',
          material: 'Glazed Ceramic',
          description: 'Majestic ceramic guardian lion with vibrant glaze, protecting the temple entrance with symbolic power.',
          image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20Buddhist%20temple%20ceramic%20guardian%20lion%20statue%2C%20glazed%20protective%20lion%20sculpture%2C%20Yuan%20dynasty%20temple%20ceramics%2C%20colorful%20temple%20guardian%20figure&width=400&height=500&seq=ceramic2&orientation=portrait'
        },
        {
          title: 'Decorative Wall Tiles',
          temple: 'Shuanglin Temple',
          period: 'Qing Dynasty',
          material: 'Painted Ceramic',
          description: 'Intricately painted ceramic wall tiles depicting Buddhist stories and natural motifs in vivid detail.',
          image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20Buddhist%20temple%20painted%20ceramic%20wall%20tiles%2C%20decorative%20temple%20ceramics%2C%20Qing%20dynasty%20temple%20wall%20art%2C%20colorful%20ceramic%20religious%20decorations&width=400&height=500&seq=ceramic3&orientation=portrait'
        }
      ]
    }
  ];

  const activeItems = showcaseCategories.find(cat => cat.id === activeCategory)?.items || [];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Temple Decoration Showcase</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore masterpieces of decorative art from famous Shanxi temples, showcasing centuries of artistic excellence
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            {showcaseCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full mx-1 transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {showcaseCategories.find(cat => cat.id === activeCategory)?.name}
          </h3>
          <p className="text-amber-600 text-lg">
            {showcaseCategories.find(cat => cat.id === activeCategory)?.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activeItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-80 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">{item.temple}</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">{item.period}</span>
                </div>
                <div className="mb-4">
                  <span className="text-gray-600 font-semibold">Material: </span>
                  <span className="text-gray-800">{item.material}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Preserving Artistic Heritage</h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              These decorative masterpieces represent not just artistic achievement, but the spiritual devotion and cultural values of countless generations. Each piece tells a story of faith, craftsmanship, and the enduring human desire to create beauty in honor of the divine. Through careful preservation and study, we ensure that these treasures continue to inspire and educate future generations about the rich artistic heritage of Shanxi's Buddhist temples.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}