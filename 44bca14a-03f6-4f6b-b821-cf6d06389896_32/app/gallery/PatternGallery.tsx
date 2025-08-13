'use client';

import { useState } from 'react';

export default function PatternGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPattern, setSelectedPattern] = useState(null);

  const patternCollections = [
    {
      category: 'buddhist',
      name: '佛教纹样',
      color: 'from-amber-500 to-orange-600',
      patterns: [
        {
          id: 1,
          name: '千手观音莲座',
          temple: '佛光寺',
          dynasty: '唐代',
          material: '木雕彩绘',
          description: '千手观音端坐八瓣莲花座上，莲花座雕工精美，花瓣层次分明，每片花瓣都有细腻的纹理雕刻，体现了唐代佛教艺术的巅峰水准。',
          significance: '莲花象征清净无染的佛性，千手观音代表大慈大悲，救苦救难。',
          image: 'https://readdy.ai/api/search-image?query=Exquisite%20Tang%20dynasty%20Buddhist%20Guanyin%20statue%20with%20thousand%20hands%20sitting%20on%20carved%20lotus%20throne%2C%20intricate%20wooden%20lotus%20petals%20with%20golden%20painting%2C%20sacred%20Buddhist%20temple%20sculpture%2C%20detailed%20lotus%20base%20carving%20with%20divine%20aura&width=400&height=500&seq=buddhist1&orientation=portrait'
        },
        {
          id: 2,
          name: '法轮常转图',
          temple: '善化寺',
          dynasty: '辽代',
          material: '石雕',
          description: '八辐法轮居中，周围环绕祥云纹饰，轮辐末端饰有宝珠，整体构图庄严神圣，寓意佛法恒久流传。',
          significance: '法轮代表佛陀的教法，八辐象征八正道，是佛教最重要的象征之一。',
          image: 'https://readdy.ai/api/search-image?query=Sacred%20Buddhist%20dharma%20wheel%20carved%20in%20stone%20during%20Liao%20dynasty%2C%20eight-spoked%20wheel%20with%20precious%20jewels%20and%20auspicious%20clouds%2C%20traditional%20Buddhist%20temple%20stone%20carving%2C%20divine%20dharma%20chakra%20with%20golden%20accents&width=400&height=500&seq=buddhist2&orientation=portrait'
        },
        {
          id: 3,
          name: '飞天散花壁画',
          temple: '华严寺',
          dynasty: '辽代',
          material: '壁画',
          description: '飞天身姿优美，衣带飘逸，手中散落天花，周围祥云缭绕，色彩绚丽，展现了极乐世界的美好景象。',
          significance: '飞天是佛教中的天人，散花供佛，象征对佛法的虔诚礼赞。',
          image: 'https://readdy.ai/api/search-image?query=Beautiful%20flying%20apsaras%20mural%20painting%20in%20Liao%20dynasty%20Buddhist%20temple%2C%20celestial%20beings%20scattering%20flowers%20with%20flowing%20robes%20and%20ribbons%2C%20colorful%20Buddhist%20wall%20painting%2C%20divine%20dancers%20with%20golden%20halos&width=400&height=500&seq=buddhist3&orientation=portrait'
        }
      ]
    },
    {
      category: 'dragon',
      name: '龙纹系列',
      color: 'from-orange-500 to-red-600',
      patterns: [
        {
          id: 4,
          name: '双龙戏珠柱础',
          temple: '晋祠圣母殿',
          dynasty: '宋代',
          material: '石雕',
          description: '两条蛟龙相对盘旋，争夺中央火珠，龙身矫健有力，鳞片雕刻细致，火珠光芒四射，整体气势磅礴。',
          significance: '双龙戏珠寓意阴阳调和，水火既济，是中华文化中的吉祥图案。',
          image: 'https://readdy.ai/api/search-image?query=Song%20dynasty%20stone%20carved%20column%20base%20with%20two%20dragons%20playing%20with%20pearl%2C%20powerful%20dragons%20with%20detailed%20scales%20chasing%20flaming%20orb%2C%20traditional%20Chinese%20temple%20architectural%20sculpture%2C%20majestic%20dragon%20relief%20carving&width=400&height=500&seq=dragon1&orientation=portrait'
        },
        {
          id: 5,
          name: '云龙纹藻井',
          temple: '悬空寺',
          dynasty: '北魏',
          material: '木雕彩绘',
          description: '天花板中央雕刻一条盘旋云龙，龙身穿越祥云，四周环绕莲花和宝珠纹饰，彩绘鲜艳，金辉耀眼。',
          significance: '云龙象征着佛法如甘露般从天而降，普度众生。',
          image: 'https://readdy.ai/api/search-image?query=Northern%20Wei%20dynasty%20wooden%20ceiling%20with%20carved%20cloud%20dragon%20pattern%2C%20dragon%20soaring%20through%20auspicious%20clouds%20with%20lotus%20and%20jewel%20decorations%2C%20colorful%20painted%20temple%20ceiling%2C%20golden%20dragon%20with%20divine%20clouds&width=400&height=500&seq=dragon2&orientation=portrait'
        },
        {
          id: 6,
          name: '护法龙王浮雕',
          temple: '广胜寺',
          dynasty: '元代',
          material: '石雕彩绘',
          description: '龙王威严端坐，身披龙鳞甲胄，手持法器，头顶龙角，面相庄严，周围环绕水纹和云纹。',
          significance: '龙王作为护法神，守护佛法道场，驱除邪魔，保佑一方平安。',
          image: 'https://readdy.ai/api/search-image?query=Yuan%20dynasty%20Buddhist%20dragon%20king%20guardian%20relief%20sculpture%2C%20majestic%20dragon%20king%20in%20armor%20holding%20dharma%20instruments%2C%20protective%20deity%20with%20dragon%20features%2C%20temple%20guardian%20stone%20carving%20with%20water%20and%20cloud%20patterns&width=400&height=500&seq=dragon3&orientation=portrait'
        }
      ]
    },
    {
      category: 'phoenix',
      name: '凤纹艺术',
      color: 'from-red-500 to-pink-600',
      patterns: [
        {
          id: 7,
          name: '双凤朝阳门楣',
          temple: '双塔寺',
          dynasty: '明代',
          material: '木雕镏金',
          description: '两只凤凰展翅相对，中央是旭日东升图案，凤凰羽毛层次丰富，尾羽飘逸，镏金装饰华丽夺目。',
          significance: '双凤朝阳象征着吉祥如意，凤凰涅槃重生代表着觉悟与超脱。',
          image: 'https://readdy.ai/api/search-image?query=Ming%20dynasty%20gilded%20wooden%20door%20lintel%20with%20twin%20phoenixes%20facing%20rising%20sun%2C%20elegant%20phoenix%20birds%20with%20layered%20feathers%20and%20flowing%20tails%2C%20ornate%20golden%20temple%20door%20decoration%2C%20auspicious%20phoenix%20motif&width=400&height=500&seq=phoenix1&orientation=portrait'
        },
        {
          id: 8,
          name: '凤穿牡丹壁雕',
          temple: '崇善寺',
          dynasty: '清代',
          material: '砖雕',
          description: '凤凰穿越盛开的牡丹花丛，花朵硕大饱满，凤凰姿态优雅，整体构图富贵华丽，寓意花开富贵。',
          significance: '凤凰配牡丹，象征着富贵吉祥，在佛教中代表功德圆满。',
          image: 'https://readdy.ai/api/search-image?query=Qing%20dynasty%20brick%20relief%20carving%20of%20phoenix%20among%20peonies%2C%20elegant%20phoenix%20bird%20flying%20through%20blooming%20peony%20flowers%2C%20ornate%20temple%20wall%20decoration%2C%20traditional%20Chinese%20auspicious%20pattern%20with%20golden%20accents&width=400&height=500&seq=phoenix2&orientation=portrait'
        },
        {
          id: 9,
          name: '金翅鸟王雕像',
          temple: '玄中寺',
          dynasty: '北齐',
          material: '铜铸镏金',
          description: '金翅鸟王展翅欲飞，双翅张开，羽毛纹理清晰，鸟喙锋利，双眼炯炯有神，威武雄壮。',
          significance: '金翅鸟是佛教护法神，能降伏龙族，象征着正义战胜邪恶。',
          image: 'https://readdy.ai/api/search-image?query=Northern%20Qi%20dynasty%20gilded%20bronze%20Garuda%20statue%2C%20majestic%20golden-winged%20bird%20king%20with%20spread%20wings%20and%20fierce%20expression%2C%20Buddhist%20protective%20deity%20sculpture%2C%20powerful%20bird%20with%20detailed%20feather%20patterns&width=400&height=500&seq=phoenix3&orientation=portrait'
        }
      ]
    },
    {
      category: 'floral',
      name: '花卉纹样',
      color: 'from-pink-500 to-purple-600',
      patterns: [
        {
          id: 10,
          name: '宝相花团窠',
          temple: '天龙山石窟',
          dynasty: '隋代',
          material: '石雕',
          description: '宝相花居中，花瓣层叠，外围环绕卷草纹，整体呈圆形团窠状，雕工精细，立体感强。',
          significance: '宝相花是佛教装饰花卉，象征着庄严华贵，团窠纹寓意圆满如意。',
          image: 'https://readdy.ai/api/search-image?query=Sui%20dynasty%20stone%20carved%20baoxiang%20flower%20medallion%20pattern%2C%20ornate%20floral%20motif%20with%20layered%20petals%20surrounded%20by%20scrolling%20vines%2C%20Buddhist%20decorative%20flower%20in%20circular%20frame%2C%20intricate%20temple%20stone%20carving&width=400&height=500&seq=floral1&orientation=portrait'
        },
        {
          id: 11,
          name: '莲花化生图',
          temple: '开化寺',
          dynasty: '宋代',
          material: '壁画',
          description: '巨大莲花盛开，花瓣中化生童子，神态天真，莲花周围环绕祥云和飞天，色彩鲜艳，构图生动。',
          significance: '莲花化生表现了佛教中的净土思想，象征着灵魂的纯净重生。',
          image: 'https://readdy.ai/api/search-image?query=Song%20dynasty%20Buddhist%20mural%20painting%20of%20lotus%20birth%20transformation%2C%20large%20blooming%20lotus%20with%20divine%20children%20emerging%20from%20petals%2C%20colorful%20temple%20wall%20painting%20with%20celestial%20beings%20and%20auspicious%20clouds&width=400&height=500&seq=floral2&orientation=portrait'
        },
        {
          id: 12,
          name: '缠枝牡丹柱头',
          temple: '永乐宫',
          dynasty: '元代',
          material: '木雕彩绘',
          description: '牡丹花朵硕大，枝叶缠绕柱头，花瓣层次丰富，叶片生动自然，彩绘色彩艳丽，富贵华丽。',
          significance: '牡丹象征富贵吉祥，缠枝纹寓意生生不息，在道教中代表长生不老。',
          image: 'https://readdy.ai/api/search-image?query=Yuan%20dynasty%20painted%20wooden%20column%20capital%20with%20intertwining%20peony%20vines%2C%20large%20peony%20flowers%20with%20rich%20layered%20petals%20and%20natural%20leaves%2C%20colorful%20temple%20architectural%20decoration%2C%20ornate%20floral%20column%20ornament&width=400&height=500&seq=floral3&orientation=portrait'
        }
      ]
    },
    {
      category: 'geometric',
      name: '几何纹样',
      color: 'from-purple-500 to-indigo-600',
      patterns: [
        {
          id: 13,
          name: '万字锦地纹',
          temple: '镇国寺',
          dynasty: '五代',
          material: '砖雕',
          description: '万字纹连续排列，形成锦地效果，纹样规整，线条流畅，寓意万福万寿，吉祥如意。',
          significance: '万字纹是佛教吉祥标志，连续使用象征着福运绵延不绝。',
          image: 'https://readdy.ai/api/search-image?query=Five%20Dynasties%20period%20brick%20carving%20with%20continuous%20swastika%20pattern%20ground%2C%20regular%20geometric%20Buddhist%20symbols%20in%20repeating%20pattern%2C%20traditional%20temple%20decorative%20brickwork%2C%20auspicious%20swastika%20motifs&width=400&height=500&seq=geometric1&orientation=portrait'
        },
        {
          id: 14,
          name: '回纹边饰带',
          temple: '法兴寺',
          dynasty: '唐代',
          material: '石雕',
          description: '回纹连续不断，线条方正，转折明确，用作装饰边框，简洁大方，富有韵律感。',
          significance: '回纹象征着轮回往复，因果循环，体现了佛教的哲学思想。',
          image: 'https://readdy.ai/api/search-image?query=Tang%20dynasty%20stone%20carved%20continuous%20meander%20border%20pattern%2C%20geometric%20square%20spiral%20design%20as%20decorative%20frame%2C%20classical%20Chinese%20temple%20border%20ornament%2C%20rhythmic%20geometric%20pattern&width=400&height=500&seq=geometric2&orientation=portrait'
        },
        {
          id: 15,
          name: '八宝纹瓦当',
          temple: '南禅寺',
          dynasty: '唐代',
          material: '陶制',
          description: '瓦当上雕刻佛教八宝纹样，包括法轮、宝伞、双鱼等，排列规整，寓意吉祥，工艺精美。',
          significance: '八宝纹是佛教中的吉祥图案，代表着佛法的八种功德。',
          image: 'https://readdy.ai/api/search-image?query=Tang%20dynasty%20ceramic%20roof%20tile%20end%20with%20Buddhist%20eight%20treasures%20pattern%2C%20dharma%20wheel%20umbrella%20fish%20and%20other%20auspicious%20symbols%2C%20traditional%20temple%20roof%20ornament%2C%20sacred%20Buddhist%20symbolic%20decoration&width=400&height=500&seq=geometric3&orientation=portrait'
        }
      ]
    }
  ];

  const allPatterns = patternCollections.flatMap(collection => collection.patterns);
  const filteredPatterns = activeCategory === 'all' 
    ? allPatterns 
    : patternCollections.find(c => c.category === activeCategory)?.patterns || [];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* 标题区域 */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent rounded-full blur-3xl"></div>
          <div className="relative">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 font-['Pacifico']">纹样珍藏</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              精选山西各大寺庙的经典纹样艺术，按类别展示千年传承的装饰瑰宝
            </p>
          </div>
        </div>

        {/* 分类选择器 */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-xl mx-1 transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              全部纹样
            </button>
            {patternCollections.map((collection) => (
              <button
                key={collection.category}
                onClick={() => setActiveCategory(collection.category)}
                className={`px-6 py-3 rounded-xl mx-1 transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === collection.category
                    ? `bg-gradient-to-r ${collection.color} text-white shadow-md`
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {collection.name}
              </button>
            ))}
          </div>
        </div>

        {/* 纹样网格展示 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {filteredPatterns.map((pattern) => (
            <div 
              key={pattern.id} 
              className="group relative cursor-pointer"
              onClick={() => setSelectedPattern(pattern)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img 
                    src={pattern.image} 
                    alt={pattern.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-amber-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
                        {pattern.dynasty}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                        {pattern.temple}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-1">{pattern.name}</h3>
                    <p className="text-amber-200 text-sm">{pattern.material}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {pattern.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-amber-600 font-semibold text-sm">点击查看详情</span>
                    <i className="ri-arrow-right-line text-amber-600"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 模态框 */}
        {selectedPattern && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedPattern(null)}>
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative h-96">
                <img 
                  src={selectedPattern.image} 
                  alt={selectedPattern.name}
                  className="w-full h-full object-cover object-top"
                />
                <button 
                  onClick={() => setSelectedPattern(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">{selectedPattern.name}</h2>
                  <div className="flex gap-2">
                    <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {selectedPattern.dynasty}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">
                      {selectedPattern.temple}
                    </span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <i className="ri-book-open-line text-amber-600"></i>
                      艺术描述
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{selectedPattern.description}</p>
                    
                    <div className="bg-amber-50 p-6 rounded-2xl">
                      <h4 className="font-bold text-gray-800 mb-2">制作工艺</h4>
                      <p className="text-gray-700 text-sm">{selectedPattern.material}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <i className="ri-ancient-pavilion-line text-amber-600"></i>
                      文化意义
                    </h3>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
                      <p className="text-gray-700 leading-relaxed">{selectedPattern.significance}</p>
                    </div>
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