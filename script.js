var sttatus=document.querySelector("h4")
var add=document.querySelector('#addd')
var reemove = document.querySelector('#remove')

add.addEventListener("click",function(){
    sttatus.innerHTML="friends"
})
reemove.addEventListener("click",function(){
    if (sttatus.innerHTML === "stranger"){

        sttatus.innerHTML="first add friends"

} 
else if(sttatus.innerHTML === "friends"){
    sttatus.innerHTML="stranger"

}

})