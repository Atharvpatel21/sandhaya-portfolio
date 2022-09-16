// MANU SHOW
const showmenu = (toggleId, navId) =>{
     const toggle = document.getElementById(toggleId),
     nav = document.getElementById(navId)

     if(toggle && nav){
         toggle.addEventListener('click',()=>{
             nav.classList.toggle('show')
         })
     }
}

showmenu('nav-toggle','nav-menu')

    //   ACTIVE AND remove menu

    const navlink = document.querySelectorAll('.nav__link');

    function linkAction(){
        //   Active link
         navlink.forEach(n => n.classList.remove('active'))
         this.classList.add('active')

        //  Remove menu mobile
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show')
    }

    navlink.forEach(n =>n.addEventListener('click',linkAction))

        //   SCROLL REVEAL ANIMATION //

        const sr = ScrollReveal({
             origion:'top',
             distance: '80px',
             duration: 2000,
             reset: true
        })

        //   SCROLL HOME //
        sr.reveal('.home__title',{})
        sr.reveal('.button',{delay: 200})
        sr.reveal('.home__img',{delay: 400})
        sr.reveal('.home__social.icon',{interval: 200})
        // SCROLL EXPERIANCE  //
        sr.reveal('.experiance__img',{})
        sr.reveal('.experiance__subtitle',{delay: 200})
       
            // SCROLL SKILLS //
            sr.reveal('.skills__subtitle',{})
            sr.reveal('.experiance__text',{delay: 200})
            sr.reveal('.experiance__text',{delay: 200})
        
            // SCROLL PROJECTS //
            sr.reveal('.project__img',{interval: 200})

            // scroll contact //
            sr.reveal('.contact__input',{delay: 200})
            