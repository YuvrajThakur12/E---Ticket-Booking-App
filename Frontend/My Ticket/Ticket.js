let ticketCard = document.querySelector(".ticket-grid")
let token = localStorage.getItem("token");


async function getTicket() {
    let res = await axios.get("http://127.0.0.1:8000/myticket/", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    console.log(res.data)
    displayTicket(res.data)
}

function displayTicket(ticket) {
    ticketCard.innerHTML = "" 
    ticket.forEach((data) => {
        if(data.events){
            ticketCard.innerHTML += `
        <div class="ticket-card">
        <img src="http://127.0.0.1:8000${data.events.pic}" alt="pic">    
        <h2>${data.events.name}</h2>
        <p>${data.events.description}</p>
        <p>Place: ${data.events.location}</p>
        <p>Date: ${data.events.date}</p>
        <p>Time: ${data.events.time}</p>
        <p>Price: $${data.events.price}</p>
        </div>`
        }

        else{
            ticketCard.innerHTML += `
        <div class="ticket-card">
        <img src="http://127.0.0.1:8000${data.travels.pic}" alt="pic">    
        <h2>${data.travels.name}</h2>
        <p>From:${data.travels.currentplace}</p>
        <p>To: ${data.travels.destination}</p>
        <p>Date: ${data.travels.date}</p>
        <p>Time: ${data.travels.time}</p>
        <p>Price: $${data.travels.price}</p>
        </div>`
        }
        
    })
}

getTicket()