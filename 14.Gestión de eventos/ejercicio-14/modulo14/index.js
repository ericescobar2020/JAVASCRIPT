const boton= document.querySelector("#btn")
boton.addEventListener("click",()=>{
    // console.log("click")
    alert("se ha echo click en el boton")
})

$(()=>{
    $(".hide-btn").click(()=>{
        $("h1").fadeOut()
    })
    $(".show-btn").click(()=>{
        $("h1").fadeIn()
    })
})