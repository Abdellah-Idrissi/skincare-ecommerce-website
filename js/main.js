/*----------- OPEN & CLOSE NAVMENU -----------*/
let menuIcon = document.querySelector('.menu_icon')
let navMenu = document.querySelector('.header_nav_mobile')
let closeIcon = document.querySelector('.close_icon')
let overlay = document.querySelector('.overlay')
let mobileNavLinks = document.querySelectorAll('.header_nav_mobile .nav_list li')
menuIcon.addEventListener('click',()=> {
  navMenu.classList.add('show')
  overlay.classList.add('show')
  document.body.classList.add('hideScrollbar')
})
closeIcon.addEventListener('click',()=> {
  navMenu.classList.remove('show')
  overlay.classList.remove('show')
  document.body.classList.remove('hideScrollbar')
})
mobileNavLinks.forEach((mobileNavLink)=> {
  mobileNavLink.addEventListener('click',()=> {
    closeIcon.click()
    window.scrollTo() // If the a tag didnt go to the section add this
  })
})



/*----------- HIDE ON SCROLL DOWN & SHOW ON SCROLLUP -----------*/
let header = document.querySelector(".header");
let lastScroll = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }


  if (lastScroll >= window.scrollY) {
    header.classList.remove("header_hide");
  } else {
    header.classList.add("header_hide");
  }

  lastScroll = window.scrollY;
});



/*----------- COUNTDOWN TIMER -----------*/
setInterval(()=> {
  let countDownDate = new Date("2023-12-06T20:00:00.000Z").getTime()
  let dateNow = new Date()  
  let dateDiff = countDownDate - dateNow

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

  let minutes = Math.floor(((dateDiff % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60))

  let seconds = Math.floor((((dateDiff % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) % (1000 * 60)) / 1000)



  document.querySelector('.hours').innerHTML = hours <= 9 ? `0${hours}` : hours
  document.querySelector('.days').innerHTML = days <= 9 ? `0${days}` : days
  document.querySelector('.minutes').innerHTML = minutes <= 9 ? `0${minutes}` : minutes
  document.querySelector('.seconds').innerHTML = seconds <= 9 ? `0${seconds}` : seconds
},1000)



/*================== SCROLLUP  ==================*/
let scrollUp = document.querySelector('.arrowup')
window.addEventListener('scroll',()=> { 
  scrollY > 400 ? scrollUp.classList.add('show') : scrollUp.classList.remove('show') 
})



/*================== ACTIVE SECTION LINK ON SCROLL  ==================*/
let sections = document.querySelectorAll('.section')
function sectionLinkActive() {
  let headerHeight = matchMedia('(min-width:1200px)').matches ? 175 : 109

  sections.forEach((section)=> {
    let sectionTop = section.offsetTop - headerHeight
    let sectionBottom = sectionTop + section.offsetHeight
    let sectionId = section.id
    let sectionNavLink = document.querySelectorAll(`.nav_list a[href*=${sectionId}]`)

    if(scrollY >= sectionTop && scrollY <= sectionBottom) {
      sectionNavLink[0].parentElement.classList.add('active')
      sectionNavLink[1].parentElement.classList.add('active')
    }

    else {
      sectionNavLink[0].parentElement.classList.remove('active')
      sectionNavLink[1].parentElement.classList.remove('active')
    }

  })
}
window.addEventListener('scroll',sectionLinkActive)



/*================== SCROLLREVEAL  ==================*/
const sr = ScrollReveal({
  distance:'60px',
  duration:2000,
  delay:300,
  reset: true,
})

sr.reveal('.heroSwiper',{distance:'30px'})
sr.reveal('.collections .item , .features_container .item , .blog_container .item',{interval:150 , origin:'top'})
sr.reveal('.bestsellers_container , .under_container',{origin:'top'})
sr.reveal('.discover , .offer_top',{origin:'left'})
sr.reveal('.promotion , .offer_bottom',{origin:'right'})
sr.reveal('.footer_container')

