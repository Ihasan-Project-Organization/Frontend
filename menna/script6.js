document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const scrim = document.getElementById('scrim');
  const filterTabs = document.querySelectorAll('.tab-btn');
  const orderCards = document.querySelectorAll('.order-card');
  const declineModal = document.getElementById('declineModal');
  const backModalBtn = document.getElementById('backModalBtn');
  const confirmDeclineBtn = document.getElementById('confirmDeclineBtn');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');

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

  // Modal Open & Close Logic
  function openModal() {
    if (declineModal) {
      declineModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (declineModal) {
      declineModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (backModalBtn) {
    backModalBtn.addEventListener('click', closeModal);
  }

  if (declineModal) {
    declineModal.addEventListener('click', (e) => {
      if (e.target === declineModal) {
        closeModal();
      }
    });
  }

  if (confirmDeclineBtn) {
    confirmDeclineBtn.addEventListener('click', () => {
      alert('تم تأكيد الاعتذار عن الطلب وتخصيم النقاط بنجاح.');
      closeModal();
    });
  }

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

  // Logout Button
  const logoutBtn = document.querySelector('.logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      alert('تم تسجيل الخروج بنجاح');
    });
  }
});
