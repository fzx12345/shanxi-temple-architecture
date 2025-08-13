
'use client';

import { useState, useEffect } from 'react';

export default function TempleArchitecture() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const architecturalFeatures = [
    {
      title: "斗拱结构",
      description: "山西寺庙的斗拱系统体现了中国古代建筑的精湛技艺，层层叠叠的木构件相互咬合，形成稳固的承重结构。",
      details: "采用榫卯结构，无需一钉一铆，体现了古代工匠的智慧与技艺",
      image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20dougong%20bracket%20system%20in%20ancient%20temple%2C%20detailed%20wooden%20interlocking%20brackets%2C%20complex%20wooden%20joint%20construction%2C%20traditional%20Chinese%20architectural%20engineering%2C%20golden%20wood%20texture%2C%20intricate%20craftsmanship%20details%2C%20ancient%20building%20technique%2C%20ornate%20wooden%20brackets%20with%20traditional%20patterns&width=600&height=400&seq=arch1&orientation=landscape"
    },
    {
      title: "飞檐翘角",
      description: "屋檐向上翘起的设计不仅美观，更具有实用功能，能够有效排水并增加建筑的稳定性。",
      details: "翘角设计融合了力学原理与美学追求，展现了中国建筑的独特魅力",
      image: "https://readdy.ai/api/search-image?query=Chinese%20temple%20roof%20with%20upturned%20eaves%20and%20flying%20corners%2C%20traditional%20curved%20roof%20tiles%2C%20ornate%20roof%20decorations%2C%20golden%20sunset%20lighting%2C%20detailed%20architectural%20elements%2C%20ancient%20Chinese%20temple%20roofline%2C%20traditional%20building%20design%20with%20decorative%20elements&width=600&height=400&seq=arch2&orientation=landscape"
    },
    {
      title: "木构框架",
      description: "山西寺庙多采用木构框架结构，柱、梁、枋相互配合，形成灵活而坚固的建筑体系。",
      details: "梁柱结构允许建筑在地震中有一定的柔性，体现了古代建筑的抗震智慧",
      image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20wooden%20frame%20structure%20in%20ancient%20temple%2C%20massive%20wooden%20pillars%20and%20beams%2C%20intricate%20wooden%20joinery%2C%20traditional%20Chinese%20carpentry%2C%20golden%20wood%20finish%2C%20temple%20interior%20architecture%2C%20ancient%20construction%20techniques%2C%20detailed%20wooden%20framework&width=600&height=400&seq=arch3&orientation=landscape"
    }
  ];

  if (!isMounted) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">建筑特色</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              山西寺庙建筑承载着千年的建筑智慧，每一个细节都体现着古代工匠的精湛技艺与深厚文化底蕴
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-200 animate-pulse"></div>
                <div className="p-8">
                  <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="bg-white/70 p-4 rounded-lg">
                    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">建筑特色</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            山西寺庙建筑承载着千年的建筑智慧，每一个细节都体现着古代工匠的精湛技艺与深厚文化底蕴
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {architecturalFeatures.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <div className="bg-white/70 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 italic">{feature.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">建筑布局特点</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-checkbox-circle-fill text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">中轴对称</h4>
                    <p className="text-gray-600">以中轴线为基准，左右对称布局，体现儒家中庸思想</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-checkbox-circle-fill text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">前低后高</h4>
                    <p className="text-gray-600">建筑群由前向后逐渐升高，营造庄严肃穆的氛围</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-checkbox-circle-fill text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">庭院组合</h4>
                    <p className="text-gray-600">多重庭院相互连接，形成丰富的空间层次</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-80 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=Aerial%20view%20of%20traditional%20Chinese%20temple%20complex%20layout%20in%20Shanxi%2C%20symmetrical%20courtyard%20design%2C%20multiple%20buildings%20arranged%20along%20central%20axis%2C%20traditional%20Chinese%20architectural%20planning%2C%20golden%20rooftops%2C%20ancient%20temple%20compound%20from%20above%2C%20orderly%20building%20arrangement&width=600&height=500&seq=layout1&orientation=landscape"
                alt="寺庙布局"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
