'use client';

export default function LegendaryArtisans() {
  const legendaryArtisans = [
    {
      name: '李春',
      period: '隋唐时期',
      specialty: '石雕莲花纹饰',
      location: '赵州·大同',
      story: '李春，隋代著名工匠，不仅是赵州桥的设计者，更是石雕艺术的一代宗师。相传他年轻时曾在大同云冈石窟学习雕刻技艺，对佛教造像和装饰纹样有着深入的研究。\n\n在设计赵州桥时，李春创造性地将佛教莲花纹样融入桥梁装饰中。他认为莲花"出淤泥而不染"的品格，正如桥梁跨越河流、连接两岸的功能一样，都象征着超越和解脱。因此，他在桥栏上雕刻了精美的莲花纹饰，每一朵莲花都有着不同的姿态和表情。\n\n据史料记载，李春晚年回到家乡，专门为当地寺院设计装饰纹样。他创造的"八瓣莲花"图案，以其完美的对称性和丰富的层次感，成为了后世工匠学习的典范。这种图案不仅在山西地区广泛应用，更是传播到了整个北方地区。',
      achievement: '创造了标准化的八瓣莲花纹样，影响了整个北方地区的佛教装饰艺术',
      legacy: '其设计的莲花纹样至今仍是中国佛教建筑装饰的经典元素',
      image: 'https://readdy.ai/api/search-image?query=Ancient%20Chinese%20master%20craftsman%20Li%20Chun%20carving%20lotus%20patterns%20in%20stone%2C%20traditional%20Chinese%20stone%20carving%20artisan%2C%20detailed%20lotus%20flower%20sculpture%20process%2C%20legendary%20Chinese%20temple%20decorator&width=400&height=500&seq=artisan1&orientation=portrait'
    },
    {
      name: '张彦远',
      period: '唐代',
      specialty: '飞天壁画设计',
      location: '五台山·长安',
      story: '张彦远，唐代著名画家，出身于官宦世家，自幼饱读诗书，对佛教文化有着深厚的理解。他不仅是《历代名画记》的作者，更是寺院壁画设计的革新者。\n\n贞观年间，张彦远受邀为五台山佛光寺设计壁画方案。他深入研究了印度犍陀罗艺术中的飞天形象，发现这些外来的神灵虽然神圣庄严，但缺乏中国人喜爱的飘逸灵动。于是，他大胆地将中国古代神话中的飞仙形象与佛教飞天相结合。\n\n张彦远笔下的飞天，不再是严肃的宗教符号，而是充满生命力的艺术形象。她们有的散花礼佛，有的奏乐起舞，有的拈花微笑，每一个动作都充满了诗情画意。这种创新很快得到了皇室和僧侣的认可，成为了唐代寺院壁画的标准范式。\n\n后世称张彦远为"飞天之父"，他的设计理念影响了整个中古时期的佛教艺术发展。',
      achievement: '创造了中国式飞天艺术风格，将外来宗教艺术成功本土化',
      legacy: '其飞天设计理念影响了后世千年的佛教壁画艺术',
      image: 'https://readdy.ai/api/search-image?query=Tang%20dynasty%20master%20painter%20Zhang%20Yanyuan%20designing%20flying%20apsaras%20murals%2C%20ancient%20Chinese%20artist%20creating%20celestial%20beings%2C%20traditional%20Chinese%20temple%20mural%20painting%20process&width=400&height=500&seq=artisan2&orientation=portrait'
    },
    {
      name: '喻皓',
      period: '北宋',
      specialty: '木结构装饰设计',
      location: '应县·开封',
      story: '喻皓，北宋著名建筑师，被誉为"木工祖师"。他出身于工匠世家，从小就展现出了对木结构建筑的天赋。成年后，他游历各地，学习各种建筑技艺，最终成为了宋代最杰出的建筑大师。\n\n应县木塔的建造是喻皓一生中最重要的作品。在设计过程中，他不仅要考虑建筑的结构安全，更要兼顾装饰的美观效果。他创造性地将传统的斗拱结构与装饰纹样相结合，每一个斗拱都雕刻着精美的花纹。\n\n喻皓认为，建筑装饰不应该是建筑的附属品，而应该与建筑结构融为一体。他设计的"如意云纹斗拱"，既具有结构功能，又具有装饰效果。这种设计理念在当时是革命性的，为后世的建筑装饰设计开辟了新的方向。\n\n据《宋史》记载，喻皓晚年著有《木经》一书，详细记录了各种木结构装饰的设计方法和施工技艺。虽然此书已失传，但其设计理念却通过应县木塔等建筑作品得以保存至今。',
      achievement: '将建筑结构与装饰艺术完美结合，创造了结构装饰一体化的设计理念',
      legacy: '应县木塔成为世界现存最古老的木结构塔式建筑，其装饰设计影响深远',
      image: 'https://readdy.ai/api/search-image?query=Song%20dynasty%20master%20architect%20Yu%20Hao%20designing%20wooden%20pagoda%20decorations%2C%20ancient%20Chinese%20building%20craftsman%2C%20traditional%20Chinese%20wooden%20architecture%20with%20ornate%20carvings&width=400&height=500&seq=artisan3&orientation=portrait'
    },
    {
      name: '马和之',
      period: '南宋',
      specialty: '缠枝纹样创新',
      location: '平遥·杭州',
      story: '马和之，南宋著名画家，以山水画著称，但他在装饰纹样设计方面的贡献同样不可忽视。他出生于一个书香门第，自幼受到良好的文化教育，对佛教哲学有着深刻的理解。\n\n南宋偏安江南，政治环境相对稳定，为文化艺术的发展提供了良好条件。马和之受邀为多座寺院设计装饰方案，他的设计理念深受理学思想影响，追求自然和谐的美学效果。\n\n在缠枝纹样的设计中，马和之突破了传统的对称模式，创造了更加自然流动的图案。他认为，真正的美不在于刻意的对称，而在于自然的和谐。他设计的缠枝纹样，如行云流水般自然流畅，每一条线条都充满了生命力。\n\n马和之的创新不仅体现在图案设计上，更体现在色彩搭配上。他大胆地使用了青、白、灰等素雅色调，营造出了清淡雅致的视觉效果。这种色彩理念深深影响了后世的装饰艺术发展。',
      achievement: '创新了缠枝纹样的设计理念，开创了自然流动的装饰风格',
      legacy: '其素雅的色彩理念和自然的构图方式影响了元明清三代的装饰艺术',
      image: 'https://readdy.ai/api/search-image?query=Song%20dynasty%20artist%20Ma%20Hezhi%20creating%20flowing%20vine%20patterns%2C%20traditional%20Chinese%20decorative%20pattern%20design%2C%20elegant%20temple%20ornament%20creation%20process&width=400&height=500&seq=artisan4&orientation=portrait'
    },
    {
      name: '刘銮英',
      period: '明代',
      specialty: '彩绘装饰技艺',
      location: '五台山·北京',
      story: '刘銮英，明代宫廷画师，专门负责皇家寺院的彩绘装饰工作。她是中国历史上少有的女性工艺大师，其精湛的技艺和独特的艺术见解，在男性主导的工匠行业中独树一帜。\n\n刘銮英出身于画匠世家，从小就跟随父亲学习绘画技艺。她天资聪颖，勤奋好学，很快就掌握了各种彩绘技法。成年后，她的作品得到了宫廷的认可，被选入宫中担任画师。\n\n在为五台山显通寺设计彩绘方案时，刘銮英创造性地将传统的工笔画技法与装饰绘画相结合。她的彩绘作品不仅色彩鲜艳，更重要的是具有很强的装饰效果。她善于运用金粉、银粉等贵重材料，营造出富丽堂皇的视觉效果。\n\n刘銮英最大的贡献是建立了一套完整的彩绘装饰体系。她将各种纹样按照等级和功能进行分类，为不同的建筑部位设计了相应的装饰方案。这套体系后来成为了明清两代寺院彩绘的标准范式。',
      achievement: '建立了完整的寺院彩绘装饰体系，标准化了装饰绘画的技法和规范',
      legacy: '其彩绘技艺和装饰理念影响了明清两代的宫廷和宗教建筑装饰',
      image: 'https://readdy.ai/api/search-image?query=Ming%20dynasty%20female%20master%20painter%20Liu%20Luanying%20creating%20colorful%20temple%20decorations%2C%20traditional%20Chinese%20temple%20painting%20artisan%2C%20detailed%20religious%20ornamental%20painting%20process&width=400&height=500&seq=artisan5&orientation=portrait'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-red-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-200/20 to-transparent rounded-full blur-3xl"></div>
          <div className="relative">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 font-['Pacifico']">传奇匠师</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              这些杰出的匠师们用他们的智慧和双手，创造了无数传世经典，他们的名字与作品一起，永远镌刻在中华文明的史册上
            </p>
          </div>
        </div>

        <div className="space-y-20">
          {legendaryArtisans.map((artisan, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/30 to-pink-100/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl">
                <div className={`flex items-stretch ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-1 p-12">
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                          <i className="ri-user-star-line text-white text-3xl"></i>
                        </div>
                        <div>
                          <h3 className="text-4xl font-bold text-gray-800 font-['Pacifico']">{artisan.name}</h3>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">{artisan.period}</span>
                            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">{artisan.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-2xl border-l-4 border-red-500 mb-6">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                          <i className="ri-tools-line text-red-600"></i>
                          专业特长
                        </h4>
                        <p className="text-gray-700 font-semibold">{artisan.specialty}</p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="bg-white p-8 rounded-2xl border-l-4 border-gray-500 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <i className="ri-book-open-line text-gray-600"></i>
                          传奇故事
                        </h4>
                        <div className="prose prose-gray max-w-none">
                          {artisan.story.split('\\n\\n').map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-2xl border-l-4 border-red-500">
                          <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <i className="ri-trophy-line text-red-600"></i>
                            主要成就
                          </h4>
                          <p className="text-gray-700 leading-relaxed text-sm">{artisan.achievement}</p>
                        </div>

                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl border-l-4 border-pink-500">
                          <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <i className="ri-time-line text-pink-600"></i>
                            传世影响
                          </h4>
                          <p className="text-gray-700 leading-relaxed text-sm">{artisan.legacy}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <img 
                      src={artisan.image} 
                      alt={artisan.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-8 left-8 z-20">
                      <div className="bg-red-600/80 backdrop-blur-sm px-6 py-3 rounded-full">
                        <span className="text-white font-semibold text-lg">{artisan.specialty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部致敬 */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl p-16 text-white text-center">
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-3xl"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8">
                <i className="ri-hand-heart-line text-white text-4xl"></i>
              </div>
              <h3 className="text-4xl font-bold mb-6 font-['Pacifico']">致敬匠心传承</h3>
              <div className="w-32 h-1 bg-white/50 mx-auto mb-8 rounded-full"></div>
              <div className="max-w-5xl mx-auto space-y-6">
                <p className="text-xl leading-relaxed opacity-95">
                  这些传奇匠师们的故事，不仅是个人才华的展现，更是整个民族文化创造力的体现。
                  他们用自己的智慧和双手，将抽象的宗教理念转化为具象的艺术作品，
                  让冰冷的石头和木材有了生命，让静默的建筑有了灵魂。
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  正是有了这些杰出匠师的传承和创新，中华民族的装饰艺术才能在历史的长河中不断发展，
                  形成了今天我们所看到的辉煌成就。他们的精神和技艺，
                  如同那些精美的纹饰一样，永远值得我们学习和传承。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}