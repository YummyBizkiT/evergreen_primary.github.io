/*const navSlide = () => 
{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-bar');
  const navLinks = document.querySelectorAll('.nav-bar li');
  
  burger.addEventListener('click', () => 
  {
    // Toggle burger nav menu
    nav.classList.toggle('nav-active');

    // Animate the nav links
    navLinks.forEach((link, index) => 
    {
      if(link.style.animation)
      {
        link.style.animation = ''
      } 
      else
      {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    //Burger animation
    burger.classList.toggle('toggle');

  });  

}

navSlide();*/


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})