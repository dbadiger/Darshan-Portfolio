const sideMenu = document.querySelector('#sidemenu') 
const navBar = document.querySelector("nav")
const navlink = document.querySelector("nav ul")

function OpenMenu (){
    sideMenu.style. transform='translateX(-16rem)'
}

function CloseMenu (){
    sideMenu.style. transform='translateX(16rem)'
}
window.addEventListener('scroll', ()=>{
    if(scrollY>50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'background-blur-lg','shadow-sm','dark:bg-darkTheme', 'dark:shadow-white/20')
        navlink.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', "dark:border-white/50", 'dark:bg-transparent');
    }
    else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'background-blur-lg','shadow-sm','dark:bg-darkTheme', 'dark:shadow-white/20')
        navlink.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50','dark:border',"dark:border-white/50", 'dark:bg-transparent');
    }
})

// -----------------light, dark mode-----------


// document.documentElement.classList.toggle(
//     'dark',
//     localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
//   )

if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add('dark')
}else{
    document.documentElement.classList.remove('dark')
}


function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme='dark'
    }
    else{
        localStorage.theme="light"
    }
}