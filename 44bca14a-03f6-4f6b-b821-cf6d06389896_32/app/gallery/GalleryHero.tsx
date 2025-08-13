
'use client';

import { useState } from 'react';

export default function GalleryHero() {
  const [show3DViewer, setShow3DViewer] = useState(false);

  const start3DExperience = () => {
    setShow3DViewer(true);
  };

  return (
    <>
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('https://readdy.ai/api/search-image?query=Magnificent%20collection%20of%20traditional%20Chinese%20Buddhist%20temple%20decorative%20patterns%20and%20ornaments%2C%20golden%20lotus%20flowers%20dragons%20phoenixes%20and%20sacred%20symbols%2C%20intricate%20temple%20art%20gallery%20display%2C%20ornate%20Buddhist%20decorative%20masterpieces%20arranged%20in%20artistic%20composition&width=1920&height=1080&seq=galleryhero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        
        <div className="text-center text-white z-10 max-w-6xl px-8 relative">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
              <i className="ri-gallery-line text-white text-4xl"></i>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 font-['Pacifico'] text-amber-100 leading-tight">
              纹样艺术图集
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-2xl md:text-3xl leading-relaxed mb-12 text-amber-100">
              千年传承的山西寺庙纹样艺术珍藏
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <i className="ri-time-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">历史传承</h3>
              <p className="text-amber-200 text-sm">跨越千年的艺术演变</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <i className="ri-palette-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">艺术精品</h3>
              <p className="text-amber-200 text-sm">大师级工艺杰作</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <i className="ri-heart-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">文化内涵</h3>
              <p className="text-amber-200 text-sm">深邃的精神象征</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <i className="ri-treasure-map-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">珍稀收藏</h3>
              <p className="text-amber-200 text-sm">罕见的艺术瑰宝</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6">
            <button 
              onClick={start3DExperience}
              className="group relative bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              <div className="relative flex items-center gap-2">
                <i className="ri-vr-line"></i>
                <span>开始3D欣赏</span>
              </div>
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 whitespace-nowrap cursor-pointer">
              虚拟展览
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <i className="ri-arrow-down-line text-2xl"></i>
        </div>
      </section>

      {/* 3D AR 观赏器 */}
      {show3DViewer && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
          
          {/* 3D 场景容器 */}
          <div className="relative w-full h-full overflow-hidden">
            {/* 顶部控制栏 */}
            <div className="absolute top-0 left-0 right-0 z-30 bg-black/50 backdrop-blur-sm">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <i className="ri-vr-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-xl">AR 3D 纹样观赏</h2>
                    <p className="text-cyan-300 text-sm">沉浸式裸眼3D体验</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShow3DViewer(false)}
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
            </div>

            {/* 3D 艺术品展示区域 */}
            <div className="absolute inset-0 pt-20">
              <div className="relative w-full h-full perspective-1000">
                {/* 3D 旋转展示平台 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-96 h-96 transform-gpu animate-spin-slow preserve-3d">
                    {/* 中心展示的艺术品 */}
                    <div className="absolute inset-0 transform-gpu rotateY-0 translateZ-48">
                      <div className="w-full h-full bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-3xl backdrop-blur-sm border border-white/30 shadow-2xl">
                        <img 
                          src="https://readdy.ai/api/search-image?query=Magnificent%20Tang%20dynasty%20Buddhist%20lotus%20throne%20pattern%20carving%20floating%20in%203D%20space%2C%20golden%20lotus%20sculpture%20with%20divine%20lighting%20effects%2C%20holographic%20temple%20art%20display%2C%20sacred%20Buddhist%20decorative%20art%20with%20ethereal%20glow&width=400&height=400&seq=3d1&orientation=squarish"
                          alt="3D 莲花宝座"
                          className="w-full h-full object-cover rounded-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">千手观音莲座</h3>
                          <p className="text-amber-200">唐代 · 佛光寺</p>
                        </div>
                      </div>
                    </div>

                    {/* 环绕的其他艺术品 */}
                    <div className="absolute inset-0 transform-gpu rotateY-72 translateZ-48">
                      <div className="w-full h-full bg-gradient-to-br from-red-200/20 to-pink-200/20 rounded-3xl backdrop-blur-sm border border-white/30 shadow-2xl">
                        <img 
                          src="https://readdy.ai/api/search-image?query=Majestic%20Chinese%20dragon%20carving%20floating%20in%20holographic%203D%20display%2C%20golden%20dragon%20sculpture%20with%20ethereal%20lighting%2C%20sacred%20temple%20dragon%20art%20in%20virtual%20space%2C%20mystical%20dragon%20pattern%20with%20glowing%20effects&width=400&height=400&seq=3d2&orientation=squarish"
                          alt="3D 龙纹"
                          className="w-full h-full object-cover rounded-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">双龙戏珠</h3>
                          <p className="text-red-200">宋代 · 晋祠</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 transform-gpu rotateY-144 translateZ-48">
                      <div className="w-full h-full bg-gradient-to-br from-green-200/20 to-teal-200/20 rounded-3xl backdrop-blur-sm border border-white/30 shadow-2xl">
                        <img 
                          src="https://readdy.ai/api/search-image?query=Beautiful%20phoenix%20bird%20pattern%20carving%20in%203D%20holographic%20display%2C%20elegant%20phoenix%20sculpture%20with%20flowing%20feathers%20and%20golden%20light%2C%20traditional%20Chinese%20temple%20phoenix%20art%20floating%20in%20virtual%20space&width=400&height=400&seq=3d3&orientation=squarish"
                          alt="3D 凤纹"
                          className="w-full h-full object-cover rounded-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">双凤朝阳</h3>
                          <p className="text-green-200">明代 · 双塔寺</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 transform-gpu rotateY-216 translateZ-48">
                      <div className="w-full h-full bg-gradient-to-br from-purple-200/20 to-indigo-200/20 rounded-3xl backdrop-blur-sm border border-white/30 shadow-2xl">
                        <img 
                          src="https://readdy.ai/api/search-image?query=Ornate%20Chinese%20temple%20floral%20pattern%20in%203D%20holographic%20space%2C%20beautiful%20peony%20and%20lotus%20flowers%20carved%20sculpture%20floating%2C%20traditional%20Buddhist%20decorative%20flowers%20with%20ethereal%20glow&width=400&height=400&seq=3d4&orientation=squarish"
                          alt="3D 花卉纹"
                          className="w-full h-full object-cover rounded-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3dl"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">宝相花纹</h3>
                          <p className="text-purple-200">隋代 · 天龙山</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 transform-gpu rotateY-288 translateZ-48">
                      <div className="w-full h-full bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-3xl backdrop-blur-sm border border-white/30 shadow-2xl">
                        <img 
                          src="https://readdy.ai/api/search-image?query=Traditional%20Chinese%20geometric%20pattern%20in%203D%20holographic%20display%2C%20swastika%20and%20cloud%20thunder%20patterns%20floating%20in%20virtual%20space%2C%20sacred%20Buddhist%20geometric%20symbols%20with%20golden%20light%20effects&width=400&height=400&seq=3d5&orientation=squarish"
                          alt="3D 几何纹"
                          className="w-full h-full object-cover rounded-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">万字锦纹</h3>
                          <p className="text-blue-200">五代 · 镇国寺</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 粒子效果 */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-300/60 rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 3}s`
                      }}
                    />
                  ))}
                </div>

                {/* AR 扫描线效果 */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent w-1 animate-scan"></div>
                </div>
              </div>
            </div>

            {/* 底部信息面板 */}
            <div className="absolute bottom-0 left-0 right-0 z-30 bg-black/50 backdrop-blur-sm">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold">AR 扫描中</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-300">
                      <i className="ri-3d-view-line"></i>
                      <span className="text-sm">3D 渲染</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-300">
                      <i className="ri-eye-line"></i>
                      <span className="text-sm">裸眼观看</span>
                    </div>
                  </div>
                  <div className="text-white text-sm">
                    使用手势或鼠标控制视角
                  </div>
                </div>
                
                <div className="grid grid-cols-5 gap-4">
                  {['莲花纹', '龙纹', '凤纹', '花卉纹', '几何纹'].map((pattern, idx) => (
                    <button 
                      key={idx}
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        idx === 0 ? 'bg-amber-400' : 
                        idx === 1 ? 'bg-red-400' : 
                        idx === 2 ? 'bg-green-400' : 
                        idx === 3 ? 'bg-purple-400' : 'bg-blue-400'
                      }`}></div>
                      {pattern}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .rotateY-0 {
          transform: rotateY(0deg);
        }
        
        .rotateY-72 {
          transform: rotateY(72deg);
        }
        
        .rotateY-144 {
          transform: rotateY(144deg);
        }
        
        .rotateY-216 {
          transform: rotateY(216deg);
        }
        
        .rotateY-288 {
          transform: rotateY(288deg);
        }
        
        .translateZ-48 {
          transform: translateZ(12rem);
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        
        @keyframes scan {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
