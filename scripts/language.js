(() => {
  // 初始化语言（从localStorage读取，或默认英文）
  const savedLanguage = localStorage.getItem('siteLanguage') || 'en';
  window.currentLanguage = savedLanguage;

  // 语言切换函数
  window.switchLanguage = (lang) => {
    if (!['en', 'zh'].includes(lang)) return;
    
    window.currentLanguage = lang;
    localStorage.setItem('siteLanguage', lang);
    
    // 更新HTML元素的lang属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    
    // 更新按钮样式
    updateLanguageButton(lang);
    
    // 重新渲染所有需要翻译的内容
    updatePageContent(lang);
  };

  // 更新语言按钮状态
  const updateLanguageButton = (lang) => {
    const enBtn = document.getElementById('lang-en');
    const zhBtn = document.getElementById('lang-zh');
    
    if (enBtn) enBtn.classList.toggle('active', lang === 'en');
    if (zhBtn) zhBtn.classList.toggle('active', lang === 'zh');
  };

  // 更新页面内容
  const updatePageContent = (lang) => {
    // 更新导航标签
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
      const key = el.getAttribute('data-i18n-key');
      el.textContent = window.getT(key);
    });
    
    // 重新渲染侧边栏与简介，使用最新语言
    if (typeof renderIntro === 'function') {
      renderIntro(window.introData, 'intro-sidebar');
    }
    if (typeof renderBiography === 'function') {
      renderBiography(window.introData, 'biography-content');
    }
  };

  // 页面加载时初始化
  document.addEventListener('DOMContentLoaded', () => {
    initializeLanguageSwitcher();
    switchLanguage(window.currentLanguage);
  });

  const initializeLanguageSwitcher = () => {
    const enBtn = document.getElementById('lang-en');
    const zhBtn = document.getElementById('lang-zh');
    
    if (enBtn) enBtn.addEventListener('click', () => switchLanguage('en'));
    if (zhBtn) zhBtn.addEventListener('click', () => switchLanguage('zh'));
  };
})();
