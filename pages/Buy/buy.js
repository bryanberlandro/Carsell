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

// PROFILE END


// FILTER
const filterContainer = document.querySelector('.filter-container')
function showFilter(){
    filterContainer.classList.remove('-translate-x-[500px]')
}

function hideFilter(){
    filterContainer.classList.add('-translate-x-[500px]')
}

// FILTER END

// TUTORIAL
function showTutorial(){
    const tutorial = document.querySelector('.tutorial')
    const tutorUp = document.querySelector('.tutor-up')
    const tutorDown = document.querySelector('.tutor-down')

    if(tutorial.classList.contains('-mt-44')){
        tutorial.classList.remove('-mt-44')
        tutorDown.classList.replace('block', 'hidden')
        tutorUp.classList.replace('hidden', 'block')
    } else {
        tutorial.classList.add('-mt-44')
        tutorDown.classList.replace('hidden', 'block')
        tutorUp.classList.replace('block', 'hidden')
    }

}
// TUTORIAL


// CAR DATA

let carData = "";
let currentFilter = {
    make: [],
    model: [],
    transmission: [],
    fuelType: [],
    features: []
}
const cardWrapper = document.querySelector('.card-wrapper')
const modelFilterWrapper = document.querySelector('.model-filter-wrapper')
const modelFilter = document.querySelector('.model-filter')
const modelInput = document.querySelector('.model-input')
const makeFilterWrapper = document.querySelector('.make-filter')
const totalCars = document.querySelector('.total-cars')
const makeInputValue = document.querySelector('.make-input')
const transmissionFilter = document.querySelector('.transmission-filter')
const fuelTypeFilter = document.querySelector('.fuel-filter')

