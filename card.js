
let x=document.querySelector("#sc");
x.addEventListener("click",(e)=>{
    e.preventDefault();
    let a = document.querySelector(".rightd1 p:nth-child(1)");
    let b = document.querySelector(".rightd1 p:nth-child(2)");
    if (a.textContent === "Monthly Plan" && b.textContent === "$11") {
        a.textContent = "Annual Plan";
        b.textContent = "$132";
    } else {
        a.textContent = "Monthly Plan";
        b.textContent = "$11";
    } 
}); 
