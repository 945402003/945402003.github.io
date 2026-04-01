(() => {
  const citationBadge = (paperId) => `
    <a href="https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=FQeuWTYAAAAJ&citation_for_view=FQeuWTYAAAAJ:${paperId}" target="_blank">
      <svg width="88" height="20" role="img">
        <g clip-path="url(#r)">
          <rect width="51" height="20" fill="#555"/>
          <rect x="51" width="37" height="20" fill="#007ec6"/>
          <rect width="88" height="20" fill="url(#s)"/>
        </g>
        <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
          <text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">Citations</text>
          <text class='show_paper_citations' data='FQeuWTYAAAAJ:${paperId}' x="685" y="140" transform="scale(.1)" fill="#fff"></text>
        </g>
      </svg>
    </a>
  `;

  // bilingual publication data (english + chinese)
  window.publicationData = {
    en: {
      recentPublications: [
        {
          title: "Modeling, Control, and Algorithm Optimization of Bionic Tendon Wire-Driven Robots",
          authors: "<strong>Zhengyi Yang</strong>, Gaofeng Li, Peng Cheng, Jiming Chen.",
          venue: '<span class="venue venue-cvpr">IEEE/ASME Transactions on Mechatronics</span>, 2026',
        },
        {
          title: "A Master Control System for Industrial Robots",
          authors: "Gaofeng Li, <strong>Zhengyi Yang</strong>, Peng Cheng, Jiming Chen.",
          venue: '<span class="venue venue-neurips">Invention Patent</span>, CN120085852A (Published), 2025-01-24',
        },
        {
          title: "A Video Action Quality Assessment Method Based on Spatiotemporal Domain Perception",
          authors: "Peng Chen, <strong>Zhengyi Yang</strong>, Yuanjie Dang, Bin Zhang.",
          venue: '<span class="venue venue-neurips">Invention Patent</span>, CN116703857B (Authorized), 2025-12-30',
        },
        {
          title: "An Online Carbon Semantic Map Construction Method Based on Sparse Fusion",
          authors: "Yuanjie Dang, <strong>Zhengyi Yang</strong>, Xiaofei Ding, Yutong Hu, Bin Zhang, Peng Chen.",
          venue: '<span class="venue venue-neurips">Invention Patent</span>, CN115496900B (Authorized), 2025-11-25',
        },
        {
          title: "STAN：Spatio-Temporal Alignment Network for No-Reference Video Quality Assessment",
          authors: "<strong>Zhengyi Yang</strong>, Jianjun Xiang,Yuanjie Dang, Peng Chen.",
          venue: '<span class="venue venue-cvpr">ICANN(CCF-C)</span>, 2023',
        }
      ],
      selectedPreprints: []
    },
    zh: {
      recentPublications: [
        {
          image: { src: "images/11.jpg", alt: "UnifiedReward思维模型预览" },
          title: "仿生肌腱线驱动机器人的建模、控制与算法优化",
          authors: "<strong>杨正一</strong>, 李高峰, 程鹏, 陈积明.",
          venue: '<span class="venue venue-cvpr">IEEE/ASME Transactions on Mechatronics</span>, 2026',
        },
        {
          image: { src: "images/11.jpg", alt: "UnifiedReward思维模型预览" },
          title: "一种工业机器人主控系统",
          authors: "李高峰, <strong>杨正一</strong>, 程鹏, 陈积明.",
          venue: '<span class="venue venue-neurips">发明专利</span>, CN120085852A（公开）, 2025-01-24',
        },
        {
          image: { src: "images/11.jpg", alt: "UnifiedReward思维模型预览" },
          title: "一种基于时空域感知的视频动作质量评价方法",
          authors: "陈朋, <strong>杨正一</strong>, 党源杰, 张斌.",
          venue: '<span class="venue venue-neurips">发明专利</span>, CN116703857B（授权）, 2025-12-30',
        },
        {
          image: { src: "images/11.jpg", alt: "UnifiedReward思维模型预览" },
          title: "一种基于稀疏融合的在线碳语义地图构建方法",
          authors: "党源杰, <strong>杨正一</strong>, 丁小飞, 胡雨曈, 张斌, 陈朋.",
          venue: '<span class="venue venue-neurips">发明专利</span>, CN115496900B（授权）, 2025-11-25',
        },
        {
          image: { src: "images/11.jpg", alt: "UnifiedReward思维模型预览" },
          title: "基于时空域感知的用户视频动作质量评价方法",
          authors: "<strong>杨正一</strong>, 项建军, 党源杰, 陈朋.",
          venue: '<span class="venue venue-cvpr">ICANN（CCF-C）</span>, 2023',
        }
      ],
      selectedPreprints: []
    }
  };
})();