function rupiah(number){
    return new Intl.NumberFormat("id-ID", {
        style: 'currency',
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(number)
}

fetch("/data/car.json")
.then(async (response) => {
    carData = await response.json()
    carData.map(car => createCars(car))

    makeData = [
        ...new Set(
            carData.map(car => car.make)
            .reduce((acc, curVal) => acc.concat(curVal), [])
        )
    ]
    makeData.map(make => createFilterBtn("make", make, makeFilterWrapper))
    totalCars.innerText = carData.length

    modelData = [
        ...new Set(
            carData.map(car => car.model)
            .reduce((acc, curVal) => acc.concat(curVal), [])
        )
    ] 
    modelData.map(model => createFilterBtn("model", model, modelFilter))

    transmissionData = [
        ...new Set(
            carData.map(car => car.transmission)
        )
    ] 
    transmissionData.map(trans => createFilterBtn("transmission", trans, transmissionFilter))
    
    fuelTypeData = [
        ...new Set(
            carData.map(car => car.fuelType)
        )
    ]
    fuelTypeData.map(fuel => createFilterBtn("fuelType", fuel, fuelTypeFilter))
})

const createFilterBtn = (key, param, container) => {
    const filterBtn = document.createElement("button")
    filterBtn.setAttribute("data-state", "inactive")
    filterBtn.innerText = param
    filterBtn.className = "w-full text-start py-4 px-4 hover:bg-slate-100"
    filterBtn.addEventListener("click", (e) => {
        handleClickBtn(e, key, param, container)
    })
    if(key == "transmission"){
        filterBtn.className = "border-2 py-2 px-4 hover:bg-slate-100 rounded-md mt-2"
    }
    if(key == "fuelType"){
        filterBtn.className = "border-2 py-2 px-4 hover:bg-slate-100 rounded-md mt-2"
    }
    container.append(filterBtn)
}

const handleClickBtn = (e, key, param, container) => {
    const button = e.target
    const btnState = button.getAttribute("data-state")
    if(btnState == "inactive"){
        button.classList.add("bg-slate-200", "scale-[.98]", "outline", "outline-offset-2", "outline-slate-50")
        button.setAttribute("data-state", "active")

        //ketika di klik push value(e.g 'matic') dari button ke dalam currentFilter[key => nama = "transmission", "make", "features"]
        
        currentFilter[key].push(param)
        handleFilterCars(currentFilter)
    } else {
        button.classList.remove("bg-slate-200", "scale-[.98]", "outline", "outline-offset-2", "outline-slate-50")
        button.setAttribute("data-state", "inactive")

        // Ketika di klik lagi hilangkan value dari key 
        makeInputValue.value = ""
        currentFilter[key] = currentFilter[key].filter(item => item !== param)
        handleFilterCars(currentFilter)
    }
}

const handleFilterCars = (filters) => {
    let filteredCars = [...carData]
    let filteredKeys = Object.keys(filters)  // output => ['make', 'transmission', 'features'] 

    filteredKeys.forEach(key => {
        let currentKey = filters[key] // output => ['tesla'], ['value = matic'], ['manual']

        if(currentKey <= 0){
            return;
        }

        filteredCars = filteredCars.filter((cars) => {
            let currentValue = cars[key] // output => ... ['Subaru EyeSight', 'X-Mode Terrain Selection', 'Starlink Infotainment'] ...
            return Array.isArray(currentValue) ? currentValue.some((val) => currentKey.includes(val)) : currentKey.includes(currentValue)
        })
    })
    totalCars.innerText = filteredCars.length
    cardWrapper.innerHTML = ""
    filteredCars.map(cars => createCars(cars))
}

const createCars = (carsData) => {
    const {make, model, year, fuelType, mileage, transmission, horsepower, features, color, image, price} = carsData
    const carsItem = document.createElement("div")
    carsItem.className = "w-full rounded-md overflow-hidden h-[470px] bg-white shadow-multiple md:w-[49%]"
    carsItem.innerHTML = `
            <!-- IMAGE -->
            <div class="h-52 relative overflow-hidden">
                <div class="absolute right-3 top-2 z-10 p-1 border-1 bg-slate-500 bg-opacity-30 backdrop-blur-sm text-white rounded-md ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>                                      
                </div>
                <img src="${image}" alt="" class="absolute w-full h-full object-cover">
            </div>
            <!-- IMAGE -->
            
            <div class="px-3 py-3">
                <h1 class="font-bold text-xl">${make} ${model}</h1>

                <!-- ENGINE -->
                <div class="flex flex-wrap w-full mt-2 justify-between">

                    <div class="flex flex-col gap-1">
                        <!-- POWER -->
                        <div class="flex gap-1 text-sm font-medium">
                            <div class="w-5 h-5 relative">
                                <img src="/assets/images/icons8-engine-50.png" alt="">
                            </div>
                            <p>${horsepower} hp</p>
                        </div>
                        <!-- POWER -->

                        <!-- RELEASE DATE -->
                        <div class="flex gap-1 text-sm font-medium">
                            <div class="w-5 h-5 relative">
                                <img src="/assets/images/icons8-date-50.png" alt="">
                            </div>
                            <p>${year}</p>
                        </div>
                        <!-- RELEASE DATE -->
                    </div>

                    <div class="flex flex-col gap-1">
                        <!-- KM -->
                        <div class="flex gap-1 text-sm font-medium">
                            <div class="w-5 h-5 relative">
                                <img src="/assets/images/icons8-road-50.png" alt="">
                            </div>
                            <p>${mileage} km</p>
                        </div>
                        <!-- KM -->

                        <!-- MANUAL MATIC -->
                        <div class="flex gap-1 text-sm font-medium">
                            <div class="w-5 h-5 relative">
                                <img src="/assets/images/icons8-machine-50.png" alt="">
                            </div>
                            <p>${transmission}</p>
                        </div>
                        <!-- MANUAL MATIC -->
                    </div>

                    <div class="flex flex-col gap-1">
                        <!-- FUEL -->
                        <div class="flex gap-1 text-sm font-medium">
                            <div class="w-5 h-5 relative">
                                <img src="/assets/images/icons8-fuel-24.png" alt="">
                            </div>
                            <p>${fuelType}</p>
                        </div>
                        <!-- FUEL -->

                        <!-- SIZE -->
                        <div class="flex gap-1 text-sm font-medium">
                            <div class="w-5 h-5 relative">
                                <img src="/assets/images/icons8-car-seat-50.png" alt="">
                            </div>
                            <p>${color}</p>
                        </div>
                        <!-- SIZE -->
                    </div>

                </div>
                <!-- ENGINE -->

                <div class="w-[200%] flex gap-2 mt-5">
                ${features.map(feature => {
                    return `<div class="px-4 py-1 bg-tertiary bg-opacity-15 rounded-md text-xs md:text-sm font-semibold ">
                                <h1 class="text-secondary">${feature}</h1>
                            </div>`
                    }).join("")
                }
                </div>

                <!-- DELIVERY -->
                <div class="flex justify-between py-5 text-sm">
                    <div class="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        <p>Indonesia, delivery :</p>
                    </div>
                    <div>
                        <h1 class="font-semibold underline underline-offset-2">Enter ZIP code</h1>
                    </div>
                </div>
                <!-- DELIVERY -->

                <!-- PRICE -->
                <div class="w-full border-t-2 flex items-start py-5 justify-between">
                    <div>
                        <div class="flex gap-[2px]">
                            <div class="bg-green-600 w-4 h-2 rounded-md"></div>
                            <div class="bg-green-600 w-4 h-2 rounded-md"></div>
                            <div class="bg-green-500 w-4 h-2 rounded-md"></div>
                            <div class="bg-green-400 w-4 h-2 rounded-md"></div>
                            <div class="bg-green-300 w-4 h-2 rounded-md"></div>
                        </div>
                        <p class="text-sm mt-1">Top offer</p>
                    </div>
                    <div>
                        <h1 class="font-bold">${rupiah(`${price}`)}</h1>
                    </div>
                </div>
                <!-- PRICE -->

            </div>
        `
        cardWrapper.appendChild(carsItem)
}

const makeInput = document.querySelector('.make-filter-input')
makeInput.addEventListener('click', function() {
    if(makeFilterWrapper.classList.contains('hidden')){
        makeFilterWrapper.classList.replace('hidden', 'flex')
    } else {
        makeFilterWrapper.classList.replace('flex', 'hidden')
    }
})

modelFilterWrapper.addEventListener('click', function() {
    if(modelFilter.classList.contains('hidden')){
        modelFilter.classList.replace('hidden', 'flex')
    } else {
        modelFilter.classList.replace('flex', 'hidden')
    }
})



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