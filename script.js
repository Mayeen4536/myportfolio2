const links = document.querySelectorAll('.nav-link');

links.forEach((item)=>{
    console.log(item);
    item.addEventListener('click',()=>{
        let el = document.getElementById(item.getAttribute('data-link'));
        console.log(el);
        el.scrollIntoView({behavior:"smooth", block:"start"});
    })
})