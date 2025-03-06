let token = localStorage.getItem("token");
let container = document.querySelector(".travels-grid")

async function getTravels() {
    let res = await axios.get("http://127.0.0.1:8000/travels/", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    console.log(res.data)
    displayTravels(res.data)
}

function displayTravels(travels) {
    container.innerHTML = ""
    travels.forEach((data) => {
        container.innerHTML += `
        <div class="travel-card">
        <img src="http://127.0.0.1:8000${data.pic}" alt="pic">
        <h2>${data.name}</h2>
        <p>from: ${data.currentplace}</p>
        <p>To Place: ${data.destination}</p>
        <p>Date: ${data.date}</p>
        <p>Time: ${data.time}</p>
        <p>Price: $${data.price}</p>
        <button dataId="${data.id}" class="book-btn">Ticket</button>
    </div>`
    })

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

    await axios.post('http://127.0.0.1:8000/myticket/', {travels_id: ID}, 
        {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    console.log(res.data)
}

getTravels()