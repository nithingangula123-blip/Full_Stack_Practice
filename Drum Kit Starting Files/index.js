var numberOfDrumBUttons = document.querySelectorAll(".drum").length;
for(var i= 0;i<numberOfDrumBUttons;i++){ 
document.querySelector("button")[i].addEventListener("click",function handleClick(){
    alert(i got clicked!);

});
}