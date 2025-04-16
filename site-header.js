// site-header.js
class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header class="site-header">
  <div class="header-content">
    <div class="logo">
    </div>

    <div id="menuToggle" class="mobile-menu">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        <li>
          <a href="index.html" class="nav-link">Home</a>
        </li>
        <li>
          <a class="nav-link">About</a>
        </li>
        <li>
          <a class="nav-link">Work</a>
        </li>
        <li><a class="nav-link book-now">Book Now</a></li>
      </ul>
    </div>

    <nav class="desktop-navigation">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a>About</a></li>
        <li><a>Work</a></li>
        <li><a class="book-now">Book Now</a></li>
      </ul>
    </nav>
  </div>
</header>
    `;
    const menuCheckbox = this.querySelector('#menuToggle input');
    menuCheckbox.addEventListener('change', () => {
      if (menuCheckbox.checked) {
        document.documentElement.style.overflow = 'hidden'; // Disable scrolling
      } else {
        document.documentElement.style.overflow = ''; // Enable scrolling
      }
    });
  }
}

customElements.define('site-header', SiteHeader);