let imageCarousel = {
    "Fakhr": {
        "github": "https://github.com/mostafa-fakhr",
        "linkedin": "https://www.linkedin.com/in/mostafa-attia-497108237/",
        "email": "mailto:mostafa.fakhr197@gmail.com",
        "name": "Mostafa Fakhr",
        "img": "Fakhr"
    },
    "Galal": {
        "github": "https://github.com/ahmedgalal2001",
        "name": "Ahmed Galal",
        "linkedin": "https://www.linkedin.com/in/ahmedgalal12/",
        "email": "mailto:ahmedgalalmohamed912@gmail.com",
        "img": "Galal"
    },
    "Dabous": {
        "github": "https://github.com/MahmoudDabbous",
        "linkedin": "https://www.linkedin.com/in/mahmoud-dabbous-2919a7216",
        "email": "mailto:mahmoud19728@gmail.com",
        "name": "Mahmoud Dabous",
        "img": "Dabous"
    },
    "Torkey": {
        "github": "https://github.com/mohamedtorkey20/",
        "name": "Mohamed Torkey",
        "linkedin": "https://www.linkedin.com/in/mohamedtorkey20/",
        "email": "mailto:mohamedtorkey132@gmail.com",
        "img": "Torkey"
    },
    "Mansour": {
        "github": "https://github.com/Ahmed10257",
        "name": "Ahmed Mansour",
        "linkedin": "https://www.linkedin.com/in/ahmed-mansour-10257/",
        "email": "mailto:ahmed.mansour10257@gmail.com",
        "img": "Mansour"
    }

};
let carousel = document.querySelector("#carousel-inner");

let count = 0;
for (var founderName in imageCarousel) {
    if (imageCarousel.hasOwnProperty(founderName)) {
        var about = imageCarousel[founderName];
        let img = "";
        if (count == 0) {
            img = `
            <div class="carousel__card active">
          <div class="w-100">
          <div class="card p-2 border-0 rounded-0 shadow-img-home align-items-center ">
              <img class=" rounded-circle" style="height:200px;width:200px" src="resources/images/founders/${about.img}.jpg" class="img-fluid" alt="...">
             <div class="card-body ">
                  <h5 class="card-title text-center">${about.name}</h5>
                 <p class="card-text">
                 <div class="info w-100">
                 <ul class="nav">
      
                 
                 <li class="nav-item">
                     <a class="nav-link" target="_blank" href="${about.github}" >
                     <i class="fa-brands fa-github  color-text-website"></i>
                     <a>
                 </li>
     
                 <li class="nav-item">
                     <a class="nav-link" target="_blank" href="${about.linkedin}" >
                     <i class="fa-brands fa-linkedin  color-text-website"></i>
                     <a>
                 </li>
                     
                 <li class="nav-item">
                     <a class="nav-link" target="_blank" href="${about.email}" >
                     <i class="fa-solid fa-envelope  color-text-website"></i>
                     <a>
                 </li>
     
                 </ul>
                 <div>
                </p>
             </div>                </div>
      </div>
            </div>`;
        } else {
            img = `
            <div class="carousel__card">
            <div class="">
            <div class="card p-2 border-0 rounded-0 shadow-img-home align-items-center ">
                <img class=" rounded-circle" style="height:200px;width:200px" src="resources/images/founders/${about.img}.jpg" class="img-fluid" alt="...">
                <div class="card-body">
                   <h5 class="card-title text-center">${about.name}</h5>
                   <p class="card-text">
                   <div class="info">
                    <ul class="nav">
        
                    <li class="nav-item">
                         <a class="nav-link" target="_blank" href="${about.github}" >
                        <i class="fa-brands fa-github  color-text-website"></i>
                        <a>
                    </li>
       
                   <li class="nav-item">
                       <a class="nav-link" target="_blank" href="${about.linkedin}" >
                       <i class="fa-brands fa-linkedin  color-text-website"></i>
                       <a>
                   </li>
                       
                   <li class="nav-item">
                       <a class="nav-link" target="_blank" href="${about.email}" >
                       <i class="fa-solid fa-envelope  color-text-website"></i>
                       <a>
                   </li>
    
                   </ul>
                   <div>
                  </p>
                </div>                
            </div>
            </div>
            </div>`;
        }
        count++;
        carousel.insertAdjacentHTML("beforeend", img);
        // document.querySelector(`#${image}`).style.backgroundImage = `url("resources/images/founders/${image}.jpg")`;
    }
};



/*variables */
const itemClassName = "carousel__card"; // 5
const nextbtn = document.getElementById("next");
const prevbtn = document.getElementById("prev");


let items = document.getElementsByClassName(itemClassName);
let totalItems = items.length;
let activeSlide = 0;
let moving = false;
let totalWidth = "";
let singleAmountToMoveHorizontally = "";
let positionX = "";
let storeOldIndex = "";
let differenceToMove = "";
let amountOfTimesToLoopLeft = 0;
let amountOfTimesToLoopRight = 0;


/*functions*/
function moveCardsHorizontally(amountToMove) {

    for (let key in items) {
        if (items.hasOwnProperty(key)) {
            items[key].style.transform = `translate(${amountToMove}px)`;
        }
    }
}
function getNewPosition(direction) {
    totalWidth = items[0].parentElement.parentElement.parentElement.clientWidth; //1188
    singleAmountToMoveHorizontally = items[0].offsetWidth; //422
    if (direction === "right") {
        positionX = Math.floor(singleAmountToMoveHorizontally * activeSlide + 1); //
    } else if (direction === "left") {
        positionX = Math.floor(positionX - singleAmountToMoveHorizontally);
    }
    else if (direction === "endright") { // Corrected comparison
        positionX = Math.floor(positionX - totalWidth);
    }
    else if (direction === "endleft") { // Corrected comparison
        positionX = Math.floor(singleAmountToMoveHorizontally * activeSlide + 1);
    }
    return positionX;
}

function disableInteraction() {
    moving = true;
    setTimeout(function () {
        moving = false;
    }, 500);
}
function toggleActiveClass(oldIndex, newIndex) {
    items[oldIndex].classList.remove("active");
    items[newIndex].classList.add("active");
}
function moveCardsDotsHorizontally(dir) {
    moveCardsHorizontally(-getNewPosition(dir));
    storeOldIndex = activeSlide;
    if (dir === "left") {
        activeSlide = activeSlide - 1;
    } else if (dir === "right") {
        activeSlide = activeSlide + 1;
        console.log(activeSlide);
    } else if (dir === "endright") {
        activeSlide = 0;
    }
    else if (dir === "endleft") {
        activeSlide = totalItems - 1;
    }
    toggleActiveClass(storeOldIndex, activeSlide);
}

function determineDifference(initial, final) {
    differenceToMove = Math.floor(final - initial);
    return differenceToMove;
}
nextbtn.onclick = function () {
    if (!moving) {
        disableInteraction();
        if (activeSlide === totalItems - 1) {
            moveCardsDotsHorizontally("endright");
        } else {
            moveCardsDotsHorizontally("right");
        }
    }
};
prevbtn.onclick = function () {
    if (!moving) {
        disableInteraction();
        if (activeSlide !== 0) {
            moveCardsDotsHorizontally("left");
        } else {
            activeSlide = totalItems - 1;
            moveCardsDotsHorizontally("endleft");
        }
    }
};