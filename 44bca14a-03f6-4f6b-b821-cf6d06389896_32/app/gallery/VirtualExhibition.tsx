
'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

export default function VirtualExhibition() {
  const [is3DMode, setIs3DMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isNaked3D, setIsNaked3D] = useState(false);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const throttleRef = useRef(null);

  // 纹样分类
  const categories = [
    { key: 'all', name: '全部纹样', icon: 'ri-apps-line', color: 'bg-gray-500' },
    { key: 'lotus', name: '莲花纹', icon: 'ri-flower-line', color: 'bg-pink-500' },
    { key: 'dragon', name: '龙凤纹', icon: 'ri-fire-line', color: 'bg-red-500' },
    { key: 'floral', name: '花卉纹', icon: 'ri-leaf-line', color: 'bg-green-500' },
    { key: 'geometric', name: '几何纹', icon: 'ri-shape-line', color: 'bg-blue-500' },
    { key: 'buddhist', name: '佛教纹', icon: 'ri-star-line', color: 'bg-amber-500' }
  ];

  // 使用 useMemo 缓存艺术品数据，避免重复渲染
  const allArtworks = useMemo(() => [
    // 莲花纹类
    {
      id: 1,
      name: '千手观音莲座',
      period: '唐代',
      temple: '佛光寺',
      category: 'lotus',
      description: '千手观音端坐八瓣莲花宝座，莲花盛开，花瓣层次分明，象征佛陀的清净智慧与慈悲普度',
      image: 'https://readdy.ai/api/search-image?query=Tang%20dynasty%20Buddhist%20Guanyin%20statue%20with%20thousand%20hands%20sitting%20on%20ornate%20lotus%20throne%2C%20golden%20wooden%20carving%20with%20detailed%20lotus%20petals%2C%20sacred%20Buddhist%20temple%20sculpture%20with%20divine%20aureole%2C%20masterful%20Chinese%20religious%20art&width=400&height=500&seq=lotus1&orientation=portrait',
      x: 0,
      y: 0,
      z: 0,
      rotationY: 0,
      color: 'from-pink-400 to-rose-500'
    },
    {
      id: 2,
      name: '莲花化生图',
      period: '北齐',
      temple: '响堂山石窟',
      category: 'lotus',
      description: '莲花盛开，花中化生童子，象征纯净重生，体现佛教轮回转世的深刻寓意',
      image: 'https://readdy.ai/api/search-image?query=Northern%20Qi%20dynasty%20Buddhist%20lotus%20birth%20transformation%20stone%20carving%2C%20divine%20children%20emerging%20from%20blooming%20lotus%20flowers%2C%20stone%20cave%20temple%20sculpture%20with%20celestial%20rebirth%20theme%2C%20ancient%20Chinese%20Buddhist%20art&width=400&height=500&seq=lotus2&orientation=portrait',
      x: -150,
      y: 50,
      z: -100,
      rotationY: 45,
      color: 'from-pink-500 to-fuchsia-500'
    },
    // 龙凤纹类
    {
      id: 3,
      name: '双龙戏珠',
      period: '宋代',
      temple: '晋祠',
      category: 'dragon',
      description: '两条蛟龙相对盘旋，争夺火珠，龙身矫健有力，气势磅礴威武，展现皇权神圣',
      image: 'https://readdy.ai/api/search-image?query=Song%20dynasty%20stone%20carved%20twin%20dragons%20chasing%20flaming%20pearl%2C%20powerful%20dragons%20with%20detailed%20scales%20and%20claws%2C%20traditional%20Chinese%20temple%20column%20base%20sculpture%2C%20majestic%20dragon%20relief%20art&width=400&height=500&seq=dragon1&orientation=portrait',
      x: 150,
      y: -30,
      z: 80,
      rotationY: -30,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 4,
      name: '双凤朝阳',
      period: '明代',
      temple: '广胜寺',
      category: 'dragon',
      description: '双凤展翅朝向太阳，羽毛华丽，姿态优雅，象征吉祥如意与光明希望',
      image: 'https://readdy.ai/api/search-image?query=Ming%20dynasty%20carved%20twin%20phoenixes%20facing%20rising%20sun%2C%20elegant%20phoenix%20birds%20with%20flowing%20feathers%20and%20ornate%20tail%20plumes%2C%20golden%20temple%20door%20decoration%2C%20auspicious%20Chinese%20phoenix%20art&width=400&height=500&seq=dragon2&orientation=portrait',
      x: -100,
      y: -50,
      z: 120,
      rotationY: 60,
      color: 'from-orange-500 to-yellow-500'
    },
    // 花卉纹类
    {
      id: 5,
      name: '宝相花纹',
      period: '隋代',
      temple: '天龙山石窟',
      category: 'floral',
      description: '宝相花居中，外围卷草环绕，花朵饱满华丽，展现盛唐时期的华贵气派',
      image: 'https://readdy.ai/api/search-image?query=Sui%20dynasty%20ornate%20baoxiang%20flower%20pattern%20stone%20carving%2C%20elaborate%20floral%20motif%20with%20scrolling%20vines%20and%20layered%20petals%2C%20Buddhist%20decorative%20flower%20in%20circular%20medallion%2C%20traditional%20Chinese%20temple%20ornament&width=400&height=500&seq=floral1&orientation=portrait',
      x: 80,
      y: 80,
      z: -80,
      rotationY: 120,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 6,
      name: '缠枝牡丹纹',
      period: '元代',
      temple: '永乐宫',
      category: 'floral',
      description: '牡丹花朵硕大，枝叶缠绕，花瓣层次丰富，寓意富贵吉祥，生生不息',
      image: 'https://readdy.ai/api/search-image?query=Yuan%20dynasty%20intertwining%20peony%20vine%20pattern%20painting%2C%20large%20peony%20flowers%20with%20rich%20layered%20petals%20and%20natural%20leaves%2C%20colorful%20Taoist%20temple%20wall%20decoration%2C%20ornate%20floral%20artistic%20motif&width=400&height=500&seq=floral2&orientation=portrait',
      x: -120,
      y: 30,
      z: 60,
      rotationY: 90,
      color: 'from-purple-500 to-pink-500'
    },
    // 几何纹类
    {
      id: 7,
      name: '万字锦纹',
      period: '五代',
      temple: '镇国寺',
      category: 'geometric',
      description: '万字纹连续排列，形成锦地图案，寓意万福万寿，吉祥如意，体现对美好生活的向往',
      image: 'https://readdy.ai/api/search-image?query=Five%20Dynasties%20period%20continuous%20swastika%20pattern%20brick%20carving%2C%20geometric%20Buddhist%20symbols%20in%20repeating%20lattice%20design%2C%20traditional%20temple%20decorative%20brickwork%20with%20auspicious%20meanings&width=400&height=500&seq=geometric1&orientation=portrait',
      x: -80,
      y: -80,
      z: -150,
      rotationY: -60,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 8,
      name: '回纹边饰',
      period: '唐代',
      temple: '法兴寺',
      category: 'geometric',
      description: '回纹连续不断，线条方正，转折明确，象征轮回往复，因果循环的佛教哲理',
      image: 'https://readdy.ai/api/search-image?query=Tang%20dynasty%20continuous%20meander%20border%20pattern%20stone%20carving%2C%20geometric%20square%20spiral%20design%20as%20temple%20decorative%20frame%2C%20classical%20Chinese%20architectural%20border%20ornament%20with%20rhythmic%20pattern&width=400&height=500&seq=geometric2&orientation=portrait',
      x: 100,
      y: -60,
      z: -50,
      rotationY: -120,
      color: 'from-indigo-500 to-blue-500'
    },
    // 佛教纹类
    {
      id: 9,
      name: '法轮常转纹',
      period: '辽代',
      temple: '善化寺',
      category: 'buddhist',
      description: '八辐法轮居中，周围祥云环绕，寓意佛法永恒流传，众生皆可得度',
      image: 'https://readdy.ai/api/search-image?query=Liao%20dynasty%20dharma%20wheel%20carved%20in%20stone%2C%20eight-spoked%20Buddhist%20wheel%20surrounded%20by%20auspicious%20clouds%2C%20sacred%20Buddhist%20temple%20stone%20carving%20with%20divine%20symbolism%2C%20traditional%20religious%20ornament&width=400&height=500&seq=buddhist1&orientation=portrait',
      x: 0,
      y: -100,
      z: 100,
      rotationY: 180,
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 10,
      name: '飞天散花图',
      period: '辽代',
      temple: '华严寺',
      category: 'buddhist',
      description: '飞天身姿优美，衣带飘逸，手中散落天花，周围祥云缭绕，展现极乐世界美景',
      image: 'https://readdy.ai/api/search-image?query=Liao%20dynasty%20flying%20apsaras%20mural%20painting%2C%20celestial%20beings%20with%20flowing%20robes%20scattering%20heavenly%20flowers%2C%20colorful%20Buddhist%20temple%20wall%20art%20with%20divine%20dancers%20and%20auspicious%20clouds&width=400&height=500&seq=buddhist2&orientation=portrait',
      x: 120,
      y: 40,
      z: -30,
      rotationY: 45,
      color: 'from-yellow-500 to-amber-500'
    }
  ], []);

  // 根据选中的分类筛选艺术品
  const filteredArtworks = useMemo(() => {
    return selectedCategory === 'all'
      ? allArtworks
      : allArtworks.filter(artwork => artwork.category === selectedCategory);
  }, [selectedCategory, allArtworks]);

  // 优化的鼠标移动处理函数，使用节流和缓存
  const handleMouseMove = useCallback((e) => {
    if (!is3DMode || !isNaked3D) return;

    // 清除之前的节流
    if (throttleRef.current) {
      clearTimeout(throttleRef.current);
    }

    // 节流处理，减少更新频率
    throttleRef.current = setTimeout(() => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    }, 16); // 约60fps
  }, [is3DMode, isNaked3D]);

  // 鼠标移动事件处理（优化性能）
  useEffect(() => {
    if (!is3DMode) return;

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }
    };
  }, [is3DMode, handleMouseMove]);

  // 性能优化：页面可见性检测
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsAnimationPaused(document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // 进入3D模式
  const enter3DMode = useCallback(() => {
    setIs3DMode(true);
  }, []);

  // 退出3D模式
  const exit3DMode = useCallback(() => {
    setIs3DMode(false);
    setIsNaked3D(false);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  // 开启裸眼3D
  const enableNaked3D = useCallback(() => {
    setIsNaked3D(true);
  }, []);

  // 关闭裸眼3D
  const disableNaked3D = useCallback(() => {
    setIsNaked3D(false);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  // 选择分类 - 优化的分类选择函数
  const selectCategory = useCallback((categoryKey) => {
    setSelectedCategory(categoryKey);
  }, []);

  // 优化的艺术品渲染组件
  const ArtworkItem = useCallback(({ artwork, index }) => {
    // 减少裸眼3D偏移计算
    const naked3DOffsetX = isNaked3D ? mousePosition.x * 25 : 0; // 减少偏移量
    const naked3DOffsetY = isNaked3D ? mousePosition.y * 18 : 0;
    const naked3DOffsetZ = isNaked3D ? Math.abs(mousePosition.x + mousePosition.y) * 15 : 0;
    const naked3DRotationX = isNaked3D ? mousePosition.y * 10 : 0; // 减少旋转角度
    const naked3DRotationY = isNaked3D ? mousePosition.x * 12 : 0;

    // 优化动画：当页面不可见时暂停动画
    const animationStyle = isAnimationPaused || isNaked3D ? 'none' : `float ${3 + index * 0.5}s ease-in-out infinite ${index * 0.3}s`;

    return (
      <div
        key={artwork.id}
        className="absolute cursor-pointer group"
        style={{
          left: '50%',
          top: '50%',
          transform: `
            translate(-50%, -50%)
            translate3d(${artwork.x + naked3DOffsetX}px, ${artwork.y + naked3DOffsetY}px, ${artwork.z + naked3DOffsetZ}px)
            rotateX(${naked3DRotationX}deg)
            rotateY(${artwork.rotationY + naked3DRotationY}deg)
            ${isNaked3D ? `scale(${1 + Math.abs(mousePosition.x + mousePosition.y) * 0.05})` : 'scale(1)'}
          `,
          transformStyle: 'preserve-3d',
          animation: animationStyle,
          filter: isNaked3D ? `
            drop-shadow(${mousePosition.x * 4}px ${mousePosition.y * 4}px 15px rgba(255,255,255,0.3))
            brightness(${1.1 + Math.abs(mousePosition.x) * 0.2})
          ` : 'none',
          transition: isNaked3D ? 'transform 0.08s ease-out, filter 0.08s ease-out' : 'none',
          willChange: isNaked3D ? 'transform, filter' : 'auto'
        }}
        onClick={() => setSelectedArtwork(artwork)}
      >
        {/* 简化的光晕效果 */}
        {isNaked3D && (
          <div
            className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent rounded-2xl"
            style={{
              transform: `translate3d(${mousePosition.x * -8}px, ${mousePosition.y * -8}px, -15px) scale(${1.4 + Math.abs(mousePosition.x) * 0.3})`,
              filter: 'blur(15px)',
              opacity: 0.6
            }}
          />
        )}

        {/* 基础光效 */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${artwork.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
          style={{
            transform: `scale(1.2) ${isNaked3D ? `translate3d(${mousePosition.x * 4}px, ${mousePosition.y * 4}px, 0px)` : ''}`,
            animation: isAnimationPaused ? 'none' : 'pulse 3s ease-in-out infinite'
          }}
        />

        {/* 艺术品卡片 */}
        <div
          className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-300 overflow-hidden"
          style={{
            width: '300px',
            height: '220px',
            transformStyle: 'preserve-3d',
            boxShadow: isNaked3D ? `
              0 0 30px rgba(255,255,255,0.3),
              inset 0 0 20px rgba(255,255,255,0.1)
            ` : 'none'
          }}
        >

          {/* 简化的双眼视差效果 */}
          {isNaked3D && (
            <>
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  transform: `translateX(${mousePosition.x * -2}px)`,
                  filter: 'hue-rotate(240deg)'
                }}
              >
                <img
                  src={artwork.image}
                  alt={artwork.name}
                  className="w-full h-2/3 object-cover"
                  loading="lazy"
                />
              </div>

              <div
                className="absolute inset-0 opacity-50"
                style={{
                  transform: `translateX(${mousePosition.x * 2}px)`,
                  filter: 'hue-rotate(0deg)'
                }}
              >
                <img
                  src={artwork.image}
                  alt={artwork.name}
                  className="w-full h-2/3 object-cover"
                  loading="lazy"
                />
              </div>
            </>
          )}

          {/* 3D内容 */}
          <div
            className="relative z-10 p-5 text-center text-white h-full flex flex-col justify-center"
          >
            {!isNaked3D && (
              <img
                src={artwork.image}
                alt={artwork.name}
                className="w-full h-28 object-cover rounded-lg mb-3"
                loading="lazy"
              />
            )}

            <div className={`${isNaked3D ? 'mt-28' : ''}`}>
              <div
                className={`w-10 h-10 mx-auto bg-gradient-to-br ${artwork.color} rounded-full flex items-center justify-center mb-2 shadow-xl group-hover:scale-110 transition-transform duration-300`}
              >
                <i className="ri-star-fill text-white text-lg"></i>
              </div>
              <h3 className="text-base font-bold mb-1">{artwork.name}</h3>
              <p className="text-sm opacity-80 mb-1">{artwork.period}</p>
              <p className="text-xs opacity-60">{artwork.temple}</p>
            </div>

            {/* 简化的粒子效果 */}
            {isNaked3D && (
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 bg-gradient-to-r ${artwork.color} rounded-full opacity-80`}
                    style={{
                      left: `${10 + (i * 10)}%`,
                      top: `${20 + (i * 8)}%`,
                      transform: `
                        translate3d(${mousePosition.x * (i * 2 + 5)}px, ${mousePosition.y * (i + 4)}px, ${i * 4}px)
                        scale(${0.7 + Math.abs(mousePosition.x + mousePosition.y) * 0.3})
                      `,
                      animation: isAnimationPaused ? 'none' : `sparkle3D ${1.5 + i * 0.2}s ease-in-out infinite ${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }, [isNaked3D, mousePosition, isAnimationPaused]);

  if (is3DMode) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 z-50 overflow-hidden">
        {/* 顶部控制栏 */}
        <div className="absolute top-0 left-0 right-0 z-20 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">
                  {isNaked3D ? '裸眼3D 模式激活' : 'AR 3D 模式已激活'}
                </span>
              </div>

              {/* 裸眼3D切换按钮 */}
              <button
                onClick={isNaked3D ? disableNaked3D : enableNaked3D}
                className={`px-6 py-3 rounded-full font-semibold border transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  isNaked3D
                    ? 'bg-cyan-500/30 hover:bg-cyan-500/40 border-cyan-400/50 text-cyan-100'
                    : 'bg-blue-500/20 hover:bg-blue-500/30 border-blue-400/30 text-white'
                }`}
              >
                <i className="ri-eye-line mr-2"></i>
                {isNaked3D ? '关闭裸眼3D' : '开启裸眼3D'}
              </button>
            </div>

            <button
              onClick={exit3DMode}
              className="bg-red-500/20 hover:bg-red-500/30 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold border border-red-400/30 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-close-line mr-2"></i>
              退出3D模式
            </button>
          </div>
        </div>

        {/* 裸眼3D提示 */}
        {isNaked3D && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-3 text-cyan-100 text-sm animate-pulse">
              <i className="ri-eye-2-line mr-2"></i>
              移动鼠标体验裸眼3D效果 - 艺术品会随您的视角立体呈现
            </div>
          </div>
        )}

        {/* 3D艺术品展示区域 */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: '120px' }}>
          <div className="relative w-full h-full max-w-6xl max-h-4xl transform-gpu perspective-1000">
            {filteredArtworks.map((artwork, index) => (
              <ArtworkItem key={artwork.id} artwork={artwork} index={index} />
            ))}
          </div>
        </div>

        {/* 底部控制区 */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
          <div className="flex justify-center">
            <div className="flex gap-2 bg-black/20 backdrop-blur-sm rounded-full p-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => selectCategory(category.key)}
                  className={`flex items-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    selectedCategory === category.key
                      ? 'bg-white/30 border border-white/40 scale-105 shadow-lg'
                      : 'bg-white/10 hover:bg-white/20 hover:scale-102'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${category.color} ${selectedCategory === category.key ? 'animate-pulse' : ''}`}></div>
                  {category.name}
                  {selectedCategory === category.key && (
                    <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
                  )}
                </button>
              ))}
            </div>

            {/* 3D渲染状态 */}
            <div className="text-center mt-4">
              <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                <div className={`w-2 h-2 rounded-full animate-pulse ${isNaked3D ? 'bg-cyan-400' : 'bg-green-400'}`}></div>
                <span>
                  {isNaked3D ? '裸眼3D渲染中...' : '实时3D渲染中...'} 共展示 {filteredArtworks.length} 件艺术品
                </span>
              </div>
            </div>
          </div>

          {/* 作品详情模态框 */}
          {selectedArtwork && (
            <div
              className="absolute inset-0 bg-black/80 flex items-center justify-center z-30 p-4"
              onClick={() => setSelectedArtwork(null)}
            >
              <div
                className="bg-white/95 backdrop-blur-sm rounded-3xl max-w-2xl w-full p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>

                <div className="text-center mb-6">
                  <div
                    className={`w-20 h-20 mx-auto bg-gradient-to-br ${selectedArtwork.color} rounded-full flex items-center justify-center mb-4 shadow-2xl`}
                  >
                    <i className="ri-star-fill text-white text-3xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedArtwork.name}</h2>
                  <div className="flex items-center justify-center gap-4 text-gray-600">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{selectedArtwork.period}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{selectedArtwork.temple}</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">艺术品详情</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedArtwork.description}</p>
                </div>
              </div>
            </div>
          )}

          {/* 优化的CSS动画样式 */}
          <style jsx>
            {`
              @keyframes float {
                0%, 100% {
                  transform: translate(-50%, -50%) translate3d(var(--x), var(--y), var(--z)) rotateY(var(--rotY)) translateY(0px);
                }
                50% {
                  transform: translate(-50%, -50%) translate3d(var(--x), var(--y), var(--z)) rotateY(var(--rotY)) translateY(-8px);
                }
              }

              @keyframes sparkle3D {
                0%, 100% {
                  opacity: 0.4;
                  transform: scale(0.6) rotateX(0deg) rotateY(0deg);
                }
                50% {
                  opacity: 0.9;
                  transform: scale(1.2) rotateX(180deg) rotateY(180deg);
                }
              }

              .perspective-1000 {
                perspective: 1200px;
              }

              .bg-gradient-radial {
                background: radial-gradient(circle, var(--tw-gradient-stops));
              }

              /* GPU加速优化 */
              .group {
                will-change: transform;
                backface-visibility: hidden;
                transform: translate3d(0, 0, 0);
              }
            `}
          </style>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* 标题区域 */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-200/20 to-transparent rounded-full blur-3xl"></div>
          <div className="relative">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 font-[\\\'Pacifico\\\']">虚拟展览</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              沉浸式体验山西寺庙纹样艺术，仿佛亲临博物馆，近距离欣赏每一件珍贵文物
            </p>
          </div>
        </div>

        {/* 3D体验入口 */}
        <div className="text-center mb-12">
          <button
            onClick={enter3DMode}
            className="group relative px-12 py-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl overflow-hidden whitespace-nowrap cursor-pointer"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            <div className="relative flex items-center gap-3">
              <i className="ri-vr-line text-2xl"></i>
              <span>开始3D欣赏</span>
              <div className="flex">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce mx-1" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </button>

          {/* 裸眼3D功能介绍 */}
          <div className="mt-8 inline-flex items-center gap-4 bg-cyan-50 border border-cyan-200 px-6 py-4 rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
              <i className="ri-eye-2-line text-white text-xl"></i>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-gray-800">裸眼3D技术</h4>
              <p className="text-sm text-gray-600">无需佩戴设备，艺术品随视角立体呈现</p>
            </div>
          </div>
        </div>

        {/* 纹样分类筛选器 - 这是主要的交互区域 */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-xl border border-gray-100">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => selectCategory(category.key)}
                className={`flex items-center gap-2 rounded-xl mx-1 px-4 py-3 transition-all duration-300 whitespace-nowrap cursor-pointer transform ${
                  selectedCategory === category.key
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg scale-105 -translate-y-1'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:scale-102'
                }`}
              >
                <div className={`w-3 h-3 rounded-full ${category.color} ${selectedCategory === category.key ? 'animate-pulse shadow-lg' : ''}`}></div>
                <i className={`${category.icon} text-sm`}></i>
                {category.name}
                {selectedCategory === category.key && (
                  <div className="w-2 h-2 bg-white/80 rounded-full animate-ping ml-1"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 筛选结果展示 - 增强视觉反馈 */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
            <i className="ri-filter-3-line text-red-500"></i>
            <span className="text-gray-700 font-semibold">
              {selectedCategory === 'all' ? '显示全部纹样' : `筛选: ${categories.find((c) => c.key === selectedCategory)?.name}`}
            </span>
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              {filteredArtworks.length} 件
            </span>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => selectCategory('all')}
                className="text-xs text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
              >
                <i className="ri-close-circle-line"></i>
              </button>
            )}
          </div>
        </div>

        {/* 艺术品网格展示 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="group relative cursor-pointer transform transition-all duration-500"
              onClick={() => setSelectedArtwork(artwork)}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${artwork.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:scale-105`}
              ></div>
              <div
                className="relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3"
              >
                {/* 艺术品图片区域 */}
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>

                  {/* 分类标签 */}
                  <div className="absolute top-4 left-4 z-20">
                    <div
                      className={`${categories.find((c) => c.key === artwork.category)?.color} px-3 py-1 rounded-full text-white text-sm font-semibold shadow-lg`}
                    >
                      {categories.find((c) => c.key === artwork.category)?.name}
                    </div>
                  </div>

                  {/* 朝代标签 */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                      {artwork.period}
                    </div>
                  </div>

                  {/* 底部信息 */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h4 className="text-white font-bold text-lg mb-1">{artwork.name}</h4>
                    <p className="text-amber-200 text-sm">{artwork.temple}</p>
                  </div>
                </div>

                {/* 艺术品信息 */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {artwork.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <i className="ri-building-line"></i>
                      <span>{artwork.temple}</span>
                    </div>
                    <div className="flex items-center gap-1 text-red-600 text-sm font-semibold group-hover:scale-110 transition-transform">
                      <span>详细观赏</span>
                      <i className="ri-search-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 作品详情模态框 */}
        {selectedArtwork && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedArtwork(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* 大图展示 */}
                <div className="h-96 relative overflow-hidden">
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <button
                    onClick={() => setSelectedArtwork(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer z-30"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`${categories.find((c) => c.key === selectedArtwork.category)?.color} px-4 py-2 rounded-full font-semibold`}
                      >
                        {categories.find((c) => c.key === selectedArtwork.category)?.name}
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        {selectedArtwork.period}
                      </div>
                    </div>
                    <h2 className="text-4xl font-bold mb-2">{selectedArtwork.name}</h2>
                    <p className="text-xl text-amber-200">{selectedArtwork.temple}</p>
                  </div>
                </div>

                {/* 详细信息 */}
                <div className="p-8">
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                      <i className="ri-information-line text-red-600"></i>
                      作品解读
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">{selectedArtwork.description}</p>
                  </div>

                  <div className="mt-8 grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                      <i className="ri-time-line text-red-600 text-3xl mb-3"></i>
                      <h4 className="font-bold text-gray-800 mb-2">创作年代</h4>
                      <p className="text-gray-600">{selectedArtwork.period}</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                      <i className="ri-building-line text-red-600 text-3xl mb-2"></i>
                      <h4 className="font-bold text-gray-800 mb-2">所属寺庙</h4>
                      <p className="text-gray-600">{selectedArtwork.temple}</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                      <i className={`${categories.find((c) => c.key === selectedArtwork.category)?.icon} text-red-600 text-3xl mb-3`}></i>
                      <h4 className="font-bold text-gray-800 mb-2">纹样类型</h4>
                      <p className="text-gray-600">{categories.find((c) => c.key === selectedArtwork.category)?.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 底部互动区域 */}
        <div className="mt-20 text-center">
          <div
            className="bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                <i className="ri-vip-crown-line text-white text-3xl"></i>
              </div>
              <h3 className="text-3xl font-bold mb-4">开启您的艺术之旅</h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
                通过虚拟展览，您可以随时随地欣赏山西寺庙纹样艺术的精美作品，
                每一件展品都经过专业的数字化处理，呈现最真实的艺术细节
              </p>
              <div className="flex justify-center items-center gap-6">
                <button
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 whitespace-nowrap cursor-pointer"
                >
                  收藏展览
                </button>
                <button
                  className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                >
                  分享给朋友
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 添加CSS动画 */}
        <style jsx>
          {`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </div>
    </section>
  );
}
