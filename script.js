const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
function setTheme(theme) {
  root.classList.toggle('light', theme === 'light');
  toggle.textContent = theme === 'light' ? '☾' : '☀';
  toggle.setAttribute('aria-label', theme === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему');
  try { localStorage.setItem('portfolio-theme', theme); } catch (_) {}
}
let storedTheme = null;
try { storedTheme = localStorage.getItem('portfolio-theme'); } catch (_) {}
setTheme(storedTheme === 'light' ? 'light' : 'dark');
toggle.addEventListener('click', () => setTheme(root.classList.contains('light') ? 'dark' : 'light'));
document.getElementById('year').textContent = new Date().getFullYear();
