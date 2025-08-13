
'use client';

import Link from 'next/link';
import GalleryHero from './GalleryHero';
import PatternGallery from './PatternGallery';
import HistoricalTimeline from './HistoricalTimeline';
import MasterworkShowcase from './MasterworkShowcase';
import VirtualExhibition from './VirtualExhibition';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50" suppressHydrationWarning={true}>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold font-['Pacifico'] text-amber-600 cursor-pointer hover:text-amber-700 transition-colors">
              山西寺庙建筑
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/architecture" className="text-gray-600 hover:text-amber-600 transition-colors cursor-pointer">建筑特色</Link>
              <Link href="/decorations" className="text-gray-600 hover:text-amber-600 transition-colors cursor-pointer">纹饰艺术</Link>
              <Link href="/history" className="text-gray-600 hover:text-amber-600 transition-colors cursor-pointer">历史演变</Link>
              <Link href="/gallery" className="text-amber-600 font-semibold cursor-pointer">艺术图集</Link>
              <Link href="/" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap">
                <i className="ri-home-5-line"></i>
                <span suppressHydrationWarning={true}>返回首页</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <GalleryHero />
      <PatternGallery />
      <HistoricalTimeline />
      <MasterworkShowcase />
      <VirtualExhibition />
    </div>
  );
}
