window.addEventListener('scroll' , function(){
    const nav = document.querySelector('nav');
    const scrollHeight = window.scrollY;

    if(scrollHeight > 50){
        nav.classList.add('bg-black', 'bg-opacity-70');
    } else {
        nav.classList.remove('bg-black', 'bg-opacity-70');
    }
});