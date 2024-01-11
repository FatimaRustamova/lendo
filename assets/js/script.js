//--Data--//
let power =  document.querySelector(".power");

function getAllData() {
    fetch("http://localhost:3000/Lendo")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            power.innerHTML += `
                <div class="energy">
                    <img src="${element.image}" alt="">
                    <h3>${element.name}</h3>
                    <button onclick="goDetails(${element.id})">View Details</button>
                    <button onclick="deleteEl(${element.id})">Delete</button>
                    <button onclick="updateEl(${element.id})">Update</button>
                </div>
            `
        })
    })
}

getAllData();

//--Details--//
function goDetails(id) {
    window.location = `./details.html?id=${id}`
}

//--Delete--//
function deleteEl(id) {
    axios.delete(`http://localhost:3000/Lendo/${id}`);
    window.location.reload();
}

//--Update--//
function updateEl(id) {
    window.location = `./update.html?id=${id}`
}

//--Navbar--//
let nav = document.querySelector("nav");

window.addEventListener("scroll", ()=> {
    if(window.scrollY > 300){
        nav.style.position = "fixed";
        nav.style.backgroundColor = "black";
    }
    else{
        nav.style.position = "";
        nav.style.backgroundColor = "";
    }
})