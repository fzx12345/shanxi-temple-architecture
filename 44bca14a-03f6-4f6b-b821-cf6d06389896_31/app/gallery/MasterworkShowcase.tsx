'use client';

import { useState } from 'react';

export default function MasterworkShowcase() {
  const [selectedMasterwork, setSelectedMasterwork] = useState(null);

  const masterworks = [
    {
      id: 1,
      title: '佛光寺东大殿斗拱',
      subtitle: '唐代木构建筑的巅峰之作',
      temple: '佛光寺',
      location: '五台山',
      dynasty: '唐代',
      year: '857年',
      material: '木构',
      significance: '现存最早的木构建筑实例，斗拱结构精妙绝伦',
      description: '佛光寺东大殿的斗拱系统展现了唐代建筑技艺的最高水准。斗拱上雕刻着精美的云纹、卷草纹和莲花纹，每一个构件都是艺术品。斗拱不仅承担着结构功能，更是装饰艺术的载体，体现了唐代"雄浑大气"的审美特征。',
      artisticValue: '斗拱上的纹饰雕刻精美，云纹流畅自然，莲花纹庄严神圣，是唐代装饰艺术的典型代表。',
      culturalValue: '体现了唐代佛教建筑的最高成就，是中华古建筑史上的里程碑。',
      technicalValue: '斗拱结构科学合理，充分体现了古代工匠的智慧和技艺。',
      image: 'https://readdy.ai/api/search-image?query=Tang%20dynasty%20Foguang%20Temple%20East%20Hall%20wooden%20bracket%20sets%20dougong%20architecture%2C%20intricate%20carved%20cloud%20and%20lotus%20patterns%20on%20wooden%20brackets%2C%20ancient%20Chinese%20temple%20structural%20art%2C%20masterful%20Tang%20woodworking%20craftsmanship&width=600&height=400&seq=master1&orientation=landscape',
      detailImages: [
        'https://readdy.ai/api/search-image?query=Close-up%20detail%20of%20Tang%20dynasty%20wooden%20bracket%20dougong%20with%20carved%20cloud%20patterns%2C%20intricate%20woodcarving%20on%20temple%20structural%20elements%2C%20ancient%20Chinese%20architectural%20decoration&width=400&height=300&seq=detail1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Tang%20dynasty%20temple%20lotus%20pattern%20carved%20on%20wooden%20bracket%20detail%2C%20sacred%20Buddhist%20decorative%20motifs%2C%20traditional%20Chinese%20temple%20woodwork&width=400&height=300&seq=detail2&orientation=landscape'
      ]
    },
    {
      id: 2,
      title: '晋祠圣母殿木雕',
      subtitle: '宋代木雕艺术的经典代表',
      temple: '晋祠圣母殿',
      location: '太原',
      dynasty: '宋代',
      year: '1023-1032年',
      material: '木雕彩绘',
      significance: '宋代建筑装饰艺术的杰作，木雕技艺登峰造极',
      description: '晋祠圣母殿内的木雕装饰堪称宋代艺术的瑰宝。殿内的木雕柱头、斗拱、藻井等处都饰有精美的纹样，包括龙纹、凤纹、花卉纹等。这些木雕不仅工艺精湛，而且构图严谨，线条流畅，体现了宋代追求精致典雅的艺术风格。',
      artisticValue: '木雕纹饰精致典雅，构图完美，线条流畅，是宋代装饰艺术的典型代表。',
      culturalValue: '体现了宋代社会的审美追求和文化内涵，具有重要的历史价值。',
      technicalValue: '木雕技法娴熟，刀工精细，彩绘工艺精湛，是古代工艺美术的典范。',
      image: 'https://readdy.ai/api/search-image?query=Song%20dynasty%20Jinci%20Temple%20Holy%20Mother%20Hall%20wooden%20carving%20decorations%2C%20intricate%20dragon%20phoenix%20and%20floral%20patterns%2C%20refined%20Song%20artistic%20style%20wooden%20temple%20ornaments%2C%20masterful%20Chinese%20woodcarving%20art&width=600&height=400&seq=master2&orientation=landscape',
      detailImages: [
        'https://readdy.ai/api/search-image?query=Detailed%20Song%20dynasty%20wooden%20dragon%20carving%20in%20temple%2C%20intricate%20dragon%20pattern%20with%20scales%20and%20claws%2C%20traditional%20Chinese%20temple%20wood%20sculpture&width=400&height=300&seq=detail3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Song%20dynasty%20temple%20wooden%20phoenix%20carving%20detail%2C%20elegant%20phoenix%20bird%20pattern%20with%20flowing%20feathers%2C%20refined%20Chinese%20woodcarving%20craftsmanship&width=400&height=300&seq=detail4&orientation=landscape'
      ]
    },
    {
      id: 3,
      title: '华严寺薄伽教藏',
      subtitle: '辽代建筑装饰的珍贵遗存',
      temple: '华严寺',
      location: '大同',
      dynasty: '辽代',
      year: '1038年',
      material: '木构彩绘',
      significance: '辽代建筑装饰艺术的代表作，体现了民族文化融合',
      description: '华严寺薄伽教藏是辽代建筑装饰的杰作，藏内的木构装饰融合了汉族和契丹族的艺术特色。藏内的木雕纹饰包括飞天、莲花、卷草等佛教题材，也有契丹族特有的动物纹样，体现了辽代多民族文化交融的特点。',
      artisticValue: '装饰纹样风格独特，融合了多民族艺术元素，具有鲜明的时代特征。',
      culturalValue: '体现了辽代多民族文化交融的历史背景，具有重要的民族学价值。',
      technicalValue: '建造技术精湛，装饰工艺精美，是辽代建筑技术的重要见证。',
      image: 'https://readdy.ai/api/search-image?query=Liao%20dynasty%20Huayan%20Temple%20Bhagavat%20sutra%20repository%20wooden%20architecture%2C%20multicultural%20decorative%20patterns%2C%20ethnic%20fusion%20temple%20art%2C%20ancient%20Chinese%20Liao%20period%20temple%20interior&width=600&height=400&seq=master3&orientation=landscape',
      detailImages: [
        'https://readdy.ai/api/search-image?query=Liao%20dynasty%20temple%20flying%20apsaras%20wooden%20carving%20detail%2C%20celestial%20beings%20with%20flowing%20robes%2C%20Buddhist%20decorative%20art%20with%20ethnic%20characteristics&width=400&height=300&seq=detail5&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Liao%20dynasty%20temple%20animal%20pattern%20wooden%20carving%2C%20traditional%20Khitan%20artistic%20motifs%2C%20ethnic%20fusion%20decorative%20elements&width=400&height=300&seq=detail6&orientation=landscape'
      ]
    },
    {
      id: 4,
      title: '永乐宫三清殿壁画',
      subtitle: '元代道教艺术的不朽杰作',
      temple: '永乐宫',
      location: '芮城',
      dynasty: '元代',
      year: '1325-1358年',
      material: '壁画',
      significance: '中国古代壁画艺术的巅峰之作，道教艺术的经典代表',
      description: '永乐宫三清殿壁画是元代艺术的瑰宝，壁画中的神仙人物衣饰华丽，纹样精美。画中的服饰纹样、背景装饰等都体现了元代艺术的特色，既有中原传统文化的底蕴，又融入了蒙古族等少数民族的艺术元素，形成了独特的艺术风格。',
      artisticValue: '壁画技法精湛，色彩绚丽，人物造型生动，纹样装饰华美，是古代绘画艺术的典范。',
      culturalValue: '体现了元代多元文化交融的时代特征，是道教文化艺术的珍贵遗产。',
      technicalValue: '壁画制作工艺复杂，颜料配制精良，历经700年依然色彩鲜艳，工艺价值极高。',
      image: 'https://readdy.ai/api/search-image?query=Yuan%20dynasty%20Yongle%20Palace%20Sanqing%20Hall%20Taoist%20mural%20painting%2C%20elaborate%20deity%20figures%20with%20ornate%20robes%20and%20decorative%20patterns%2C%20colorful%20Chinese%20Taoist%20temple%20wall%20art%20masterpiece&width=600&height=400&seq=master4&orientation=landscape',
      detailImages: [
        'https://readdy.ai/api/search-image?query=Yuan%20dynasty%20Taoist%20mural%20detail%20showing%20ornate%20clothing%20patterns%2C%20intricate%20textile%20designs%20on%20deity%20robes%2C%20traditional%20Chinese%20decorative%20art&width=400&height=300&seq=detail7&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Yuan%20dynasty%20Taoist%20temple%20mural%20background%20decorative%20patterns%2C%20auspicious%20cloud%20and%20floral%20motifs%2C%20traditional%20Chinese%20wall%20painting%20decoration&width=400&height=300&seq=detail8&orientation=landscape'
      ]
    },
    {
      id: 5,
      title: '双塔寺琉璃塔',
      subtitle: '明代琉璃工艺的璀璨明珠',
      temple: '双塔寺',
      location: '太原',
      dynasty: '明代',
      year: '1599年',
      material: '琉璃',
      significance: '明代琉璃建筑艺术的代表作，工艺技术达到巅峰',
      description: '双塔寺的两座琉璃塔是明代琉璃工艺的杰作，塔身装饰着各种精美的琉璃纹样，包括龙纹、凤纹、花卉纹、几何纹等。这些琉璃制品色彩绚烂，造型优美，在阳光照射下熠熠生辉，展现了明代琉璃工艺的最高水准。',
      artisticValue: '琉璃纹样精美绝伦，色彩搭配和谐，装饰效果华丽，是明代装饰艺术的典型代表。',
      culturalValue: '体现了明代社会的繁荣和文化的发达，具有重要的历史文化价值。',
      technicalValue: '琉璃制作工艺复杂，技术要求极高，是古代工艺技术的重要见证。',
      image: 'https://readdy.ai/api/search-image?query=Ming%20dynasty%20Twin%20Pagoda%20Temple%20glazed%20ceramic%20pagodas%2C%20colorful%20glazed%20tile%20decorations%20with%20dragon%20phoenix%20patterns%2C%20brilliant%20Chinese%20ceramic%20craftsmanship%2C%20ornate%20temple%20pagoda%20architecture&width=600&height=400&seq=master5&orientation=landscape',
      detailImages: [
        'https://readdy.ai/api/search-image?query=Ming%20dynasty%20glazed%20ceramic%20dragon%20pattern%20detail%20on%20pagoda%2C%20colorful%20dragon%20motif%20in%20glazed%20tiles%2C%20traditional%20Chinese%20ceramic%20decoration&width=400&height=300&seq=detail9&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Ming%20dynasty%20glazed%20ceramic%20floral%20pattern%20on%20pagoda%20detail%2C%20colorful%20flower%20motifs%20in%20traditional%20Chinese%20glazed%20tiles&width=400&height=300&seq=detail10&orientation=landscape'
      ]
    },
    {
      id: 6,
      title: '悬空寺建筑群',
      subtitle: '北魏建筑奇迹的装饰艺术',
      temple: '悬空寺',
      location: '浑源',
      dynasty: '北魏',
      year: '6世纪初',
      material: '木构石雕',
      significance: '世界建筑史上的奇迹，体现了古代工匠的超凡智慧',
      description: '悬空寺悬挂在峭壁之上，其建筑装饰艺术同样令人叹为观止。寺内的木雕、石雕纹样虽然受到空间限制，但依然精美绝伦。这些装饰包括佛教的莲花纹、云纹，以及中国传统的龙纹、凤纹等，体现了佛、道、儒三教合一的文化特色。',
      artisticValue: '在极其有限的空间内创造出精美的装饰艺术，构思巧妙，工艺精湛。',
      culturalValue: '体现了中国古代宗教文化的包容性和多元性，具有重要的文化价值。',
      technicalValue: '在极其困难的条件下完成建造和装饰，技术难度极高，工程奇迹。',
      image: 'https://readdy.ai/api/search-image?query=Northern%20Wei%20dynasty%20Hanging%20Temple%20Xuankong%20Si%20architectural%20complex%20with%20decorative%20carvings%2C%20temple%20built%20on%20cliff%20face%20with%20ornate%20wooden%20and%20stone%20decorations%2C%20miraculous%20Chinese%20temple%20architecture&width=600&height=400&seq=master6&orientation=landscape',
      detailImages: [
        'https://readdy.ai/api/search-image?query=Hanging%20Temple%20wooden%20carving%20detail%20with%20Buddhist%20lotus%20patterns%2C%20intricate%20temple%20decoration%20on%20cliff-built%20monastery%2C%20Northern%20Wei%20craftsmanship&width=400&height=300&seq=detail11&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Xuankong%20Temple%20stone%20carving%20detail%20with%20cloud%20patterns%2C%20traditional%20Chinese%20cliff%20temple%20decorative%20art%2C%20ancient%20architectural%20ornament&width=400&height=300&seq=detail12&orientation=landscape'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* 标题区域 */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200/20 to-transparent rounded-full blur-3xl"></div>
          <div className="relative">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 font-['Pacifico']">传世杰作</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              精选山西寺庙建筑装饰艺术中的传世杰作，每一件都是历史的见证，艺术的瑰宝
            </p>
          </div>
        </div>

        {/* 杰作展示网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {masterworks.map((work) => (
            <div 
              key={work.id} 
              className="group relative cursor-pointer"
              onClick={() => setSelectedMasterwork(work)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-orange-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
                        {work.dynasty}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
                        {work.year}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1 leading-tight">{work.title}</h3>
                    <p className="text-orange-200 text-sm leading-tight">{work.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <i className="ri-map-pin-line text-orange-600"></i>
                    <span className="text-gray-600 text-sm">{work.temple} · {work.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {work.significance}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {work.material}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-orange-600 text-sm font-semibold">
                      <span>详细赏析</span>
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 模态框 */}
        {selectedMasterwork && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedMasterwork(null)}>
            <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* 头部图片区域 */}
              <div className="relative h-96">
                <img 
                  src={selectedMasterwork.image} 
                  alt={selectedMasterwork.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button 
                  onClick={() => setSelectedMasterwork(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
                
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-orange-600/80 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">
                      {selectedMasterwork.dynasty}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      {selectedMasterwork.year}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold mb-2">{selectedMasterwork.title}</h2>
                  <p className="text-xl text-orange-200">{selectedMasterwork.subtitle}</p>
                </div>
              </div>
              
              {/* 内容区域 */}
              <div className="p-8">
                {/* 基本信息 */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                    <i className="ri-building-line text-orange-600 text-2xl mb-2"></i>
                    <h4 className="font-bold text-gray-800 mb-1">寺庙</h4>
                    <p className="text-gray-600 text-sm">{selectedMasterwork.temple}</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                    <i className="ri-map-pin-line text-orange-600 text-2xl mb-2"></i>
                    <h4 className="font-bold text-gray-800 mb-1">地点</h4>
                    <p className="text-gray-600 text-sm">{selectedMasterwork.location}</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                    <i className="ri-palette-line text-orange-600 text-2xl mb-2"></i>
                    <h4 className="font-bold text-gray-800 mb-1">材质</h4>
                    <p className="text-gray-600 text-sm">{selectedMasterwork.material}</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                    <i className="ri-time-line text-orange-600 text-2xl mb-2"></i>
                    <h4 className="font-bold text-gray-800 mb-1">年代</h4>
                    <p className="text-gray-600 text-sm">{selectedMasterwork.year}</p>
                  </div>
                </div>

                {/* 详细描述 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <i className="ri-book-open-line text-orange-600"></i>
                    作品描述
                  </h3>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
                    <p className="text-gray-700 leading-relaxed">{selectedMasterwork.description}</p>
                  </div>
                </div>

                {/* 价值分析 */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <i className="ri-palette-line text-orange-600"></i>
                      艺术价值
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{selectedMasterwork.artisticValue}</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <i className="ri-ancient-pavilion-line text-red-600"></i>
                      文化价值
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{selectedMasterwork.culturalValue}</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-pink-500">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <i className="ri-tools-line text-pink-600"></i>
                      技术价值
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{selectedMasterwork.technicalValue}</p>
                  </div>
                </div>

                {/* 细节图片 */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <i className="ri-zoom-in-line text-orange-600"></i>
                    细节欣赏
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {selectedMasterwork.detailImages.map((image, idx) => (
                      <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                        <img 
                          src={image} 
                          alt={`${selectedMasterwork.title} 细节 ${idx + 1}`}
                          className="w-full h-64 object-cover object-top"
                        />
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