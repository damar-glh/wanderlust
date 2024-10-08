const nav = document.querySelector('nav');
const btnNav = document.querySelector('.btn-nav');
const navItems = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav-links');


window.addEventListener('scroll', function () {
    const scrollHeight = window.scrollY;
    if (scrollHeight > 50) {
        nav.classList.add('bg-black');
        navItems.classList.add('bg-black');
    } else {
        nav.classList.remove('bg-black');
        navItems.classList.remove('bg-black');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    )
});

btnNav.addEventListener('click', function () {
        if (navItems.classList.contains('hidden')) {
            navItems.classList.remove('hidden');
            navItems.classList.add('absolute', 'top-full', 'left-0', 'w-full', 'text-center', 'p-3', 'text-lg', 'gap-2');
        } else {
            navItems.classList.add('hidden');
            navItems.classList.remove('absolute', 'top-full', 'left-0', 'w-full', 'text-center', 'p-3', 'text-lg', 'gap-2');
        }
    }
);