const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const scrim = document.getElementById('scrim');

function toggleMenu() {
  const isOpen = sidebar.classList.toggle('open');
  scrim.classList.toggle('visible', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
}

menuToggle.addEventListener('click', toggleMenu);
scrim.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((navItem) => navItem.classList.remove('active'));
    item.classList.add('active');
    if (window.innerWidth <= 900 && sidebar.classList.contains('open')) toggleMenu();
  });
});

document.querySelectorAll('.accept-btn').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.currentTarget.textContent = 'تم قبول الطلب ✓';
    event.currentTarget.classList.add('accepted');
  });
});

document.querySelector('.logout-btn').addEventListener('click', () => {
  window.alert('تم تسجيل الخروج بنجاح');
});
