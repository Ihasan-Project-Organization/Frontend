document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const scrim = document.getElementById('scrim');
  const filterTabs = document.querySelectorAll('.tab-btn');
  const orderCards = document.querySelectorAll('.order-card');

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

      orderCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Interactive Action Buttons
  document.querySelectorAll('.start-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.target.textContent = 'قيد التنفيذ... ✓';
      e.target.style.background = '#7c3aed';
    });
  });

  document.querySelectorAll('.complete-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.target.textContent = 'تم الإنهاء بنجاح ✓';
      e.target.style.background = '#16a34a';
    });
  });

  // Logout Button
  const logoutBtn = document.querySelector('.logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      alert('تم تسجيل الخروج بنجاح');
    });
  }
});
