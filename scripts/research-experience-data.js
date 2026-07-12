(() => {
  // bilingual internship / research experience data (english + chinese)
  window.researchExperienceData = {
    en: [
      {
        abbr: "NEURA",
        title: "NEURA ROBOT",
        logo: { src: "images/NEURA.webp", alt: "NEURA", width: "120", height: "120" },
        topic: "Dexterous Hand Algorithm Engineer Intern. Worked on dexterous hand grasping and arm-wrist-hand coordinated manipulation, reproduced and adapted frontier embodied AI policy models, and built a data loop for real-robot training and validation. Completed action-space adaptation, control-interface integration, and deployment validation on NEURA in-house robotic arm and dexterous hand platforms.",
        roleLabel: "Role",
        dates: "Jun. 2026 - Aug. 2026"
      },
      {
        abbr: "UBTECH",
        logo: { src: "images/UBTech.png", alt: "UBTECH", width: "120", height: "120" },
        title: "UBTECH Robotics Corp. Ltd.",
        topic: "Humanoid Robot Algorithm Intern. Participated in humanoid robot development for unstructured assembly scenarios, focusing on high-precision alignment. Helped design a hybrid assembly strategy combining visual guidance and end-effector force control, and optimized stable, low-latency execution of high-frequency control commands on real hardware.",
        roleLabel: "Role",
        mentorsHtml: "Tan Huan",
        mentorNameLabel: "Enterprise Mentor",
        dates: "Jul. 2025 - Sep. 2025"
      },
      {
        logo: { src: "images/youku.jpeg", alt: "youku logo", width: "120", height: "120" },
        title: "Alibaba Group Technology Co., Ltd. - Tiger Whale Entertainment Group",
        topic: "Computer Vision Algorithm Intern. Deeply involved in Youku's video defect detection and quality assessment system, reconstructed the server-side inference pipeline, and built a dynamic scheduling mechanism based on multi-threaded asynchronous pipelines and image slicing, reducing single inference latency from 1.4s to 0.9s.",
        roleLabel: "Role",
        location: "Hangzhou, China",
        dates: "Nov. 2023 - Feb. 2024"
      }
    ],
    zh: [
      {
        abbr: "NEURA",
        title: "NEURA ROBOT",
        logo: { src: "images/NEURA.webp", alt: "NEURA", width: "120", height: "120" },
        topic: "灵巧手算法工程师实习生。面向灵巧手抓取与臂腕手协同操作，参与前沿具身智能策略模型的复现、适配与真机验证，构建面向真机训练与验证的数据闭环；完成相关算法在 NEURA 自研机械臂与灵巧手平台上的动作空间适配、控制接口对接与部署验证。",
        roleLabel: "角色",
        dates: "2026.6 - 2026.8"
      },
      {
        abbr: "UBTECH",
        logo: { src: "images/UBTech.png", alt: "UBTech", width: "120", height: "120" },
        title: "深圳市优必选科技股份有限公司",
        topic: "人形机器人算法实习生。参与人形机器人非结构化装配场景研发，针对高精度对准难题设计“视觉引导 + 末端力控”的复合装配策略，并优化高频控制指令在真实硬件上的稳定下发与低延迟执行。",
        roleLabel: "角色",
        mentorsHtml: "谭欢",
        mentorNameLabel: "企业导师",
        dates: "2025.7 - 2025.9"
      },
      {
        logo: { src: "images/youku.jpeg", alt: "优酷标志", width: "120", height: "120" },
        title: "杭州阿里巴巴集团科技有限公司 - 虎鲸文娱集团",
        topic: "视觉算法实习生。深度参与优酷视频缺陷检测与质量评价体系构建，重构服务端推理链路，构建基于多线程异步流水线与图像切片的动态调度机制，将单次推理耗时由 1.4s 缩短至 0.9s，兼顾高精度与高吞吐需求。",
        roleLabel: "角色",
        location: "杭州，中国",
        dates: "2023年11月 - 2024年2月"
      }
    ]
  };
})();
