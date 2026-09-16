document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const scrim = document.getElementById('scrim');
  const dayPills = document.querySelectorAll('.day-pill');
  const serviceCheckboxes = document.querySelectorAll('.service-checkbox-btn');
  const saveScheduleBtn = document.getElementById('saveScheduleBtn');
  const saveServicesBtn = document.getElementById('saveServicesBtn');
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

  // Toggle Working Days Selection
  dayPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pill.classList.toggle('active');
    });
  });

  // Toggle Service Checkboxes
  serviceCheckboxes.forEach((labelBtn) => {
    labelBtn.addEventListener('click', () => {
      const checkbox = labelBtn.querySelector('input[type="checkbox"]');
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
        labelBtn.classList.toggle('checked', checkbox.checked);
        const checkMark = labelBtn.querySelector('.custom-checkbox');
        if (checkMark) {
          checkMark.textContent = checkbox.checked ? '✓' : '';
        }
      }
    });
  });

  // Save Buttons Alerts
  if (saveScheduleBtn) {
    saveScheduleBtn.addEventListener('click', () => {
      alert('تم حفظ جدول التوفر الأسبوعي بنجاح!');
    });
  }

  if (saveServicesBtn) {
    saveServicesBtn.addEventListener('click', () => {
      alert('تم حفظ إعدادات الخدمات والمنطقة بنجاح!');
    });
  }

  // Bell Button Click
  if (bellBtn) {
    bellBtn.addEventListener('click', () => {
      alert('لا توجد إشعارات جديدة في الإعدادات.');
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
