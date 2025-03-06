let signInForm = document.getElementById("SignInForm")
let signUpForm = document.getElementById("SignUpForm")

// Get all necessary DOM elements

const signUpButton = document.querySelector('section:first-child button:last-child');
const signInButton = document.querySelector('section:first-child button:first-child');

// Add click handlers for toggle buttons
signUpButton.addEventListener('click', () => {
    signInForm.style.display = 'none';
    signUpForm.style.display = 'flex';
    signUpButton.style.background = '#0056b3';
    signInButton.style.background = '#007bff';
});

signInButton.addEventListener('click', () => {

    signInForm.style.display = 'flex';
    signUpForm.style.display = 'none';
    signInButton.style.background = '#0056b3';
    signUpButton.style.background = '#007bff';
});

// Initialize the UI to show sign in form by default
window.addEventListener('load', () => {
    signInForm.style.display = 'flex';
    signUpForm.style.display = 'none';
    signInButton.style.background = '#0056b3';
});



//----------------------------- Api ------------------------------------


signInForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission
    let signInButton = {
        username : event.target[0].value,
        password : event.target[1].value,
    }
    let res = await axios.post("http://127.0.0.1:8000/user/login/", signInButton)
    console.log(res)

    if(res.data.access){
        localStorage.setItem("token", res.data.access);
        window.location.href = "../Home/Home.html";
    }

    console.log(res.data)
    
    
})
  

signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let name = e.target[0].value
    let username = e.target[1].value
    let password = e.target[2].value
    let confirmPassword = e.target[3].value
    let phone = e.target[4].value
    let pic = e.target[5].files[0]
    if (password!= confirmPassword) {
        alert("Passwords do not match")
        return;
    }
    
    let signupData = new FormData();
    signupData.append('name', name);
    signupData.append('username', username);
    signupData.append('password', password);
    signupData.append('phone', phone);
    signupData.append('pic', pic);


    console.log(signupData);
    let res = await axios.post("http://127.0.0.1:8000/user/", signupData);
    console.log(res.data);

    localStorage.setItem("token", res.data.access);
    window.location.href = "../Home/Home.html";
})  