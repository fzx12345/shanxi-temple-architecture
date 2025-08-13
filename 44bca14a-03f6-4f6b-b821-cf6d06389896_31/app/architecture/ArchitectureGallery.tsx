'use client';

import { useState } from 'react';

export default function ArchitectureGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryCategories = [
    {
      title: "斗拱艺术",
      images: [
        {
          src: "https://readdy.ai/api/search-image?query=Intricate%20Chinese%20dougong%20bracket%20system%20close-up%2C%20detailed%20wooden%20bracket%20construction%2C%20traditional%20temple%20carpentry%2C%20ornate%20bracket%20clusters%2C%20golden%20wood%20craftsmanship%2C%20architectural%20engineering%20detail&width=400&height=300&seq=dougong1&orientation=landscape",
          caption: "五铺作斗拱 - 佛光寺东大殿"
        },
        {
          src: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20temple%20bracket%20system%20with%20colorful%20painted%20decorations%2C%20ornate%20dougong%20with%20traditional%20colors%2C%20detailed%20wooden%20brackets%20with%20polychrome%20painting%2C%20temple%20architectural%20decoration&width=400&height=300&seq=dougong2&orientation=landscape",
          caption: "彩绘斗拱 - 华严寺大雄宝殿"
        },
        {
          src: "https://readdy.ai/api/search-image?query=Ancient%20Chinese%20temple%20interior%20showing%20multiple%20levels%20of%20bracket%20systems%2C%20complex%20wooden%20joinery%20structure%2C%20temple%20hall%20interior%20architecture%20with%20bracket%20details%2C%20traditional%20construction%20technique&width=400&height=300&seq=dougong3&orientation=landscape",
          caption: "多层斗拱 - 善化寺大雄宝殿"
        }
      ]
    },
    {
      title: "屋面构造",
      images: [
        {
          src: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20temple%20roof%20with%20curved%20tiles%20and%20flying%20eaves%2C%20ornate%20roof%20construction%20details%2C%20upturned%20roof%20corners%2C%20golden%20temple%20roofing%2C%20classical%20Chinese%20roof%20architecture&width=400&height=300&seq=roof1&orientation=landscape",
          caption: "飞檐翘角 - 南禅寺大殿"
        },
        {
          src: "https://readdy.ai/api/search-image?query=Chinese%20temple%20roof%20ridge%20with%20decorative%20elements%2C%20ornate%20roof%20ornaments%2C%20traditional%20roof%20decorations%2C%20dragon%20and%20phoenix%20motifs%20on%20temple%20roof%2C%20elaborate%20roof%20ridge%20design&width=400&height=300&seq=roof2&orientation=landscape",
          caption: "正脊装饰 - 晋祠圣母殿"
        },
        {
          src: "https://readdy.ai/api/search-image?query=Multiple%20level%20Chinese%20temple%20roofs%20showing%20traditional%20tile%20construction%2C%20layered%20temple%20roofing%20system%2C%20complex%20roof%20structure%2C%20ancient%20Chinese%20architectural%20roofing%20technique&width=400&height=300&seq=roof3&orientation=landscape",
          caption: "重檐构造 - 显通寺大雄宝殿"
        }
      ]
    },
    {
      title: "柱础石雕",
      images: [
        {
          src: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20temple%20column%20base%20stone%20carving%2C%20ornate%20stone%20column%20foundation%2C%20detailed%20carved%20stone%20base%2C%20lotus%20pattern%20column%20base%2C%20ancient%20temple%20stone%20carving&width=400&height=300&seq=base1&orientation=landscape",
          caption: "莲花柱础 - 华严寺薄伽教藏殿"
        },
        {
          src: "https://readdy.ai/api/search-image?query=Ancient%20Chinese%20temple%20stone%20column%20base%20with%20dragon%20carvings%2C%20ornate%20dragon%20motif%20stone%20foundation%2C%20detailed%20stone%20carving%20craftsmanship%2C%20traditional%20temple%20stone%20base&width=400&height=300&seq=base2&orientation=landscape",
          caption: "龙纹柱础 - 悬空寺三教殿"
        },
        {
          src: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20temple%20geometric%20pattern%20column%20base%2C%20simple%20stone%20column%20foundation%2C%20classical%20architectural%20stone%20base%2C%20ancient%20temple%20stone%20craftsmanship&width=400&height=300&seq=base3&orientation=landscape",
          caption: "几何纹柱础 - 佛光寺文殊殿"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">建筑细节欣赏</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            通过精美的建筑细节图片，深入了解山西寺庙建筑的精湛工艺与艺术价值
          </p>
        </div>

        {galleryCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">{category.title}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {category.images.map((image, imageIndex) => (
                <div 
                  key={imageIndex} 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.caption}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-gray-800 font-semibold text-center">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full bg-white rounded-2xl overflow-hidden">
              <div className="relative">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.caption}
                  className="w-full h-auto max-h-96 object-cover"
                />
                <button 
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  <i className="ri-close-line text-gray-800 text-xl"></i>
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-800 font-semibold text-lg text-center">{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 bg-white rounded-3xl p-12 shadow-lg text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">建筑保护倡议</h3>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
            这些珍贵的古建筑是中华文明的瑰宝，需要我们共同保护。通过现代技术手段记录、研究和传承这些建筑文化，
            让后人也能欣赏到这些千年建筑的精美与智慧。
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <i className="ri-shield-check-line text-amber-600"></i>
              <span>文物保护</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <i className="ri-camera-line text-amber-600"></i>
              <span>数字记录</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <i className="ri-book-open-line text-amber-600"></i>
              <span>学术研究</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <i className="ri-group-line text-amber-600"></i>
              <span>公众教育</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}