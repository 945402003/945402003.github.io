(() => {
  // bilingual project data (english + chinese)
  window.projectData = {
    en: [
      {
        // video: { src: "images/dual-arm.mov", width: "360", height: "200" },
        title: "Universal Data Acquisition Equipment for Embodied Intelligence",
        venue: "<strong>Technical Lead</strong> | Sep. 2024 - Mar. 2026<br>Developed a low-latency, high-reliability teleoperation data acquisition platform with six-dimensional force feedback for industrial embodied AI deployment. Built a closed data loop covering teleoperation, multimodal synchronization, data cleaning, dataset construction, model fine-tuning, and deployment validation.",
        extraHtml: '<p class="item-note">Delivered a complete acquisition pipeline combining a force-feedback master device, hand exoskeleton, and multi-DOF slave systems. The platform has been applied to a Military Science Commission project (RMB 2M) and an enterprise robotics project (RMB 600K).</p>'
      },
      {
        // video: { src: "images/Tele_ARTS_ARM.mov", width: "360", height: "200" },
        title: "Six-DOF Bio-Inspired Hybrid Cable-Driven Haptic Manipulator",
        venue: "<strong>Technical Lead</strong> | 2024 - 2026<br>Designed a six-degree-of-freedom bionic hybrid cable-driven force-feedback master device to reduce parasitic dynamics in embodied intelligence data collection. Introduced passive gravity balancing, hardware-state decoupling, dynamics identification, and friction compensation for high-transparency teleoperation.",
        extraHtml: '<p class="item-note">The system enables stable collection of high-purity, contact-rich manipulation data and supported demonstrations shown on CCTV and at the Hong Kong International AI Art Festival.</p>'
      },
      {
        title: "MIIT High-Quality Development Special Project: Industrial Robot Master Control Chip",
        venue: "<strong>Project Technical Backbone</strong> | Sep. 2024 - Feb. 2026 | RMB 5M<br>Responsible for full-chain development and deployment of robot core algorithm libraries, including kinematics, dynamics, force control, trajectory planning, and visual servoing. Completed control algorithm adaptation and performance optimization for Luoshi, ESTUN, and Guangzhou CNC robotic arms on the RX6000 chip."
      },
      {
        title: "Ultra-High-DOF Cable-Driven Arm-Wrist-Hand Integrated System for Humanoid Dexterous Manipulation",
        venue: "<strong>Core Developer</strong> | Sep. 2025 - Present<br>Developing a lightweight and compliant bio-inspired cable-driven arm-wrist-hand system for high-dexterity, low-inertia robotic manipulation. Work focuses on coordinated arm-wrist-hand modeling, kinematic mapping, and multi-DOF control for grasping and contact-rich tasks."
      },
      {
        // video: { src: "images/exo.mov", width: "300", height: "300" },
        title: "Waist Assistive Exoskeleton System",
        venue: "<strong>Project Leader</strong> | RMB 500K<br>Led development of an intelligent waist-assist exoskeleton for warehouse carrying scenarios. The system combines mechanical structure design and control algorithms to reduce lumbar load and support enterprise deployment."
      }
    ],
    zh: [
      {
        // video: { src: "images/dual-arm.mov", width: "360", height: "200" },
        title: "具身智能通用数据采集设备研发",
        venue: "<strong>技术负责人</strong> | 2024.09 - 2026.03<br>面向工业环境下具身智能模型落地需求，研发低延迟、高可靠、具备六维力反馈能力的通用数据采集平台，解决复杂工业作业场景中的高频空间映射、多模态数据同步与高质量示教数据获取难题。",
        extraHtml: '<p class="item-note">搭建覆盖数据采集、数据清洗、数据集构建、模型微调与模型部署验证的具身智能数据闭环；相关成果已应用于军科委专项（200 万）及知名机器人企业落地项目（60 万）。</p>'
      },
      {
        // video: { src: "images/Tele_ARTS_ARM.mov", width: "360", height: "200" },
        title: "六自由度仿生混合线驱力反馈主端设备",
        venue: "<strong>技术负责人</strong> | 2024 - 2026<br>针对具身智能数据采集易受“寄生动力学”污染的痛点，主导研发 6-DOF 仿生混合线驱力反馈主控系统，引入被动重力平衡设计与高透明度动态控制框架。",
        extraHtml: '<p class="item-note">通过底层硬件状态独立映射、动力学辨识与摩擦力补偿，降低高惯性与重力干扰，实现高纯度、接触丰富操作数据的稳定采集；相关成果登上央视舞台与香港国际 AI 艺术节。</p>'
      },
      {
        title: "工信部高质量发展专项：工业机器人主控芯片项目",
        venue: "<strong>项目技术骨干</strong> | 2024.09 - 2026.02 | 500 万<br>负责工信部高质量专项中机器人核心算法库（运动学、动力学、力控、轨迹规划、视觉伺服等）的全链路开发与部署，完成对珞石、埃斯顿、广州数控三类工业机械臂在 RX6000 芯片下的控制算法适配与性能优化。"
      },
      {
        title: "面向类人灵巧作业的超高自由度线驱动“臂-腕-手”一体化系统",
        venue: "<strong>核心研发</strong> | 2025.09 - 至今<br>面向高灵巧度、低惯量机器人操作需求，开展仿生线驱动臂腕手一体化系统研发，围绕臂腕手协同建模、运动学映射与多自由度控制等关键问题，构建轻量化、柔顺化机器人操作平台。"
      },
      {
        // video: { src: "images/exo.mov", width: "300", height: "300" },
        title: "腰部助力外骨骼系统开发",
        venue: "<strong>项目负责人</strong> | 50 万<br>针对 B 端仓库搬运工腰部劳损痛点，主导开发智能腰部助力外骨骼系统，通过机械结构设计与控制算法实现腰部运动辅助和负重减轻，相关成果已应用于企业项目中。"
      }
    ]
  };
})();
