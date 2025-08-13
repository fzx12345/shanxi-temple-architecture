
'use client';

export default function SymbolicMeanings() {
  const religiousSymbols = [
    {
      title: "莲花",
      meaning: "清净与开悟",
      description: "莲花出淤泥而不染，象征着人类尽管经历世俗苦难，依然拥有获得启迪的潜力",
      background: "佛教哲学的核心，代表佛陀关于一切众生均可获得觉醒的教诲",
      image: "https://readdy.ai/api/search-image?query=Exquisite%20golden%20Buddhist%20lotus%20pattern%20carved%20on%20temple%20wall%2C%20sacred%20lotus%20mandala%20design%2C%20intricate%20petals%20with%20divine%20golden%20light%2C%20traditional%20Buddhist%20religious%20art%2C%20ornate%20lotus%20symbol%20with%20spiritual%20radiance&width=400&height=300&seq=lotus1&orientation=landscape"
    },
    {
      title: "法轮",
      meaning: "佛教教义",
      description: "八辐轮代表八正道，即佛陀指引众生脱离苦海的智慧之路",
      background: "佛教最古老的象征之一，见于最早的佛教艺术和建筑中",
      image: "https://readdy.ai/api/search-image?query=Sacred%20Buddhist%20dharma%20wheel%20carved%20in%20golden%20temple%20decoration%2C%20eight-spoked%20wheel%20symbol%2C%20divine%20Buddhist%20religious%20carving%2C%20traditional%20dharma%20chakra%20with%20golden%20aura%2C%20ornate%20wheel%20of%20dharma&width=400&height=300&seq=wheel1&orientation=landscape"
    },
    {
      title: "无尽结",
      meaning: "互联互通",
      description: "无尽结象征着一切现象的相互联系以及慈悲与智慧的完美结合",
      background: "象征着佛陀无尽的智慧与慈悲，无始无终的法性真理",
      image: "https://readdy.ai/api/search-image?query=Intricate%20Buddhist%20endless%20knot%20pattern%20in%20golden%20temple%20carving%2C%20eternal%20knot%20symbol%2C%20interconnected%20sacred%20geometry%2C%20traditional%20Buddhist%20endless%20loop%20design%2C%20divine%20golden%20knot%20pattern&width=400&height=300&seq=knot1&orientation=landscape"
    }
  ];

  const culturalSymbols = [
    {
      title: "龙纹",
      meaning: "护法神威",
      description: "在佛教中，龙作为护法神灵，守护佛法道场，驱除邪恶",
      background: "中华文化与佛教文化的完美融合，体现佛法的威严与慈悲",
      image: "https://readdy.ai/api/search-image?query=Majestic%20Chinese%20dragon%20carved%20on%20Buddhist%20temple%20pillar%2C%20golden%20dragon%20protecting%20Buddhist%20temple%2C%20sacred%20dragon%20guardian%2C%20ornate%20dragon%20relief%20with%20clouds%2C%20traditional%20Buddhist%20temple%20dragon%20art&width=400&height=300&seq=dragon1&orientation=landscape"
    },
    {
      title: "凤凰图案",
      meaning: "涅槃重生",
      description: "凤凰浴火重生，象征着修行者通过苦修获得精神的升华与觉悟",
      background: "佛教修行理念的艺术化表达，体现觉悟之路的艰辛与光明",
      image: "https://readdy.ai/api/search-image?query=Elegant%20phoenix%20carved%20in%20Buddhist%20temple%20decoration%2C%20golden%20phoenix%20with%20flowing%20feathers%2C%20sacred%20bird%20symbol%20in%20temple%20art%2C%20ornate%20phoenix%20relief%20with%20divine%20aura%2C%20traditional%20Chinese%20phoenix%20in%20Buddhist%20context&width=400&height=300&seq=phoenix1&orientation=landscape"
    },
    {
      title: "祥云纹",
      meaning: "天界祥瑞",
      description: "祥云连接天地，象征佛法如甘露般普降人间，利益众生",
      background: "云象征着诸佛菩萨的慈悲之心，如云般广大无边",
      image: "https://readdy.ai/api/search-image?query=Flowing%20auspicious%20cloud%20patterns%20carved%20in%20Buddhist%20temple%2C%20golden%20cloud%20scrolls%20with%20divine%20essence%2C%20sacred%20cloud%20motifs%20in%20temple%20decoration%2C%20traditional%20Chinese%20cloud%20patterns%20with%20Buddhist%20symbolism&width=400&height=300&seq=cloud1&orientation=landscape"
    }
  ];

  const philosophicalSymbols = [
    {
      title: "曼陀罗",
      meaning: "宇宙秩序",
      description: "圆形几何图案代表宇宙的和谐秩序，体现佛教的圆满智慧",
      background: "密宗修行中的重要工具，象征心灵从混乱走向清净的过程",
      image: "https://readdy.ai/api/search-image?query=Sacred%20Buddhist%20mandala%20carved%20in%20temple%20ceiling%2C%20intricate%20circular%20geometric%20patterns%2C%20golden%20mandala%20with%20Buddhist%20symbols%2C%20cosmic%20order%20represented%20in%20temple%20art%2C%20traditional%20Buddhist%20sacred%20geometry&width=400&height=300&seq=mandala1&orientation=landscape"
    },
    {
      title: "金刚杵",
      meaning: "智慧力量",
      description: "金刚杵象征着摧毁无明烦恼的智慧力量，是觉悟的象征",
      background: "密宗法器的艺术化表现，体现佛法的不可摧毁性",
      image: "https://readdy.ai/api/search-image?query=Golden%20vajra%20dorje%20carved%20in%20Buddhist%20temple%20decoration%2C%20sacred%20thunderbolt%20symbol%2C%20diamond%20scepter%20in%20temple%20relief%2C%20traditional%20Buddhist%20ritual%20object%20carving%2C%20ornate%20vajra%20with%20divine%20power&width=400&height=300&seq=vajra1&orientation=landscape"
    },
    {
      title: "宝瓶纹",
      meaning: "功德圆满",
      description: "宝瓶盛装甘露法水，象征修行功德的圆满与智慧的充盈",
      background: "八吉祥之一，代表佛陀教法的珍贵与圆满成就",
      image: "https://readdy.ai/api/search-image?query=Sacred%20Buddhist%20treasure%20vase%20carved%20in%20temple%20decoration%2C%20golden%20vase%20with%20divine%20nectar%2C%20ornate%20vase%20symbol%20in%20Buddhist%20art%2C%20traditional%20Buddhist%20auspicious%20vase%20carving%2C%20blessed%20vessel%20with%20spiritual%20significance&width=400&height=300&seq=vase1&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* 顶部标题区域 */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent rounded-full blur-3xl"></div>
          <div className="relative">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 font-['Pacifico']">象征意义</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              山西寺庙的每一个装饰图案都蕴含着深邃的佛教智慧与中华文化的精神内核，
              这些神圣的符号如同无声的经文，诉说着千年不变的觉悟之道
            </p>
          </div>
        </div>

        {/* 宗教象征区域 */}
        <div className="mb-20">
          <div className="text-center mb-16 relative">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-100 to-orange-100 px-8 py-4 rounded-full shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <i className="ri-contrast-2-line text-white text-xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">宗教象征</h3>
            </div>
            <p className="text-lg text-amber-600 mt-4 max-w-2xl mx-auto">承载佛教核心教义的神圣图案</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {religiousSymbols.map((symbol, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <img 
                      src={symbol.image} 
                      alt={symbol.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="bg-amber-600/80 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-white font-semibold text-lg">{symbol.title}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">{symbol.meaning}</h4>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border-l-4 border-amber-500">
                        <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <i className="ri-book-open-line text-amber-600"></i>
                          象征内涵
                        </h5>
                        <p className="text-gray-700 leading-relaxed text-sm">{symbol.description}</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-orange-500">
                        <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <i className="ri-ancient-pavilion-line text-orange-600"></i>
                          文化根源
                        </h5>
                        <p className="text-gray-700 leading-relaxed text-sm">{symbol.background}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 文化象征区域 */}
        <div className="mb-20">
          <div className="text-center mb-16 relative">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-100 to-red-100 px-8 py-4 rounded-full shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <i className="ri-dragon-line text-white text-xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">文化象征</h3>
            </div>
            <p className="text-lg text-orange-600 mt-4 max-w-2xl mx-auto">体现中华文化与佛教融合的图案</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {culturalSymbols.map((symbol, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <img 
                      src={symbol.image} 
                      alt={symbol.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="bg-orange-600/80 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-white font-semibold text-lg">{symbol.title}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">{symbol.meaning}</h4>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-orange-500">
                        <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <i className="ri-book-open-line text-orange-600"></i>
                          象征内涵
                        </h5>
                        <p className="text-gray-700 leading-relaxed text-sm">{symbol.description}</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-2xl border-l-4 border-red-500">
                        <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <i className="ri-ancient-pavilion-line text-red-600"></i>
                          文化根源
                        </h5>
                        <p className="text-gray-700 leading-relaxed text-sm">{symbol.background}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 哲学象征区域 */}
        <div className="mb-20">
          <div className="text-center mb-16 relative">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-red-100 to-pink-100 px-8 py-4 rounded-full shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                <i className="ri-compass-3-line text-white text-xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">哲学象征</h3>
            </div>
            <p className="text-lg text-red-600 mt-4 max-w-2xl mx-auto">蕴含深邃哲学思想的神圣几何</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophicalSymbols.map((symbol, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <img 
                      src={symbol.image} 
                      alt={symbol.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="bg-red-600/80 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-white font-semibold text-lg">{symbol.title}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">{symbol.meaning}</h4>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-2xl border-l-4 border-red-500">
                        <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <i className="ri-book-open-line text-red-600"></i>
                          象征内涵
                        </h5>
                        <p className="text-gray-700 leading-relaxed text-sm">{symbol.description}</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl border-l-4 border-pink-500">
                        <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <i className="ri-ancient-pavilion-line text-pink-600"></i>
                          文化根源
                        </h5>
                        <p className="text-gray-700 leading-relaxed text-sm">{symbol.background}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部总结区域 */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-16 text-white text-center overflow-hidden">
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  <i className="ri-ancient-gate-line text-white text-3xl"></i>
                </div>
                <h3 className="text-4xl font-bold mb-4 font-['Pacifico']">神圣艺术的语言</h3>
                <div className="w-32 h-1 bg-white/50 mx-auto mb-8 rounded-full"></div>
              </div>
              
              <div className="max-w-5xl mx-auto space-y-6">
                <p className="text-xl leading-relaxed opacity-95">
                  在山西寺庙的装饰艺术中，每一道线条都是虔诚的祈祷，每一个图案都是智慧的结晶。
                  这些千年传承的神圣符号，如同石刻的经文，木雕的偈语，金铸的真言。
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  它们超越了单纯的装饰功能，成为连接凡俗与神圣、现世与来世的桥梁。
                  当我们凝视这些精美的纹饰时，便是在阅读一部用艺术书写的佛学典籍，
                  感受着跨越时空的精神共鸣与文化传承。
                </p>
              </div>
              
              <div className="mt-12 grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <i className="ri-heart-pulse-line text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold mb-2">精神寄托</h4>
                  <p className="text-sm opacity-80">寄托信仰与祈愿</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <i className="ri-book-open-line text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold mb-2">文化传承</h4>
                  <p className="text-sm opacity-80">承载历史文脉</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <i className="ri-palette-line text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold mb-2">艺术瑰宝</h4>
                  <p className="text-sm opacity-80">展现工艺之美</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <i className="ri-lightbulb-line text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold mb-2">智慧启迪</h4>
                  <p className="text-sm opacity-80">启发心灵觉悟</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
