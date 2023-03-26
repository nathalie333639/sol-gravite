
// *** DOME SELECTION ***
const menuBtns = document.querySelector('#menuBtn')
const theme = document.querySelector('.currentMode')
const slides = document.querySelectorAll('.slide')
const stats = document.querySelectorAll('.stat')
const accTitles = document.querySelectorAll('.accordion-title')


window.addEventListener('DOMContentLoaded', main)

// *** FUNCTIONS ***
function main() {
  // console.log('everything is ready')
  // *** EVERYTHING START FROM HERE ***
  // 1. show the sidenav
  menuBtns.addEventListener('click', () => {
    // console.log('trigger the event')
    
    const sidenav = document.querySelector('.sidenav')
    sidenav.classList.toggle('showSidenav')

    // document.querySelector('.sidenav').classList.toggle('showSidenav')

  })

  // 2. change the theme
  theme.addEventListener('click', () => {
    // console.log('try to change to theme')
    document.documentElement.classList.toggle('light-theme')
    if (theme.firstElementChild.name === "moon") {
      theme.firstElementChild.name = "sunny"
    } else {
      theme.firstElementChild.name = "moon"
    }
    
  })

  // 3. slideshow
  slideshow()

  // 4. Accrodion
  accTitles.forEach((acc) => {
    acc.addEventListener('click', () => {
      // console.log(acc.nextElementSibling)
      acc.nextElementSibling.classList.toggle('show-accordion-body')
      // const accBody = acc.nextElementSibling
      // accBody.classList.toggle('show-accordion-body')
    })
  })

  // 5. Statistics
  stats.forEach((stat) => {
    updateStat(stat)
  })

}


function updateStat(stat) {
  // console.log(stat.dataset.stat)
  const value = parseInt(stat.dataset.stat)
  const increment = Math.ceil(value / 100)

  let counter = 0

  const initState = setInterval(() => {
    counter = counter + increment

    if (counter > value) {
      stat.textContent = `${value}+`
      clearInterval(initState)
      return
    }

    stat.textContent = `${counter}+`
  }, 1)

}

function slideshow() {
  // 1. hide all of the slide
  slides.forEach((slide) => {
    slide.style.display = 'none'
  })

  // for (let slide of slides) {
  //   slide.style.display = 'none'
  // }

  // setTimeout( alert('next slide'), 2000)
  let index = 0;
  setInterval(() => {

    if (index >= slides.length) {
      index = 0
      slides.forEach((slide) => {
        slide.style.display = 'none'
      })
    }

    slides[index].style.display = 'block'
    index++

  }, 2000)
  
}