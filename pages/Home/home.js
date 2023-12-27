// Header
const sidebar = document.querySelector('.sidebar')

function showSidebar(){
    sidebar.classList.remove('-translate-x-[250px]')
}

function closeSidebar(){
    sidebar.classList.add('-translate-x-[250px]')
}
// Header

// Favorite
const favContainer = document.querySelector('.favorite-container')
const favCard = document.querySelector('.favorite-card')

function showFavorite(){
    favContainer.classList.remove('hidden')
    favContainer.classList.remove('md:hidden')
    favContainer.classList.add('md:flex')
    favContainer.classList.remove('xl:hidden')

    setTimeout(()=> {
        favCard.classList.remove('translate-y-[800px]')
        favContainer.classList.remove('opacity-0')
        favContainer.classList.remove('md:opacity-0')
        favContainer.classList.remove('xl:opacity-0')
    }, 0)
}

function closeFavorite(){
    favCard.classList.add('translate-y-[800px]')
    favContainer.classList.add('opacity-0')
    favContainer.classList.add('md:opacity-0')
    favContainer.classList.add('xl:opacity-0')
    
    setTimeout(()=> {
    favContainer.classList.add('hidden')
    favContainer.classList.add('md:hidden')
    favContainer.classList.remove('md:flex')
    favContainer.classList.add('xl:hidden')
    }, 300)
}
// Favorite


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