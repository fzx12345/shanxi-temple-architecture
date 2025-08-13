'use client';

export default function CulturalStories() {
  const culturalStories = [
    {
      title: '莲花东渐的故事',
      subtitle: '佛教艺术的本土化历程',
      period: '东汉至唐代',
      location: '云冈石窟·大同',
      story: '相传东汉明帝时期，佛教初传中土，印度僧人竺法兰携带着神圣的莲花图案来到洛阳。然而，中原匠师发现印度式的莲花过于写实，与中国人含蓄内敛的审美相冲突。于是，他们开始了一场跨越数百年的艺术创新之旅。\n\n北魏时期，在云冈石窟的雕凿过程中，一位名叫石勒的匠师受到中原传统铜镜纹样的启发，将莲花的花瓣简化为几何化的形状，并在花心加入了中国传统的云雷纹。这种创新的"中式莲花"很快传遍各地，成为了中国佛教艺术的标志性元素。\n\n到了唐代，这种莲花纹样更加成熟，不仅保持了佛教的神圣寓意，更融入了盛唐的富贵气象。五台山佛光寺大殿中的莲花藻井，就是这一艺术演变的集大成者。',
      cultural: '体现了佛教中国化的历史进程，展现了中华文化的包容性与创新性',
      image: 'https://readdy.ai/api/search-image?query=Ancient%20Chinese%20Buddhist%20lotus%20pattern%20evolution%20story%2C%20traditional%20Chinese%20temple%20with%20lotus%20motifs%20carved%20in%20stone%2C%20historical%20Buddhist%20art%20transformation%2C%20Chinese%20style%20lotus%20flowers%20in%20temple%20decoration&width=500&height=400&seq=story1&orientation=landscape',
      artifacts: ['云冈石窟第20窟莲花藻井', '佛光寺大殿莲花柱础', '应县木塔莲花斗拱']
    },
    {
      title: '龙纹护法传说',
      subtitle: '中华图腾与佛教文化的融合',
      period: '南北朝至宋代',
      location: '华严寺·大同',
      story: '在中国古代神话中，龙是掌管风雨的神灵，拥有至高无上的神力。当佛教传入中土时，如何让这位本土的"水神"为外来的佛法护持，成为了早期佛教艺术家们面临的挑战。\n\n南北朝时期，有一位来自西域的高僧法显，在游历五台山时做了一个奇异的梦：他梦见一条金色巨龙从云端降下，盘绕在佛陀周围，口中吐出朵朵莲花。醒来后，法显深感这是佛陀点化，遂与当地匠师合作，创造了"龙绕莲花"的装饰图案。\n\n这一创新很快得到了统治者的认可。北魏孝文帝下令，在所有皇家寺院中都要雕刻这种"护法龙纹"。工匠们不断完善这一图案，从最初简单的龙莲组合，发展为复杂的"二龙戏珠"、"龙凤呈祥"等多样化纹样。到宋代时，这种图案已成为中国寺院建筑不可或缺的装饰元素。',
      cultural: '象征着本土文化与外来宗教的和谐共存，体现了中华民族的文化自信',
      image: 'https://readdy.ai/api/search-image?query=Ancient%20Chinese%20dragon%20protecting%20Buddhist%20temple%20story%2C%20traditional%20Chinese%20dragon%20carved%20around%20lotus%20flowers%2C%20mythical%20dragon%20guardian%20in%20Buddhist%20temple%20art%2C%20cultural%20fusion%20of%20Chinese%20dragon%20and%20Buddhism&width=500&height=400&seq=story2&orientation=landscape',
      artifacts: ['华严寺薄伽教藏殿龙柱', '善化寺大殿龙头拱', '悬空寺护法龙雕']
    },
    {
      title: '飞天散花的诗意',
      subtitle: '天人合一思想的艺术体现',
      period: '唐代至元代',
      location: '永乐宫·芮城',
      story: '唐代是中国古典文化的巅峰时期，诗歌、绘画、雕塑都达到了前所未有的高度。在这样的文化背景下，佛教艺术中的飞天形象也发生了深刻的变化。\n\n天宝年间，著名画家吴道子受邀为长安青龙寺绘制壁画。在创作过程中，他突破了传统印度飞天厚重神圣的形象，融入了中国古代"飞仙"的飘逸灵动。他笔下的飞天不再是严肃的宗教符号，而是充满生命力的艺术形象：她们或散花礼佛，或奏乐起舞，或拈花微笑，每一个动作都充满了诗意。\n\n这种创新很快影响了整个中国。到了元代，永乐宫的壁画大师们将这一传统发扬光大。在朝元图中，数百位飞天以不同的姿态围绕着神灵，形成了一个充满动感和韵律的画面。她们的衣袂飘飞，好似天风轻拂；她们的笑容恬静，仿佛听到了天籁之音。这种飞天形象完全摆脱了宗教的桎梏，成为了纯粹的艺术创造。',
      cultural: '展现了中国古代艺术家的创新精神，体现了中华美学的独特魅力',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20flying%20apsaras%20celestial%20beings%20story%2C%20elegant%20flying%20dancers%20with%20flowing%20robes%20in%20temple%20art%2C%20poetic%20Chinese%20flying%20immortals%20scattering%20flowers%2C%20heavenly%20musicians%20in%20Buddhist%20temple%20painting&width=500&height=400&seq=story3&orientation=landscape',
      artifacts: ['永乐宫朝元图飞天', '芮城东岳庙飞天壁画', '洪洞广胜寺飞天藻井']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent rounded-full blur-3xl"></div>
          <div className="relative">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 font-['Pacifico']">文化故事</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              每一种纹样背后都有着动人的传说，每一段历史都承载着深厚的文化底蕴
            </p>
          </div>
        </div>

        <div className="space-y-20">
          {culturalStories.map((story, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-orange-100/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl">
                <div className={`flex items-stretch ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-1 p-12">
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                          <i className="ri-book-open-line text-white text-2xl"></i>
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-800">{story.title}</h3>
                          <p className="text-lg text-amber-600 font-semibold">{story.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                        <div className="flex items-center gap-2">
                          <i className="ri-calendar-line text-amber-600"></i>
                          <span>{story.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="ri-map-pin-line text-orange-600"></i>
                          <span>{story.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border-l-4 border-amber-500">
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <i className="ri-quill-pen-line text-amber-600"></i>
                          历史传说
                        </h4>
                        <div className="prose prose-gray max-w-none">
                          {story.story.split('\\n\\n').map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border-l-4 border-orange-500">
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <i className="ri-heart-pulse-line text-orange-600"></i>
                          文化价值
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{story.cultural}</p>
                      </div>

                      <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-8 rounded-2xl border-l-4 border-gray-500">
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <i className="ri-treasure-map-line text-gray-600"></i>
                          重要文物
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {story.artifacts.map((artifact, aIndex) => (
                            <div key={aIndex} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                              <span className="text-gray-700">{artifact}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-8 left-8 z-20">
                      <div className="bg-amber-600/80 backdrop-blur-sm px-6 py-3 rounded-full">
                        <span className="text-white font-semibold text-lg">{story.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部总结 */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-16 text-white text-center">
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-3xl"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8">
                <i className="ri-ancient-pavilion-line text-white text-3xl"></i>
              </div>
              <h3 className="text-4xl font-bold mb-6 font-['Pacifico']">千年文脉的传承</h3>
              <div className="w-32 h-1 bg-white/50 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
                这些流传千年的文化故事，不仅是艺术史的珍贵记录，更是中华民族精神文明的生动写照。
                它们见证了佛教文化与中华传统的深度融合，展现了古代匠师们的智慧与创造力。
                每一个纹样、每一段传说，都在诉说着我们民族文化的博大精深与源远流长。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}