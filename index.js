let eye = document.querySelector(".fa-eye");
let pass = document.querySelector("#faculty-password");



eye.addEventListener("click",()=>{
    if(eye.classList.contains("fa-eye"))
    {
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
        pass.setAttribute("type","text");
    }else{
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
        pass.setAttribute("type","password");
    }
});