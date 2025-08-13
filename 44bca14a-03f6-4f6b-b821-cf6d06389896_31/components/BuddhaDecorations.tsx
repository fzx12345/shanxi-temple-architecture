'use client';

export default function BuddhaDecorations() {
  const decorationTypes = [
    {
      title: "莲花纹饰",
      description: "莲花作为佛教的重要象征，在山西寺庙的佛像装饰中广泛应用，寓意纯洁与觉悟。",
      symbolism: "出淤泥而不染，象征佛性的纯净与超脱",
      patterns: ["八瓣莲花", "千叶莲花", "莲花宝座", "莲花手印"],
      image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20Buddhist%20lotus%20pattern%20decorations%20on%20Buddha%20statue%2C%20intricate%20lotus%20flower%20carvings%2C%20golden%20lotus%20motifs%2C%20detailed%20Buddhist%20ornamental%20design%2C%20sacred%20lotus%20symbols%2C%20traditional%20temple%20art%2C%20ornate%20religious%20decorations%20with%20lotus%20themes&width=500&height=600&seq=deco1&orientation=portrait"
    },
    {
      title: "云雷纹样",
      description: "云雷纹是古代中国传统纹样，在佛像装饰中象征着佛法的广阔与深远。",
      symbolism: "变化无穷的云彩，寓意佛法如云雨般普润众生",
      patterns: ["卷云纹", "流云纹", "云头纹", "雷云纹"],
      image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20cloud%20and%20thunder%20pattern%20decorations%20on%20Buddhist%20statues%2C%20intricate%20swirling%20cloud%20motifs%2C%20ancient%20Chinese%20decorative%20patterns%2C%20golden%20cloud%20designs%2C%20traditional%20Buddhist%20ornamental%20art%2C%20detailed%20carved%20cloud%20patterns&width=500&height=600&seq=deco2&orientation=portrait"
    },
    {
      title: "飞天图案",
      description: "飞天是佛教艺术中的经典形象，在山西寺庙中常见于佛像背光及周围装饰。",
      symbolism: "飞天散花，象征着佛法的庄严与美好",
      patterns: ["散花飞天", "奏乐飞天", "舞蹈飞天", "礼佛飞天"],
      image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20flying%20apsaras%20celestial%20beings%20decorations%20in%20Buddhist%20temple%2C%20elegant%20flying%20figures%20with%20flowing%20robes%2C%20musical%20instruments%20and%20flowers%2C%20golden%20Buddhist%20art%2C%20detailed%20celestial%20dancer%20carvings%2C%20ancient%20religious%20artwork&width=500&height=600&seq=deco3&orientation=portrait"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">佛像纹饰艺术</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            山西寺庙的佛像纹饰融合了佛教文化与中华传统艺术，每一个图案都承载着深厚的文化内涵与精神寓意
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {decorationTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-80 overflow-hidden">
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <i className="ri-star-fill text-amber-500"></i>
                    文化寓意
                  </h4>
                  <p className="text-sm text-gray-700 italic">{type.symbolism}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">常见样式</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.patterns.map((pattern, idx) => (
                      <span key={idx} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                        {pattern}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">纹饰制作工艺</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <i className="ri-pencil-ruler-2-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">设计稿绘制</h4>
                <p className="text-sm text-gray-600">根据佛教经典与传统样式绘制精确图案</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <i className="ri-hammer-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">雕刻成型</h4>
                <p className="text-sm text-gray-600">运用传统雕刻技法精雕细琢每个细节</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <i className="ri-palette-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">彩绘装饰</h4>
                <p className="text-sm text-gray-600">采用天然矿物颜料进行精美彩绘</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">保护处理</h4>
                <p className="text-sm text-gray-600">施以保护涂层确保长久保存</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}