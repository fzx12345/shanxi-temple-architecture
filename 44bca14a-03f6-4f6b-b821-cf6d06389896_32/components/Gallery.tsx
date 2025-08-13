'use client';

import { useState } from 'react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('architecture');

  const categories = [
    { id: 'architecture', name: '建筑结构', icon: 'ri-building-2-line' },
    { id: 'decorations', name: '纹饰细节', icon: 'ri-palette-line' },
    { id: 'statues', name: '佛像造型', icon: 'ri-user-star-line' },
    { id: 'murals', name: '壁画艺术', icon: 'ri-image-line' }
  ];

  const galleryItems = {
    architecture: [
      {
        title: "佛光寺大殿",
        description: "唐代木构建筑的典型代表，体现了唐代建筑的雄伟气势",
        image: "https://readdy.ai/api/search-image?query=Foguang%20Temple%20main%20hall%20Tang%20Dynasty%20architecture%2C%20massive%20wooden%20structure%2C%20traditional%20Chinese%20temple%20hall%2C%20ancient%20Buddhist%20architecture%2C%20grand%20wooden%20beams%20and%20pillars%2C%20Tang%20period%20religious%20building%2C%20historical%20temple%20interior&width=400&height=500&seq=gallery1&orientation=portrait"
      },
      {
        title: "悬空寺奇观",
        description: "依山而建的奇特建筑，展现了古代工匠的智慧与胆识",
        image: "https://readdy.ai/api/search-image?query=Hanging%20Temple%20suspended%20architecture%20built%20into%20cliff%20face%2C%20dramatic%20mountain%20temple%20construction%2C%20ancient%20Chinese%20engineering%20marvel%2C%20wooden%20temple%20structures%20on%20rock%20face%2C%20precarious%20clifftop%20monastery%2C%20unique%20architectural%20achievement&width=400&height=500&seq=gallery2&orientation=portrait"
      },
      {
        title: "华严寺大雄宝殿",
        description: "辽代建筑精品，展现了辽代建筑的独特风格",
        image: "https://readdy.ai/api/search-image?query=Huayan%20Temple%20main%20hall%20Liao%20Dynasty%20architecture%2C%20traditional%20Chinese%20Buddhist%20hall%2C%20ancient%20wooden%20temple%20structure%2C%20ornate%20roof%20construction%2C%20historical%20religious%20building%2C%20classical%20temple%20architecture&width=400&height=500&seq=gallery3&orientation=portrait"
      },
      {
        title: "晋祠圣母殿",
        description: "宋代建筑代表作，建筑比例协调，装饰精美",
        image: "https://readdy.ai/api/search-image?query=Jinci%20Temple%20Holy%20Mother%20Hall%20Song%20Dynasty%20architecture%2C%20elegant%20temple%20hall%20design%2C%20refined%20wooden%20construction%2C%20harmonious%20proportions%2C%20classical%20Chinese%20religious%20architecture%2C%20traditional%20temple%20building&width=400&height=500&seq=gallery4&orientation=portrait"
      }
    ],
    decorations: [
      {
        title: "莲花纹饰",
        description: "精美的莲花雕刻，象征着佛教的纯净与觉悟",
        image: "https://readdy.ai/api/search-image?query=Intricate%20lotus%20flower%20carved%20decorations%20on%20Buddhist%20temple%2C%20detailed%20stone%20carving%20of%20lotus%20patterns%2C%20traditional%20Chinese%20religious%20ornamental%20art%2C%20golden%20lotus%20motifs%2C%20sacred%20Buddhist%20decorative%20elements%2C%20ornate%20temple%20carvings&width=400&height=500&seq=gallery5&orientation=portrait"
      },
      {
        title: "龙凤纹样",
        description: "龙凤图案体现了皇家寺庙的尊贵地位",
        image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20dragon%20and%20phoenix%20patterns%20carved%20in%20temple%2C%20imperial%20religious%20decorative%20motifs%2C%20ornate%20dragon%20and%20phoenix%20designs%2C%20golden%20traditional%20patterns%2C%20royal%20temple%20decorations%2C%20elaborate%20Chinese%20mythological%20carvings&width=400&height=500&seq=gallery6&orientation=portrait"
      },
      {
        title: "如意云纹",
        description: "流畅的云纹设计，寓意吉祥如意",
        image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20ruyi%20cloud%20pattern%20decorations%20in%20temple%2C%20flowing%20cloud%20motifs%20carved%20in%20stone%2C%20auspicious%20cloud%20designs%2C%20traditional%20temple%20ornamental%20patterns%2C%20golden%20cloud%20decorative%20elements%2C%20classical%20Chinese%20artistic%20patterns&width=400&height=500&seq=gallery7&orientation=portrait"
      },
      {
        title: "宝相花纹",
        description: "宝相花纹饰华丽庄重，体现了佛教艺术的特色",
        image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20baoxiang%20flower%20pattern%20decorations%2C%20ornate%20Buddhist%20floral%20motifs%2C%20elaborate%20temple%20flower%20carvings%2C%20golden%20religious%20decorative%20patterns%2C%20intricate%20floral%20designs%20in%20temple%20art%2C%20classical%20Buddhist%20ornamental%20elements&width=400&height=500&seq=gallery8&orientation=portrait"
      }
    ],
    statues: [
      {
        title: "释迦牟尼佛像",
        description: "庄严慈祥的佛陀造像，展现了佛教艺术的精华",
        image: "https://readdy.ai/api/search-image?query=Magnificent%20Shakyamuni%20Buddha%20statue%20in%20Chinese%20temple%2C%20serene%20and%20compassionate%20Buddha%20figure%2C%20golden%20Buddhist%20sculpture%2C%20traditional%20Chinese%20Buddha%20carving%2C%20peaceful%20meditation%20pose%2C%20ornate%20Buddhist%20religious%20art&width=400&height=500&seq=gallery9&orientation=portrait"
      },
      {
        title: "观音菩萨像",
        description: "慈悲的观音菩萨，是中国佛教艺术的重要题材",
        image: "https://readdy.ai/api/search-image?query=Graceful%20Guanyin%20Bodhisattva%20statue%20in%20Chinese%20temple%2C%20compassionate%20goddess%20figure%2C%20elegant%20Buddhist%20sculpture%2C%20traditional%20Avalokiteshvara%20carving%2C%20serene%20feminine%20deity%2C%20ornate%20Chinese%20religious%20art&width=400&height=500&seq=gallery10&orientation=portrait"
      },
      {
        title: "四大天王像",
        description: "威严的护法天王，守护着佛法的庄严",
        image: "https://readdy.ai/api/search-image?query=Four%20Heavenly%20Kings%20guardian%20statues%20in%20Chinese%20Buddhist%20temple%2C%20fierce%20protective%20deities%2C%20traditional%20temple%20guardian%20sculptures%2C%20powerful%20warrior%20figures%2C%20ornate%20armor%20and%20weapons%2C%20intimidating%20Buddhist%20protector%20statues&width=400&height=500&seq=gallery11&orientation=portrait"
      },
      {
        title: "罗汉群像",
        description: "各具特色的罗汉造像，展现了个性化的艺术表现",
        image: "https://readdy.ai/api/search-image?query=Group%20of%20Arhat%20monk%20statues%20in%20Chinese%20Buddhist%20temple%2C%20individual%20character%20expressions%2C%20traditional%20Buddhist%20monk%20sculptures%2C%20varied%20poses%20and%20facial%20features%2C%20ancient%20religious%20art%2C%20detailed%20carved%20monk%20figures&width=400&height=500&seq=gallery12&orientation=portrait"
      }
    ],
    murals: [
      {
        title: "西方极乐世界图",
        description: "描绘阿弥陀佛净土的壮观场景",
        image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20Buddhist%20temple%20mural%20depicting%20Western%20Paradise%2C%20Amitabha%20Buddha%20pure%20land%20painting%2C%20celestial%20beings%20and%20lotus%20pools%2C%20golden%20temple%20wall%20painting%2C%20ancient%20religious%20fresco%20art%2C%20paradise%20scene%20with%20divine%20figures&width=400&height=500&seq=gallery13&orientation=portrait"
      },
      {
        title: "释迦牟尼传记图",
        description: "佛陀一生的重要事迹在壁画中得到生动展现",
        image: "https://readdy.ai/api/search-image?query=Buddhist%20temple%20mural%20telling%20life%20story%20of%20Buddha%2C%20traditional%20Chinese%20religious%20wall%20painting%2C%20biographical%20scenes%20of%20Shakyamuni%2C%20ancient%20temple%20fresco%20art%2C%20golden%20narrative%20artwork%2C%20detailed%20Buddhist%20historical%20painting&width=400&height=500&seq=gallery14&orientation=portrait"
      },
      {
        title: "飞天散花图",
        description: "飞天仙女散花的优美画面，展现了佛教艺术的浪漫色彩",
        image: "https://readdy.ai/api/search-image?query=Flying%20apsaras%20celestial%20beings%20scattering%20flowers%20mural%20in%20Chinese%20Buddhist%20temple%2C%20graceful%20heavenly%20dancers%2C%20traditional%20temple%20wall%20painting%2C%20elegant%20flying%20figures%20with%20flowing%20robes%2C%20golden%20religious%20fresco%20art&width=400&height=500&seq=gallery15&orientation=portrait"
      },
      {
        title: "护法神将图",
        description: "威严的护法神将，守护着佛法的庄严与神圣",
        image: "https://readdy.ai/api/search-image?query=Guardian%20deity%20warriors%20mural%20in%20Chinese%20Buddhist%20temple%2C%20fierce%20protective%20gods%2C%20traditional%20temple%20wall%20painting%2C%20powerful%20divine%20warriors%2C%20ornate%20armor%20and%20weapons%2C%20intimidating%20religious%20guardian%20art&width=400&height=500&seq=gallery16&orientation=portrait"
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-amber-100 to-orange-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">艺术图集</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            通过丰富的图像资料，深入了解山西寺庙建筑与纹饰艺术的精美细节与深厚内涵
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <i className={category.icon}></i>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryItems[selectedCategory].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">保护与传承</h3>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto mb-6">
              这些珍贵的文化遗产需要我们共同保护。通过现代科技手段的数字化记录与展示，
              让更多人了解和欣赏山西寺庙建筑与纹饰艺术的独特魅力，传承中华文化的深厚底蕴。
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <i className="ri-camera-line text-amber-600"></i>
                <span>数字化记录</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-shield-check-line text-amber-600"></i>
                <span>文物保护</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-graduation-cap-line text-amber-600"></i>
                <span>文化教育</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-global-line text-amber-600"></i>
                <span>国际交流</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}