setTimeout(() => {
     const popup = document.createElement('div');
     popup.style.borderRadius = '4px'
     popup.style.position = 'fixed';
     popup.style.top = '50%';
     popup.style.left = '50%';
     popup.style.transform = 'translate(-50%, -50%)';
     popup.style.padding = '20px';
     popup.style.backgroundColor = 'white';
     popup.style.border = '1px solid black';
     popup.style.zIndex = '1000';
     popup.innerText = 'Por favor, diminua a página';

     document.body.appendChild(popup);

     // Remove o pop-up após 5 segundos
     setTimeout(() => {
          document.body.removeChild(popup);
     }, 5000);
}, 8000);
class MobileNavBar {
     constructor(mobileMenu, navList, navLinks) {
          this.mobileMenu = document.querySelector(mobileMenu);
          this.navList = document.querySelector(navList);
          this.navLinks = document.querySelectorAll(navLinks);
          this.activeClass = 'active';
          this.handleClick = this.handleClick.bind(this);
     }
     animateLinks() {
          this.navLinks.forEach((link, index) => {
               link.style.animation
                    ? (link.style.animation = '')
                    : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
          });
     }
     handleClick() {
          this.navList.classList.toggle(this.activeClass);
          this.mobileMenu.classList.toggle(this.activeClass);
          this.animateLinks();
     }
     addClickEvent() {
          this.mobileMenu.addEventListener('click', this.handleClick);
     }
     init() {
          if (this.mobileMenu) {
               this.addClickEvent();
          }
          return this;
     }
}

const mobileNavBar = new MobileNavBar('.mobile-menu', '.nav-list', '.nav-list li');
mobileNavBar.init();
