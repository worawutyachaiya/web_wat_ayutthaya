let HeroImage = document.getElementById('hero_image')
let HeroContent = document.getElementById('hero_content') 
let HeroLogo = document.getElementById('logo')
let HeroContinue = document.getElementById('continue')
let windowSroll

window.addEventListener('scroll', function windowScroll(){
    windowSroll = window.pageYOffset || this.document.documentElement.scrollTop
    HeroImage.style.transform = `translate3d(0,${windowSroll/1}px,0)`
    HeroContent.style.transform = `translate3d(0,${windowSroll/3}px,0)`
    HeroLogo.style.transform = `translate3d(0,${windowSroll/3}px,0)`
    HeroContinue.style.transform = `translate3d(0,${windowSroll/3}px,0)`
})