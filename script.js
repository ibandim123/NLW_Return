window.addEventListener('scroll',onScroll)

function onScroll() {
  
  showNavOnScroll()
  showBackToTop()
 
 
  ActivateMenu(home)
  ActivateMenu(services)
  ActivateMenu(about)


}

function ActivateMenu(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop 
  const sectionHeight = section.offsetHeight

  const sctTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  const sectionBoundaries = sctTopReachOrPassedTargetLine && !sectionEndPassedTargetLine 

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
    
  menuElement.classList.remove("active")
  if (sectionBoundaries) {
    menuElement.classList.add("active")
  } 

  
}

function showNavOnScroll() {
  
  if(scrollY > 0) {
      
      navigation.classList.add('scroll')

    } else {
    
      navigation.classList.remove('scroll')
    
    }
}

function showBackToTop() {
  
    if(scrollY > 400) {
      
      btnbackToTop.classList.add('show')

    } else {
    
      btnbackToTop.classList.remove('show')
    
    }

}

function openMenu() {

  document.body.classList.add("menu-expanded")  
}

function closeMenu() {

  document.body.classList.remove("menu-expanded")  
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img,
#home .stats,
#services,
#services header,
#services .card 
`);

