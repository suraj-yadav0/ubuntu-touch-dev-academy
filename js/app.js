// Application logic for Ubuntu Touch Developer Academy

(function () {
  'use strict';

  let currentModuleIndex = 0;
  let currentTopicId = null;

  // Initialize theme
  function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const savedTheme = localStorage.getItem('theme-preference');
    
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateThemeButtonLabel(savedTheme);
    } else {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = systemDark ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', initialTheme);
      updateThemeButtonLabel(initialTheme);
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme-preference', next);
        updateThemeButtonLabel(next);
      });
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme-preference')) {
        const autoTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', autoTheme);
        updateThemeButtonLabel(autoTheme);
      }
    });
  }

  function updateThemeButtonLabel(theme) {
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.textContent = theme === 'dark' ? 'Theme: Dark' : 'Theme: Light';
    }
  }

  // Populate sidebar navigation
  function buildSidebar() {
    const navList = document.getElementById('nav-module-list');
    if (!navList || !CURRICULUM) return;

    navList.innerHTML = '';

    CURRICULUM.modules.forEach((mod, idx) => {
      const li = document.createElement('li');
      li.className = 'nav-item';

      const btn = document.createElement('button');
      btn.className = `nav-module-btn ${idx === currentModuleIndex ? 'active' : ''}`;
      btn.dataset.moduleIndex = idx;
      btn.innerHTML = `
        <span><span class="module-number-pill">${mod.number}</span>${mod.title}</span>
      `;

      btn.addEventListener('click', () => {
        navigateToModule(idx);
        closeMobileSidebar();
      });

      const topicUl = document.createElement('ul');
      topicUl.className = 'nav-topic-list';

      mod.topics.forEach((topic) => {
        const topicLi = document.createElement('li');
        const a = document.createElement('a');
        a.className = 'nav-topic-link';
        a.href = `#${topic.id}`;
        a.textContent = topic.title;
        a.addEventListener('click', (e) => {
          e.preventDefault();
          navigateToModule(idx, topic.id);
          closeMobileSidebar();
        });
        topicLi.appendChild(a);
        topicUl.appendChild(topicLi);
      });

      li.appendChild(btn);
      li.appendChild(topicUl);
      navList.appendChild(li);
    });
  }

  // Render module content
  function renderModule(idx, targetTopicId) {
    currentModuleIndex = idx;
    const mod = CURRICULUM.modules[idx];
    if (!mod) return;

    const contentArea = document.getElementById('main-content-area');
    if (!contentArea) return;

    // Header info
    let html = `
      <header class="content-header">
        <span class="module-tag">Module ${mod.number} &bull; ${mod.readTime}</span>
        <h1 class="module-main-heading">${mod.title}</h1>
        <p class="module-summary-lead">${mod.summary}</p>
      </header>
    `;

    // Diagram insertion for specific modules
    if (mod.id === 'module-2-architecture') {
      html += `
        <div class="diagram-card">
          <div class="diagram-header">
            <span class="diagram-title">System Architecture: Complete Ubuntu Touch Stack</span>
            <span class="module-tag">Wayland / Mir 2.x</span>
          </div>
          <div class="diagram-container">
            <img src="assets/diagrams/ubuntu-touch-stack.svg" alt="Ubuntu Touch Architecture Stack" loading="lazy" />
          </div>
          <p class="diagram-caption">Complete hardware to user-interface software hierarchy in Ubuntu Touch</p>
        </div>
      `;
    }

    // Topics rendering
    mod.topics.forEach((topic) => {
      html += `
        <section id="${topic.id}" class="topic-card">
          <h2 class="topic-heading">${topic.title}</h2>
          <div class="topic-body">
            ${formatMarkdownContent(topic.content)}
          </div>
        </section>
      `;

      // Topic specific diagrams
      if (topic.id === 'halium-and-libhybris') {
        html += `
          <div class="diagram-card">
            <div class="diagram-header">
              <span class="diagram-title">The libhybris Translation Bridge</span>
              <span class="module-tag">Dynamic Linker Emulation</span>
            </div>
            <div class="diagram-container">
              <img src="assets/diagrams/libhybris-bridge.svg" alt="libhybris Linker Wrapper Diagram" loading="lazy" />
            </div>
            <p class="diagram-caption">How GNU glibc processes dynamically link to Android Bionic driver blobs without ABI collisions</p>
          </div>
        `;
      } else if (topic.id === 'apparmor-and-sandboxing') {
        html += `
          <div class="diagram-card">
            <div class="diagram-header">
              <span class="diagram-title">Click App Confinement &amp; Sandbox Architecture</span>
              <span class="module-tag">AppArmor MAC</span>
            </div>
            <div class="diagram-container">
              <img src="assets/diagrams/click-sandbox.svg" alt="Click App Confinement Sandbox Diagram" loading="lazy" />
            </div>
            <p class="diagram-caption">AppArmor boundary isolating user apps, storage pools, and Content Hub broker</p>
          </div>
        `;
      } else if (topic.id === 'convergence-layouts') {
        html += `
          <div class="diagram-card">
            <div class="diagram-header">
              <span class="diagram-title">Form Factor Convergence via AdaptivePageLayout</span>
              <span class="module-tag">Phone &bull; Tablet &bull; Desktop</span>
            </div>
            <div class="diagram-container">
              <img src="assets/diagrams/convergence.svg" alt="Convergence Adaptive Layout Diagram" loading="lazy" />
            </div>
            <p class="diagram-caption">One QML application reflowing dynamically across mobile, dual-pane tablet, and floating desktop modes</p>
          </div>
        `;
      }
    });

    // Module Quizzes
    const moduleQuizzes = CURRICULUM.quizzes.filter(q => q.moduleId === mod.id);
    if (moduleQuizzes.length > 0) {
      html += `
        <section class="quiz-section">
          <div class="quiz-header">
            <div>
              <span class="quiz-badge">Student Assessment</span>
              <h2 class="topic-heading" style="margin-top: 0.5rem; border: none; padding: 0;">Knowledge Verification Check</h2>
            </div>
          </div>
      `;

      moduleQuizzes.forEach((quiz, qIdx) => {
        html += `
          <div class="quiz-card" id="quiz-${quiz.id}">
            <p class="quiz-question">${qIdx + 1}. ${quiz.question}</p>
            <div class="quiz-options">
              ${quiz.options.map((opt, oIdx) => `
                <label class="quiz-option-label">
                  <input type="radio" name="question_${quiz.id}" value="${oIdx}" data-quiz-id="${quiz.id}" data-correct="${quiz.correctAnswer}">
                  ${opt}
                </label>
              `).join('')}
            </div>
            <div class="quiz-feedback" id="feedback-${quiz.id}"></div>
          </div>
        `;
      });

      html += `</section>`;
    }

    // Navigation Buttons (Prev / Next)
    const prevMod = idx > 0 ? CURRICULUM.modules[idx - 1] : null;
    const nextMod = idx < CURRICULUM.modules.length - 1 ? CURRICULUM.modules[idx + 1] : null;

    html += `
      <div style="display: flex; justify-content: space-between; margin-top: 3.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">
        ${prevMod ? `<button class="btn btn-secondary" id="prev-module-btn">&larr; Module ${prevMod.number}: ${prevMod.title}</button>` : `<div></div>`}
        ${nextMod ? `<button class="btn btn-primary" id="next-module-btn">Module ${nextMod.number}: ${nextMod.title} &rarr;</button>` : `<div></div>`}
      </div>
    `;

    contentArea.innerHTML = html;

    // Attach listeners
    attachQuizListeners();
    attachCodeCopyButtons();
    attachNavButtons(prevMod, nextMod);
    buildTableOfContents(mod);
    highlightSidebar(idx, targetTopicId);

    // Jump to topic if specified
    if (targetTopicId) {
      setTimeout(() => {
        const el = document.getElementById(targetTopicId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Format basic markdown safely into HTML
  function formatMarkdownContent(raw) {
    if (!raw) return '';

    // Convert and stash code blocks to avoid regex collisions
    const codeBlocks = [];
    let processed = raw.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
      const language = lang || 'text';
      const escaped = escapeHtml(code.trim());
      const placeholder = '@@@CODEBLOCK_' + codeBlocks.length + '@@@';
      codeBlocks.push(
        '<div class="code-block-wrapper">' +
          '<div class="code-header">' +
            '<span>' + language + '</span>' +
            '<button class="copy-btn" data-code="' + escapeAttribute(code.trim()) + '">Copy Code</button>' +
          '</div>' +
          '<pre><code>' + escaped + '</code></pre>' +
        '</div>'
      );
      return placeholder;
    });

    // Stash inline code
    const inlineCodes = [];
    processed = processed.replace(/`([^`]+)`/g, (match, code) => {
      const placeholder = '@@@INLINECODE_' + inlineCodes.length + '@@@';
      inlineCodes.push('<code>' + escapeHtml(code) + '</code>');
      return placeholder;
    });

    // Markdown Links: [text](url)
    processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
      const isExternal = url.startsWith('http://') || url.startsWith('https://');
      const attrs = isExternal ? ' target="_blank" rel="noopener noreferrer" class="doc-link external-link"' : ' class="doc-link"';
      return '<a href="' + url + '"' + attrs + '>' + text + '</a>';
    });

    // Headers
    processed = processed.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    processed = processed.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    processed = processed.replace(/^## (.*$)/gim, '<h2>$1</h2>');

    // Bold & italic
    processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Markdown Tables
    processed = processed.replace(/((?:^\|[^\n]+\|\r?\n)+)/gm, (tableText) => {
      const lines = tableText.trim().split('\n').map(l => l.trim()).filter(Boolean);
      if (lines.length < 2) return tableText;
      const headerLine = lines[0];
      const isDivider = /^\|[\s-:]+(?:\|[\s-:]+)+\|$/.test(lines[1]);
      const bodyLines = isDivider ? lines.slice(2) : lines.slice(1);
      
      const parseRow = (row, tag) => {
        const cells = row.split('|').slice(1, -1).map(c => c.trim());
        return '<tr>' + cells.map(c => '<' + tag + '>' + c + '</' + tag + '>').join('') + '</tr>';
      };

      let tableHtml = '<div class="table-responsive"><table class="data-table">';
      tableHtml += '<thead>' + parseRow(headerLine, 'th') + '</thead>';
      if (bodyLines.length > 0) {
        tableHtml += '<tbody>' + bodyLines.map(r => parseRow(r, 'td')).join('') + '</tbody>';
      }
      tableHtml += '</table></div>';
      return tableHtml;
    });

    // Blockquotes & Callout Alerts: > [!NOTE] or > quote
    processed = processed.replace(/(?:^>[^\n]*(?:\n>[^\n]*)*)/gm, (quoteText) => {
      const cleanLines = quoteText.split('\n').map(l => l.replace(/^>\s?/, '').trim());
      const first = cleanLines[0];
      let alertType = null;
      let title = '';
      if (first.startsWith('[!NOTE]')) { alertType = 'note'; title = 'Note'; cleanLines[0] = cleanLines[0].replace('[!NOTE]', '').trim(); }
      else if (first.startsWith('[!TIP]')) { alertType = 'tip'; title = 'Tip'; cleanLines[0] = cleanLines[0].replace('[!TIP]', '').trim(); }
      else if (first.startsWith('[!IMPORTANT]')) { alertType = 'important'; title = 'Important'; cleanLines[0] = cleanLines[0].replace('[!IMPORTANT]', '').trim(); }
      else if (first.startsWith('[!WARNING]')) { alertType = 'warning'; title = 'Warning'; cleanLines[0] = cleanLines[0].replace('[!WARNING]', '').trim(); }
      
      const content = cleanLines.filter(Boolean).join(' ');
      if (alertType) {
        return '<div class="callout-box callout-' + alertType + '"><div class="callout-title">' + title + '</div><p>' + content + '</p></div>';
      }
      return '<blockquote><p>' + cleanLines.join(' ') + '</p></blockquote>';
    });

    // Unordered lists
    processed = processed.replace(/^[\*\-] (.*$)/gim, '<li>$1</li>');
    processed = processed.replace(/((?:<li>.*?<\/li>\s*)+)/gim, '<ul>$1</ul>');

    // Ordered lists
    processed = processed.replace(/^[0-9]+\. (.*$)/gim, '<oli>$1</oli>');
    processed = processed.replace(/((?:<oli>.*?<\/oli>\s*)+)/gim, '<ol>$1</ol>');
    processed = processed.replace(/<\/?oli>/gim, (tag) => tag.includes('/') ? '</li>' : '<li>');

    // Paragraphs
    const blocks = processed.split(/\n\s*\n/).map(block => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('<div') || trimmed.startsWith('<h') || trimmed.startsWith('<ul') || 
          trimmed.startsWith('<ol') || trimmed.startsWith('<table') || trimmed.startsWith('<blockquote') || 
          trimmed.startsWith('<section') || trimmed.startsWith('@@@CODEBLOCK')) {
        return trimmed;
      }
      return '<p>' + trimmed + '</p>';
    }).filter(Boolean).join('\n\n');

    // Restore stashed placeholders
    let finalHtml = blocks.replace(/@@@INLINECODE_(\d+)@@@/g, (_, idx) => inlineCodes[idx]);
    finalHtml = finalHtml.replace(/@@@CODEBLOCK_(\d+)@@@/g, (_, idx) => codeBlocks[idx]);

    return finalHtml;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function escapeAttribute(str) {
    return str
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Quiz event handling
  function attachQuizListeners() {
    document.querySelectorAll('.quiz-option-label input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        const target = e.target;
        const quizId = target.dataset.quizId;
        const selectedValue = parseInt(target.value, 10);
        const correctValue = parseInt(target.dataset.correct, 10);

        const quizData = CURRICULUM.quizzes.find(q => q.id === quizId);
        const feedbackEl = document.getElementById(`feedback-${quizId}`);
        if (!feedbackEl || !quizData) return;

        if (selectedValue === correctValue) {
          feedbackEl.className = 'quiz-feedback correct';
          feedbackEl.innerHTML = `
            <div class="quiz-feedback-title">Correct</div>
            <p>${quizData.explanation}</p>
          `;
        } else {
          feedbackEl.className = 'quiz-feedback incorrect';
          feedbackEl.innerHTML = `
            <div class="quiz-feedback-title">Incorrect</div>
            <p>${quizData.explanation}</p>
          `;
        }
      });
    });
  }

  // Code Copy Buttons
  function attachCodeCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const codeText = btn.getAttribute('data-code');
        if (codeText) {
          navigator.clipboard.writeText(codeText).then(() => {
            const original = btn.textContent;
            btn.textContent = 'Copied';
            setTimeout(() => {
              btn.textContent = original;
            }, 1800);
          }).catch(() => {
            btn.textContent = 'Failed';
          });
        }
      });
    });
  }

  // Prev / Next Navigation
  function attachNavButtons(prevMod, nextMod) {
    const prevBtn = document.getElementById('prev-module-btn');
    const nextBtn = document.getElementById('next-module-btn');

    if (prevBtn && prevMod) {
      prevBtn.addEventListener('click', () => {
        navigateToModule(currentModuleIndex - 1);
      });
    }

    if (nextBtn && nextMod) {
      nextBtn.addEventListener('click', () => {
        navigateToModule(currentModuleIndex + 1);
      });
    }
  }

  // Table of Contents
  function buildTableOfContents(mod) {
    const tocList = document.getElementById('toc-list');
    if (!tocList) return;

    tocList.innerHTML = '';
    mod.topics.forEach(topic => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className = 'toc-link';
      a.href = `#${topic.id}`;
      a.textContent = topic.title;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const el = document.getElementById(topic.id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', `#${topic.id}`);
      });
      li.appendChild(a);
      tocList.appendChild(li);
    });
  }

  function highlightSidebar(modIdx, topicId) {
    document.querySelectorAll('.nav-module-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === modIdx);
    });

    document.querySelectorAll('.nav-topic-link').forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', topicId && href === `#${topicId}`);
    });
  }

  function navigateToModule(idx, topicId) {
    renderModule(idx, topicId);
    const mod = CURRICULUM.modules[idx];
    if (topicId) {
      history.pushState(null, '', `#${topicId}`);
    } else if (mod) {
      history.pushState(null, '', `#${mod.id}`);
    }
  }

  // Global search implementation
  function setupSearch() {
    const searchInput = document.getElementById('global-search-input');
    const searchModal = document.getElementById('search-modal');
    const modalInput = document.getElementById('modal-search-input');
    const resultsContainer = document.getElementById('search-results');

    if (!searchInput || !searchModal || !modalInput || !resultsContainer) return;

    function openModal() {
      searchModal.classList.add('active');
      modalInput.value = searchInput.value;
      modalInput.focus();
      runSearch(modalInput.value);
    }

    function closeModal() {
      searchModal.classList.remove('active');
    }

    searchInput.addEventListener('focus', openModal);

    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchModal.classList.contains('active')) {
        closeModal();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openModal();
      }
    });

    modalInput.addEventListener('input', (e) => {
      runSearch(e.target.value);
    });

    function runSearch(query) {
      const q = query.trim().toLowerCase();
      if (!q) {
        resultsContainer.innerHTML = '<li style="padding: 1rem; color: var(--text-muted);">Type to search across all topics, technologies, and labs...</li>';
        return;
      }

      const results = [];

      CURRICULUM.modules.forEach((mod, modIdx) => {
        mod.topics.forEach(topic => {
          const titleMatch = topic.title.toLowerCase().includes(q);
          const contentMatch = topic.content.toLowerCase().includes(q);

          if (titleMatch || contentMatch) {
            let snippet = '';
            const idx = topic.content.toLowerCase().indexOf(q);
            if (idx !== -1) {
              const start = Math.max(0, idx - 40);
              const end = Math.min(topic.content.length, idx + 80);
              snippet = '...' + topic.content.substring(start, end).replace(/\n/g, ' ') + '...';
            } else {
              snippet = topic.content.substring(0, 100) + '...';
            }

            results.push({
              moduleIndex: modIdx,
              moduleTitle: mod.title,
              topicId: topic.id,
              topicTitle: topic.title,
              snippet: snippet
            });
          }
        });
      });

      if (results.length === 0) {
        resultsContainer.innerHTML = '<li style="padding: 1rem; color: var(--text-muted);">No matching topics found.</li>';
        return;
      }

      resultsContainer.innerHTML = results.map(res => `
        <li class="search-result-item" data-module="${res.moduleIndex}" data-topic="${res.topicId}">
          <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted);">${res.moduleTitle}</div>
          <div class="search-result-title">${res.topicTitle}</div>
          <div class="search-result-snippet">${escapeHtml(res.snippet)}</div>
        </li>
      `).join('');

      resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          const mIdx = parseInt(item.dataset.module, 10);
          const tId = item.dataset.topic;
          closeModal();
          navigateToModule(mIdx, tId);
        });
      });
    }
  }

  // Mobile menu setup
  function setupMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('app-sidebar');

    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
      });
    }
  }

  function closeMobileSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    if (sidebar && sidebar.classList.contains('mobile-open')) {
      sidebar.classList.remove('mobile-open');
    }
  }

  // Reading progress indicator
  function setupProgressBar() {
    window.addEventListener('scroll', () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTotal > 0 ? (window.scrollY / scrollTotal) * 100 : 0;
      const bar = document.getElementById('progress-bar');
      if (bar) {
        bar.style.width = `${progress}%`;
      }
    });
  }

  // Handle URL hash changes
  function handleHash() {
    const hash = window.location.hash.replace('#', '');
    if (!hash) {
      renderModule(0);
      return;
    }

    let foundModIdx = -1;
    let foundTopicId = null;

    CURRICULUM.modules.forEach((mod, mIdx) => {
      if (mod.id === hash) {
        foundModIdx = mIdx;
      } else {
        mod.topics.forEach(t => {
          if (t.id === hash) {
            foundModIdx = mIdx;
            foundTopicId = t.id;
          }
        });
      }
    });

    if (foundModIdx !== -1) {
      renderModule(foundModIdx, foundTopicId);
    } else {
      renderModule(0);
    }
  }

  // Print Handout Action
  function setupPrintHandler() {
    const printBtn = document.getElementById('print-lecture-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  // App initialization
  window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    buildSidebar();
    setupSearch();
    setupMobileMenu();
    setupProgressBar();
    setupPrintHandler();
    handleHash();

    window.addEventListener('hashchange', handleHash);
  });

})();
