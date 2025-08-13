
'use client';

import { useState } from 'react';

export default function HistoricalPeriods() {
  const [selectedPeriod, setSelectedPeriod] = useState(0);

  const periods = [
    {
      name: "北魏时期",
      years: "386-534年",
      characteristics: "佛教初传，建筑风格朴素庄重，多采用石窟形式。纹饰以简洁的几何图案为主，体现早期佛教艺术的神秘色彩。",
      temples: ["云冈石窟", "华严寺", "善化寺"],
      features: ["石窟建筑", "简洁纹饰", "厚重造型"],
      color: "from-stone-400 to-gray-600",
      bgColor: "from-gray-50 to-stone-50",
      image: "https://readdy.ai/api/search-image?query=Northern%20Wei%20Dynasty%20Buddhist%20cave%20temple%20Yungang%20Grottoes%2C%20ancient%20stone%20carved%20Buddha%20statues%20in%20cave%20architecture%2C%20weathered%20sandstone%20religious%20sculptures%2C%20early%20Chinese%20Buddhist%20art%2C%20solemn%20stone%20cave%20temple%20interior%20with%20simple%20geometric%20patterns&width=800&height=500&seq=beiwei1&orientation=landscape"
    },
    {
      name: "唐代时期", 
      years: "618-907年",
      characteristics: "佛教鼎盛时期，建筑规模宏大，纹饰华丽繁复，体现盛唐气象。木构建筑技艺达到高峰，装饰艺术雄浑大气。",
      temples: ["佛光寺", "南禅寺", "天龙山石窟"],
      features: ["恢宏建筑", "华丽纹饰", "盛唐风格"],
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      image: "https://readdy.ai/api/search-image?query=Tang%20Dynasty%20Foguang%20Temple%20magnificent%20wooden%20architecture%2C%20grand%20Chinese%20temple%20with%20elaborate%20dougong%20bracket%20system%2C%20golden%20age%20Buddhist%20temple%20with%20ornate%20decorations%2C%20majestic%20Tang%20period%20temple%20halls%20with%20upturned%20eaves%2C%20prosperous%20Tang%20dynasty%20religious%20architecture&width=800&height=500&seq=tang1&orientation=landscape"
    },
    {
      name: "宋代时期",
      years: "960-1279年", 
      characteristics: "建筑风格趋于精细，注重比例协调，纹饰更加精致典雅。工艺技术日趋成熟，追求细节的完美。",
      temples: ["晋祠圣母殿", "华严寺薄伽教藏殿"],
      features: ["精细工艺", "比例协调", "典雅纹饰"],
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50", 
      image: "https://readdy.ai/api/search-image?query=Song%20Dynasty%20Jinci%20Temple%20Holy%20Mother%20Hall%20refined%20architecture%2C%20elegant%20wooden%20temple%20with%20delicate%20carvings%2C%20sophisticated%20Song%20period%20craftsmanship%2C%20harmonious%20proportions%20Chinese%20temple%2C%20classical%20refined%20temple%20design%20with%20intricate%20details&width=800&height=500&seq=song1&orientation=landscape"
    },
    {
      name: "明清时期",
      years: "1368-1912年",
      characteristics: "建筑技艺达到顶峰，装饰更加丰富多彩，融合了更多世俗元素。彩绘、琉璃等装饰技术臻于完善。",
      temples: ["悬空寺", "显通寺", "塔院寺"],
      features: ["技艺顶峰", "装饰丰富", "世俗融合"],
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      image: "https://readdy.ai/api/search-image?query=Ming%20Qing%20Dynasty%20Xuankong%20Hanging%20Temple%20built%20on%20cliff%2C%20colorful%20painted%20temple%20architecture%20with%20rich%20decorations%2C%20elaborate%20Chinese%20temple%20with%20glazed%20tiles%2C%20ornate%20Ming%20Qing%20period%20religious%20buildings%20with%20peak%20craftsmanship&width=800&height=500&seq=mingqing1&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">历史演变</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            山西寺庙建筑与纹饰艺术经历了从简朴到华丽，从传统到创新的发展历程，见证了中华文明的兴衰变迁
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {periods.map((period, index) => (
              <button
                key={index}
                onClick={() => setSelectedPeriod(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedPeriod === index
                    ? `bg-gradient-to-r ${period.color} text-white shadow-lg transform scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
                }`}
              >
                {period.name}
              </button>
            ))}
          </div>
        </div>

        <div className={`bg-gradient-to-br ${periods[selectedPeriod].bgColor} rounded-3xl overflow-hidden shadow-xl transition-all duration-500`}>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="h-96 md:h-auto overflow-hidden relative">
              <img 
                src={periods[selectedPeriod].image} 
                alt={periods[selectedPeriod].name}
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className={`bg-gradient-to-r ${periods[selectedPeriod].color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                  {periods[selectedPeriod].years}
                </span>
              </div>
            </div>
            <div className="p-12">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-3xl font-bold text-gray-800">{periods[selectedPeriod].name}</h3>
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${periods[selectedPeriod].color} animate-pulse`}></div>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {periods[selectedPeriod].characteristics}
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i className="ri-building-2-line text-amber-600"></i>
                  代表寺庙
                </h4>
                <div className="flex flex-wrap gap-3">
                  {periods[selectedPeriod].temples.map((temple, idx) => (
                    <span key={idx} className="bg-white text-gray-800 px-4 py-2 rounded-xl shadow-md border-l-4 border-amber-500 hover:shadow-lg transition-shadow cursor-default">
                      {temple}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i className="ri-star-line text-amber-600"></i>
                  时代特色
                </h4>
                <div className="space-y-3">
                  {periods[selectedPeriod].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors">
                      <i className="ri-checkbox-circle-fill text-amber-600 text-lg"></i>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 时间轴指示器 */}
        <div className="mt-12 mb-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              {periods.map((period, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      selectedPeriod === index 
                        ? `bg-gradient-to-r ${period.color} scale-125 shadow-lg` 
                        : 'bg-gray-300'
                    }`}
                  ></div>
                  {index < periods.length - 1 && (
                    <div className="w-16 h-0.5 bg-gray-300 mt-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              点击上方按钮或滚动查看不同历史时期
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
              <i className="ri-treasure-map-line text-amber-600"></i>
              文化传承价值
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              山西寺庙建筑与纹饰艺术不仅是宗教建筑的典范，更是中华民族文化智慧的结晶。它们承载着历史记忆，传承着文化血脉，
              为我们研究中国古代建筑艺术、宗教文化和社会历史提供了珍贵的实物资料。每个时期的艺术风格都反映了当时的社会文化背景和审美追求。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
