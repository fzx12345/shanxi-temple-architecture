'use client';

export default function ConstructionTechniques() {
  const techniques = [
    {
      title: "榫卯工艺",
      description: "不用钉子的精密连接技术",
      icon: "ri-links-line",
      details: "通过木材的凹凸结合实现牢固连接，体现了古代工匠的精湛技艺"
    },
    {
      title: "模数制度",
      description: "标准化的建筑设计体系",
      icon: "ri-ruler-2-line",
      details: "以斗拱或柱径为基本模数，确保建筑比例的协调统一"
    },
    {
      title: "升起技术",
      description: "屋面曲线的营造方法",
      icon: "ri-arrow-up-circle-line",
      details: "通过调整檩条高度形成优美的屋面曲线，增强建筑美感"
    },
    {
      title: "侧脚法",
      description: "柱子的倾斜安装技术",
      icon: "ri-compass-3-line",
      details: "柱子向内侧微倾，增强建筑稳定性并产生视觉修正效果"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">建造技艺</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            山西寺庙建筑采用了众多精湛的传统建造技艺，这些技术至今仍令现代建筑师叹为观止
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {techniques.map((technique, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <i className={`${technique.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{technique.title}</h3>
              <p className="text-amber-600 font-semibold mb-3 text-center text-sm">{technique.description}</p>
              <p className="text-gray-600 text-sm leading-relaxed text-center">{technique.details}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">工匠传承体系</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="ri-user-star-line text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">师父带徒</h4>
                    <p className="text-gray-600">通过师父亲传身教，徒弟逐步掌握建造技艺的精髓</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="ri-book-open-line text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">工法记录</h4>
                    <p className="text-gray-600">《营造法式》等古籍详细记录了建造规范和技术要点</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="ri-tools-line text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">工具传承</h4>
                    <p className="text-gray-600">专用工具的制作和使用技法代代相传，确保工艺质量</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-80 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=Traditional%20Chinese%20master%20carpenter%20teaching%20apprentice%20temple%20construction%20techniques%2C%20ancient%20woodworking%20tools%2C%20craftsman%20workshop%20scene%2C%20traditional%20building%20skills%20training%2C%20wooden%20construction%20techniques%2C%20master%20artisan%20instruction&width=600&height=500&seq=craft1&orientation=landscape"
                alt="工匠传承"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}