let container = document.querySelector(".events-grid")
let token = localStorage.getItem("token");

async function getEvents() {
    let res = await axios.get("http://127.0.0.1:8000/events/", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
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
        <button dataId="${data.id}" class="book-btn">Ticket</button>
    </div>`})
    let button = document.querySelectorAll(".book-btn");
    console.log(button)

    button.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            ticket(e);
        })
    })
}
async function ticket(e) {
    let ID = e.target.getAttribute("dataId");
    console.log(ID)    

    await axios.post('http://127.0.0.1:8000/myticket/', {events_id: ID}, 
        {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    console.log(res.data)
}

getEvents();