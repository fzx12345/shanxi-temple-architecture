
'use client';

export default function Footer() {
  const quickLinks = [
    { name: '建筑特色', href: '#architecture' },
    { name: '纹饰艺术', href: '#decorations' },
    { name: '历史演变', href: '#history' },
    { name: '艺术图集', href: '#gallery' }
  ];

  const famousTemples = [
    '佛光寺', '南禅寺', '悬空寺', '华严寺',
    '晋祠', '显通寺', '塔院寺', '善化寺'
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold font-['Pacifico'] text-amber-400 mb-6">
              山西寺庙建筑
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              探索千年古刹的建筑智慧与佛像纹饰的艺术瑰宝，传承中华文化的深厚底蕴。
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-700 transition-colors">
                <i className="ri-wechat-fill text-white"></i>
              </div>
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-700 transition-colors">
                <i className="ri-weibo-fill text-white"></i>
              </div>
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-700 transition-colors">
                <i className="ri-qq-fill text-white"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">快速导航</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <i className="ri-arrow-right-s-line text-amber-500"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">著名寺庙</h4>
            <div className="grid grid-cols-2 gap-2">
              {famousTemples.map((temple, index) => (
                <span 
                  key={index} 
                  className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer text-sm"
                >
                  {temple}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">文化价值</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="ri-building-2-line text-amber-500 mt-1"></i>
                <div>
                  <h5 className="font-semibold text-sm">建筑遗产</h5>
                  <p className="text-gray-400 text-xs">珍贵的古建筑实物资料</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-palette-line text-amber-500 mt-1"></i>
                <div>
                  <h5 className="font-semibold text-sm">艺术瑰宝</h5>
                  <p className="text-gray-400 text-xs">精美的纹饰艺术作品</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-book-open-line text-amber-500 mt-1"></i>
                <div>
                  <h5 className="font-semibold text-sm">文化传承</h5>
                  <p className="text-gray-400 text-xs">深厚的历史文化底蕴</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="cursor-pointer hover:text-amber-400 transition-colors">隐私政策</span>
              <span className="cursor-pointer hover:text-amber-400 transition-colors">使用条款</span>
              <span className="cursor-pointer hover:text-amber-400 transition-colors">联系我们</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
