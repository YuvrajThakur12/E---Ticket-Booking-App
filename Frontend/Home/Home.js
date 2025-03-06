let container = document.querySelector(".events-grid")
let containers = document.querySelector(".travels-grid")
let token = localStorage.getItem("token");


async function getEvents() {
    let res = await axios.get("http://127.0.0.1:8000/events/",
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    )
    console.log(res.data)
    displayEvents(res.data)
}

function displayEvents(events) {
    container.innerHTML = ""
    events.forEach((data) => {
        container.innerHTML += `
        <div class="car-card">
        <img src="http://127.0.0.1:8000${data.pic}" alt="pic">
        <h2>${data.name}</h2>
        <p>${data.description}</p>
        <p>Place: ${data.location}</p>
        <p>Date: ${data.date}</p>
        <p>Time: ${data.time}</p>
        <p>Price: $${data.price}</p>
        
    </div>`})
}

async function getTravels() {
    let res = await axios.get("http://127.0.0.1:8000/travels/",
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    )
    console.log(res.data)
    displayTravels(res.data)
}

function displayTravels(travels) {
    containers.innerHTML = ""
    travels.forEach((data) => {
        containers.innerHTML += `
        <div class="travel-card">
        <img src="http://127.0.0.1:8000${data.pic}" alt="pic">
        <h2>${data.name}</h2>
        <p>from: ${data.currentplace}</p>
        <p>To Place: ${data.destination}</p>
        <p>Date: ${data.date}</p>
        <p>Time: ${data.time}</p>
        <p>Price: $${data.price}</p>
        
    </div>`
    })
}

getTravels()

getEvents();