document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const scrim = document.getElementById('scrim');
  const filterTabs = document.querySelectorAll('.tab-btn');
  const notificationCards = document.querySelectorAll('.notification-card');
  const bellBtn = document.querySelector('.bell-btn');

  // Mobile Navigation Drawer Toggle
  function toggleMenu() {
    const isOpen = sidebar.classList.toggle('open');
    scrim.classList.toggle('visible', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  }

  if (menuToggle && scrim) {
    menuToggle.addEventListener('click', toggleMenu);
    scrim.addEventListener('click', toggleMenu);
  }

  // Close menu when clicking nav items on mobile
  document.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 900 && sidebar.classList.contains('open')) {
        toggleMenu();
      }
    });
  });

  // Filter Tabs Logic
  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filterValue = tab.getAttribute('data-filter');

      notificationCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Bell Button Click
  if (bellBtn) {
    bellBtn.addEventListener('click', () => {
      alert('تم تحديث قائمة الإشعارات.');
    });
  }

  // Logout Button
  const logoutBtn = document.querySelector('.logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      alert('تم تسجيل الخروج بنجاح');
    });
  }
});
