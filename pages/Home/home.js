// Header
const sidebar = document.querySelector('.sidebar')

function showSidebar(){
    sidebar.classList.remove('-translate-x-[250px]')
}

function closeSidebar(){
    sidebar.classList.add('-translate-x-[250px]')
}
// Header

const loginContainer = document.querySelector('.login-container')
const loginCard = document.querySelector('.login-card')



// Favorite > Login
function showFavorite(){
    loginContainer.classList.replace('hidden', 'flex')
    // loginContainer.classList.remove('md:hidden')
    // loginContainer.classList.add('md:flex')
    // loginContainer.classList.remove('xl:hidden')

    setTimeout(()=> {
        loginCard.classList.remove('translate-y-[800px]')
        loginContainer.classList.remove('opacity-0')
        loginContainer.classList.remove('md:opacity-0')
        loginContainer.classList.remove('xl:opacity-0')
    }, 0)
}

function closeFavorite(){
    loginCard.classList.add('translate-y-[800px]')
    loginContainer.classList.add('opacity-0')
    loginContainer.classList.add('md:opacity-0')
    loginContainer.classList.add('xl:opacity-0')
    
    setTimeout(()=> {
    loginContainer.classList.replace('flex', 'hidden')
    // loginContainer.classList.add('md:hidden')
    loginContainer.classList.remove('md:flex')
    // loginContainer.classList.add('xl:hidden')
    }, 300)
}
// Favorite > Login




// PROFILE
const profileContainer = document.querySelector('.profile-container');
const profileCard = document.querySelector('.profile-card');
const profileIcon = document.querySelector('.profile-icon');
const desktopProfileHover = document.querySelector('.desktop-profile')

profileIcon.addEventListener('mouseover', function(){
    desktopProfileHover.classList.remove('opacity-0')
    desktopProfileHover.classList.remove('-translate-y-[500px]')
})
desktopProfileHover.addEventListener('mouseleave', function(){
    desktopProfileHover.classList.add('opacity-0')
    desktopProfileHover.classList.add('-translate-y-[500px]')
})
profileIcon.addEventListener('mouseleave', function(){
    desktopProfileHover.classList.add('opacity-0')
    desktopProfileHover.classList.add('-translate-y-[500px]')
})


function showProfile(){
    profileContainer.classList.replace('hidden', 'flex')
    setTimeout(()=> {
        profileContainer.classList.remove('opacity-0')
        profileCard.classList.remove('translate-x-[400px]')
    }, 0)
}

function closeProfile(){
    setTimeout(()=> {
        profileContainer.classList.replace('flex', 'hidden')
    }, 300)
    profileContainer.classList.add('opacity-0')
    profileCard.classList.add('translate-x-[400px]')
}

// Profile > Login
function showLogin(){
    loginContainer.classList.replace('hidden', 'flex')
    setTimeout(()=> {
        profileContainer.classList.replace('flex', 'hidden')
    }, 300)
    profileContainer.classList.add('opacity-0')
    profileCard.classList.add('translate-x-[400px]')    

    setTimeout(()=> {
        loginCard.classList.remove('translate-y-[800px]')
        loginContainer.classList.remove('opacity-0')
        loginContainer.classList.remove('md:opacity-0')
        loginContainer.classList.remove('xl:opacity-0')
    }, 0)
}
// Profile > Login

// PROFILE



// Hero Section
const utilityList = document.querySelectorAll('.utility')
const utilityDesc = document.querySelectorAll('.utility-desc')

utilityList[0].addEventListener('click', () => {
    utilityDesc[0].classList.toggle('hidden')
    utilityDesc[1].classList.add('hidden')
    utilityDesc[2].classList.add('hidden')
})

utilityList[1].addEventListener('click', () => {
    utilityDesc[0].classList.add('hidden')
    utilityDesc[1].classList.toggle('hidden')
    utilityDesc[2].classList.add('hidden')
}
)
utilityList[2].addEventListener('click', () => {
    utilityDesc[0].classList.add('hidden')
    utilityDesc[1].classList.add('hidden')
    utilityDesc[2].classList.toggle('hidden')
})

// Hero Section

// HOW SECTION
const btnHow = document.querySelectorAll('.slide-btn-how')
const howCard = document.querySelector('.how-card')

btnHow[0].addEventListener('click', function(){
    howCard.classList.remove('-translate-x-[66%]')
    howCard.classList.remove('-translate-x-[33%]')
    howCard.classList.add('-translate-x-[0%]')

    btnHow[0].classList.add('bg-secondary')
    btnHow[1].classList.remove('bg-secondary')
    btnHow[2].classList.remove('bg-secondary')
})
btnHow[1].addEventListener('click', function(){
    howCard.classList.remove('-translate-x-[0%]')
    howCard.classList.remove('-translate-x-[66%]')
    howCard.classList.add('-translate-x-[33%]')

    btnHow[0].classList.remove('bg-secondary')
    btnHow[1].classList.add('bg-secondary')
    btnHow[2].classList.remove('bg-secondary')
})
btnHow[2].addEventListener('click', function(){
    howCard.classList.remove('-translate-x-[33%]')
    howCard.classList.remove('-translate-x-[0%]')
    howCard.classList.add('-translate-x-[66%]')

    btnHow[0].classList.remove('bg-secondary')
    btnHow[1].classList.remove('bg-secondary')
    btnHow[2].classList.add('bg-secondary')
})

const carsellVideo = document.querySelector('.carsell-video')
const playBtn = document.querySelector('.play-btn')

window.addEventListener('scroll', function(){
    if(this.window.scrollY > 1000){
        // carsellVideo.setAttribute('autoplay', '')
        playBtn.classList.replace('scale-0', 'scale-100')
    }
})
// HOW SECTION


// CAR AUDIT SECTION
const auditBtn = document.querySelectorAll('.audit-btn')
const auditSlider = document.querySelector('.audit-slider')

auditBtn[0].addEventListener('click', function(){
    auditSlider.classList.remove('-translate-x-[66%]')
    auditSlider.classList.remove('-translate-x-[33%]')
    auditSlider.classList.add('-translate-x-[0%]')

    auditBtn[0].classList.add('bg-secondary')
    auditBtn[1].classList.remove('bg-secondary')
    auditBtn[2].classList.remove('bg-secondary')
})
auditBtn[1].addEventListener('click', function(){
    auditSlider.classList.remove('-translate-x-[0%]')
    auditSlider.classList.remove('-translate-x-[66%]')
    auditSlider.classList.add('-translate-x-[33%]')

    auditBtn[0].classList.remove('bg-secondary')
    auditBtn[1].classList.add('bg-secondary')
    auditBtn[2].classList.remove('bg-secondary')
})
auditBtn[2].addEventListener('click', function(){
    auditSlider.classList.remove('-translate-x-[33%]')
    auditSlider.classList.remove('-translate-x-[0%]')
    auditSlider.classList.add('-translate-x-[66%]')

    auditBtn[0].classList.remove('bg-secondary')
    auditBtn[1].classList.remove('bg-secondary')
    auditBtn[2].classList.add('bg-secondary')
})
// CAR AUDIT SECTION 

