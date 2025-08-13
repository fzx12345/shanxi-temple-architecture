'use client';

import { useState } from 'react';

export default function HistoricalTimeline() {
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const timelinePeriods = [
    {
      id: 1,
      period: '北魏 (386-534)',
      title: '佛教艺术初兴',
      position: '10%',
      description: '佛教传入中国后的第一个繁荣期，纹样简朴庄重',
      characteristics: ['纹样线条粗犷有力', '造型简朴庄重', '外来文化色彩浓厚', '石雕工艺精湛'],
      masterworks: [
        {
          name: '云冈石窟飞天',
          description: '飞天身姿优美，衣带飘逸，是早期佛教艺术的代表',
          image: 'https://readdy.ai/api/search-image?query=Northern%20Wei%20dynasty%20Yungang%20Grottoes%20flying%20apsaras%20stone%20carving%2C%20elegant%20celestial%20beings%20with%20flowing%20robes%2C%20early%20Buddhist%20art%20sculpture%2C%20ancient%20Chinese%20religious%20stone%20carving&width=300&height=400&seq=timeline1&orientation=portrait'
        }
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      period: '隋唐 (581-907)',
      title: '盛世华章',
      position: '25%',
      description: '佛教艺术达到巅峰，纹样华丽精美，技艺炉火纯青',
      characteristics: ['纹样华丽精美', '构图饱满丰富', '色彩绚丽多彩', '工艺技术精湛'],
      masterworks: [
        {
          name: '佛光寺莲花柱础',
          description: '莲花瓣层次分明，雕工精细，体现盛唐气象',
          image: 'https://readdy.ai/api/search-image?query=Tang%20dynasty%20Foguang%20Temple%20lotus%20column%20base%20stone%20carving%2C%20detailed%20lotus%20petals%20with%20multiple%20layers%2C%20prosperous%20Tang%20style%20Buddhist%20architecture%2C%20exquisite%20stone%20craftsmanship&width=300&height=400&seq=timeline2&orientation=portrait'
        }
      ],
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 3,
      period: '宋代 (960-1279)',
      title: '精工细作',
      position: '45%',
      description: '注重细节刻画，纹样精致典雅，工艺技术日臻完美',
      characteristics: ['细节刻画精致', '纹样典雅清秀', '构图严谨规整', '技法趋于成熟'],
      masterworks: [
        {
          name: '晋祠圣母殿木雕',
          description: '木雕工艺精湛，纹样细致入微，是宋代艺术的杰作',
          image: 'https://readdy.ai/api/search-image?query=Song%20dynasty%20Jinci%20Temple%20wooden%20carving%20at%20Holy%20Mother%20Hall%2C%20intricate%20wood%20carving%20with%20delicate%20patterns%2C%20refined%20Song%20artistic%20style%2C%20masterful%20Chinese%20woodwork%20craftsmanship&width=300&height=400&seq=timeline3&orientation=portrait'
        }
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 4,
      period: '辽金 (916-1234)',
      title: '民族融合',
      position: '60%',
      description: '多民族文化交融，纹样风格独特，兼具粗犷与精美',
      characteristics: ['民族风格融合', '纹样风格独特', '技法兼收并蓄', '地域特色鲜明'],
      masterworks: [
        {
          name: '华严寺薄伽教藏',
          description: '辽代木构建筑精品，纹样体现民族融合特色',
          image: 'https://readdy.ai/api/search-image?query=Liao%20dynasty%20Huayan%20Temple%20Bhagavat%20sutra%20repository%20wooden%20architecture%2C%20ethnic%20fusion%20decorative%20patterns%2C%20unique%20Liao%20artistic%20style%2C%20traditional%20Chinese%20temple%20woodwork&width=300&height=400&seq=timeline4&orientation=portrait'
        }
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      period: '元代 (1271-1368)',
      title: '异域风情',
      position: '75%',
      description: '受蒙古和西域文化影响，纹样呈现新的艺术风貌',
      characteristics: ['异域文化影响', '纹样风格多元', '色彩对比强烈', '图案题材丰富'],
      masterworks: [
        {
          name: '永乐宫壁画',
          description: '道教壁画的巅峰之作，纹样融合多元文化元素',
          image: 'https://readdy.ai/api/search-image?query=Yuan%20dynasty%20Yongle%20Palace%20Taoist%20mural%20painting%2C%20multicultural%20decorative%20elements%2C%20vibrant%20colors%20and%20exotic%20patterns%2C%20Chinese%20Taoist%20temple%20wall%20art%20masterpiece&width=300&height=400&seq=timeline5&orientation=portrait'
        }
      ],
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 6,
      period: '明清 (1368-1911)',
      title: '传承创新',
      position: '90%',
      description: '在传承的基础上创新发展，纹样工艺达到新高度',
      characteristics: ['传统工艺传承', '技法不断创新', '纹样题材广泛', '装饰效果华丽'],
      masterworks: [
        {
          name: '双塔寺琉璃塔',
          description: '明代琉璃工艺精品，纹样华丽，色彩绚烂',
          image: 'https://readdy.ai/api/search-image?query=Ming%20dynasty%20Twin%20Pagoda%20Temple%20glazed%20ceramic%20pagoda%2C%20colorful%20glazed%20tile%20decorations%2C%20brilliant%20Ming%20ceramic%20craftsmanship%2C%20ornate%20temple%20pagoda%20architecture&width=300&height=400&seq=timeline6&orientation=portrait'
        }
      ],
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* 标题区域 */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent rounded-full blur-3xl"></div>
          <div className="relative">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 font-['Pacifico']">历史时光轴</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              沿着历史的长河，探寻山西寺庙纹样艺术在各个朝代的发展脉络与演变历程
            </p>
          </div>
        </div>

        {/* 时间轴主体 */}
        <div className="relative">
          {/* 中央时间线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 via-orange-500 to-red-600 rounded-full"></div>

          {/* 时间节点 */}
          <div className="space-y-16">
            {timelinePeriods.map((period, index) => (
              <div 
                key={period.id} 
                className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'} ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                >
                  <div className="group relative cursor-pointer" onClick={() => setSelectedPeriod(period)}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${period.color.replace('from-', 'from-').replace('to-', 'to-')}/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                      <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${period.color} text-white px-6 py-3 rounded-full mb-4`}>
                        <i className="ri-time-line text-xl"></i>
                        <span className="font-bold text-lg">{period.period}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{period.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{period.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {period.characteristics.map((char, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">{char}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-center">
                        <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 whitespace-nowrap cursor-pointer">
                          查看代表作品
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 中央节点 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-amber-500 shadow-lg z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 模态框 */}
        {selectedPeriod && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedPeriod(null)}>
            <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <div className={`bg-gradient-to-r ${selectedPeriod.color} p-8 text-white`}>
                  <button 
                    onClick={() => setSelectedPeriod(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <i className="ri-ancient-pavilion-line text-3xl"></i>
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold mb-2">{selectedPeriod.title}</h2>
                      <p className="text-xl opacity-90">{selectedPeriod.period}</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed opacity-95">{selectedPeriod.description}</p>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <i className="ri-star-line text-amber-600"></i>
                        艺术特征
                      </h3>
                      <div className="space-y-4">
                        {selectedPeriod.characteristics.map((char, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl">
                            <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                              {idx + 1}
                            </div>
                            <span className="text-gray-700 leading-relaxed">{char}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <i className="ri-treasure-map-line text-amber-600"></i>
                        代表作品
                      </h3>
                      {selectedPeriod.masterworks.map((work, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                          <div className="h-64">
                            <img 
                              src={work.image} 
                              alt={work.name}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <div className="p-6">
                            <h4 className="text-xl font-bold text-gray-800 mb-3">{work.name}</h4>
                            <p className="text-gray-600 leading-relaxed">{work.description}</p>
                          </div>
                        </div>
                      ))}
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