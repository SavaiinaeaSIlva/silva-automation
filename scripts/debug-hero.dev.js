// DEBUG TOOL — Development helper for hero debugging
// This script was moved out of public/ to avoid being served in production.
// Use only for local development on localhost or file:// views.

(function () {
  try {
    if (!location.hostname.includes('localhost') && location.hostname !== '127.0.0.1' && location.protocol !== 'file:') return;
    if (window.__DEBUG_HERO_RUN) return; window.__DEBUG_HERO_RUN = true;

    const css = `
      .debug-center-line { position: fixed; left: 50%; top: 0; bottom: 0; width: 1px; background: rgba(255,255,255,0.14); z-index: 99999; pointer-events:none; }
      .debug-hero-panel { position: fixed; right: 1rem; top: 1rem; z-index: 99999; background: rgba(0,0,0,0.7); color: #fff; font-size: 13px; padding: 8px 10px; border-radius: 8px; max-width: 260px; }
      .debug-hero-panel b{display:block;margin-bottom:6px}
      .debug-hero-hit { outline: 3px solid #ff3860 !important; }
      .debug-hero-trans { outline: 3px dashed #ffb86b !important; }
    `;

    const style = document.createElement('style'); style.id = 'debug-hero-style'; style.textContent = css; document.head.appendChild(style);

    const guide = document.createElement('div'); guide.className = 'debug-center-line'; document.body.appendChild(guide);

    const panel = document.createElement('div'); panel.className = 'debug-hero-panel'; panel.innerHTML = '<b>Hero Debug</b><div id="debug-hero-list">Running...</div>';
    document.body.appendChild(panel);

    function runCheck() {
      const hero = document.querySelector('#hero');
      if (!hero) { document.getElementById('debug-hero-list').textContent = 'No #hero element'; return; }
      const heroRect = hero.getBoundingClientRect();
      const hits = [];
      // Clear previous outlines
      hero.querySelectorAll('.debug-hero-hit, .debug-hero-trans').forEach(el => { el.classList.remove('debug-hero-hit','debug-hero-trans'); });

      hero.querySelectorAll('*').forEach(el => {
        const r = el.getBoundingClientRect();
        const st = getComputedStyle(el);
        const transforms = st.transform && st.transform !== 'none' ? st.transform : null;
        if (r.left < heroRect.left - 1 || r.right > heroRect.right + 1) {
          el.classList.add('debug-hero-hit');
          hits.push({ selector: selectorFor(el), reason: 'overflow', left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width) });
        } else if (transforms) {
          el.classList.add('debug-hero-trans');
          hits.push({ selector: selectorFor(el), reason: 'transform', transforms });
        }
      });

      const list = document.getElementById('debug-hero-list');
      if (!hits.length) list.textContent = 'No offending children found';
      else list.innerHTML = hits.slice(0,6).map(h => `<div style="margin-bottom:6px"><strong>${h.selector}</strong><div style="opacity:0.8;font-size:12px">${h.reason}${h.transforms ? ` — ${h.transforms}` : ` — ${h.left} → ${h.right} (w${h.width})`}</div></div>`).join('');
      console.table(hits);
    }

    function selectorFor(el) {
      let s = el.tagName.toLowerCase();
      if (el.id) s += `#${el.id}`;
      if (el.className && typeof el.className === 'string') s += `.${el.className.split(' ').join('.')}`;
      return s;
    }

    runCheck();
    window.addEventListener('resize', () => setTimeout(runCheck, 120));
    // Re-run after a few seconds to allow lazy content to settle
    setTimeout(runCheck, 600);
  } catch (err) {
    console.error('debug-hero error', err);
  }
})();