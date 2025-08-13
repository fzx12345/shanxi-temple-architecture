'use client';

import { useState } from 'react';

export default function DynastyInfluences() {
  const [activeDynasty, setActiveDynasty] = useState('tang');

  const dynastyInfluences = [
    {
      id: 'tang',
      name: '唐代',
      period: '618-907年',
      background: '盛世气象与包容精神',
      keyFeatures: '华丽繁复·开放包容·技艺精湛',
      politicalContext: '唐朝是中国历史上最为繁荣的朝代之一，国力强盛，文化开放，为佛教艺术的发展提供了良好的政治环境。唐太宗、武则天、唐玄宗等皇帝都对佛教采取扶持政策，大兴寺院，为艺术创作提供了充足的资源。',
      artisticStyle: '唐代寺庙纹饰呈现出华丽繁复的特点，大量使用金色装饰，纹样丰富多样。宝相花纹、飞天图案达到了前所未有的艺术高度。线条流畅自然，造型饱满优美，体现了盛唐的雍容华贵。',
      culturalExchange: '丝绸之路的繁荣带来了大量外来文化元素。波斯、印度、西域各国的艺术风格与中华传统相融合，产生了独特的"胡汉合璧"装饰风格。葡萄纹、狮子纹、胡旋舞等异域元素大量出现在寺庙装饰中。',
      masterpieces: [
        {
          name: '佛光寺东大殿',
          feature: '宝相花藻井',
          description: '现存最古老的木结构建筑之一，藻井中的宝相花纹样华美绝伦，体现了唐代装饰艺术的最高水准'
        },
        {
          name: '南禅寺大佛殿',
          feature: '莲花斗拱',
          description: '斗拱上的莲花装饰简洁而优美，展现了唐代早期佛教建筑的朴素风格'
        }
      ],
      image: 'https://readdy.ai/api/search-image?query=Tang%20dynasty%20Chinese%20Buddhist%20temple%20decorative%20art%2C%20ornate%20Tang%20period%20religious%20ornaments%2C%20golden%20Tang%20dynasty%20temple%20decorations%2C%20elaborate%20Chinese%20Buddhist%20art%20from%20Tang%20era&width=600&height=400&seq=tang1&orientation=landscape'
    },
    {
      id: 'song',
      name: '宋代',
      period: '960-1279年',
      background: '理学思想与内敛美学',
      keyFeatures: '精致典雅·内敛含蓄·理性秩序',
      politicalContext: '宋代虽然军事相对较弱，但文化极为发达。理学的兴起影响了整个社会的审美观念，追求内在的精神修养。统治者对佛教采取相对温和的政策，既不过分扶持也不严厉压制。',
      artisticStyle: '宋代寺庙纹饰追求精致典雅，注重比例和谐。装饰图案更加规整，线条清晰流畅。色彩相对朴素，多用青、白、灰等素雅色调。整体风格内敛含蓄，体现了宋人的理性美学。',
      culturalExchange: '宋代与辽、金、西夏等政权并存，文化交流频繁。北方游牧民族的粗犷风格与中原精细传统相结合，产生了新的艺术样式。同时，海上丝绸之路的发展也带来了东南亚的装饰元素。',
      masterpieces: [
        {
          name: '应县木塔',
          feature: '如意云纹斗拱',
          description: '塔内各层的斗拱装饰精美绝伦，如意云纹寓意吉祥如意，体现了宋代工匠的高超技艺'
        },
        {
          name: '晋祠圣母殿',
          feature: '缠枝莲花柱',
          description: '柱身的缠枝莲花纹样线条流畅，层次分明，展现了宋代装饰艺术的精细与优雅'
        }
      ],
      image: 'https://readdy.ai/api/search-image?query=Song%20dynasty%20Chinese%20Buddhist%20temple%20decorative%20patterns%2C%20elegant%20Song%20period%20religious%20ornaments%2C%20refined%20Chinese%20temple%20decorations%20from%20Song%20era%2C%20sophisticated%20Buddhist%20architectural%20details&width=600&height=400&seq=song1&orientation=landscape'
    },
    {
      id: 'yuan',
      name: '元代',
      period: '1271-1368年',
      background: '多元文化的大融合',
      keyFeatures: '粗犷豪放·异域风情·创新突破',
      politicalContext: '元朝是由蒙古族建立的统一王朝，疆域辽阔，文化多元。蒙古统治者对各种宗教采取相对宽容的政策，佛教、道教、伊斯兰教等都得到了一定程度的发展。',
      artisticStyle: '元代寺庙纹饰呈现出粗犷豪放的特点，装饰图案大胆创新，色彩对比强烈。藏传佛教元素大量出现，八宝纹、金刚杵纹等密宗符号成为重要装饰主题。',
      culturalExchange: '元朝的统一促进了各地文化的大交流。汉传佛教与藏传佛教深度融合，产生了独特的装饰风格。同时，伊斯兰文化的几何纹样也影响了寺庙装饰的设计。',
      masterpieces: [
        {
          name: '永乐宫三清殿',
          feature: '道教与佛教纹样融合',
          description: '虽为道教宫观，但装饰中融入了大量佛教元素，体现了元代宗教文化的包容性'
        },
        {
          name: '广胜寺飞虹塔',
          feature: '琉璃装饰',
          description: '塔身的琉璃装饰色彩斑斓，图案丰富，展现了元代装饰艺术的创新精神'
        }
      ],
      image: 'https://readdy.ai/api/search-image?query=Yuan%20dynasty%20Chinese%20Buddhist%20temple%20decorative%20art%2C%20Mongol%20period%20religious%20ornaments%2C%20multicultural%20Buddhist%20temple%20decorations%2C%20Yuan%20dynasty%20temple%20architectural%20details&width=600&height=400&seq=yuan1&orientation=landscape'
    },
    {
      id: 'ming',
      name: '明代',
      period: '1368-1644年',
      background: '传统复兴与规范化',
      keyFeatures: '规整严谨·传统回归·工艺精湛',
      politicalContext: '明朝建立后，朱元璋大力整顿宗教，制定了严格的寺院管理制度。明成祖朱棣迁都北京后，大兴土木，为寺庙建筑和装饰艺术的发展提供了新的机遇。',
      artisticStyle: '明代寺庙纹饰追求规整严谨，装饰图案标准化程度很高。万字纹、回纹等几何纹样大量使用，色彩以红、黄、绿为主，体现了皇权的威严。整体风格庄重肃穆。',
      culturalExchange: '明代实行海禁政策，对外交流相对减少，但与西藏的联系依然密切。藏传佛教的影响继续存在，同时，传统汉文化的复兴也影响了装饰艺术的发展方向。',
      masterpieces: [
        {
          name: '悬空寺',
          feature: '明代重修装饰',
          description: '明代对悬空寺进行了大规模重修，增加了大量彩绘装饰，色彩鲜艳，工艺精湛'
        },
        {
          name: '五台山显通寺',
          feature: '铜殿装饰',
          description: '铜殿内外的装饰极为精美，佛像、壁画、装饰纹样浑然一体，体现了明代工艺的最高水准'
        }
      ],
      image: 'https://readdy.ai/api/search-image?query=Ming%20dynasty%20Chinese%20Buddhist%20temple%20decorative%20patterns%2C%20traditional%20Ming%20period%20religious%20ornaments%2C%20imperial%20style%20temple%20decorations%2C%20Ming%20dynasty%20Buddhist%20architectural%20art&width=600&height=400&seq=ming1&orientation=landscape'
    },
    {
      id: 'qing',
      name: '清代',
      period: '1644-1912年',
      background: '满汉融合与集大成',
      keyFeatures: '繁缛华丽·融合创新·工艺巅峰',
      politicalContext: '清朝是中国最后一个封建王朝，满族统治者为了巩固政权，采取了满汉融合的文化政策。康熙、雍正、乾隆三朝国力强盛，为文化艺术的发展提供了良好条件。',
      artisticStyle: '清代寺庙纹饰达到了繁缛华丽的极致，装饰密度极高，色彩层次丰富。既保持了传统汉式风格，又融入了满族和蒙古族的装饰元素。工艺技术达到了历史的巅峰。',
      culturalExchange: '清代疆域辽阔，民族众多，各种文化元素在寺庙装饰中都有体现。同时，与西方的接触也带来了一些新的装饰元素，虽然影响有限，但也为传统艺术注入了新的活力。',
      masterpieces: [
        {
          name: '崇善寺大悲殿',
          feature: '清代重建装饰',
          description: '清代重建后的大悲殿装饰极为华丽，彩绘、雕刻、贴金等工艺集于一体，展现了清代装饰艺术的最高成就'
        },
        {
          name: '华严寺大雄宝殿',
          feature: '藻井彩绘',
          description: '殿内藻井的彩绘装饰精美绝伦，色彩层次丰富，图案复杂多样，是清代装饰艺术的代表作品'
        }
      ],
      image: 'https://readdy.ai/api/search-image?query=Qing%20dynasty%20Chinese%20Buddhist%20temple%20decorative%20art%2C%20ornate%20Qing%20period%20religious%20ornaments%2C%20elaborate%20temple%20decorations%20from%20Qing%20era%2C%20magnificent%20Buddhist%20architectural%20details&width=600&height=400&seq=qing1&orientation=landscape'
    }
  ];

  const selectedDynasty = dynastyInfluences.find(d => d.id === activeDynasty);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">朝代影响</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            不同朝代的政治环境、文化背景和审美观念，深刻影响了寺庙纹饰艺术的发展变化
          </p>
        </div>

        {/* 朝代选择器 */}
        <div className="flex justify-center mb-16 overflow-x-auto">
          <div className="flex bg-white rounded-full p-2 shadow-lg min-w-max">
            {dynastyInfluences.map((dynasty) => (
              <button
                key={dynasty.id}
                onClick={() => setActiveDynasty(dynasty.id)}
                className={`px-6 py-3 rounded-full mx-1 transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeDynasty === dynasty.id
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <div className="text-center">
                  <div className="font-bold text-lg">{dynasty.name}</div>
                  <div className="text-xs opacity-80">{dynasty.period}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedDynasty && (
          <div className="space-y-12">
            {/* 朝代概览 */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-4 font-['Pacifico']">{selectedDynasty.name}</h3>
                <p className="text-xl mb-6">{selectedDynasty.background}</p>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <i className="ri-medal-line text-yellow-300"></i>
                  <span className="font-semibold">{selectedDynasty.keyFeatures}</span>
                </div>
              </div>
            </div>

            {/* 详细分析 */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                      <i className="ri-government-line text-white"></i>
                    </div>
                    政治背景
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{selectedDynasty.politicalContext}</p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                      <i className="ri-palette-line text-white"></i>
                    </div>
                    艺术风格
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{selectedDynasty.artisticStyle}</p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                      <i className="ri-global-line text-white"></i>
                    </div>
                    文化交流
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{selectedDynasty.culturalExchange}</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img 
                    src={selectedDynasty.image} 
                    alt={selectedDynasty.name}
                    className="relative w-full h-80 object-cover object-top rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                  />
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                      <i className="ri-building-line text-white"></i>
                    </div>
                    代表作品
                  </h4>
                  <div className="space-y-6">
                    {selectedDynasty.masterpieces.map((work, index) => (
                      <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-orange-500">
                        <h5 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                          <i className="ri-star-fill text-orange-600"></i>
                          {work.name}
                        </h5>
                        <p className="text-orange-600 font-semibold mb-3">{work.feature}</p>
                        <p className="text-gray-700 leading-relaxed text-sm">{work.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}