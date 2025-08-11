function toggleMenu() {
   document.getElementById('nav-Links').classList.toggle('active');
}





      const boxes = document.querySelectorAll('.box');
  
  function checkBoxesDesktop() {
    const triggerBottom = window.innerHeight * 1;
    boxes.forEach((box, index) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.style.transitionDelay = `${index * 0.1}s`;
        box.classList.add('show');
      } else {
        box.classList.remove('show');
        box.style.transitionDelay = '0s';
      }
    });
  }
  
  function checkBoxesMobile() {
    const triggerBottom = window.innerHeight * 0.8;
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add('show');
      } else {
        box.classList.remove('show');
      }
    });
  }
  
  function checkBoxesResponsive() {
    if (window.innerWidth > 768) {
      checkBoxesDesktop();
    } else {
      checkBoxesMobile();
    }
  }
  
  window.addEventListener('scroll', checkBoxesResponsive);
  window.addEventListener('resize', checkBoxesResponsive);
  
  // Initial call
  checkBoxesResponsive();