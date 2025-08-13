
'use client';

import { useState, useEffect } from 'react';
import EnhancedHero from '../components/EnhancedHero';
import TempleArchitecture from '../components/TempleArchitecture';
import BuddhaDecorations from '../components/BuddhaDecorations';
import HistoricalPeriods from '../components/HistoricalPeriods';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        <nav className="bg-white/10 backdrop-blur-sm border-b border-white/10 fixed top-0 w-full z-50">
          <div className="max-w-7xl mx-auto px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <i className="ri-building-2-fill text-white text-lg"></i>
                </div>
                <div className="text-xl font-bold font-['Pacifico'] text-amber-600">
                  山西寺庙建筑
                </div>
              </div>
              <div className="text-amber-600 text-sm">加载中...</div>
            </div>
          </div>
        </nav>
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-amber-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
              <i className="ri-building-2-fill text-white text-2xl"></i>
            </div>
            <p className="text-amber-600 font-semibold">正在加载页面...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* 优化后的导航栏 - 减少高度和改善遮盖问题 */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-amber-200/30 shadow-xl py-2' 
          : 'bg-transparent py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo区域 - 减小尺寸 */}
            <div className="flex items-center gap-2">
              <div className={`bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md transition-all duration-300 ${
                isScrolled ? 'w-7 h-7' : 'w-8 h-8'
              }`}>
                <i className={`ri-building-2-fill text-white transition-all duration-300 ${
                  isScrolled ? 'text-base' : 'text-lg'
                }`}></i>
              </div>
              <div className={`font-bold font-['Pacifico'] transition-all duration-300 ${
                isScrolled ? 'text-lg text-amber-600' : 'text-xl text-white drop-shadow-lg'
              }`}>
                山西寺庙建筑
              </div>
            </div>
            
            {/* 桌面端导航菜单 - 紧凑布局 */}
            <div className="hidden md:flex items-center gap-0.5">
              <Link href="/architecture" className={`group relative px-3 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer text-sm ${
                isScrolled 
                  ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}>
                <div className="flex items-center gap-1.5">
                  <i className="ri-building-2-line text-xs group-hover:scale-110 transition-transform duration-300"></i>
                  <span>建筑特色</span>
                </div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
              </Link>
              
              <Link href="/decorations" className={`group relative px-3 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer text-sm ${
                isScrolled 
                  ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}>
                <div className="flex items-center gap-1.5">
                  <i className="ri-palette-line text-xs group-hover:scale-110 transition-transform duration-300"></i>
                  <span>纹饰艺术</span>
                </div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
              </Link>
              
              <Link href="/history" className={`group relative px-3 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer text-sm ${
                isScrolled 
                  ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}>
                <div className="flex items-center gap-1.5">
                  <i className="ri-time-line text-xs group-hover:scale-110 transition-transform duration-300"></i>
                  <span>历史演变</span>
                </div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
              </Link>
              
              <Link href="/gallery" className={`group relative px-3 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer text-sm ${
                isScrolled 
                  ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}>
                <div className="flex items-center gap-1.5">
                  <i className="ri-gallery-line text-xs group-hover:scale-110 transition-transform duration-300"></i>
                  <span>艺术图集</span>
                </div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
              </Link>
              
              <div className={`ml-2 pl-2 transition-all duration-300 ${
                isScrolled ? 'border-l border-gray-200/50' : 'border-l border-amber-300/30'
              }`}>
                <Link href="#gallery-section" className={`group relative px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 whitespace-nowrap text-sm ${
                  isScrolled ? 'scale-95' : 'scale-100'
                }`}>
                  <div className="flex items-center gap-1.5">
                    <i className="ri-compass-discover-line text-xs group-hover:rotate-12 transition-transform duration-300"></i>
                    <span>开始探索</span>
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
            
            {/* 移动端菜单按钮 - 减小尺寸 */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer ${
                  isScrolled 
                    ? 'w-7 h-7 bg-amber-100 text-amber-600 hover:bg-amber-200' 
                    : 'w-8 h-8 bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <i className={`transition-transform duration-300 ${
                  isMobileMenuOpen ? 'ri-close-line rotate-90' : 'ri-menu-line'
                } ${isScrolled ? 'text-base' : 'text-lg'}`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* 移动端下拉菜单 */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`px-6 py-3 ${
            isScrolled ? 'bg-white/95 backdrop-blur-xl border-t border-gray-100' : 'bg-black/20 backdrop-blur-xl'
          }`}>
            <div className="space-y-2">
              <Link href="/architecture" className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors duration-300 cursor-pointer text-sm ${
                isScrolled 
                  ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}>
                <i className="ri-building-2-line text-base"></i>
                <span>建筑特色</span>
              </Link>
              <Link href="/decorations" className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors duration-300 cursor-pointer text-sm ${
                isScrolled 
                  ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}>
                <i className="ri-palette-line text-base"></i>
                <span>纹饰艺术</span>
              </Link>
              <Link href="/history" className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors duration-300 cursor-pointer text-sm ${
                isScrolled 
                  ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}>
                <i className="ri-time-line text-base"></i>
                <span>历史演变</span>
              </Link>
              <Link href="/gallery" className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors duration-300 cursor-pointer text-sm ${
                isScrolled 
                  ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}>
                <i className="ri-gallery-line text-base"></i>
                <span>艺术图集</span>
              </Link>
              <div className="pt-2 border-t border-gray-200/30">
                <Link href="#gallery-section" className="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold shadow-md transition-all duration-300 cursor-pointer text-sm">
                  <i className="ri-compass-discover-line text-base"></i>
                  <span>开始探索</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 内容区域 - 添加适当的顶部间距 */}
      <div className={`transition-all duration-500 ${
        isScrolled ? 'pt-14' : 'pt-0'
      }`}>
        <EnhancedHero />
        <TempleArchitecture />
        <BuddhaDecorations />
        <HistoricalPeriods />
        <div id="gallery-section">
          <Gallery />
        </div>
        <Footer />
      </div>
    </div>
  );
}
