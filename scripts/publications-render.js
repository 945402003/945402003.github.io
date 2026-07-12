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
    text = text.replace(
      /<strong>YANG Zhengyi<\/strong>/g,
      '<span class="author-me">YANG Zhengyi</span>'
    );
    text = text.replace(
      /<strong>杨正一<\/strong>/g,
      '<span class="author-me">杨正一</span>'
    );
    if (!text.includes("author-me")) {
      text = text.replace(/\bZhengyi Yang\b/g, '<span class="author-me">Zhengyi Yang</span>');
      text = text.replace(/杨正一/g, '<span class="author-me">杨正一</span>');
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
        const englishTitleHtml = item.englishTitle
          ? `<br><span class="paper-subtitle">${item.englishTitle}</span>`
          : "";

        const thumbHtml = item.image ? `<td class="thumb-cell">
              <a href="${item.image.src}"><img src="${item.image.src}" alt="${item.image.alt}"></a>
            </td>` : "";
        const contentAttrs = item.image ? 'class="content-cell"' : 'class="content-cell full-cell" colspan="2"';

        return `
          <tr>
            <td ${contentAttrs}>
              <span class="papertitle">${item.title}</span>
              ${englishTitleHtml}
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
