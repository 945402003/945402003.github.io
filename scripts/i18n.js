(() => {
  // 国际化翻译数据
  window.i18n = {
    en: {
      // 导航和标题
      navBrand: "Zhengyi Yang",
      biography: "Biography",
      projects: "Projects",
      publications: "Publications",
      experience: "Experience",
      
      // 主页部分标签
      topicLabel: "Topic",
      mentorLabel: "Mentor",
      mentorsLabel: "Mentors",
      locationLabel: "Location",
      datesLabel: "Dates",
      paperTitle: "Publications",
      projectTitle: "Projects",
      experienceTitle: "Research Experience"
    },
    zh: {
      // 导航和标题
      navBrand: "杨正一",
      biography: "个人简介",
      projects: "项目经历",
      publications: "相关成果",
      experience: "实习经历",
      
      // 主页部分标签
      topicLabel: "研究方向",
      mentorLabel: "导师",
      mentorsLabel: "导师",
      locationLabel: "地点",
      datesLabel: "时间",
      paperTitle: "论文发表",
      projectTitle: "项目",
      experienceTitle: "研究经历"
    }
  };

  // 获取翻译文本
  window.getT = (key) => {
    const lang = window.currentLanguage || 'en';
    return window.i18n[lang][key] || window.i18n.en[key] || key;
  };
})();
