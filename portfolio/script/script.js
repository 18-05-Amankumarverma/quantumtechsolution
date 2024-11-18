
var slotBookingForm = document.getElementById("slotBookingForm")
var plusIcon = document.getElementById("plusIcon")
var crossIcon = document.getElementById("crossIcon")

plusIcon.addEventListener('click',()=>{
    slotBookingForm.classList.contains("hidden")
    slotBookingForm.classList.remove("hidden")
})

crossIcon.addEventListener('click',()=>{
    slotBookingForm.classList.add("hidden")
})


var menu = document.getElementById('menu')
var menubar = document.getElementById('menubar')
var navbarHideCross = document.getElementById('navbar-hide-cross')


menubar.addEventListener('click',()=>{
    menu.style.display = "inline-block"
})

navbarHideCross.onclick = ()=>{
    menu.style.display = 'none'
}


var timeZone = document.getElementById('timezone')

console.log(timeZone.textContent)

function makeDate(){
    date = new Date()
    meridian = "AM"
    customTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + meridian
    timeZone.textContent = customTime
    if(date.getHours > '12'){
        meridian = "PM"
        customTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + meridian
        timeZone.textContent = customTime
        
    }

}

setInterval(()=>{
    makeDate()
},1000)

// supabase :- database operations for booking form
