

const hamburgerButton = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');

hamburgerButton.addEventListener('click',openHamburger);

function openHamburger(){

    if(header.classList.contains('open')){
        header.classList.remove('open')

        
    } else {
        header.classList.add('open')
    }
    

} 
