const form = document.querySelector(".form");
const loginlink = document.querySelector(".registerlogin");
const registerlink = document.querySelector(".loginregister");

registerlink.addEventListener("click",function(){
    form.classList.add("active");
});
loginlink.addEventListener("click",function(){
    form.classList.remove("active");
})