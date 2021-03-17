document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elems);
});

// scripts view
const header = (name) => `
     <nav>
        <div class="container nav-wrapper">
          <a href="/" class="brand-logo">AviaTickets</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><a class="routes" data-href="/" href="/">Главная</a></li>
            <li><a class="routes" data-href="/ticket" href="/ticket">Билеты</a></li>
          </ul>
        </div>
      </nav>`;

export default header;
