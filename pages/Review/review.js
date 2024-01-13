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
    }, 1000)
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


// Footer
// Paralax
const paralax = document.querySelector('.paralax');

window.addEventListener('scroll', function() {
    if(this.window.scrollY > 2750) {
        paralax.classList.replace('translate-y-[10rem]', 'translate-y-[7rem]');
    } else {
        paralax.classList.replace('translate-y-[7rem]', 'translate-y-[10rem]');
    }
})
window.addEventListener('scroll', function() {
    if(this.window.scrollY > 2850) {
        paralax.classList.replace('translate-y-[7rem]', 'translate-y-[2rem]');
    } else {
        paralax.classList.replace('translate-y-[2rem]', 'translate-y-[7rem]');
    }
})
window.addEventListener('scroll', function() {
    if(this.window.scrollY > 2950) {
        paralax.classList.replace('translate-y-[2rem]', 'translate-y-0');
    } else {
        paralax.classList.replace('translate-y-0', 'translate-y-[2rem]');
    }
})
window.addEventListener('scroll', function() {
    if(this.window.scrollY > 3050) {
        paralax.classList.replace('translate-y-0', 'translate-y-[-2rem]');
    } else {
        paralax.classList.replace('translate-y-[-2rem]', 'translate-y-0');
    }
})
// Paralax End
// Footer End


// API 
const cardReviewWrapper = document.querySelector('.carlist-wrapper');
document.addEventListener('DOMContentLoaded', async function(){
    const data = await reviewData()
    updateReviewCard(data)
})
function reviewData(){
    return fetch('/data/review.json')
    .then(response => response.json())
    .then(res => res)
} 

function updateReviewCard(key) {
    let wrapper = ''
    key.forEach(k => {
        wrapper += cardReview(k)
    })
    console.log(key)

cardReviewWrapper.innerHTML = wrapper;
} 

let cardReview = (key) => {
    return `<div class="bg-white rounded-lg xl:w-[32%] xl:h-[48rem] xl:rounded-xl flex flex-col box-border justify-between overflow-hidden">
    <!-- Img 1 -->
    <div class="w-full xl:h-[30%] box-border">
        <img src="${key.image}" alt="" class="w-full h-full object-cover">
    </div>
    <!-- Img 1 End -->
    <!-- Desc 1 -->
    <div class="xl:h-[58%]  border-b-2 py-[5%] px-[5%] justify-between flex flex-col">
        <!-- Name And Stars -->
        <div class="flex flex-col xl:w-full xl:h-[11%]  box-border">
            <p class="font-medium">Ming Kheems.</p>
            <span>
                <i class="fa-solid fa-star" style="color: #fff220;"></i>
                <i class="fa-solid fa-star" style="color: #fff220;"></i>
                <i class="fa-solid fa-star" style="color: #fff220;"></i>
                <i class="fa-solid fa-star" style="color: #fff220;"></i>
                <i class="fa-solid fa-star" style="color: #fff220;"></i>
            </span>
        </div>
        <!-- Name And Stars End -->
        <!-- Desc -->
        <div class="flex flex-col h-[80%] pt-[3%]">
            <p class="text-base text-justify font-medium">I ordered a BMW E30 through Carsell. From the beginning of our communication, everything went quickly, correctly and reliably. Individual deadlines and steps performed by the Carsell company were respected on time and highly professional. I appreciated the vehicle inspection service, including a detailed protocol. I also made a small complaint, it was settled by agreement and promptly. I can recommend the Carsell company, and I will probably use their services again next time.</p>
        </div>

        <!-- OnCLick Desc -->
        <div class=" w-full flex h-[7%]">
            <div class=" border-r-2 border-slate-400 w-[33%] flex justify-center items-center">
                <p class="text-sm font-semibold text-slate-400 hover:text-slate-600 cursor-pointer">View Original</p>
            </div>
            <div class=" text-slate-400 flex w-[35%] justify-center items-center gap-2">
                <p class="text-sm font-semibold">Translate By</p>
                <i class="fa-brands fa-google"></i>
            </div>
        </div>
        <!-- OnCLick Desc End -->
        <!-- Desc End -->
    </div>
    <!-- Desc 1 End -->
    <!-- Brands Car -->
    <div class="w-full xl:h-[12%]  flex flex-row">
        <!-- Img Brands Car -->
        <div class="xl:w-[30%] h-full  items-center flex justify-center">
            <img src="/assets/images/logo-bmw.png" alt="" class="w-[60%] object-cover">
        </div>
        <!-- Img Brands Car End -->
        
        <!-- Merk -->
        <div class="xl:w-[50%] h-full flex flex-col justify-center">
            <p class="font-medium text-dark">BMW E30 • 1982</p>
            <a href=""  class="flex items-center gap-2 text-tertiary hover:text-dark font-semibold"><p>Show similiar Cars</p><i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <!-- Merk End -->
    </div>
    <!-- Brands Car End -->
</div>`
}





// API End