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
    favContainer.classList.remove('xl:hidden')

    setTimeout(()=> {
        favCard.classList.remove('translate-y-[800px]')
        favContainer.classList.remove('opacity-0')
        favContainer.classList.remove('md:opacity-0')
        favContainer.classList.remove('xl:opacity-0')
    }, 0)
    console.log('can')
}

function closeFavorite(){
    favCard.classList.add('translate-y-[800px]')
    favContainer.classList.add('opacity-0')
    
    setTimeout(()=> {
        favContainer.classList.add('hidden')
    }, 300)
}
// Favorite



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