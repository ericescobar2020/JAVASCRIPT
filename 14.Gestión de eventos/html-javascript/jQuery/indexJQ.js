// la forma de trabajar seriia algo asi 
// selector y accion
// $("li") . hide() // sirve para ocultar los elementos 


// $(document).ready() => {}
$(()=>{
    // selectores 
    // id"el-1" => "#el-1"
    // class= "el-1" => ".el-1"
    // $("#el-1").hide()
    //$("#el-1").hide()
    $(".hide-btn").click(()=>{
        // $("h1").hide()
        $("h1").fadeOut()
    })
    $(".show-btn").click(()=>{
        // $("h1").show()
        $("h1").fadeIn()
    })

    $("li").dblclick(()=>{
        $("h1").css({color:"blue"})
    })
    $(".new-element").click(()=>{
        // $("ul").append("<li>new element</li>")
        $("ul").prepend("<li>new element</li>")
    })
    
    $("li").mouseenter((elem)=>{
        elem.target.style.color ="blue"
    })
    $("li").mouseleave(elem=>{
        elem.target.style.color="black"
    })
})