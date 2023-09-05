var sec = 0
var min = 0
var hr = 0
var time
var strtClicked = 0
var psClicked = 0
let stClicked = 0


function start(){
   time = setInterval(count, 1000)
   strtClicked = 1

   if (strtClicked == 1) {
      document.querySelector(".btnStart").style.pointerEvents = "none"
   }
}

function pause() {
   console.log("Paused!")
   clearInterval(time)
   psClicked = 1

   if (psClicked > 0 && sec != 0) {
      document.querySelector(".btnStart").style.pointerEvents = "auto"
      document.querySelector(".btnStart").value = "Retomar"
   }
}

function slow() {
   stClicked = 1
   console.log("Stopped!")
   location.reload()
}

function digits(num) {
   if (num < 10) {
      return["0"+num]
   }else {
      return num
   }
   // se não tiver o else, vai dar um bug muito engraçado!

}

function count() {
   sec++

   if (sec == 60) {
      min++
      sec = 0

      if (min == 60) {
         hr++
         min = 0
      }
   }

   document.getElementById("clock").innerHTML = digits(hr) + ":" + digits(min) + ":" + digits(sec)

}