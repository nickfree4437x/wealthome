const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;
      
      if(count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
      
      function updateCount() {
        const current = +counter.innerText;
        if(current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      }
  });
 })

  const scrollBtn = document.getElementById("scrollTopBtn");

  // Show button when user scrolls down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove("hidden");
    } else {
      scrollBtn.classList.add("hidden");
    }
  });

  // Scroll to top when clicked
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
