'use client';

import { useState } from 'react';

export default function PatternEvolution() {
  const [selectedPeriod, setSelectedPeriod] = useState('weijin');

  const evolutionPeriods = [
    {
      id: 'weijin',
      name: '魏晋南北朝',
      period: '220-589年',
      background: '佛教传入中国初期',
      characteristics: [
        {
          pattern: '莲花纹',
          origin: '印度佛教艺术',
          evolution: '从简单的莲瓣形状逐渐发展为多层次的复合莲花图案',
          cultural: '佛教净土思想的视觉化表达，象征着从世俗苦海中获得解脱',
          story: '据《高僧传》记载，北魏孝文帝时期，印度高僧跋陀禅师来到平城（今大同），在云冈石窟的雕刻中首次将印度式的莲花纹与中原传统装饰相结合，形成了独特的"中式莲花"风格。',
          image: 'https://readdy.ai/api/search-image?query=Ancient%20Chinese%20Wei%20Jin%20dynasty%20Buddhist%20lotus%20pattern%20evolution%2C%20early%20Chinese%20Buddhist%20temple%20decorative%20art%2C%20traditional%20lotus%20motif%20carved%20in%20stone%2C%20Northern%20Wei%20dynasty%20religious%20art%2C%20primitive%20lotus%20flower%20carving%20with%20Chinese%20characteristics&width=400&height=300&seq=wei1&orientation=landscape'
        },
        {
          pattern: '忍冬纹',
          origin: '西域丝绸之路',
          evolution: '从波斯萨珊风格转化为具有中国特色的卷草纹样',
          cultural: '生命力顽强的忍冬藤蔓，寓意佛法的不朽与永恒传承',
          story: '南北朝时期，随着丝绸之路的繁荣，来自波斯的忍冬纹样传入中原。北齐时期的响堂山石窟中，工匠们将这种异域纹样与本土的云雷纹结合，创造出了独具特色的"忍冬云雷纹"。',
          image: 'https://readdy.ai/api/search-image?query=Ancient%20Chinese%20honeysuckle%20vine%20pattern%20from%20Wei%20Jin%20period%2C%20traditional%20Chinese%20temple%20decorative%20scrollwork%2C%20early%20Buddhist%20art%20with%20Persian%20influence%2C%20carved%20stone%20relief%20with%20flowing%20vine%20motifs&width=400&height=300&seq=wei2&orientation=landscape'
        }
      ]
    },
    {
      id: 'tang',
      name: '唐代',
      period: '618-907年',
      background: '佛教艺术的黄金时代',
      characteristics: [
        {
          pattern: '宝相花纹',
          origin: '唐代宫廷艺术',
          evolution: '将莲花、牡丹等多种花卉元素融合，形成华丽的装饰纹样',
          cultural: '盛唐气象的体现，象征着佛法的富贵庄严与功德圆满',
          story: '开元年间，唐玄宗下令在五台山建造大华严寺。当时的宫廷画师张萱受命设计寺院装饰，他将皇家园林中的牡丹花与佛教的莲花结合，创造出了华美的宝相花纹。这种纹样后来成为唐代寺院装饰的标志性图案。',
          image: 'https://readdy.ai/api/search-image?query=Tang%20dynasty%20Chinese%20Buddhist%20temple%20baoxiang%20flower%20pattern%2C%20ornate%20Tang%20period%20religious%20decorative%20art%2C%20imperial%20style%20floral%20motifs%20in%20golden%20temple%20decoration%2C%20elaborate%20Chinese%20Buddhist%20ornamental%20design&width=400&height=300&seq=tang1&orientation=landscape'
        },
        {
          pattern: '飞天图案',
          origin: '犍陀罗艺术与汉代飞仙',
          evolution: '从印度式的厚重飞天演变为轻盈飘逸的中国式飞天',
          cultural: '天人合一思想的艺术表达，展现佛国净土的美好愿景',
          story: '天宝年间，著名画家吴道子为长安青龙寺绘制壁画时，创造性地将印度飞天的神圣庄严与中国传统飞仙的飘逸灵动相结合。他笔下的飞天不仅散花礼佛，还奏乐起舞，开创了中国式飞天艺术的先河。',
          image: 'https://readdy.ai/api/search-image?query=Tang%20dynasty%20Chinese%20flying%20apsaras%20celestial%20beings%20in%20Buddhist%20temple%20art%2C%20elegant%20Tang%20period%20flying%20dancers%20with%20flowing%20robes%2C%20traditional%20Chinese%20heavenly%20musicians%20and%20flower%20scattering%20figures&width=400&height=300&seq=tang2&orientation=landscape'
        }
      ]
    },
    {
      id: 'song',
      name: '宋辽金',
      period: '960-1279年',
      background: '理学思想与佛教的融合',
      characteristics: [
        {
          pattern: '缠枝纹',
          origin: '唐代卷草纹的发展',
          evolution: '线条更加流畅自然，追求含蓄内敛的美学效果',
          cultural: '宋代理学"天理"观念的体现，强调自然秩序的和谐统一',
          story: '北宋时期，著名匠师李诫在编撰《营造法式》时，特别记录了山西应县木塔的缠枝纹装饰技法。他认为缠枝纹的连绵不断象征着佛法的永续传承，其自然流转的形态体现了宋人对"天人合一"哲学的理解。',
          image: 'https://readdy.ai/api/search-image?query=Song%20dynasty%20Chinese%20temple%20intertwining%20vine%20pattern%20decoration%2C%20elegant%20flowing%20vine%20motifs%20in%20Buddhist%20temple%20art%2C%20refined%20Song%20period%20ornamental%20scrollwork%2C%20natural%20flowing%20decorative%20patterns&width=400&height=300&seq=song1&orientation=landscape'
        },
        {
          pattern: '如意云纹',
          origin: '汉代云气纹的演化',
          evolution: '形态更加规整，寓意更加吉祥',
          cultural: '追求内心宁静的禅宗思想体现，象征心如止水的修行境界',
          story: '金代时期，山西大同华严寺的重建工程中，主持僧人觉苑大师提出了"云纹如意，心境清明"的设计理念。工匠们据此创造了标准化的如意云纹，这种纹样后来成为北方寺院装饰的经典元素。',
          image: 'https://readdy.ai/api/search-image?query=Song%20dynasty%20Chinese%20auspicious%20cloud%20pattern%20in%20Buddhist%20temple%2C%20elegant%20cloud%20motifs%20with%20ruyi%20shape%2C%20traditional%20Chinese%20temple%20decorative%20cloud%20design%2C%20serene%20cloud%20patterns%20in%20religious%20art&width=400&height=300&seq=song2&orientation=landscape'
        }
      ]
    },
    {
      id: 'ming',
      name: '明清',
      period: '1368-1912年',
      background: '传统文化的集大成时期',
      characteristics: [
        {
          pattern: '万字纹',
          origin: '梵文"卍"字符号',
          evolution: '从单一符号发展为复杂的几何装饰系统',
          cultural: '佛教中国化的完成，体现了民族文化的自信与包容',
          story: '明永乐年间，朱棣下令重修五台山诸寺。在设计菩萨顶大雄宝殿时，工部尚书蹇义提议大量使用万字纹装饰，寓意"万德庄严"。工匠们创造性地将万字纹与传统回纹结合，形成了独特的"万字回纹"，成为明清寺院装饰的重要特征。',
          image: 'https://readdy.ai/api/search-image?query=Ming%20Qing%20dynasty%20Chinese%20Buddhist%20temple%20swastika%20pattern%20decoration%2C%20traditional%20Chinese%20temple%20geometric%20patterns%2C%20ornate%20swastika%20motifs%20in%20golden%20temple%20art%2C%20sacred%20Buddhist%20symbols%20in%20Chinese%20architecture&width=400&height=300&seq=ming1&orientation=landscape'
        },
        {
          pattern: '八宝纹',
          origin: '藏传佛教八吉祥',
          evolution: '与汉传佛教文化相融合，形成独特的装饰体系',
          cultural: '多元文化交融的见证，体现了中华文化的包容性',
          story: '清康熙年间，由于皇室对藏传佛教的推崇，八宝纹开始在山西寺院中出现。崇善寺的重建过程中，来自西藏的工匠与本地匠师合作，将法轮、宝螺、宝伞等八宝图案与传统汉式装饰相结合，创造出了独具特色的"汉藏合璧"装饰风格。',
          image: 'https://readdy.ai/api/search-image?query=Qing%20dynasty%20Chinese%20Buddhist%20temple%20eight%20auspicious%20symbols%20pattern%2C%20traditional%20Chinese%20temple%20decoration%20with%20Tibetan%20Buddhist%20influence%2C%20sacred%20eight%20treasures%20motifs%20in%20temple%20art&width=400&height=300&seq=ming2&orientation=landscape'
        }
      ]
    }
  ];

  const selectedPeriodData = evolutionPeriods.find(p => p.id === selectedPeriod);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">纹样演变历程</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            从魏晋到明清，山西寺庙纹样在历史长河中不断演变，每个时代都留下了独特的文化印记
          </p>
        </div>

        {/* 时代选择器 */}
        <div className="flex justify-center mb-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-full p-2 shadow-lg">
            {evolutionPeriods.map((period) => (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(period.id)}
                className={`px-8 py-4 rounded-full mx-1 transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedPeriod === period.id
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-amber-600 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="text-center">
                  <div className="font-bold text-lg">{period.name}</div>
                  <div className="text-sm opacity-80">{period.period}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedPeriodData && (
          <div className="space-y-12">
            {/* 时代背景 */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-100 to-orange-100 px-8 py-4 rounded-full shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                  <i className="ri-time-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedPeriodData.name}</h3>
                  <p className="text-amber-600">{selectedPeriodData.background}</p>
                </div>
              </div>
            </div>

            {/* 纹样详情 */}
            <div className="space-y-16">
              {selectedPeriodData.characteristics.map((pattern, index) => (
                <div key={index} className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-lg">
                      <div className="mb-6">
                        <h4 className="text-3xl font-bold text-gray-800 mb-2">{pattern.pattern}</h4>
                        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl border-l-4 border-amber-500">
                          <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <i className="ri-map-pin-line text-amber-600"></i>
                            起源溯源
                          </h5>
                          <p className="text-gray-700 leading-relaxed">{pattern.origin}</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-2xl border-l-4 border-orange-500">
                          <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <i className="ri-arrow-right-circle-line text-orange-600"></i>
                            演变过程
                          </h5>
                          <p className="text-gray-700 leading-relaxed">{pattern.evolution}</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-2xl border-l-4 border-red-500">
                          <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <i className="ri-heart-line text-red-600"></i>
                            文化内涵
                          </h5>
                          <p className="text-gray-700 leading-relaxed">{pattern.cultural}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6 rounded-2xl text-white">
                          <h5 className="font-bold mb-3 flex items-center gap-2">
                            <i className="ri-book-open-line"></i>
                            历史典故
                          </h5>
                          <p className="leading-relaxed opacity-95">{pattern.story}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <img 
                        src={pattern.image} 
                        alt={pattern.pattern}
                        className="relative w-full h-80 object-cover object-top rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}