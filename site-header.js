// site-header.js
class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="site-header">
      <div class="header-content">
        <div class="logo">
          <img src="images/mamasboy.jpeg" alt="Barbershop Logo" />
        </div>
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
            <a href="index.html#about" class="nav-link">Contact</a>
          </li>
          <li><a href="contact.html" class="nav-link">Book Now</a></li>
        </ul>
      </div>

      <!-- Navigation Bar -->
      <nav class="desktop-navigation navbar nav-links">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact" class="book-now">Book Now</a></li>
        </ul>
      </nav>
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