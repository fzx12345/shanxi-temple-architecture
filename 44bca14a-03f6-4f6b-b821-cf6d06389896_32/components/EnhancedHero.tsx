
'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';

export default function EnhancedHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const heroRef = useRef(null);
  const animationRef = useRef(null);

  const features = useMemo(() => [
    {
      title: '建筑特色',
      subtitle: '千年古刹的智慧结晶',
      description: '探索精妙的斗拱结构、飞檐翘角的美学与古代工匠的建筑智慧',
      icon: 'ri-building-2-line',
      color: 'from-amber-500 to-orange-600',
      href: '/architecture'
    },
    {
      title: '纹饰艺术',
      subtitle: '佛教艺术的视觉盛宴',
      description: '欣赏精美的莲花纹、龙凤纹和宝相花等传统装饰艺术',
      icon: 'ri-palette-line',
      color: 'from-orange-500 to-red-600',
      href: '/decorations'
    },
    {
      title: '历史演变',
      subtitle: '跨越千年的文化传承',
      description: '回溯各朝代的建筑风格演变与文化内涵的深层解读',
      icon: 'ri-time-line',
      color: 'from-red-500 to-pink-600',
      href: '/history'
    },
    {
      title: '虚拟展览',
      subtitle: '沉浸式艺术体验',
      description: '通过3D虚拟展厅，近距离欣赏每一件珍贵的艺术瑰宝',
      icon: 'ri-vr-line',
      color: 'from-pink-500 to-purple-600',
      href: '/gallery'
    }
  ], []);

  // 优化鼠标移动处理，使用节流
  const handleMouseMove = useCallback((e) => {
    if (animationRef.current) return;
    
    animationRef.current = requestAnimationFrame(() => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8; // 减少移动幅度
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
        setMousePos({ x, y });
      }
      animationRef.current = null;
    });
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // 自动轮播
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    // 鼠标移动事件
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMounted, features.length, handleMouseMove]);

  const scrollToGallery = useCallback(() => {
    const galleryElement = document.querySelector('#gallery-section');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  if (!isMounted) {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-orange-800 to-red-900">
        <div className="text-center text-white z-20 max-w-6xl px-8 relative">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-['Pacifico'] text-amber-100">
            山西寺庙建筑
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            探索千年古刹的建筑智慧与佛像纹饰的艺术瑰宝
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),
          url('https://readdy.ai/api/search-image?query=Ancient%20Chinese%20temple%20in%20Shanxi%20province%20with%20traditional%20wooden%20architecture%2C%20golden%20sunset%20lighting%2C%20pagoda%20towers%2C%20curved%20roofs%20with%20upturned%20eaves%2C%20traditional%20Chinese%20architectural%20details%2C%20serene%20mountain%20background%2C%20warm%20golden%20tones%2C%20ancient%20Buddhist%20temple%20complex%2C%20detailed%20wooden%20brackets%20and%20pillars%2C%20traditional%20Chinese%20design%20elements&width=1920&height=1080&seq=hero1&orientation=landscape')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* 简化的背景层 */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-orange-900/20 transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)`
        }}
      />

      {/* 优化的粒子效果 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-300/20 rounded-full"
            style={{
              left: `${10 + (i * 4) % 80}%`,
              top: `${10 + (i * 7) % 80}%`,
              animation: `pulse ${2 + (i % 3)}s infinite ${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* 主要内容区域 */}
      <div className="text-center text-white z-20 max-w-6xl px-8 relative">
        {/* 标题区域 */}
        <div className="mb-12 relative">
          <h1 
            className="text-6xl md:text-8xl font-bold mb-6 font-['Pacifico'] text-amber-100 relative transition-transform duration-300 ease-out will-change-transform"
            style={{
              textShadow: '0 4px 8px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2)',
              transform: `perspective(1000px) rotateX(${mousePos.y * 0.05}deg) rotateY(${mousePos.x * 0.05}deg)`
            }}
          >
            山西寺庙建筑
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            探索千年古刹的建筑智慧与佛像纹饰的艺术瑰宝
          </p>
        </div>

        {/* 特色卡片展示 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer transition-all duration-500 transform will-change-transform ${
                currentFeature === index ? 'scale-105 -translate-y-2' : 'hover:scale-105 hover:-translate-y-2'
              }`}
              onClick={() => setCurrentFeature(index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* 悬浮弹出效果 */}
              {hoveredCard === index && (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-30 animate-fadeIn">
                  {feature.subtitle}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-80 mb-3">{feature.subtitle}</p>
                <p className="text-xs opacity-70 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 交互按钮 */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
          <Link href={features[currentFeature].href}>
            <button 
              className={`group relative px-10 py-4 bg-gradient-to-r ${features[currentFeature].color} text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden whitespace-nowrap cursor-pointer`}
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              <div className="relative flex items-center gap-2">
                <i className={features[currentFeature].icon}></i>
                <span>探索 {features[currentFeature].title}</span>
              </div>
            </button>
          </Link>

          <button 
            onClick={scrollToGallery}
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <div className="relative flex items-center gap-2">
              <i className="ri-gallery-line"></i>
              <span>艺术图集</span>
            </div>
          </button>
        </div>

        {/* 进度指示器 */}
        <div className="flex justify-center gap-2 mb-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFeature(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                currentFeature === index ? 'bg-amber-400 scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm opacity-80">探索更多</span>
          <i className="ri-arrow-down-line text-2xl"></i>
        </div>
      </div>

      {/* 装饰元素 */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/10 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-16 w-16 h-16 bg-orange-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-red-400/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-20 w-18 h-18 bg-pink-400/10 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
