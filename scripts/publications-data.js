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
        image: { src: "images/portait.jpg", alt: "UnifiedReward Think teaser" },
        title: "Unified Multimodal Chain-of-Thought Reward Model through Reinforcement Fine-Tuning",
        authors: "<strong>Yibin Wang</strong>, Zhimin Li, Yuhang Zang, Chunyu Wang, Qinglin Lu, Cheng Jin, Jiaqi Wang.",
        venue: '<span class="venue venue-neurips">NeurIPS</span>, 2025',
        links: [
          { href: "https://codegoat24.github.io/UnifiedReward/think", text: "project page", className: "project", icon: "fa fa-link" },
          { href: "https://arxiv.org/pdf/2505.03318", text: "arXiv", className: "arxiv", icon: "ai ai-arxiv" },
          { href: "https://github.com/CodeGoat24/UnifiedReward", text: "code", className: "code", icon: "fa fa-github" }
        ],
        extraHtml: `
          <p></p>
          <a href="https://huggingface.co/papers/2505.03318">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%201st paper of the day-yellow">
          </a>
          <br>
          <a href="https://arxiv.org/abs/2505.03318" target="_blank"><img src="http://img.shields.io/badge/cs.CV-arXiv%3A2505.03318-B31B1B.svg" /></a>
          <a href="https://github.com/CodeGoat24/UnifiedReward" target="_blank" rel="noopener noreferrer"><img alt="Code" src="https://img.shields.io/github/stars/CodeGoat24/UnifiedReward.svg?style=social&amp;label=Official"></a>
          ${citationBadge("UebtZRa9Y70C")}
          <br>
          <a href="https://huggingface.co/collections/CodeGoat24/unifiedreward-training-data-67c300d4fd5eff00fa7f1ede">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Datasets-yellow">
          </a>
          <a href="https://huggingface.co/collections/CodeGoat24/unifiedreward-models-67c3008148c3a380d15ac63a">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Checkpoints-yellow">
          </a>
        `
      }

    ],
    selectedPreprints: []
  };
})();
