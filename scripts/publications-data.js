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

  window.publicationData = {
    recentPublications: [
      {
        image: { src: "images/11.jpg", alt: "UnifiedReward Think teaser" },
        title: "Unified Multimodal Chain-of-Thought Reward Model through Reinforcement Fine-Tuning",
        authors: "<strong>Yibin Wang</strong>, Zhimin Li, Yuhang Zang, Chunyu Wang, Qinglin Lu, Cheng Jin, Jiaqi Wang.",
        venue: '<span class="venue venue-neurips">NeurIPS</span>, 2025',
      }

    ],
    selectedPreprints: []
  };
})();
