// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// Jump to Homepage
const headerLogoConatiner = document.querySelector('.header__logo-container')
headerLogoConatiner.addEventListener('click', () => {
  location.href = '/'
});


// Github calender responsiveness

GitHubCalendar(".calendar", "anonymous10062002", { responsive: true });


// Download and open resume in new tab
let resumebtn1=document.getElementById("resume-button-1").addEventListener("click",()=>{
  window.open("https://drive.google.com/file/d/1SryyNJXkrTdZ7mAKAhwc7muA5p4bxLZ4/view?usp=sharing");
})
let resumebtn2=document.getElementById("resume-button-2").addEventListener("click",()=>{
  window.open("https://drive.google.com/file/d/1SryyNJXkrTdZ7mAKAhwc7muA5p4bxLZ4/view?usp=sharing")
})