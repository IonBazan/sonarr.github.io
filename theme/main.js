import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import './styles.css';

if (location.hash.toLowerCase() === '#donate') {
  location.replace('/donate');
}

function storedTheme() {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
}

document.querySelector('.theme-toggle')?.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem('theme', theme);
  } catch {}
});

matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!storedTheme()) {
    document.documentElement.dataset.theme = e.matches ? 'dark' : 'light';
  }
});

for (const el of document.querySelectorAll('[data-year]')) {
  el.textContent = new Date().getFullYear();
}

function selectTab(tab) {
  for (const sibling of tab.parentElement.children) {
    const selected = sibling === tab;
    sibling.setAttribute('aria-selected', selected);
    sibling.tabIndex = selected ? 0 : -1;
    document.getElementById(sibling.getAttribute('aria-controls')).hidden = !selected;
  }
}

// Tabs can list old ids in data-aliases so existing links keep working.
function openHash() {
  const id = location.hash.slice(1);
  const panel = document.getElementById(id) ?? document.querySelector(`[data-aliases~="${CSS.escape(id)}"]`);
  if (!panel?.matches('[role=tabpanel]')) {
    return;
  }
  for (let el = panel; el; el = el.parentElement.closest('[role=tabpanel]')) {
    selectTab(document.querySelector(`[aria-controls="${el.id}"]`));
  }
  document.getElementById('download').scrollIntoView();
}

for (const tab of document.querySelectorAll('[role=tab]')) {
  tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;
  tab.addEventListener('click', () => {
    selectTab(tab);
    history.replaceState(null, '', `#${tab.getAttribute('aria-controls')}`);
  });
  tab.addEventListener('keydown', (e) => {
    const next = { ArrowRight: tab.nextElementSibling, ArrowLeft: tab.previousElementSibling }[e.key];
    if (next) {
      next.focus();
      next.click();
    }
  });
}

addEventListener('hashchange', openHash);
openHash();

for (const pre of document.querySelectorAll('pre')) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy';
  button.textContent = 'Copy';
  button.addEventListener('click', async () => {
    await navigator.clipboard.writeText(pre.querySelector('code').textContent);
    button.textContent = 'Copied';
    setTimeout(() => (button.textContent = 'Copy'), 1500);
  });
  pre.append(button);
}
