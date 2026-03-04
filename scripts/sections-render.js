(() => {
  const highlightAuthor = (html) => {
    let text = String(html).replace(
      /<strong>Yibin Wang<\/strong>/g,
      '<span class="author-me">Yibin Wang</span>'
    );
    if (!text.includes("author-me")) {
      text = text.replace(/\bYibin Wang\b/g, '<span class="author-me">Yibin Wang</span>');
    }
    return text;
  };

  const renderIntro = (data, targetId) => {
    const container = document.getElementById(targetId);
    if (!container || !data) {
      return;
    }

    const linesHtml = (data.sidebarLines || [])
      .map((line) => {
        if (typeof line === "string") {
          return `<p class="sidebar-line">${line}</p>`;
        }
        const level = line.level ? ` level-${line.level}` : "";
        return `<p class="sidebar-line${level}">${line.text}</p>`;
      })
      .join("");

    const linkItems = (data.links || []).map((link) => {
      const label = link.label ? ` aria-label="${link.label}" title="${link.label}"` : "";
      if (link.imgSrc) {
        return `<a href="${link.href}"${label}><img class="icon-hf" src="${link.imgSrc}" alt="${link.label || "Hugging Face"}"></a>`;
      }
      return `<a href="${link.href}"${label}><i class="${link.iconClass}"></i></a>`;
    });

    const linksHtml = linkItems
      .map((item, index) => {
        if (index === 0) {
          return item;
        }
        return `<span class="link-sep">|</span>${item}`;
      })
      .join("");

    container.innerHTML = `
      <div class="sidebar-card">
        <a href="${data.avatar.src}">
          <img alt="${data.avatar.alt}" src="${data.avatar.src}" class="hoverZoomLink avatar">
        </a>
        <p class="sidebar-name">${data.name}</p>
        ${linesHtml}
        <div class="sidebar-links">${linksHtml}</div>
      </div>
    `;
  };

  const renderBiography = (data, targetId) => {
    const container = document.getElementById(targetId);
    if (!container || !data) {
      return;
    }

    const paragraphs = (data.bioParagraphs || [])
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");
    container.innerHTML = paragraphs;
  };

  const renderAwards = (items, targetId) => {
    const container = document.getElementById(targetId);
    if (!container) {
      return;
    }

    container.innerHTML = (items || [])
      .map((item) => `<p>&bull; ${item}</p>`)
      .join("");
  };

  const renderResearchExperience = (items, targetId) => {
    const container = document.getElementById(targetId);
    if (!container) {
      return;
    }

    container.innerHTML = (items || [])
      .map((item) => {
        const mentorLabel = item.mentorLabel || "Mentor";
        const mentorHtml = item.mentorsHtml
          ? `\n              <br>\n              <strong>${mentorLabel}</strong>: ${item.mentorsHtml}`
          : "";

        return `
          <tr>
            <td class="thumb-cell">
              <a href="${item.logo.src}"><img class="org-logo" src="${item.logo.src}" alt="${item.logo.alt || ""}"></a>
            </td>
            <td class="content-cell">
              <span class="org-title">${item.title}</span>
              <br>
              <br>
              <strong>Topic</strong>: ${item.topic}
              ${mentorHtml}
              <br>
              <br>
              ${item.location}
              <br>
              ${item.dates}
              <br>
            </td>
          </tr>
        `;
      })
      .join("");
  };

  // build a simple projects list by extracting links flagged with class "project"
  const renderProjects = (data, targetId) => {
    const container = document.getElementById(targetId);
    if (!container || !data) {
      return;
    }

    const items = [];
    [data.recentPublications || [], data.selectedPreprints || []].forEach((list) => {
      list.forEach((pub) => {
        (pub.links || []).forEach((link) => {
          if (link.className && link.className.includes("project")) {
            items.push({ title: pub.title, href: link.href });
          }
        });
      });
    });

    // remove duplicates if any
    const unique = [];
    items.forEach((it) => {
      if (!unique.some((u) => u.href === it.href)) {
        unique.push(it);
      }
    });

    container.innerHTML = unique
      .map((p) => `<p><a href="${p.href}" target="_blank">${p.title}</a></p>`)
      .join("");
  };

  renderAwards(window.awardsData, "selected-awards");
  renderResearchExperience(window.researchExperienceData, "research-experience");
  renderIntro(window.introData, "intro-sidebar");
  renderBiography(window.introData, "biography-content");
  // render the projects section using publication data (if available)
  renderProjects(window.publicationData, "projects-content");

  const setupNavSpy = () => {
    const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
    if (navLinks.length === 0) {
      return;
    }

    const sections = navLinks
      .map((link) => {
        const href = link.getAttribute("href") || "";
        const id = href.startsWith("#") ? href.slice(1) : "";
        const section = id ? document.getElementById(id) : null;
        return section ? { link, section } : null;
      })
      .filter(Boolean);

    if (sections.length === 0) {
      return;
    }

    const setActive = (activeLink) => {
      navLinks.forEach((link) => link.classList.toggle("active", link === activeLink));
    };

    const updateActiveByScroll = () => {
      const offset = 110;
      const scrollPos = window.scrollY + offset;
      let current = sections[0];
      for (const item of sections) {
        const top = item.section.getBoundingClientRect().top + window.scrollY;
        if (top <= scrollPos) {
          current = item;
        } else {
          break;
        }
      }
      setActive(current.link);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          updateActiveByScroll();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    navLinks.forEach((link) => {
      link.addEventListener("click", () => setActive(link));
    });
    updateActiveByScroll();
  };

  setupNavSpy();
})();
