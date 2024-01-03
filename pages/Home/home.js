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
    if(this.window.scrollY > 1200){
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

// SERVICES
const servicesSection = document.querySelector('#services')
const upReview = document.querySelector('.up-review')
const downReview = document.querySelector('.down-review')

function showMoreServices(){
    if(servicesSection.classList.contains('h-max')){
        servicesSection.classList.replace('h-max', 'h-[100vh]')
        upReview.classList.replace('block', 'hidden')
        downReview.classList.replace('hidden', 'block')
    } else {
        servicesSection.classList.replace('h-[100vh]', 'h-max')  
        upReview.classList.replace('hidden', 'block')
        downReview.classList.replace('block', 'hidden')
    }
}
// SERVICES


// REVIEW SECTION 
let reviewWrapper = document.querySelector('.review-wrapper')


document.addEventListener('DOMContentLoaded', async function(){
    const reviewData = await getReviewCarData()
    updateReviewCard(reviewData)
})

function getReviewCarData(){
    return fetch('/data/review.json')
    .then(response => response.json())
    .then(res => res)
}

function updateReviewCard(value){
    let wrapper = ""
    // value.forEach(val => {
    //     wrapper += reviewCard(val)
    // });
    for(let i = 0; i < 3; i++){
        let threeReview = value[i]
        reviewWrapper.innerHTML += reviewCard(threeReview)
    }
}

function reviewCard(value){
    return `<div class="w-[100%] h-max rounded-md bg-white overflow-hidden shadow-multiple flex flex-col gap-4 md:w-[480px] xl:w-[550px]">
                <div class="h-44 w-full overflow-hidden relative">
                    <img src="${value.image}" alt="" class="absolute w-full h-full object-cover">
                </div>
                <div class="px-[5%] ">
                    <div class="flex gap-2">
                        <div class="relative w-7 h-7 rounded-full overflow-hidden">
                            <img src="${value.userProfile}" class="absolute w-full"/>
                        </div>
                        <h1 class="font-semibold text-base">${value.name}</h1>
                    </div>
                    <div class="flex gap-1 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-yellow-300">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>                              
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-yellow-300">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>                              
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-yellow-300">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>                              
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-yellow-300">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>                              
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-yellow-300">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>                              
                    </div>
                </div>
                <div class="text-sm px-[5%] h-max overflow-hidden py-1">
                    ${value.desc}
                </div>
                <div class="w-full border-t-2 px-[5%] flex gap-4 py-4">
                    <div class="relative w-10 h-10 overflow-hidden">
                        <img src="${value.logo}" class="absolute w-full h-full object-cover"/>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h1 class="font-semibold">${value.type} ${value.year}</h1>
                        <div class="flex gap-2 items-center text-tertiary group">
                            <p class="text-xs font-medium transition-all duration-300">Similar cars</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 group-hover:w-8 transition-all duration-300">
                                <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>`
}

const reviewSlideBtn = document.querySelectorAll('.review-slide-btn')

reviewSlideBtn[0].addEventListener('click', function(){
    reviewWrapper.classList.remove('-translate-x-[66%]')
    reviewWrapper.classList.remove('-translate-x-[33%]')
    reviewWrapper.classList.add('-translate-x-[0%]')

    reviewSlideBtn[0].classList.add('bg-secondary')
    reviewSlideBtn[1].classList.remove('bg-secondary')
    reviewSlideBtn[2].classList.remove('bg-secondary')
})
reviewSlideBtn[1].addEventListener('click', function(){
    reviewWrapper.classList.remove('-translate-x-[0%]')
    reviewWrapper.classList.remove('-translate-x-[66%]')
    reviewWrapper.classList.add('-translate-x-[33%]')

    reviewSlideBtn[0].classList.remove('bg-secondary')
    reviewSlideBtn[1].classList.add('bg-secondary')
    reviewSlideBtn[2].classList.remove('bg-secondary')
})
reviewSlideBtn[2].addEventListener('click', function(){
    reviewWrapper.classList.remove('-translate-x-[33%]')
    reviewWrapper.classList.remove('-translate-x-[0%]')
    reviewWrapper.classList.add('-translate-x-[66%]')

    reviewSlideBtn[0].classList.remove('bg-secondary')
    reviewSlideBtn[1].classList.remove('bg-secondary')
    reviewSlideBtn[2].classList.add('bg-secondary')
})


// ADS SECTION
const utilityListAds = document.querySelectorAll('.utility-ads')
const utilityDescAds = document.querySelectorAll('.utility-ads-desc')

utilityListAds[0].addEventListener('click', () => {
    utilityDescAds[0].classList.toggle('hidden')
    utilityDescAds[1].classList.add('hidden')
    utilityDescAds[2].classList.add('hidden')
})

utilityListAds[1].addEventListener('click', () => {
    utilityDescAds[0].classList.add('hidden')
    utilityDescAds[1].classList.toggle('hidden')
    utilityDescAds[2].classList.add('hidden')
}
)
utilityListAds[2].addEventListener('click', () => {
    utilityDescAds[0].classList.add('hidden')
    utilityDescAds[1].classList.add('hidden')
    utilityDescAds[2].classList.toggle('hidden')
})
