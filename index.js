for (var i = 0; i < 7; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {
    //alert("Jesus Rocks!!")
    var buttonPressed = this.innerHTML;
    makeSound(buttonPressed)
    buttonAnimation(buttonPressed)
  });
}

document.addEventListener('keydown',function (event){
  makeSound(event.key)
  buttonAnimation(event.key)
})

function makeSound(key){
  switch (key) {
    case "w":
      tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play();
      break;
    case "a":
      tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play();
      break;
    case "s":
      tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play();
      break;
    case "d":
      tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play();
      break;
    case "j":
      snare = new Audio("sounds/snare.mp3")
      snare.play();
      break;
    case "k":
      crash = new Audio("sounds/crash.mp3")
      crash.play();
      break;
    case "l":
      kick = new Audio("sounds/kick-bass.mp3")
      kick.play();
      break;
    default:
      console.log(key)
  }
}

function buttonAnimation(currentKey){
  var activebutton = document.querySelector("."+currentKey);
  activebutton.classList.add("pressed")
  setTimeout(function(){
    activebutton.classList.remove("pressed")
  },100)
}
