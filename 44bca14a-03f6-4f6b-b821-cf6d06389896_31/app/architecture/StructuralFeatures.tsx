'use client';

export default function StructuralFeatures() {
  const features = [
    {
      title: "斗拱系统",
      subtitle: "力学与美学的完美结合",
      description: "斗拱是中国古建筑独有的结构形式，由斗、拱、翘、昂等构件组成。山西寺庙的斗拱不仅承担着承重功能，更是装饰艺术的重要组成部分。",
      details: [
        "层层递出的拱形结构分散建筑重量",
        "榫卯连接确保结构稳固性",
        "装饰彩绘增添美学价值",
        "不同时期风格各异的设计演变"
      ],
      image: "https://readdy.ai/api/search-image?query=Detailed%20close-up%20of%20traditional%20Chinese%20dougong%20bracket%20system%2C%20intricate%20wooden%20interlocking%20brackets%20in%20ancient%20temple%2C%20complex%20joinery%20system%2C%20golden%20wood%20texture%2C%20masterful%20carpentry%20craftsmanship%2C%20architectural%20engineering%20marvel%2C%20ornate%20bracket%20clusters&width=600&height=400&seq=struct1&orientation=landscape"
    },
    {
      title: "梁柱框架",
      subtitle: "柔性抗震的智慧结构",
      description: "山西寺庙采用梁柱式木构框架，这种结构体系具有良好的抗震性能。柱子承重，梁枋连接，形成稳定的空间结构。",
      details: [
        "柱础石保护木柱免受潮湿侵蚀",
        "梁枋系统形成完整的受力体系",
        "木材的柔性提供抗震缓冲",
        "模数化设计便于建造和维修"
      ],
      image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20temple%20wooden%20frame%20structure%2C%20massive%20wooden%20pillars%20and%20beam%20system%2C%20ancient%20carpentry%20framework%2C%20temple%20interior%20architecture%2C%20detailed%20wooden%20joinery%2C%20classical%20Chinese%20construction%20technique&width=600&height=400&seq=struct2&orientation=landscape"
    },
    {
      title: "屋面系统",
      subtitle: "精巧的防水排水设计",
      description: "山西寺庙的屋面设计不仅美观，更具有优秀的防水排水功能。从瓦片铺设到檐口设计，每个细节都体现着古代工匠的智慧。",
      details: [
        "筒瓦板瓦相间铺设形成有效防水",
        "屋脊装饰兼具美观与功能",
        "飞檐设计增强排水效果",
        "不同坡度适应当地气候条件"
      ],
      image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20temple%20roof%20system%20with%20curved%20tiles%2C%20detailed%20roof%20construction%2C%20ornate%20roof%20ridge%20decorations%2C%20flying%20eaves%20design%2C%20ancient%20Chinese%20roofing%20technique%2C%20golden%20traditional%20roof%20tiles&width=600&height=400&seq=struct3&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">结构特色</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            山西寺庙建筑在结构设计上体现了中国古代建筑的卓越智慧，每一个构件都承载着深厚的技术内涵
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-amber-600 font-semibold mb-4">{feature.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <i className="ri-checkbox-circle-fill text-amber-600"></i>
                        </div>
                        <p className="text-gray-700">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={`h-80 rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}