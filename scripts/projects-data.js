(() => {
  // similar structure to publicationData but for projects
  window.projectData = [
    {
      image: { src: "images/portait.jpg", alt: "Example project teaser" },
      title: "Sample Project Title",
      authors: "<strong>Zhengyi Yang</strong>",
      venue: "Demo description or role",
      links: [
        { href: "#", text: "project page", className: "project", icon: "fa fa-link" }
      ]
    },
    {
      image: { src: "images/Tencent_logo.png", alt: "Tencent logo" },
      title: "Tencent Hunyuan",
      authors: "<strong>Zhengyi Yang</strong>",
      venue: "Multimodal Reinforcement Learning",
      links: [
        { href: "#", text: "learn more", className: "project", icon: "fa fa-link" }
      ]
    }
  ];
})();
