
let buttons = document.querySelector('.moblink')
let mobile = document.querySelector('.side-bar')
let btn = document.querySelector('.mobile')

buttons.addEventListener('click',()=>{
    if (buttons.classList.contains('open')){
        buttons.classList.remove('open')
        mobile.style.width = 0

    }
    else{
        buttons.classList.add('open')
    mobile.style.width = '65%'
    }
    
})

