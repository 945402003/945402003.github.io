(() => {
  const data = window.publicationData;
  if (!data) {
    return;
  }

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

  const renderPublications = (data, targetId) => {
    const container = document.getElementById(targetId);
    if (!container) {
      return;
    }

    // 支持bilingual结构或直接数组
    let items = data;
    if (Array.isArray(data)) {
      items = data;
    } else if (typeof data === "object" && !Array.isArray(data)) {
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

        const thumbHtml = item.image ? `<td class="thumb-cell">
              <a href="${item.image.src}"><img src="${item.image.src}" alt="${item.image.alt}"></a>
            </td>` : `<td class="thumb-cell"></td>`;

        return `
          <tr>
            <td class="content-cell">
              <span class="papertitle">${item.title}</span>
              <br>
              <span class="authors-line">${highlightAuthor(item.authors)}</span>
              <br>
              ${venueHtml}
              ${linksHtml}
              ${extraHtml}
            </td>
            ${thumbHtml}
          </tr>
        `;
      })
      .join("");
  };

  const renderPublicationsWrapper = (pubData) => {
    if (!pubData) return;
    const lang = window.currentLanguage || 'en';
    const langData = pubData[lang] || pubData.en;
    if (langData) {
      renderPublications(langData.recentPublications, "recent-publications");
      // renderPublications(langData.selectedPreprints, "selected-preprints");
    }
  };

  window.pubRenderFunc = renderPublicationsWrapper;
  renderPublicationsWrapper(data);

  // render projects if available (same format as publications)
})();
