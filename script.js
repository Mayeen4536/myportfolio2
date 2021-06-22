const links = document.querySelectorAll('.nav-link');

links.forEach((item)=>{
    console.log(item);
    item.addEventListener('click',()=>{
        let el = document.getElementById(item.getAttribute('data-link'));
        console.log(el);
        el.scrollIntoView({behavior:"smooth", block:"start"});
        
        gsap.from(el,{opacity: -1, duration: 2, x:-100})
    })
})

links.forEach((item)=>{
    gsap.from()
})