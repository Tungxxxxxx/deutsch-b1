// ============================================================
// 🏠 APP MODULE - Shared navbar, user display, logout, dark mode
// ============================================================

// Apply dark mode immediately (before DOM renders) to prevent flash
(function() {
  if (localStorage.getItem('deutsch_dark_mode') === 'true') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

const App = {
  // Navigation items
  navItems: [
    { href: 'today.html', icon: 'fa-play', label: 'Hôm nay' },
    { href: 'nicos-weg.html', icon: 'fa-film', label: 'Nicos Weg' },
    { href: 'vocab-bank.html', icon: 'fa-database', label: 'Kho từ vựng' },
    { href: 'voice-logs.html', icon: 'fa-microphone', label: 'Nhật ký nói' },
    { href: 'vocabulary.html', icon: 'fa-rotate', label: 'Ôn từ' },
    { href: 'grammar.html', icon: 'fa-spell-check', label: 'Ngữ pháp' },
    { href: 'listening.html', icon: 'fa-headphones', label: 'Nghe' },
    { href: 'reading.html', icon: 'fa-book-open', label: 'Đọc' },
    { href: 'practice.html', icon: 'fa-dumbbell', label: 'Quiz' },
    { href: 'alphabet.html', icon: 'fa-language', label: 'Phát âm' },
    { href: 'roadmap.html', icon: 'fa-route', label: 'Lộ trình' },
    { href: 'dashboard.html', icon: 'fa-chart-line', label: 'Tiến độ' },
    { href: 'settings.html', icon: 'fa-gear', label: 'Cấu hình' }
  ],

  // Bottom tab items (mobile - show only 5 most used)
  bottomTabs: [
    { href: 'today.html', icon: 'fa-play', label: 'Hôm nay' },
    { href: 'nicos-weg.html', icon: 'fa-film', label: 'DW' },
    { href: 'vocab-bank.html', icon: 'fa-database', label: 'Từ vựng' },
    { href: 'voice-logs.html', icon: 'fa-microphone', label: 'Ghi âm' },
    { href: 'dashboard.html', icon: 'fa-chart-line', label: 'Tiến độ' }
  ],

  // Render navbar into #navbar element
  renderNavbar: function() {
    var container = document.getElementById('navbar');
    if (!container) return;

    var currentPage = window.location.pathname.split('/').pop();
    var user = auth.currentUser;
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    var html = '<nav class="navbar"><div class="navbar-inner">';
    // Logo
    html += '<a href="today.html" class="navbar-logo">';
    html += '<div class="flag"><span class="bk"></span><span class="rd"></span><span class="gd"></span></div>';
    html += 'Deutsch B1</a>';

    // Hamburger
    html += '<button class="hamburger" onclick="App.toggleMenu()" aria-label="Menu"><i class="fa-solid fa-bars"></i></button>';

    // Nav links
    html += '<ul class="navbar-nav" id="nav-menu">';
    for (var i = 0; i < this.navItems.length; i++) {
      var item = this.navItems[i];
      var active = currentPage === item.href ? ' active' : '';
      html += '<li><a href="' + item.href + '" class="' + active + '"><i class="fa-solid ' + item.icon + '"></i> ' + item.label + '</a></li>';
    }
    html += '</ul>';

    // Dark mode toggle + User info
    html += '<div class="user-badge">';
    html += '<button class="dark-toggle" onclick="App.toggleDark()" title="Chế độ tối">';
    html += '<i class="fa-solid ' + (isDark ? 'fa-sun' : 'fa-moon') + '"></i></button>';
    if (user) {
      var name = user.displayName || user.email.split('@')[0];
      html += '<span class="user-name">' + name + '</span>';
      html += '<button class="btn-logout" onclick="Auth.logout()" title="Đăng xuất"><i class="fa-solid fa-right-from-bracket"></i></button>';
    }
    html += '</div>';

    html += '</div></nav>';

    // Bottom tab bar (mobile)
    html += '<nav class="bottom-tabs" id="bottom-tabs">';
    for (var j = 0; j < this.bottomTabs.length; j++) {
      var tab = this.bottomTabs[j];
      var tabActive = currentPage === tab.href ? ' active' : '';
      html += '<a href="' + tab.href + '" class="bottom-tab' + tabActive + '">';
      html += '<i class="fa-solid ' + tab.icon + '"></i>';
      html += '<span>' + tab.label + '</span></a>';
    }
    html += '</nav>';

    container.innerHTML = html;
  },

  toggleMenu: function() {
    var menu = document.getElementById('nav-menu');
    if (menu) menu.classList.toggle('show');
  },

  // Dark mode toggle
  toggleDark: function() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('deutsch_dark_mode', 'false');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('deutsch_dark_mode', 'true');
    }
    // Re-render navbar to update icon
    this.renderNavbar();
  },

  // Show toast message
  showToast: function(msg, duration) {
    var toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function() { toast.classList.remove('show'); }, duration || 2500);
  },

  // Initialize app (call on every page)
  init: function() {
    // Wait for auth state
    auth.onAuthStateChanged(function(user) {
      if (user) {
        App.renderNavbar();
        // Load progress
        Progress.load().then(function() {
          // Trigger page-specific init if defined
          if (typeof pageInit === 'function') pageInit();
        });
      }
    });
  }
};

// Auto-init when DOM ready
document.addEventListener('DOMContentLoaded', function() {
  App.init();
});
