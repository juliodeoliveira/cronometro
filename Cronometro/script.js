var sec = 00
var min = 00
var hr = 00
var time
var strtClicked = 0
var psClicked = 0


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

   if (psClicked == 1) {
      document.querySelector(".btnStart").style.pointerEvents = "auto"
      document.querySelector(".btnStart").value = "Retomar"
   }
}

function slow() {
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