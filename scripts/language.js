(() => {
  // 初始化语言（从localStorage读取，或默认中文）
  const savedLanguage = localStorage.getItem('siteLanguage') || 'zh';
  window.currentLanguage = savedLanguage;

  // 语言切换函数
  // lang: 'en' or 'zh'; reload flag determines whether to reload page
  window.switchLanguage = (lang, reload = true) => {
    if (!['en', 'zh'].includes(lang)) return;

    window.currentLanguage = lang;
    localStorage.setItem('siteLanguage', lang);

    // 更新HTML元素的lang属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // 更新按钮样式
    updateLanguageButton(lang);

    // 重新渲染所有需要翻译的内容
    updatePageContent(lang);

    if (reload) {
      // 切换语言后刷新页面以确保完整更新
      location.reload();
    }
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
    // 重新渲染项目，使用最新语言
    if (typeof renderProjects === 'function' && window.projectData) {
      renderProjects(window.projectData, 'projects');
    }
    // 重新渲染论文发表，使用最新语言
    if (typeof window.pubRenderFunc === 'function' && window.publicationData) {
      window.pubRenderFunc(window.publicationData);
    }
    // 重新渲染研究经验，使用最新语言
    if (typeof renderResearchExperience === 'function' && window.researchExperienceData) {
      renderResearchExperience(window.researchExperienceData, 'research-experience');
    }
  };

  // 页面加载时初始化
  document.addEventListener('DOMContentLoaded', () => {
    initializeLanguageSwitcher();
    // apply stored language without triggering a reload
    switchLanguage(window.currentLanguage, false);
  });

  const initializeLanguageSwitcher = () => {
    const enBtn = document.getElementById('lang-en');
    const zhBtn = document.getElementById('lang-zh');
    
    if (enBtn) enBtn.addEventListener('click', () => switchLanguage('en'));
    if (zhBtn) zhBtn.addEventListener('click', () => switchLanguage('zh'));
  };
})();
