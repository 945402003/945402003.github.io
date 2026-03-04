(() => {
  // similar structure to publicationData but for projects
  window.projectData = [
    {
      image: { src: "images/example-project.png", alt: "Example project teaser" },
      title: "Sample Project Title",
      authors: "<strong>Zhengyi Yang</strong>",
      venue: "Demo description or role",
      links: [
        { href: "https://example.com/project", text: "project page", className: "project", icon: "fa fa-link" }
      ]
    }
  ];
})();
