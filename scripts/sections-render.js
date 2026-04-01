(() => {
  const highlightAuthor = (html) => {
    let text = String(html).replace(
      /<strong>Zhengyi Yang<\/strong>/g,
      '<span class="author-me">Zhengyi Yang</span>'
    );
    if (!text.includes("author-me")) {
      text = text.replace(/\bZhengyi Yang\b/g, '<span class="author-me">Zhengyi Yang</span>');
    }
    return text;
  };

  const renderIntro = (data, targetId) => {
    const container = document.getElementById(targetId);
    if (!container || !data) {
      return;
    }
    // pick language-specific subobject
    const lang = window.currentLanguage || 'en';
    const info = data[lang] || data.en;

    const linesHtml = (info.sidebarLines || [])
      .map((line) => {
        if (typeof line === "string") {
          return `<p class="sidebar-line">${line}</p>`;
        }
        const level = line.level ? ` level-${line.level}` : "";
        return `<p class="sidebar-line${level}">${line.text}</p>`;
      })
      .join("");

    const linkItems = (info.links || []).map((link) => {
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
        <a href="${info.avatar.src}">
          <img alt="${info.avatar.alt}" src="${info.avatar.src}" class="hoverZoomLink avatar">
        </a>
        <p class="sidebar-name">${info.name}</p>
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
    const lang = window.currentLanguage || 'en';
    const info = data[lang] || data.en;

    const paragraphs = (info.bioParagraphs || [])
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

  const renderResearchExperience = (data, targetId) => {
    const container = document.getElementById(targetId);
    if (!container) {
      return;
    }

    // 支持bilingual结构：data = {en: [...], zh: [...]} 或 data = [...]
    let items = data;
    if (data && typeof data === "object" && !Array.isArray(data)) {
      const lang = window.currentLanguage || 'en';
      items = data[lang] || data.en || [];
    }

    container.innerHTML = (items || [])
      .map((item) => {
        const mentorLabel = item.mentorLabel || "Mentor";
        const mentorHtml = item.mentorsHtml
          ? `\n              <br>\n              <strong>${mentorLabel}</strong>: ${item.mentorsHtml}`
          : "";

        const logoSize = item.logo.width && item.logo.height ? ` width="${item.logo.width}" height="${item.logo.height}"` : "";
        return `
          <tr>
            <td class="thumb-cell">
              <a href="${item.logo.src}"><img class="org-logo" src="${item.logo.src}" alt="${item.logo.alt || ""}"${logoSize}></a>
            </td>
            <td class="content-cell">
              <span class="org-title">${item.title}</span>
              <br>
              <br>
              <strong>${item.mentorLabel || 'Topic'}</strong>: ${item.topic}
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

  const renderProjects = (data, targetId) => {
    const container = document.getElementById(targetId);
    if (!container) {
      return;
    }

    // 支持bilingual结构：data = {en: [...], zh: [...]} 或 data = [...]
    let items = data;
    if (data && typeof data === "object" && !Array.isArray(data)) {
      const lang = window.currentLanguage || 'en';
      items = data[lang] || data.en || [];
    }

    container.innerHTML = (items || [])
      .map((item) => {
        const linksHtml = (item.links || [])
          .map((link) => {
            const icon = link.icon ? `<i class="${link.icon}"></i>` : "";
            const cls = link.className ? `link-chip ${link.className}` : "link-chip";
            return `<a class="${cls}" href="${link.href}">${icon}${link.text}</a>`;
          })
          .join("");
        const extraHtml = item.extraHtml || "";
        const venueHtml = item.venue ? `${item.venue}
                <br>` : "";

        // 生成媒体HTML：优先使用video，没有则使用image
        let mediaHtml = "";
        if (item.video && item.video.src) {
          const poster = item.video.poster ? ` poster="${item.video.poster}"` : "";
          const width = item.video.width ? ` width="${item.video.width}"` : "";
          const height = item.video.height ? ` height="${item.video.height}"` : "";
          const style = ` style="max-width: 100%; height: auto;"`;
          mediaHtml = `<a href="${item.video.src}"><video class="media-content" controls${poster}${width}${height}${style}><source src="${item.video.src}" type="video/mp4">Your browser does not support the video tag.</video></a>`;
        } else if (item.image && item.image.src) {
          const width = item.image.width ? ` width="${item.image.width}"` : "";
          const height = item.image.height ? ` height="${item.image.height}"` : "";
          const style = ` style="max-width: 100%; height: auto;"`;
          mediaHtml = `<a href="${item.image?.src || ""}"><img src="${item.image?.src || ""}" alt="${item.image?.alt || ""}"${width}${height}${style}></a>`;
        }

        return `
          <tr>
            <td class="content-cell">
              <span class="papertitle">${item.title}</span>
              <br>
              <span class="authors-line">${highlightAuthor(item.authors || "")}</span>
              <br>
              ${venueHtml}
              ${linksHtml}
              ${extraHtml}
            </td>
            <td class="thumb-cell">
              ${mediaHtml}
            </td>
          </tr>
        `;
      })
      .join("");
  };


  renderAwards(window.awardsData, "selected-awards");
  renderResearchExperience(window.researchExperienceData, "research-experience");
  renderProjects(window.projectData, "projects");
  renderIntro(window.introData, "intro-sidebar");
  renderBiography(window.introData, "biography-content");

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
