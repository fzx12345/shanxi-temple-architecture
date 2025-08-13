'use client';

export default function PatternTypes() {
  const patternCategories = [
    {
      title: "植物纹样",
      subtitle: "自然生命的象征",
      patterns: [
        {
          name: "莲花纹",
          meaning: "纯洁与觉悟的象征",
          description: "莲花出淤泥而不染，在佛教中代表清净无染的佛性。常见于佛座、背光等处。",
          variations: ["八瓣莲花", "千叶莲花", "莲花宝座", "莲花手印"],
          image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20Buddhist%20lotus%20pattern%20decoration%2C%20detailed%20lotus%20flower%20carving%20on%20temple%2C%20sacred%20lotus%20motifs%2C%20golden%20lotus%20ornamental%20design%2C%20intricate%20lotus%20petals%20carved%20in%20stone&width=300&height=400&seq=lotus1&orientation=portrait"
        },
        {
          name: "宝相花纹",
          meaning: "华丽庄重的装饰纹样",
          description: "宝相花是佛教艺术中的装饰花卉，造型华丽，寓意吉祥富贵。",
          variations: ["单体宝相花", "连续宝相花", "缠枝宝相花", "团花宝相花"],
          image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20baoxiang%20flower%20pattern%20on%20Buddhist%20temple%2C%20ornate%20floral%20decorative%20motifs%2C%20elaborate%20temple%20flower%20carvings%2C%20golden%20religious%20decorative%20patterns%2C%20intricate%20Buddhist%20floral%20art&width=300&height=400&seq=flower1&orientation=portrait"
        },
        {
          name: "卷草纹",
          meaning: "生命力旺盛的表现",
          description: "以蔓草为题材的装饰纹样，线条流畅，富有韵律感，象征生命的延续。",
          variations: ["单独卷草", "连续卷草", "缠枝卷草", "对称卷草"],
          image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20scroll%20grass%20pattern%20decoration%2C%20flowing%20vine%20and%20leaf%20motifs%2C%20elegant%20curved%20plant%20patterns%2C%20temple%20decorative%20scrollwork%2C%20graceful%20botanical%20ornamental%20design&width=300&height=400&seq=grass1&orientation=portrait"
        }
      ]
    },
    {
      title: "动物纹样",
      subtitle: "神兽护法的威仪",
      patterns: [
        {
          name: "龙纹",
          meaning: "皇权与神力的象征",
          description: "龙是中华民族的图腾，在佛教中成为护法神兽，常出现在佛像背光、藻井等处。",
          variations: ["升龙", "降龙", "团龙", "云龙"],
          image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20dragon%20pattern%20carved%20on%20Buddhist%20temple%2C%20powerful%20dragon%20motif%20decoration%2C%20imperial%20dragon%20design%2C%20ornate%20dragon%20carvings%2C%20golden%20dragon%20ornamental%20art&width=300&height=400&seq=dragon1&orientation=portrait"
        },
        {
          name: "凤纹",
          meaning: "祥瑞与高贵的象征",
          description: "凤凰是百鸟之王，象征祥瑞和高贵，常与龙纹配对出现，寓意和谐美满。",
          variations: ["双凤朝阳", "凤穿牡丹", "飞凤", "栖凤"],
          image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20phoenix%20pattern%20on%20Buddhist%20temple%2C%20elegant%20phoenix%20bird%20motif%2C%20ornate%20phoenix%20decorative%20carving%2C%20auspicious%20phoenix%20design%2C%20golden%20phoenix%20ornamental%20art&width=300&height=400&seq=phoenix1&orientation=portrait"
        },
        {
          name: "狮纹",
          meaning: "威严与护法的象征",
          description: "狮子作为护法神兽，象征威严和力量，常出现在寺庙门前和柱础上。",
          variations: ["狮子滚绣球", "太师少师", "石狮守门", "狮子戏球"],
          image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20lion%20pattern%20carved%20on%20Buddhist%20temple%2C%20guardian%20lion%20motif%20decoration%2C%20powerful%20lion%20carving%2C%20temple%20protective%20lion%20design%2C%20stone%20lion%20ornamental%20art&width=300&height=400&seq=lion1&orientation=portrait"
        }
      ]
    },
    {
      title: "几何纹样",
      subtitle: "秩序与和谐的体现",
      patterns: [
        {
          name: "云雷纹",
          meaning: "变化无穷的宇宙",
          description: "以云彩和雷电为题材，线条回旋曲折，象征着佛法的深奥和变化无穷。",
          variations: ["卷云纹", "流云纹", "云头纹", "雷云纹"],
          image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20cloud%20and%20thunder%20pattern%20on%20Buddhist%20temple%2C%20swirling%20cloud%20motifs%2C%20intricate%20geometric%20cloud%20design%2C%20ancient%20Chinese%20decorative%20patterns%2C%20golden%20cloud%20ornamental%20art&width=300&height=400&seq=cloud1&orientation=portrait"
        },
        {
          name: "万字纹",
          meaning: "吉祥如意的象征",
          description: "万字纹是佛教的重要标志，象征着吉祥如意、万德庄严，常用于边饰。",
          variations: ["单体万字", "连续万字", "万字锦", "万字回纹"],
          image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20swastika%20pattern%20on%20Buddhist%20temple%2C%20auspicious%20swastika%20motifs%2C%20sacred%20Buddhist%20symbols%2C%20golden%20religious%20decorative%20patterns%2C%20ancient%20temple%20symbol%20art&width=300&height=400&seq=swastika1&orientation=portrait"
        },
        {
          name: "回纹",
          meaning: "循环往复的哲理",
          description: "回纹线条方折回环，象征着佛教中轮回转世和因果循环的哲学思想。",
          variations: ["单体回纹", "连续回纹", "云回纹", "如意回纹"],
          image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20meander%20pattern%20on%20Buddhist%20temple%2C%20geometric%20border%20design%2C%20continuous%20loop%20patterns%2C%20ancient%20Chinese%20decorative%20borders%2C%20golden%20geometric%20ornamental%20art&width=300&height=400&seq=meander1&orientation=portrait"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">纹饰类型</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            山西寺庙的纹饰艺术丰富多样，每一种图案都承载着深厚的文化内涵与宗教意义
          </p>
        </div>

        {patternCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{category.title}</h3>
              <p className="text-lg text-amber-600 font-semibold">{category.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.patterns.map((pattern, patternIndex) => (
                <div key={patternIndex} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={pattern.image} 
                      alt={pattern.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">{pattern.name}</h4>
                    <p className="text-amber-600 font-semibold mb-4">{pattern.meaning}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{pattern.description}</p>
                    
                    <div>
                      <h5 className="font-bold text-gray-800 mb-3">常见变体</h5>
                      <div className="flex flex-wrap gap-2">
                        {pattern.variations.map((variation, idx) => (
                          <span key={idx} className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm border">
                            {variation}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}