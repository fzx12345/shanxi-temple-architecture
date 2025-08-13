'use client';

export default function LayoutPrinciples() {
  const principles = [
    {
      title: "中轴对称",
      description: "以中轴线为基准的对称布局体现了中国传统的秩序美学",
      image: "https://readdy.ai/api/search-image?query=Aerial%20view%20of%20Chinese%20temple%20complex%20showing%20symmetrical%20layout%20along%20central%20axis%2C%20traditional%20courtyard%20arrangement%2C%20balanced%20architectural%20composition%2C%20ancient%20temple%20planning%2C%20orderly%20building%20arrangement&width=500&height=300&seq=layout1&orientation=landscape"
    },
    {
      title: "进深递进",
      description: "由前向后层层递进的空间序列营造庄严神圣的氛围",
      image: "https://readdy.ai/api/search-image?query=Progressive%20temple%20courtyard%20sequence%20showing%20increasing%20elevation%20from%20front%20to%20back%2C%20multiple%20temple%20halls%20in%20ascending%20order%2C%20traditional%20Chinese%20religious%20architecture%20depth%2C%20layered%20temple%20complex&width=500&height=300&seq=layout2&orientation=landscape"
    },
    {
      title: "庭院围合",
      description: "封闭式庭院形成内向型空间，体现佛教的内省精神",
      image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20temple%20courtyard%20enclosed%20by%20buildings%2C%20peaceful%20inner%20courtyard%20space%2C%20temple%20garden%20with%20traditional%20architecture%2C%20serene%20Buddhist%20monastery%20courtyard%2C%20enclosed%20sacred%20space&width=500&height=300&seq=layout3&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">布局原则</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            山西寺庙的空间布局遵循着严格的传统原则，体现了中国古代建筑的哲学思想与美学追求
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={principle.image} 
                  alt={principle.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">典型寺庙布局分析</h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                  山门殿
                </h4>
                <p className="text-gray-600 text-sm">寺庙的入口建筑，通常供奉韦陀菩萨或四大天王</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                  天王殿
                </h4>
                <p className="text-gray-600 text-sm">供奉四大天王，象征护法神威，保护佛法道场</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                  大雄宝殿
                </h4>
                <p className="text-gray-600 text-sm">寺庙的主体建筑，供奉释迦牟尼佛，是礼佛的核心空间</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm">4</span>
                  藏经楼
                </h4>
                <p className="text-gray-600 text-sm">收藏佛经典籍的建筑，位于寺庙最后方，象征智慧的高度</p>
              </div>
            </div>
            
            <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=Traditional%20Chinese%20temple%20layout%20plan%20diagram%20showing%20mountain%20gate%2C%20heavenly%20king%20hall%2C%20main%20hall%2C%20and%20sutra%20library%20arranged%20along%20central%20axis%2C%20architectural%20floor%20plan%2C%20temple%20complex%20organization&width=600&height=600&seq=plan1&orientation=squarish"
                alt="寺庙布局图"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}