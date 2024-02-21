let mainbtn = document.querySelector('.fa-bars')
let btnclose = document.querySelector('.fa-times')
let nav = document.querySelector('nav')




mainbtn.addEventListener('click', ()=>{
    nav.classList.add('shownav')
    mainbtn.classList.remove('fa-bars')
    btnclose.classList.add('showclose')
})
btnclose.addEventListener('click',()=>{
   nav.classList.remove('shownav')
   btnclose.classList.remove('showclose')
   mainbtn.classList.add('fa-bars')
})
