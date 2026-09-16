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
  const confirmArrivalBtn = document.querySelector('.btn-confirm-arrival');
  if (confirmArrivalBtn) {
    confirmArrivalBtn.addEventListener('click', (e) => {
      const btn = e.currentTarget;
      btn.innerHTML = '<span class="btn-icon">✓</span> تم تأكيد الوصول';
      btn.style.background = '#059669';
    });
  }

  document.querySelectorAll('.complete-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
      const btn = e.currentTarget;
      btn.innerHTML = 'تم الإنهاء بنجاح ✓';
      btn.style.background = '#059669';
    });
  });

  document.querySelectorAll('.btn-decline-pill').forEach((button) => {
    button.addEventListener('click', () => {
      if (confirm('هل أنت تأكد من ترغبتك في الاعتذار عن هذا الطلب؟')) {
        alert('تم تقديم طلب الاعتذار بنجاح');
      }
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
