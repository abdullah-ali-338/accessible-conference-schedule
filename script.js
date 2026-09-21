const tabs = document.querySelectorAll('button[role="tab"]');
const panels = document.querySelectorAll('section[role="tabpanel"]');
const dialog = document.getElementById('session-dialog');
const closeBtn = document.getElementById('close-dialog');
let lastFocusedElement = null;

tabs.forEach(tab => {
  tab.addEventListener('click', () => switchTab(tab));
  tab.addEventListener('keydown', (e) => {
    let target = null;
    if (e.key === 'ArrowRight') {
      target = tab.nextElementSibling || tabs[0];
    } else if (e.key === 'ArrowLeft') {
      target = tab.previousElementSibling || tabs[tabs.length - 1];
    }
    if (target) {
      target.focus();
      switchTab(target);
    }
  });
});

function switchTab(newTab) {
  tabs.forEach(t => {
    t.setAttribute('aria-selected', 'false');
    t.setAttribute('tabindex', '-1');
  });
  panels.forEach(p => p.hidden = true);

  newTab.setAttribute('aria-selected', 'true');
  newTab.setAttribute('tabindex', '0');
  const activePanel = document.getElementById(newTab.getAttribute('aria-controls'));
  activePanel.hidden = false;
}

document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    lastFocusedElement = btn;
    document.getElementById('dialog-title').textContent = btn.dataset.title;
    document.getElementById('dialog-meta').textContent = `${btn.dataset.track} • ${btn.dataset.time}`;
    document.getElementById('dialog-desc').textContent = btn.dataset.desc;
    dialog.showModal();
    closeBtn.focus();
  });
});

closeBtn.addEventListener('click', () => dialog.close());

dialog.addEventListener('close', () => {
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
});
