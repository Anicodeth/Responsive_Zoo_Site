let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
    signup.classList.remove('pop');
    navbar.classList.remove('active');
    
}

let signup = document.querySelector(".signup-form");

document.querySelector("#signup-btn").onclick = () =>{
    signup.classList.toggle('pop')
    login.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    signup.classList.remove('pop');
    navbar.classList.toggle('active');
   
}

window.onscroll = () =>{
    login.classList.remove('active');
    signup.classList.remove('pop');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".gallery-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
    }
})


function logincheck(){
    let em=document.querySelector("#logemail").value;
    let pa=document.querySelector("#logpass").value;
    console.log(em)
    if (em=="" && pa==""){
        alert('You did not enter an email and password!');
    }
    else if (em==""){
        alert('You did not enter an email!');
    }
    else if (pa==""){
        alert('You did not enter password!');
    }
    else if (pa.length<8){
        alert('Password must be more than 7 characters!');
    }
}

function logincheck(){
    let em=document.querySelector("#logemail").value;
    let pa=document.querySelector("#logpass").value;

    if (em=="" && pa==""){
        alert('You did not enter an email and password!');
    }
    else if (em==""){
        alert('You did not enter an email!');
    }
    else if (pa==""){
        alert('You did not enter password!');
    }
    else if (pa.length<8){
        alert('Password must be more than 7 characters!');
    }
    else{
        alert('You have successfully logged in!')
    }
}

function signupcheck(){
    let name=document.querySelector("#siname").value;
    let age=document.querySelector("#siage").value;
    let emai=document.querySelector("#siemail").value;
    let pass=document.querySelector("#sipass").value;
    let passc=document.querySelector("#sipassc").value;

    
    if (name=="" || pass=="" || age=="" ||emai==""||passc==""){
        alert('You did not enter in all the fields!');
    }
    else if (pass.length<8){
        alert('Password must be more than 7 characters!');
    }
    else if(pass!=passc){
        alert('Both passwords must match!')
    }
    else{
        alert('You have successfully signed up!')
    }
}


function subscribe(){
    let email=document.querySelector("#subm").value;
    if(email==""){
        alert('Enter your email!')
    }
    else{
        alert('You have subscribed')
    }
}

function mescheck(){
    let text=document.querySelector("#mes").value;
    if(text==""){
        alert('Atleast enter the message you want to send!')}
    else{
        alert('Your message has been sent!')}
}